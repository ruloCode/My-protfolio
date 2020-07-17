import React from 'react';

// to create the Provider
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import App from '../routes/App';

// To resolve problems with JWT autentication
const httLink = createHttpLink({
  uri: 'http://localhost:5000/',
});

// create client
const client = new ApolloClient({
  link: httLink,
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
