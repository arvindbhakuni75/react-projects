import React,{useState} from 'react';
import Lift2 from './Lift2';

function LiftState() {
    const [data, setData] = useState()

    function getValue (val) {
        console.log(val)
        setData(val)
    }

  return (
    <div>
        <h1>{data}</h1>
      <Lift2 getValue = {getValue} />
    </div>
  )
}

export default LiftState
