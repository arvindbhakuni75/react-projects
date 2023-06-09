import React,{createContext, useState} from 'react';
import Login from './Login';

export const Context = createContext();

function User() {
    const [userName, setUserName] = useState("Arvind")
    const [password, setPassword] = useState("0000");
  return (
    <Context.Provider value = {{userName, setUserName, password, setPassword}}>
      <Login />
    </Context.Provider>
  )
}

export default User;
