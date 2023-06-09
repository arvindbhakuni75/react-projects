import React,{useContext, useState} from 'react'
import {Context} from './User'

function LoginForm() {
    const {setUserName, setPassword} = useContext(Context);

    const [input, setInput] = useState("");
    const [pass, setPass] = useState("");

    const updateUserName = () => {
        if(input.length >=3) {
            setUserName(input)
            setPassword(pass)
        }
    }

  return (
    <div>
      <input type="text" onChange= {(e)=> setInput(e.target.value)} />
      <input type="text" onChange= {(e)=> setPass(e.target.value)} />
      <button onClick={updateUserName}>Change User Name</button>
    </div>
  )
}

export default LoginForm;
