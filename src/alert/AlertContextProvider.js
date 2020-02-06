import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AlertContainer from './AlertContainer';

import { useTimedBoolean } from '../hooks';

export const AlertContext = React.createContext();

const AlertContextProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState();
  const [visible, timedVisibility] = useTimedBoolean(6000, false);

  const setAlert = (alertMessage) => {
    setErrorMessage(alertMessage);
    timedVisibility({ guaranteeInitialState: true, guaranteeFinalState: false });
  };

  return (
    <>
      {visible && (
      <AlertContainer>
        {errorMessage}
      </AlertContainer>
      )}
      <AlertContext.Provider value={{ toggleTimedAlert: setAlert }}>
        {children}
      </AlertContext.Provider>
    </>
  );
};

AlertContextProvider.propTypes = {
  children: PropTypes.node,
};

export default AlertContextProvider;
