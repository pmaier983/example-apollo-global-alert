import { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { AlertContext } from '../alert/AlertContextProvider';

const useQueryContainer = (props) => {
  const { toggleTimedAlert } = useContext(AlertContext);
  const response = useQuery(props);
  const { error } = response;
  if (error) { toggleTimedAlert(); }
  return response;
};

export default useQueryContainer;
