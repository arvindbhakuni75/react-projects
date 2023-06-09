import React, {useContext} from 'react'
import { GlobleInfo } from '../App'

function OtherChild() {

    const {number, appColor} = useContext(GlobleInfo)

  return (
    <div>
      <h1>Other Child</h1>
      <h1>{number}</h1>
      <h1>{appColor}</h1>
    </div>
  )
}

export default OtherChild
