import { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';

import { AlertContext } from '../alert/AlertContextProvider';

const useQueryContainer = (props) => {
  const { toggleTimedAlert } = useContext(AlertContext);
  const response = useQuery(props);
  const { error } = response;
  // could potentially send a log to your personal servers here
  if (error) { toggleTimedAlert(`There was a GraphQL Error at: ${moment().format('MM/DD/YYYY HH:mm:ss')}`); }
  return response;
};

export default useQueryContainer;
