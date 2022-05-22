import { gql } from '@apollo/client/core';
import getApolloClient from './getApolloClient';

const query = gql`
  mutation update_indexer_by_pk($round: bigint!) {
    update_indexer_by_pk(pk_columns: { id: 1 }, _set: { round: $round }) {
      round
    }
  }
`;
const setLatestRound = (round: number) => {
  const client = getApolloClient();
  client.mutate({
    mutation: query,
    variables: {
      round: round,
    },
  });
};

export default setLatestRound;
