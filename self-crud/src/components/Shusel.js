import React from 'react'
import { useState } from 'react'
const Add = () => {
     const [input, setInput] = useState("")
    const [items, setItems] = useState([])
    const [active, setActive] = useState(null);
    const [edit, setEdit] = useState(false);

// console.log(edit)
    const onClick_add = () => {
        if(edit===true){
            let a=items
            a[active]=input
            setItems(a)
            setEdit(false)
        }else if(input!==''){
            setItems((oldItems) => {
                return [...oldItems, input]
            })
        }
        setInput("")
        console.log(items)
    }
    const handleDelete = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arr, ind) => {
                return ind !== id
            })
        })
    }
    const onClick_edit = (ind) => {
        setActive(ind)                         
        setInput(items[ind])                      
        setEdit(true);
    }
    // console.log(items)
    return (
        <>
            <br />
            <h1>Todo List</h1>
            <br />
            <input type="text" placeholder='Enter a Items....' value={input} onChange={(e) => 
                setInput(e.target.value)
    } />
            <button onClick={onClick_add}>+</button>
            <ol>
                {
                    items.map((val, ind) => {
                        return (
                            <li key={ind} id={ind}>{val}
                            <button onClick={()=>onClick_edit(ind)}>edit</button>
                                <button onClick={() => handleDelete(ind)}>X</button>
                            </li>
                            )
                    })
                }
            </ol>
        </>
    )
}


export default Add