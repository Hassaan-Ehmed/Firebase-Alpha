import React,{useState} from 'react'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import { app } from '../firebase';


const auth = getAuth(app);

export default function Signup() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");


const createUser = ()=> {

    createUserWithEmailAndPassword(auth,email,password).then((res)=>console.log(res));
    alert("Succes!");
    setEmail("");
    setPassword("");

  
  
}
    return (
    <div className='signup-page'>
      <h1>Sign Up</h1>
      <label>Email</label>
      <input onChange={ e => setEmail(e?.target?.value) } value={email} type="email" placeholder='Enter your email' required />
      <label>Password</label>
      <input onChange={ e => setPassword(e?.target?.value)} value={password} type="password" placeholder='Enter your password' required />
      <br />
      <button>Signin with Google</button>
      <button onClick={createUser}>Signup</button>

    </div>
  )
}
