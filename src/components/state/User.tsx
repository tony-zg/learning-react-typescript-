import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  //   const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser); //assertion
  const handleLogin = () => {
    setUser({
      name: 'John',
      email: 'test@gmail.com'
    });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      {/* <div>User name is {user?.name}</div> */}
      <div>User name is {user.name}</div>
      {/* <div>User email is {user?.email}</div> */}
      <div>User email is {user.email}</div>
    </div>
  );
};

export default User;
