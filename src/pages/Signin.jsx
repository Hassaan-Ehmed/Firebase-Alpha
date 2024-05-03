import React,{useState} from 'react'
import {getAuth,signInWithEmailAndPassword}  from 'firebase/auth'
import { app } from '../firebase';


// auth instance 
const auth = getAuth(app);

export default function Signin() {


const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const signinUser = ()=>{

  signInWithEmailAndPassword(auth,email,password)
  .then(res => console.log("Success",res))
  .catch(err => console.log("Error",err));

  setEmail("");
  setPassword("");

}


  return (
    <div className='signin-page'>
      
      <h1>Sign In</h1>
      <label>Email</label>
      <input onChange={ e => setEmail(e.target.value)} value={email} type='email' placeholder='Enter your Email' required/>
      <label>Password</label>
      <input onChange={ e => setPassword(e.target.value)} value={password} type='password' placeholder='Enter your Password' required/>
    <button onClick={signinUser}>Sign me in</button>
    </div>
  )
}
