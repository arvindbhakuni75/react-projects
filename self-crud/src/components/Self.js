import React, { useState } from "react";

function Self() {

    const [name, setName] = useState("");
    const [data, setData] = useState([]);
    const [id, setId] = useState(null)
    const [status, setStatus] = useState(false)
  
    const addNewName = () => {
      if(name.trim() !== "") {
        setData([...data, name]) 
        setName("");
        console.log(data)
      } 
    };

    const editData = (i) => {
        // setStatus(true)
        setId(i)
        console.log(i)     
        setName(data[i])          
    }
 
    const updateData = () => {
      data[id] = name
      setData(data)
      setName("")
      setStatus(false)
      console.log(data)
    }
 
    const deletetData = (id) => {
      setData((data) => {
        return data.filter((item, i) => i !== id)
      })
    };

  return (
    <div className="App">
      <h1>CRUD APP</h1>
      <input
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {!status? <button onClick={addNewName}>Add</button> :
      <button onClick={updateData}>Update</button> 
       } 

      {
        data.map((item, i) => {
          return (
            <div key={i} >
              <h1>{`${i+1}: `} {item}</h1>
              <button onClick={() => editData(i)}>Edit</button>
              <button onClick={() => deletetData(i)}>Delete</button>
            </div>
          );
        })
    }
    </div>
  )
}

export default Self;
