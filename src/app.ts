import algosdk from 'algosdk';
import getAlgodClient from './algo/getAlgodClient';
import computeTransactionId from './algo/computeTransactionId';
import getLogger from './common/getLogger';
import processQuestionV1 from './process/questionV1';
import processQuestionV2 from './process/questionV2';
import setLatestRound from './repository/setLatestRound';
import getLatestRound from './repository/getLatestRound';
import asyncDelay from './common/asyncDelay';
import getSecureConfiguration from './common/getSecureConfiguration';
import tellK8SSuccessState from './common/tellK8SSuccessState';
import processVoteV1 from './process/voteEncV1';
import processTransaction from './process/transaction';
const main = async () => {
  const logger = getLogger();
  try {
    logger.info('App started');
    const config = getSecureConfiguration();
    let round = await getLatestRound(config.indexerId);
    let saveRound = true;
    const checkOneBlock = false;
    if (checkOneBlock) saveRound = false;
    //round = 15986363;
    logger.debug(`starting at round ${round}`);
    logger.debug(`before getAlgodClient`);
    const client = getAlgodClient();
    logger.debug(`after getAlgodClient`);
    const status = await client.statusAfterBlock(round).do();
    console.log(status);
    tellK8SSuccessState();

    while (true) {
      logger.debug(`processing round ${round}`);
      if (round % 1000 == 0) {
        logger.info(`processing round ${round}`);
      }
      const confirmedRound = round;
      //logger.debug(`before statusAfterBlock ${round}`);
      const status = await client.statusAfterBlock(round).do();
      asyncDelay(config.algod.delay);
      //logger.debug(`after statusAfterBlock ${round}`);
      //logger.debug(`before block ${confirmedRound}`);
      const block = await client.block(confirmedRound).do();
      asyncDelay(config.algod.delay);
      //logger.debug(`after block ${confirmedRound}`);
      //console.log('block.block', block.block);
      if (block.block.txns) {
        let countProcessedTxns = 0;
        //console.log('block.block.txns', block.block.txns.length);
        for (const stxn of block.block.txns) {
          countProcessedTxns++;
          try {
            if (!stxn.txn.note) continue;
            const note = Buffer.from(stxn.txn.note).toString('utf-8');
            if (!note.startsWith('avote-')) continue;
            const txId = computeTransactionId(block.block.gh, block.block.gen, stxn);
            const pos = note.indexOf(':');
            let messageType = note.substring(0, pos);
            const posSlash = note.indexOf('/');
            const posSlash2 = note.indexOf('/', posSlash + 1);
            if (posSlash2 > 0) {
              messageType = messageType.substring(0, posSlash2);
            }
            //console.log('posSlash2', posSlash2);
            const dataStr = note.substring(pos + 2);
            //console.log(dataStr)
            const data: any = JSON.parse(dataStr);
            switch (messageType) {
              case 'aramid-proof/v1':
                await processTransaction(data, confirmedRound, stxn, block.block);
                break;
              /*case 'something-else/v1':
                await processSomething(data, confirmedRound, stxn, block.block);
                break;*/
            }
            console.log(txId, messageType);
          } catch (e) {
            logger.error(e);
          }
        }
        logger.debug(`${countProcessedTxns} txns processed with round ${round}`);
      }
      if (checkOneBlock) break;
      round = round + 1;
      if (saveRound) {
        setLatestRound(config.indexerId, round);
      }
    }
    logger.info(`finished`);
  } catch (e) {
    logger.info(`App error: ${e}`, e);
  }
};
main();
