import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function LoginSuccess() {
  const { user } = useAuth();
  return <div>{user.userName}</div>;
}

export default LoginSuccess;
