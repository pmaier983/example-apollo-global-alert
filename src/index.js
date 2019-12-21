/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloProviderClient from './ApolloProviderClient';
import AlertWrapper from './alert/AlertWrapper';

import App from './App';

ReactDOM.render(
  <AlertWrapper>
    {({ onAlert }) => (
      <ApolloProviderClient onAlert={onAlert}>
        <App />
      </ApolloProviderClient>
    )}
  </AlertWrapper>,
  document.getElementById('root'),
);
