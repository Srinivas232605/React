import React from 'react'
import CompB from './CompB'

export default function CompA({data}) {
  return (
    <div>
        <h1>CompA</h1>
        {/* <h1>{props.x}</h1> */}
        {/* <img src = {props.x} alt='' /> */}
        {/* <h1>{props.data[1]} {props.data1.fname}</h1> */}
        <CompB data={data}/>
    </div>
  )
}
