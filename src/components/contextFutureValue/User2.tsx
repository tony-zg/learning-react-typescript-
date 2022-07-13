import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const User2 = () => {
  const user = useContext(UserContext);

  const handleLogin = () => {
    // user &&
    user.setUser({
      name: 'John',
      email: 'test@test.com'
    });
  };

  const handleLogout = () => {
    // user &&
    user.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* <div>User name is {user?.user?.name}</div> */}
      <div>User name is {user.user?.name}</div>
      {/* <div>User email is {user?.user?.email}</div> */}
      <div>User email is {user.user?.email}</div>
    </div>
  );
};

export default User2;
