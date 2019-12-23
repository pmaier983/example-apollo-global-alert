import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useTimedBoolean } from '../hooks';

import AlertContainer from './AlertContainer';

const AlertWrapper = ({ children }) => {
  const [state, setState] = useState('Hello');
  const [visible, timedVisibility] = useTimedBoolean(3000, false);

  const setAlert = (alertMessage) => {
    setState(alertMessage);
    timedVisibility({ guaranteeInitialState: true, guaranteeFinalState: false });
  };

  return (
    <>
      {visible && <AlertContainer>{state}</AlertContainer>}
      {children({ onAlert: setAlert })}
    </>
  );
};

export default AlertWrapper;

AlertWrapper.propTypes = {
  children: PropTypes.func,
};
