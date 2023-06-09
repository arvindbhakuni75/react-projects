import React, {useReducer} from 'react'

const initialstate = 0;
const reducer = (state, action) => {
    switch (action) {
        case "Increment" : 
            return state + 1
        case "Decrement" : 
            return state -1
        default:
            return state
    }
}

function RedecerCounter() {

    const [count, dispatch] = useReducer(reducer, initialstate)

  return (
    <div>
       <h1>{count}</h1>
      <button onClick={()=>dispatch("Increment")} className='btn m-5' style={{padding: "10px", backgroundColor: "blue"}}>Increment</button>
      <button onClick = {() => dispatch("Decrement")} className='btn m-5' style={{padding: "10px", backgroundColor: "blue"}}>Decrement</button>
    </div>
  )
}

export default RedecerCounter
