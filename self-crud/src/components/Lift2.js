import React from 'react'

function Lift2({getValue}) {
  return (
    <div>
      <button onClick = {() => getValue(10)}>Lift</button>
    </div>
  )
}

export default Lift2
