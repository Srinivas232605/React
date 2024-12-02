import React from 'react'
import { useState } from 'react'

export default function Add() {
    const [state, setState] = useState(0)
    function addition(){
        setState(state+1)
    }
    function deletion(){
        setState(state-1)
    }
  return (
    <div>
        <button onClick={addition}>+</button>
    </div>
  )
}
