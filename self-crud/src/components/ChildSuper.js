import React, {useContext} from 'react';
import {GlobleData} from '../App';

function ChildSuper() {
  const {number, color, sendVal, num, setNum} = useContext(GlobleData);
  const account = Date.now()
  return (
    <div>
      <h1 style={{color: color}}>ChileSuper Component</h1>
      <h1 style={{color: color}}>{number}</h1>
      <button onClick={() => sendVal(account)}>Button</button>
      <button onClick={() => setNum(num+1)}>setNum</button>
      
    </div>
  )
}

export default ChildSuper;
