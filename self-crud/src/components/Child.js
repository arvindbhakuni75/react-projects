import React, {useContext} from 'react'
import ChildSuper from './ChildSuper'
import { GlobleData } from '../App'

function Child() {
    const {acc} = useContext(GlobleData)
  return (
    <div>
      <h1>Child Componet</h1>
        <h1>{acc}</h1>
      <ChildSuper />
    </div>
  )
}

export default Child;
