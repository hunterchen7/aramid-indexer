import { gql } from '@apollo/client/core';
import getApolloClient from '../common/getApolloClient';
import { Vote } from '../generated/graphql';
import getToken from './getToken';

const query = gql`
  mutation insert_vote($tx: String!, $address: String!, $questiontx: String!, $json: String!, $round: bigint!, $asa: bigint!, $env: String!, $token: Int) {
    insert_vote(objects: { tx: $tx, address: $address, questiontx: $questiontx, json: $json, round: $round, env: $env, asa: $asa, token: $token }) {
      affected_rows
      returning {
        id
        created_at
        updated_at
      }
    }
  }
`;
const insertVote = async (vote: Vote) => {
  const client = getApolloClient();
  console.log('inserting vote', vote);
  return await client.mutate({
    mutation: query,
    variables: {
      tx: vote.tx,
      address: vote.address,
      questiontx: vote.questiontx,
      json: vote.json,
      round: vote.round,
      env: vote.env,
      asa: vote.asa,
      token: vote.token,
    },
  });
};

export default insertVote;
