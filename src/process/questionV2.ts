import { blockStatement } from '@babel/types';
import algosdk from 'algosdk';
import computeTransactionId from '../computeTransactionId';
import QuestionV2 from '../interface/QuestionV2';
import { Mutation_RootInsert_QuestionArgs } from '../generated/graphql';
import { ApolloClient, gql, useMutation } from '@apollo/client';
import getApolloClient from '../repository/getApolloClient';

const processQuestionV2 = async (data: QuestionV2, round: number, stxn: any, block: any) => {
  //console.log("processQuestionV2",data)
  //console.log(stxn)
  const txId = computeTransactionId(block.gh, block.gen, stxn);
  const publish = {
    title: data.t,
    text: data.q,
    url: data.url,
    round: round,
    category: data.category,
    encryption_address: data.e,
    json: JSON.stringify(data),
    questioner: algosdk.encodeAddress(stxn.txn.snd),
    token: stxn.txn.xaid,
    asa: stxn.txn.xaid,
    env: stxn.txn.gen,
    ending_round: round + data.duration,
    open_from_round: round,
    open_from_time: block.ts,
    tx: txId,
  };
  console.log('publish', publish);
  /*
  const client = createApolloClient();
  const insert_question = gql`
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
      $state: String!
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
          state: $state
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

  client.mutate({ mutation: insert_question, variables: {} });*/
};
export default processQuestionV2;
