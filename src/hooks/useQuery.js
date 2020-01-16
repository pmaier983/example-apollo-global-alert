import { useQuery } from '@apollo/react-hooks';

const useQueryContainer = (props) => {
  const response = useQuery(props);
  const { error } = response;
  if (error) { console.log('there was an error'); }
  return response;
};

export default useQueryContainer;
