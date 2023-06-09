import React, {useState} from 'react'

function Form() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [nameErr, setNameErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    const hendleSubmit = (e) => {
        e.preventDefault()

        if(name.length<4 || password.length<6) {
            alert("Enter Currect Values")
        } else {
            alert("Successfull")
        }
    }

    const handleName = (e) => {
        let item = e.target.value;
        if(item.length <4) {
            setNameErr(true)
        } else {
            setNameErr(false)
        }
        setName(item)
    }

    const handlePassword = (e) => {
        let item = e.target.value;
        if(item.length <6) {
            setPassErr(true)
        } else {
            setPassErr(false)
        }
        setPassword(item)
    }

  return (
    
    <div>
      <h1>Login</h1>
      <form onSubmit={hendleSubmit}>
        <input onChange={handleName} type="text" placeholder='Enter User Id' /> <br/>
        {nameErr?<span>User Name is not Valid</span>: ""}
         <br/><br/>
        <input onChange={handlePassword} type="text" placeholder='Enter User Password' /><br/>
        {passErr?<span>Password no Currect</span>: ""}
        <br/><br/>
        <button  type="submit">Login</button>
      </form>
    </div>
  )
}

export default Form;
