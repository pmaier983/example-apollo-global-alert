import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { MY_REPOSITORY_LIST, GET_EMAIL, BAD_EMAIL } from './Queries';

const BodyWidth = styled.div`
  width: 100%;
  height: 100%;
`;

const QueryProvider = () => {
  const [query, setQuery] = useState(MY_REPOSITORY_LIST);
  const { data } = useQuery(query);

  const setGoodQuery = () => {
    setQuery(GET_EMAIL);
  };

  const setBadQuery = () => {
    setQuery(BAD_EMAIL);
  };

  return (
    <div>
      <h1>Queries:</h1>

      <button type="button" onClick={setGoodQuery}>Click Me to Fire off a Good Query</button>
      <button type="button" onClick={setBadQuery}>Click Me to Fire off a Bad Query</button>

      <h1>Output:</h1>
      <BodyWidth>{JSON.stringify(data)}</BodyWidth>

    </div>
  );
};

const LandingPageContainer = styled.div`
  font-family: 'Red Hat Text', sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const App = () => (
  <>
    <link href="https://fonts.googleapis.com/css?family=Red Hat Text" rel="stylesheet" type="text/css" />
    <LandingPageContainer>
      <QueryProvider />
    </LandingPageContainer>
  </>
);


export default App;
