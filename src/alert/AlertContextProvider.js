import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useTimedBoolean } from '../hooks';

export const AlertContext = React.createContext();

const AlertContextProvider = ({ children }) => {
  const [visible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(true);
  };

  return (
    <>
      {visible && <div>ALEEEERRRRTTTTT</div>}
      <AlertContext.Provider value={{ toggleTimedAlert: toggleVisibility }}>
        {children}
      </AlertContext.Provider>
    </>
  );
};

AlertContextProvider.propTypes = {
  children: PropTypes.node,
};

export default AlertContextProvider;
