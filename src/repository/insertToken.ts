import { gql } from '@apollo/client/core';
import getApolloClient from '../common/getApolloClient';
import { Token } from '../generated/graphql';

const query = gql`
  mutation insert_token(
    $asa: bigint!
    $env: String!
    $name: String!
    $unit: String!
    $icon: String!
    $creator: String!
    $url: String!
    $decimals: Int
    $total: bigint
    $manager: String!
    $clawback: String!
    $freeze: String!
    $reserve: String!
    $created_at_round: bigint
  ) {
    insert_token(
      objects: {
        asa: $asa
        env: $env
        name: $name
        unit: $unit
        icon: $icon
        creator: $creator
        url: $url
        decimals: $decimals
        total: $total
        manager: $manager
        clawback: $clawback
        freeze: $freeze
        reserve: $reserve
        created_at_round: $created_at_round
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
const insertToken = async (token: Token) => {
  const client = getApolloClient();
  console.log('inserting token', token);
  return await client.mutate({
    mutation: query,
    variables: {
      asa: token.asa,
      env: token.env,
      name: token.name,
      unit: token.unit,
      icon: token.icon,
      creator: token.creator,
      url: token.url,
      decimals: token.decimals,
      total: token.total,
      manager: token.manager,
      clawback: token.clawback,
      freeze: token.freeze,
      reserve: token.reserve,
      created_at_round: token.created_at_round,
    },
  });
};

export default insertToken;
