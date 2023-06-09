import React,{useContext} from 'react';
import { Context } from './User';
import LoginForm from './LoginForm';

function Login() {
    const {userName, password} = useContext(Context)
  return (
    <div>
        <h1>{userName}</h1>
        <h1>{password}</h1>
        <LoginForm />
      
    </div>
  )
}

export default Login
