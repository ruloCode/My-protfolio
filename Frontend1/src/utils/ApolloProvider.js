import React from 'react';

// to create the Provider
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { setContext } from 'apollo-link-context';
import App from '../routes/App';

// To resolve problems with JWT autentication
const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
});
// add auth token in headers
const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return { headers: {
    Authorization: token ? `Bearer ${token}` : '',
  } };
});
// create client
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
