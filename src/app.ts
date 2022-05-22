import algosdk from 'algosdk';
import getAlgodClient from './getAlgodClient';
import computeTransactionId from './computeTransactionId';
import getLogger from './getLogger';
import processQuestionV2 from './process/questionV2';
import setLatestRound from './repository/setLatestRound';
import getLatestRound from './repository/getLatestRound';
const main = async () => {
  const logger = getLogger();
  try {
    logger.info('App started');
    const round = await getLatestRound();
    console.log('round', round);
    setLatestRound(round + 1);
    const client = getAlgodClient();
    const confirmedRound = 19650424;
    const block = await client.block(confirmedRound).do();
    //console.log('block.block', block.block);
    for (const stxn of block.block.txns) {
      try {
        const txId = computeTransactionId(block.block.gh, block.block.gen, stxn);
        const note = Buffer.from(stxn.txn.note).toString('utf-8');
        if (!note.startsWith('avote-')) continue;
        const pos = note.indexOf(':');
        const messageType = note.substring(0, pos);
        const dataStr = note.substring(pos + 2);
        //console.log(dataStr)
        const data: any = JSON.parse(dataStr);
        switch (messageType) {
          case 'avote-question/v2':
            await processQuestionV2(data, confirmedRound, stxn, block.block);
            break;
        }
        console.log(txId, messageType);
      } catch (e) {
        logger.error(e);
      }
    }
  } catch (e) {
    logger.info(`App error: ${e}`, e);
  }
};
main();
