import React, { useState } from 'react';

function HiButton() {
    const [msg, setMsg] = useState("");  
    const handleMsg = () => {
        if(msg === ""){
            setMsg("Hi");
        }
        if(msg === "Hi"){
            setMsg("Bye");
        }
        if(msg === "Bye"){
          setMsg("");
      }};

      
      const [data, setData] = useState({name: 'anil', age: 24})
      
  return (
    <>
        <h1>{msg}</h1>
      <button onClick={handleMsg}>Click</button><br/>


      <input type="text" className='mt-5' placeholder='enter name' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/><br/><br/>
      <input type="text" placeholder='enter age' value={data.age} onChange={(e)=>setData({...data,age:e.target.value})} />
      <h2 >{data.name}</h2>
      <h2>{data.age}</h2>


    </>
  )
}

export default HiButton
