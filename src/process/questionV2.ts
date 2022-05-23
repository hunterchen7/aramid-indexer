import algosdk from 'algosdk';
import computeTransactionId from '../algo/computeTransactionId';
import QuestionV2 from '../interface/QuestionV2';
import setQuestion from '../repository/insertQuestion';
import { Question } from '../generated/graphql';
import getToken from '../repository/getToken';
import createToken from './createToken';
import moment from 'moment';

const processQuestionV2 = async (data: QuestionV2, round: number, stxn: any, block: any) => {
  //console.log("processQuestionV2",data)
  //console.log(stxn)
  const txId = computeTransactionId(block.gh, block.gen, stxn);

  let tokenId = await getToken(stxn.txn.xaid, stxn.txn.gen);
  console.log('token', tokenId);
  if (!tokenId) {
    await createToken(stxn.txn.xaid, stxn.txn.gen);
    tokenId = await getToken(stxn.txn.xaid, stxn.txn.gen);
  }

  const publish: Question = {
    title: data.t ?? '',
    text: data.q ?? '',
    url: data.url ?? '',
    category: data.category ?? 'any',
    encryption_address: data.e ?? '',
    json: JSON.stringify(data),
    questioner: algosdk.encodeAddress(stxn.txn.snd),
    token: tokenId,
    asa: stxn.txn.xaid,
    env: stxn.txn.gen,
    ending_round: round + data.duration,
    open_from_round: round,
    open_from_time: moment(block.ts, 'X').toISOString(),
    tx: txId,
    created_at: undefined,
    id: 0,
    updated_at: undefined,
  };
  console.log('publish', publish);
  const ret = await setQuestion(publish);
  console.log('ret', ret);
};
export default processQuestionV2;
