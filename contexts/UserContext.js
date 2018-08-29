import React from 'react';

const user = {
  token: null,
  clearToken: () => {},
  setToken: token => {}
};

const UserContext = React.createContext(user);
export { UserContext };
