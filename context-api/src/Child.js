import React, {useContext} from 'react';
import { GlobleInfo } from './App';
import SuperChild from './components/SuperChild';

function Child() {

    const {appColor} = useContext(GlobleInfo);

    console.log(appColor)

  return (
    <div>
      <h1 style={{color: appColor}}>Child Componet</h1>
      <SuperChild />
    </div>
  )
}

export default Child
