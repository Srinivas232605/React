import React from 'react'
import CompA from './CompA'
// import CompB from './CompB'

// const pic = "https://www.ifema.es/img/m/dibujo-del-cartel-marvel-universe-heroes/marvel-expo-cartel.webp"
// const users = ['Anil','sunil','raj','mani']
// const person = {
//   fname:'peter',
//   last: 'hello',
//   place: 'Hyderabad',
//   age:'30'
// }
let x = "React"
export default function App1() {
  return (
    <div>
        <h1>App</h1>
        {/* <CompA x = {pic}/> */}
        {/* <CompB y="Student-tribe"/> */}
        <CompA  data={x}/>
    </div>
    
  )
}
