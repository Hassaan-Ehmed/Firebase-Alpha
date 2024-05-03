// import  { getDatabase,ref,set } from 'firebase/database';
// import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
// import { app } from './firebase';
// import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { useFirebase } from './context/Firebase';
import React,{useState} from 'react'

// const db = getDatabase(app);

// instance of auth
// const auth = getAuth(app);



function App() {



  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const firebase = useFirebase();

  console.log("Firebase>>.....",firebase);


// const signupUser = ()=>{

// // they take 3 args 1st one is instance of auth 2nd & 3rd is for email & password
// // this func() create a user in DB with these 3 args and return promise and give res  
//   createUserWithEmailAndPassword(
//     auth,
//     "hassu.dev@gmail.com",
//     "hassu@123"
//   ).then((response) => console.log(response) );
// }

// // function to set data into Firbase Realtime DB
// const putData = ()=>{
  
// //set takes 2 args 1-ref & 2-data 

// // ref takes db and route that where we want to store data
// set(ref(db,"users/hamza"),{
//     id:2,
//     name:"Hamza Khan",
//     age:27    
//   })
// }


  return (
    <div className="App">
      {/* <h1>Hello</h1>

<label>Email</label>
<input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='Enter Your Email' required />

<label>Password</label>
<input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder='Enter Your Password' required />
<button onClick={()=> {
  firebase.signupUserWithEmailAndPassword(email,password)
  firebase.putData("users/haris",{email,password});
  }}>Signup</button> */}

     {/* <button onClick={signupUser}>Create User</button> */}
     <Signup/>
      <Signin/> 
    </div>
  );
}

export default App;
