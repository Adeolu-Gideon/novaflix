// import React from 'react'
// import { useState } from 'react';
// const me = "developers";
// const linkToGoogle ="https://google.com";

// const App=()=>{
//   const gender = 'female'
//   const [dNum, setMynum] = useState(0)
//   const increament = () =>{
//     setMynum(dNum+1)
//   }
//   return (
//     <div>
//       {gender==="male"?<h1>Na guy I be</h1>:<h1>I be woman</h1>}
//       <h1 className='bg-warning'>Welcome</h1> {me}<br></br>
//       <h1>{dNum}</h1>
//       <button className='bg-info' onClick={increament}>Increament</button>
//       <a href={linkToGoogle}>linkToGoogle</a>
//     </div>
//   )
// }

// export default App

import React from 'react'
import {useState} from 'react'
//var guess = Math.floor(Math.random()*10) + 1;

const App=()=>{
const [guess, myGuess] = useState(0)
const myGuesst = ()=>{
 let myGues = Math.floor(Math.random() * 10)
myGuess(myGues)
}
  return (
    <div>
      {guess < 5?<h1>I am small</h1>:<h1>I am big</h1>}
      <h1>{guess}</h1>
      <button className='btn btn-outline-primary' onClick={myGuesst}>Guess</button>
    </div>
  )
}

export default App
////////////
import React from 'react'
import {useState} from 'react'


function App(){
const [firstname, setfirstname] = useState("")
const [lastname, setlastname] = useState("")
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [allusers, setallusers] = useState([])
// const allregusers =()=>{

// }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4 shadow-sm border-right'>
          <h1 className='text-center'>Sign Up or Register</h1>
          <input className='form-floating form-control my-2' type='text' placeholder='First Name'
           onChange={(event)=>setfirstname(event.target.value)}/>
          <input className='form-floating form-control my-2' type='text' placeholder='Last Name'
           onChange={(event)=>setlastname(event.target.value)}/>
          <input className='form-floating form-control my-2' type='email' placeholder='Email'
           onChange={(event)=>setemail(event.target.value)}/>
          <input className='form-floating form-control my-2' type='password' placeholder='Password'
           onChange={(event)=>setpassword(event.target.value)}/>
           <button className='btn btn-primary w-100'>Register</button>
           
        </div>
        <div className='col-8 shadow-sm'>
          <h1 className='text-center'>Registered users</h1>
        </div>
      </div>
    </div>
  )

  } 
export default App