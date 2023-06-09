import React, { useState } from "react";

function Acrud() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState(null)

  const addData = () => {
    if(name.trim() !== ""){
      setData([...data, name]);
      setName("");
    }
  };

  const editItem = (id) => {
    setId(id)
    setName(data[id])
  }

  const deleteName = (id) => {
    const newData = data.filter((item, i) => {
        return i !== id
    })
    setData(newData)
  }


  console.log(data);

  return (
    <>
      <br />
      <br />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New_Entry"
      />
      <button onClick={addData}>Add</button> <br />
      <br />
      {data?.map((item, i) => {
        return (
          <div key={i}>
            <span>{i + 1} </span>
            <span> {item} </span> 
            <button onClick= {() => editItem(i)}>Edit</button> 
            <button onClick={()=> deleteName(i)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default Acrud;
