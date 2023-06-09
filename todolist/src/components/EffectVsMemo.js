
import React, {useState, useEffect, useMemo} from 'react';

const EffectVsMemo = () => {

    const [count, setCount] = useState(1);
    const [data, setData] = useState(10);

    // useEffect 
    useEffect(()=> {                
        let randomNum = Math.random()
        console.log(randomNum)
    }, [data])

    // useMemo
    const noRendaring = useMemo(()=> {
        return <>
            <h1>useMemo {count} : {data}</h1>
        </>
    }, [count])


    return (
    <>
        <h1>useEffect vs useMemo</h1> <br/><br/>
        {noRendaring}
        <h2>{count}</h2>
        <h2>{data}</h2>
        <button onClick={()=> setCount(count + 1)} >count</button>
        <button onClick={()=> setData(data + 10)} >data </button>
    </>
)}

export default EffectVsMemo;