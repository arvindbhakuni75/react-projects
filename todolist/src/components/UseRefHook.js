
import React,{useRef} from 'react'

function UseRefHook() {

    const inpRef = useRef()

    const reffunction = () => {
        inpRef.current.style.color="red" 
        inpRef.current.focus()
        console.log(inpRef.current.value)
    }

    
    

  return (
    <div>

        <h1>useRef Hook</h1>

        <input type="text" ref={inpRef} />

        <button onClick={reffunction}>Click</button>
      
    </div>
  )
}

export default UseRefHook
