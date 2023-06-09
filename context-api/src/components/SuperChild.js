import React, {useContext} from 'react';
import { GlobleInfo } from '../App';

function SuperChild() {

    const {appColor, superChildcolor, number, getDataDay} = useContext(GlobleInfo)

    const day = "Sunday"

    

  return (
    <div>
      <h1 style = {{color: superChildcolor}}>Super Child Component</h1>
      <h1 style={{color: appColor}}>Super Child 2</h1>

      <h1>{number}</h1>
      <button onClick={() => getDataDay(day)} >Click</button>
    </div>
  )
}

export default SuperChild;
