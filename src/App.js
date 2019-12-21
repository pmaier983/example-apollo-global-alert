import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { MY_REPOSITORY_LIST } from './Queries';

const QueryProvider = () => {
  const { data } = useQuery(MY_REPOSITORY_LIST);

  return (
    <div>
      {JSON.stringify(data)}
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
