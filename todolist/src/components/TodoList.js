import React, { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  const addActivity = () => {
    // setlistData([...listData, activity]);
    // console.log(listData);
    setlistData((listData) => {
      const updateList = [...listData, activity];
      console.log(updateList);
      setActivity("");
      return updateList;
    });
  };

  const removeActivity = (i) => {
    const updateListData = listData.filter((elem, id)=> {
        return i !== id;
    })
    setlistData(updateListData);
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>TODO LIST</h1>
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="Add Activity"
            value={activity}
            onChange={(e) => {
              setActivity(e.target.value);
            }}
          />
          <button onClick={addActivity}>Add</button>
        </div>
        <h2 className="my-list">My Lists</h2>

        <div className="list-container">
        {listData !==[] && listData.map((data, i) => {
                return (
                    <>
                    <div className="listkey" key={i}>
                        <div className="list-data">{data}</div>
                        <button onClick={() => removeActivity(i)}>Remove</button>
                    </div>
                    </>
                )
            })}

            {listData.length>=1 && 
                <button onClick={()=> setlistData([])} className="removeAll">Remove All</button>
            }
  
        </div>

      </div>
    </>
  );
}

export default TodoList;
