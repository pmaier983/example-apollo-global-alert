import { useState } from 'react';

const useBoolean = (initialState = false) => {
  const [boolean, setBoolean] = useState(
    typeof initialState === 'boolean' ? initialState : false,
  );

  const toggleBoolean = (stateOverride) => {
    setBoolean((typeof stateOverride === 'boolean') ? stateOverride : !boolean);
  };

  return [boolean, toggleBoolean, setBoolean];
};

export default useBoolean;
