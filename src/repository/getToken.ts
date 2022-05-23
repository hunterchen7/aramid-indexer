import { gql } from '@apollo/client/core';
import getApolloClient from '../common/getApolloClient';
const query = gql`
  query GetToken($asa: bigint!, $env: String!) {
    token(where: { env: { _eq: $env }, asa: { _eq: $asa } }) {
      id
    }
  }
`;
const getToken = async (asa: number, env: string) => {
  const client = getApolloClient();
  const res = await client.query({
    query: query,
    variables: {
      asa: asa,
      env: env,
    },
  });
  if (res.data.token.length == 0) return null;
  return res.data.token[0].id;
};

export default getToken;
