import { useState } from 'react';

const useBoolean = (initialState = false) => {
  const [boolean, setBoolean] = useState(initialState);

  const toggleBoolean = (stateOverride) => {
    setBoolean((stateOverride && typeof stateOverride === 'boolean') ? stateOverride
      : !boolean);
  };

  return [boolean, toggleBoolean];
};

export default useBoolean;
