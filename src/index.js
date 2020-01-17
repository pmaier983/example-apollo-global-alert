import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './ApolloProviderClient';
import AlertContextProvider from './alert/AlertContextProvider';

import App from './App';

ReactDOM.render(
  <AlertContextProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AlertContextProvider>,
  document.getElementById('root'),
);
