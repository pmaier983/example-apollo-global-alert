import React, { useState} from 'react';
import PropTypes from 'prop-types';

import AlertContainer from './AlertContainer';

const AlertWrapper = ({ children }) => {
  const [state, setState] = useState(null);

  // make a push notification with a close button
  // one did nothing

  return (
    <>
      <AlertContainer>{state}</AlertContainer>
      {children({ onAlert: setState })}
    </>
  );
};

export default AlertWrapper;

AlertWrapper.propTypes = {
  children: PropTypes.func,
};
