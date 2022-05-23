import { gql } from '@apollo/client/core';
import getApolloClient from '../common/getApolloClient';
import { Delegation } from '../generated/graphql';
import getToken from './getToken';

const query = gql`
  mutation insert_delegation($tx: String!, $account: String!, $json: String!, $round: bigint!, $asa: bigint!, $env: String!, $token: Int) {
    insert_delegation(objects: { tx: $tx, account: $account, json: $json, round: $round, env: $env, asa: $asa, token: $token }) {
      affected_rows
      returning {
        id
        created_at
        updated_at
      }
    }
  }
`;
const insertDelegation = async (item: Delegation) => {
  const client = getApolloClient();
  return await client.mutate({
    mutation: query,
    variables: {
      tx: item.tx,
      account: item.account,
      json: item.json,
      round: item.round,
      env: item.env,
      asa: item.asa,
      token: item.token,
    },
  });
};

export default insertDelegation;
