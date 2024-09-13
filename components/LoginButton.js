// components/LoginButton.js
import React from 'react';
import { Button } from 'react-select'; // Update this line if using react-select or another library

const LoginButton = ({ onLogin }) => {
  return (
    <button onClick={onLogin} className="btn">
      Login with Deriv
    </button>
  );
};

export default LoginButton;
