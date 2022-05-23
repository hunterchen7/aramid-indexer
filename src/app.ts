import algosdk from 'algosdk';
import getAlgodClient from './algo/getAlgodClient';
import computeTransactionId from './algo/computeTransactionId';
import getLogger from './common/getLogger';
import processQuestionV2 from './process/questionV2';
import processDelegationV1 from './process/delegationV1';
import processEtgV1 from './process/etgV1';
import processVoteV1 from './process/voteV1';
import processResultV1 from './process/resultV1';
import processTrustedListV1 from './process/trustedListV1';
import setLatestRound from './repository/setLatestRound';
import getLatestRound from './repository/getLatestRound';
import asyncDelay from './common/asyncDelay';
import getSecureConfiguration from './common/getSecureConfiguration';
import tellK8SSuccessState from './common/tellK8SSuccessState';
const main = async () => {
  const logger = getLogger();
  try {
    logger.info('App started');
    const config = getSecureConfiguration();
    let round = await getLatestRound(config.indexerId);
    const saveRound = true;
    const checkOneBlock = false;
    //round = 20933438;
    logger.debug(`starting at round ${round}`);
    logger.debug(`before getAlgodClient`);
    const client = getAlgodClient();
    logger.debug(`after getAlgodClient`);
    const status = await client.statusAfterBlock(round).do();
    console.log(status);
    tellK8SSuccessState();

    while (true) {
      logger.debug(`processing round ${round}`);
      if (round % 100 == 0) {
        logger.info(`processing round ${round}`);
      }
      const confirmedRound = round;
      logger.debug(`before statusAfterBlock ${round}`);
      const status = await client.statusAfterBlock(round).do();
      asyncDelay(config.algod.delay);
      logger.debug(`after statusAfterBlock ${round}`);
      logger.debug(`before block ${confirmedRound}`);
      const block = await client.block(confirmedRound).do();
      asyncDelay(config.algod.delay);
      logger.debug(`after block ${confirmedRound}`);
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
              case 'avote-question/v2':
                await processQuestionV2(data, confirmedRound, stxn, block.block);
                break;
              case 'avote-vote/v1':
                await processVoteV1(data, confirmedRound, stxn, block.block);
                break;
              case 'avote-vote-enc/v1':
                await processVoteV1(data, confirmedRound, stxn, block.block);
                break;
              case 'avote-delegation/v1':
                await processDelegationV1(data, confirmedRound, stxn, block.block);
                break;
              case 'avote-etg/v1':
                await processEtgV1(data, confirmedRound, stxn, block.block);
                break;
              case 'avote-result/v1':
                await processResultV1(data, confirmedRound, stxn, block.block);
                break;
              case 'avote-tl/v1':
                await processTrustedListV1(data, confirmedRound, stxn, block.block);
                break;
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
