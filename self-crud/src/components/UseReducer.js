import React,{useReducer} from 'react'

const initialValue = 0;
const reducer = (state, action) => {
    switch (action) {
        case "INCREMENT" : return state + 1
        case "DECREMENT" : return state - 1
        case "PLUSH10" : return state + 10
        case "MINUSH20" : return state - 20
    }
}

function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=> dispatch("INCREMENT")}>Counter +</button>
      <button onClick={()=> dispatch("DECREMENT")}>Counter -</button>
      <button onClick={()=> dispatch("PLUSH10")}>Counter + 10</button>
      <button onClick={()=> dispatch("MINUSH20")}>Counter - 20</button>
    </div>
  )
}

export default UseReducer;
