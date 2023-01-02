import algosdk from 'algosdk';
import computeTransactionId from '../algo/computeTransactionId';
import VoteV1 from '../interface/VoteV1';
import insertVote from '../repository/insertVote';
import { Scalars, Vote } from '../generated/graphql';
import getTokenId from './getTokenId';
import getAsaId from './getAsaId';
import insertTransaction from '../repository/insertTransaction';

/*
    $base_destination_amount: String!,
    $base_source_amount: String!,
    $claim_block_number: Int,
    $claim_transaction_id: String!,
    $destination_address: String!,
    $completed: Boolean!,
    $destination_decimals: Int,
    $destination_token_id: String!,
    $destination_network: Int,
    $message: String!,
    $proof_transaction_id: String!,
    $proof_block_number: Int,
    $signatures: String!,
    $transfer_transaction_id: String!,
    $transfer_block_number: Int,
    $time: String!,
    $source_token_id: String!,
    $source_network: Int,
    $source_decimals: Int,
    $source_address: String!
*/

type Bridge_Transaction = {
  __typename?: 'bridge_transaction';
  base_destination_amount: Scalars['String'];
  base_source_amount: Scalars['String'];
  claim_block_number: Scalars['Int'];
  claim_transaction_id: Scalars['String'];
  destination_address: Scalars['String'];
  completed: Scalars['Boolean'];
  destination_decimals: Scalars['Int'];
  destination_token_id: Scalars['String'];
  destination_network: Scalars['Int'];
  message: Scalars['String'];
  proof_transaction_id: Scalars['String'];
  proof_block_number: Scalars['Int'];
  signatures: Scalars['String'];
  transfer_transaction_id: Scalars['String'];
  transfer_block_number: Scalars['Int'];
  time: Scalars['String'];
  source_token_id: Scalars['String'];
  source_network: Scalars['Int'];
  source_decimals: Scalars['Int'];
  source_address: Scalars['String'];
};

const processTransaction = async (data: any, round: number, stxn: any, block: any) => {
  const txId = computeTransactionId(block.gh, block.gen, stxn);

  const tokenId = await getTokenId(stxn);
  const asa = getAsaId(stxn);

  const publish: Bridge_Transaction = {
    base_destination_amount: data.destinationAmount,
    base_source_amount: data.sourceAmount,
    claim_block_number: undefined,
    claim_transaction_id: data.claimTransaction, // this is the transaction containing data needed to claim, not the actual claim transaction
    destination_address: data.destinationAddress,
    completed: false,
    destination_decimals: 6, // not always correct, should fetch from mapping instead
    destination_token_id: data.destinationToken,
    destination_network: data.destinationNetwork,
    message: data.message,
    proof_transaction_id: txId,
    proof_block_number: round,
    signatures: '', // need to fetch from IPFS
    transfer_transaction_id: data.sourceTransaction,
    transfer_block_number: undefined, // need to fetch from source network
    time: undefined, // not sure how to get this, probably through some API
    source_token_id: data.sourceToken,
    source_network: data.sourceNetwork,
    source_decimals: 6, // same deal as destination_decimals
    source_address: data.sourceAddress,
  };
  console.log('publish', publish);
  const ret = await insertTransaction(publish);
  console.log('ret', ret);
};
export default processTransaction;
