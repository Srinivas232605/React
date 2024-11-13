import React from 'react'
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Child from './Child'

// import pic1 from './images/hero.jpg'
// import pic2 from './images/smile.jpg'

// import data from './images/data.json'

export default function App() {

  // function demo(udi){
  //   alert("Welcome"+udi)
  // }
  // const[data, setData] = useState(0)
  // const add=()=>{
  //   setData(data+1)
  // }
  // const reset=()=>{
  //   setData(0)
  // }
  // const del=()=>{
  //   setData(data-1)
  // }
  // const person={
  //   fname:'Rohit',
  //   lname:'Sharama'

  // }
  // const person1={
  //   fname:'Virat',
  //   lname:'Kohil'
  // }

// const[user, setUser]=useState(person)
// const handler2=()=>{
//   setUser(person1)
// }
//  const [data,setData] = useState({ fname:'Virat',lname:'Kohil'})
//  function demo(){
//   setData({...data, fname:"Ramesh"})
//  }

// const [state, setState]=useState(pic1)
// const handler=()=>{

// }


// const array = ['Anil', 'Sunil', 'Peter', 'John', 'Seetha', 'Geetha']
// const [state, setState] = useState(array)


const [state,setState] = useState([])
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => setState(json))


  return (
//     <div>
//  <h1>App Component</h1>
//   {demo("React")}
//  <Child x="Student-Tribe" />

//  <button onClick={demo}>Click</button>
//  <button onMouseOver={demo}>MouseOver</button>
//  <button onMouseOut={demo}>MouseOut</button>
//     </div>
  //  <>
  //  <h1>{data}</h1>
  //  <button onClick={add} className='btn btn-primary'>Increment</button>
  //  <button onClick={reset} className='btn btn-secondary'>update State</button>
  //  <button onClick={del} className='btn btn-success'>Drement</button>
  //  </>


  // <>
  //   <h1> App Component</h1>
  //   <h3>{user.fname} {user.lname}</h3>
  //   <button onClick={handler2}>update Object</button>
  // </>

  // <>
  // <h1> Hello</h1>
  // My first name is {data.fname} and last name is {data.lname}
  // <br/>
  // <button onClick={demo}>update</button>
  // </>
  // <>
  // <h1>Hello</h1>
  // <img src='{state}' alt=''/>
  // <button onClick={handler}> Update image</button>
  // </>
  
  // <>
  //  <h1>Hello</h1>
  //  {state.map((x)=><li>{x}</li> )}
  // </>

  <>
  {/* {state.map()((x)=><li>{x.name}</li>)} */}
  <h1>hello</h1>
  {/* {state.map((list)=><li>{list.id}</li>)} */}

  <table className='table table-bordered bg-dark text-light'>
    {state.map((list =>
      <tr>
        <td>{list.id}</td>
        <td>{list.name}</td>
      </tr>
    ))}
  </table>
  </>

  )

}

