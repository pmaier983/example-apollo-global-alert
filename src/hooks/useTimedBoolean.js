import useBoolean from './useBoolean';

const useTimedBoolean = (time = 5000, initialState = false) => {
  const [boolean, toggleBoolean] = useBoolean(initialState);

  const triggerTimedBoolean = ({ guaranteeInitialState, guaranteeFinalState }) => {
    // have yet to find a way to guarantee synchronicity
    toggleBoolean(guaranteeInitialState);
    setTimeout(() => {
      toggleBoolean(guaranteeFinalState);
    }, (typeof time === 'number' ? time : 5000));
  };

  return [boolean, triggerTimedBoolean, toggleBoolean];
};

export default useTimedBoolean;
