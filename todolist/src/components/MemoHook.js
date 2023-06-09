import React, {useState,useMemo} from 'react'

function MeomoHook() {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(2);

    const multiCountMemo = useMemo(function multicount() {
        console.log("Multicount function")
        return count*5
    }, [count]);

    const mutcMemo = useMemo(() => {
        console.log("second multifunction")
        return item*7
      },[item])

    

  return (
    <div>
        <h1>Number: {count}</h1>
        <h1>Multiply: {item}</h1>
        <h1>{multiCountMemo}</h1>
        <h1>{mutcMemo}</h1>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        <button onClick={()=>setItem(item*3)}>Update Item</button>
      
    </div>
  )
}

export default MeomoHook
