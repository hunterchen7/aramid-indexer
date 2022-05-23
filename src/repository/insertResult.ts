import { gql } from '@apollo/client/core';
import getApolloClient from '../common/getApolloClient';
import { Result } from '../generated/graphql';
import getToken from './getToken';

const query = gql`
  mutation insert_result($tx: String!, $account: String!, $questiontx: String!, $encryption_key: String!, $json: String!, $round: bigint!, $asa: bigint!, $env: String!, $token: Int) {
    insert_result(objects: { tx: $tx, account: $account, questiontx: $questiontx, encryption_key: $encryption_key, json: $json, round: $round, env: $env, asa: $asa, token: $token }) {
      affected_rows
      returning {
        id
        created_at
        updated_at
      }
    }
  }
`;
const insertResult = async (item: Result) => {
  const client = getApolloClient();
  return await client.mutate({
    mutation: query,
    variables: {
      tx: item.tx,
      questiontx: item.questiontx,
      encryption_key: item.encryption_key,
      account: item.account,
      json: item.json,
      round: item.round,
      env: item.env,
      asa: item.asa,
      token: item.token,
    },
  });
};

export default insertResult;
