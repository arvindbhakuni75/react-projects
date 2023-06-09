import React, {useState,} from 'react'

function Task() {

    //const [input, setInput] = useState();
    const bio = [
        {
            id: 1, name: 'arvind', age: 24,
        },
        {
            id: 2, name: 'vipul', age: 22
        },
        {
            id: 3, name: 'vipul', age: 22
        },
        {
            id: 4, name: 'vipul', age: 22
        },
        {
            id: 5, name: 'vipul', age: 22
        }
]
    const [data, setData] = useState(bio);


    const removeElm = (id) => {
        const newdata =  data.filter((elm) => {
            return elm.id !== id
            
        })
        setData(newdata)
        
    }
    
  return (
    <div>

        {
            data.map((item) => {
                return (
                    <h1 key = {item.id}>ID = {item.id} Name = {item.name} Age = {item.age}
                        <button onClick= {()=> removeElm(item.id)}>Remove</button>
                    </h1>
                    
                )
            })
        }
        {/* <button onClick={submit}>Click</button> */}
    </div>
  )
}

export default Task
