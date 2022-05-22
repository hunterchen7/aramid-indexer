import { gql } from '@apollo/client/core';
import getApolloClient from './getApolloClient';

const query = gql`
  query MyQuery2 {
    indexer_by_pk(id: 1) {
      round
    }
  }
`;
const getLatestRound = async () => {
  const client = getApolloClient();
  const res = await client.query({
    query: query,
  });
  return res.data.indexer_by_pk.round;
};

export default getLatestRound;
