import algosdk from 'algosdk';
import computeTransactionId from '../algo/computeTransactionId';
import VoteEncV1 from '../interface/VoteEncV1';
import insertVote from '../repository/insertVote';
import { Vote } from '../generated/graphql';
import getToken from '../repository/getToken';
import createToken from './createToken';
import moment from 'moment';

const processVoteV1 = async (data: VoteEncV1, round: number, stxn: any, block: any) => {
  const txId = computeTransactionId(block.gh, block.gen, stxn);

  let tokenId = await getToken(stxn.txn.xaid, stxn.txn.gen);
  console.log('token', tokenId);
  if (!tokenId) {
    await createToken(stxn.txn.xaid, stxn.txn.gen);
    tokenId = await getToken(stxn.txn.xaid, stxn.txn.gen);
  }

  const publish: Vote = {
    tx: txId,
    address: algosdk.encodeAddress(stxn.txn.snd),
    asa: stxn.txn.xaid,
    env: stxn.txn.gen,
    json: JSON.stringify(data),
    questiontx: data.q ?? '',
    round: round,
    token: tokenId,
    id: 0,
    created_at: undefined,
    updated_at: undefined,
  };
  console.log('publish', publish);
  const ret = await insertVote(publish);
  console.log('ret', ret);
};
export default processVoteV1;
