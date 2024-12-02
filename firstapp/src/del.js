import React, { useState } from 'react'


export default function del() {
    const [state, setState] = useState(100)
    function deletion(){
        setState(state - 1)
    }
  return (
    <div>
        <button onClick={deletion}></button>
    </div>
  )
}
