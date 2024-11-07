import ReactDOM from 'react-dom'
import pic from './hero.jpg'
// import smile from './smile.jpg'
// import cry from './cry.jpg'

import './style.css'
const root=ReactDOM.createRoot(document.getElementById('root'))
// let uid = "React JS apps"
// let items =['bat','ball','pad']

// let person={
//     fname:'srinivas',
//     last:'Alugonda',
//     age:''
// }

// const obj = new Date()
// let h = obj.getHours()
// let m = obj.getMinutes()
// let s = obj.getSeconds()

// let uid = "react"
// let result
// if(uid == 'react'){
//     // alert("Authorised user")
//     result = "Authorised user"
// }else{
//     //alert("UN-Authorised user")
//     result = "UN-Authorised user"
// }

const time = new Date()
let h = time.getHours()
let result

if(h <= 12){
   result = "Good morning"
}else if(h >= 12 && h <= 16){
    result = "Good afternnon"
}else {
    result = "Good evening"
}

// let result
// let uid = prompt("User id")
// if(uid == 'st'){
//     result = smile
// }else{
//     result = cry
// }


// inline css in react
// const clr = {
//     color: 'red',
//     background:"lightgreen",
//     margin: '20px',
//     padding: '20px'
// }


root.render(

    // <>
    // <h1>Welcome to react world</h1>,
    // <h2> {uid}</h2>
    // <h3>{50+90}</h3>
    // <h2>{items[2]}</h2>
    // <h3>First name is {person.fname},last name is {person.last}</h3>
    // </>
    
    <>
    {/* <h1>{h}:{m}:{s}</h1> */}
    <h3>{result}</h3>
    </>

    // <>
    //  {/* from public folder*/}
    //  <img src="OIP.jpg" alt='' width="250px"/>
    //  {/* from src folder*/}
    //  <img src={pic} alt='' />


    // </>

    

    // <>
    //   {/* <img src={result} alt='' /> */}
    //   <h2 style={{color:"pink",backgroundColor:"lightblue"}}> Using inline css in react</h2>
    //   <p> Villagers in West Godavari burst crackers and distributed sweets after the Republican victory was confirmed. “A Telugu girl now has official entry to the White House,” said a Vadluru resident who spoke to local media.

    //    The Chilukuris hail from Vadluru and Chilakaluripeta in Krishna district, known for their tradition of Veda Avadhanis - scholars of Vedic literature and chanting. Many family members have held positions at prestigious institutions including Andhra University and IIT Madras.</p>

    //   <img src={pic}  alt=''/>
    // </>


)