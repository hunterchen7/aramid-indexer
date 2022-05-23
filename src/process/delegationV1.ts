import algosdk from 'algosdk';
import computeTransactionId from '../algo/computeTransactionId';
import DelegationV1 from '../interface/DelegationV1';
import insertDelegation from '../repository/insertDelegation';
import { Delegation } from '../generated/graphql';
import getToken from '../repository/getToken';
import createToken from './createToken';
import moment from 'moment';

const processDelegationV1 = async (data: DelegationV1, round: number, stxn: any, block: any) => {
  const txId = computeTransactionId(block.gh, block.gen, stxn);

  let tokenId = await getToken(stxn.txn.xaid, stxn.txn.gen);
  console.log('token', tokenId);
  if (!tokenId) {
    await createToken(stxn.txn.xaid, stxn.txn.gen);
    tokenId = await getToken(stxn.txn.xaid, stxn.txn.gen);
  }

  const publish: Delegation = {
    tx: txId,
    account: algosdk.encodeAddress(stxn.txn.snd),
    asa: stxn.txn.xaid,
    env: stxn.txn.gen,
    json: JSON.stringify(data),
    round: round,
    token: tokenId,
    id: 0,
    created_at: undefined,
    updated_at: undefined,
  };
  console.log('publish', publish);
  const ret = await insertDelegation(publish);
  console.log('ret', ret);
};
export default processDelegationV1;
