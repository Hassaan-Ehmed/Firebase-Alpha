import {createContext,useContext} from 'react';
import { createUserWithEmailAndPassword , getAuth } from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { getDatabase, set, ref} from 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyDzR9PTAERrbIBmJvb1OZYyBzL531oVxjE",
    authDomain: "app-362d8.firebaseapp.com",
    projectId: "app-362d8",
    storageBucket: "app-362d8.appspot.com",
    messagingSenderId: "805867573440",
    appId: "1:805867573440:web:2852b256e361e64e7a1d25",
    databaseURL : "https://app-362d8-default-rtdb.firebaseio.com/"
  };

  const firebaseApp =  initializeApp(firebaseConfig); 
  
  const firebaseAuth = getAuth(firebaseApp)
  const database = getDatabase(firebaseApp);
  const FirebaseContext = createContext(null);
  
  export const useFirebase  = ()=> useContext(FirebaseContext);
  
  export const FirbaseProvider=(props)=>{
      
      const signupUserWithEmailAndPassword = (email,password) => {
          
          return createUserWithEmailAndPassword(firebaseAuth,email,password);
          
        }  
        
        const putData = (key,data) =>  set(ref(database,key),data);
        
return <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,putData}}>
        {props.children}
    </FirebaseContext.Provider> 


}