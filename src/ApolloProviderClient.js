/* eslint-disable no-console */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash/fp';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const ApolloProviderClient = ({ children, onAlert }) => {
  const httpLink = new HttpLink({
    uri: GITHUB_BASE_URL,
    headers: {
      authorization: `Bearer ${
        process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
      }`,
    },
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ));
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }

    if (graphQLErrors || networkError) {
      onAlert('Something Went Wrong!');
    }
  });

  const link = ApolloLink.from([errorLink, httpLink]);

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache,
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

ApolloProviderClient.propTypes = {
  children: PropTypes.element,
  onAlert: PropTypes.func,
};

const deepEqualityCheck = (prevProps, nextProps) => _.isEqual(prevProps, nextProps);

export default memo(ApolloProviderClient, deepEqualityCheck);
