import React from 'react'
import { useState } from 'react'
// import Child from './Child'

export default function App() {

  // function demo(udi){
  //   alert("Welcome"+udi)
  // }
  const[state, setState] = useState("single app application")
  return (
//     <div>
//  <h1>App Component</h1>
//   {demo("React")}
//  <Child x="Student-Tribe" />

//  <button onClick={demo}>Click</button>
//  <button onMouseOver={demo}>MouseOver</button>
//  <button onMouseOut={demo}>MouseOut</button>
//     </div>
   <>
   <h1>{state}</h1>
   </>

  )
}
