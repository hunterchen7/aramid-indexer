import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import fetch from 'cross-fetch';

let client: ApolloClient<any> = null;
const getApolloClient = () => {
  if (client != null) return client;
  client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://graphql.vote-coin.com/v1/graphql',
      fetch,
      headers: {
        //Authorization: `Bearer ${authToken}`
      },
    }),
    cache: new InMemoryCache(),
  });
  return client;
};

export default getApolloClient;
