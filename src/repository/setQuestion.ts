import { gql } from '@apollo/client/core';
import getApolloClient from './getApolloClient';
import { Question } from '../generated/graphql';

const query = gql`
  mutation insert_question(
    $asa: bigint!
    $category: String!
    $encryption_address: String!
    $ending_round: bigint!
    $env: String!
    $json: String!
    $open_from_round: bigint!
    $open_from_time: timestamptz!
    $questioner: String!
    $round: bigint!
    $text: String!
    $title: String!
    $token: Int
    $tx: String!
    $url: String!
  ) {
    insert_question(
      objects: {
        asa: $asa
        category: $category
        encryption_address: $encryption_address
        ending_round: $ending_round
        env: $env
        json: $json
        open_from_round: $open_from_round
        open_from_time: $open_from_time
        questioner: $questioner
        round: $round
        text: $text
        title: $title
        token: $token
        tx: $tx
        url: $url
      }
    ) {
      affected_rows
      returning {
        id
        created_at
        updated_at
      }
    }
  }
`;
const setLatestRound = (question: Question) => {
  const client = getApolloClient();
  client.mutate({
    mutation: query,
    variables: {
      round: question.asa,
      category: question.category,
      encryption_address: question.encryption_address,
      ending_round: question.ending_round,
      env: question.env,
      json: question.json,
      open_from_round: question.open_from_round,
      open_from_time: question.open_from_time,
      questioner: question.questioner,
      text: question.text,
      title: question.title,
      token: question.token,
      tx: question.tx,
      url: question.url,
    },
  });
};

export default setLatestRound;
