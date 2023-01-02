import { gql } from '@apollo/client/core';
import getApolloClient from '../common/getApolloClient';
import { Scalars, Vote } from '../generated/graphql';

const query = gql`
  mutation insert_transaction(
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
  ) {
    insert_bridge_transactions_one(object: {
      base_destination_amount: $base_destination_amount,
      base_source_amount: $base_source_amount,
      claim_block_number: $claim_block_number,
      claim_transaction_id: $claim_transaction_id,
      destination_address: $destination_address,
      completed: false,
      destination_decimals: $destination_decimals,
      destination_token_id: $destination_token_id,
      destination_network: $destination_network,
      message: $message,
      proof_transaction_id: $proof_transaction_id,
      proof_block_number: $proof_block_number,
      signatures: $signatures,
      transfer_transaction_id: $transfer_transaction_id,
      transfer_block_number: $transfer_block_number,
      time: $time,
      source_token_id: $source_token_id,
      source_network: $source_network,
      source_decimals: $source_decimals,
      source_address: $source_address
    )
  }
`;

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

const insertTransaction = async (tx: Bridge_Transaction) => {
  const client = getApolloClient();
  console.log('inserting transaction', tx);
  return await client.mutate({
    mutation: query,
    variables: {
      base_destination_amount: tx.base_destination_amount,
      base_source_amount: tx.base_source_amount,
      claim_block_number: tx.claim_block_number,
      claim_transaction_id: tx.claim_transaction_id,
      destination_address: tx.destination_address,
      completed: tx.completed,
      destination_decimals: tx.destination_decimals,
      destination_token_id: tx.destination_token_id,
      destination_network: tx.destination_network,
      message: tx.message,
      proof_transaction_id: tx.proof_transaction_id,
      proof_block_number: tx.proof_block_number,
      signatures: tx.signatures,
      transfer_transaction_id: tx.transfer_transaction_id,
      transfer_block_number: tx.transfer_block_number,
      time: tx.time,
      source_token_id: tx.source_token_id,
      source_network: tx.source_network,
      source_decimals: tx.source_decimals,
      source_address: tx.source_address,
    },
  });
};

export default insertTransaction;
