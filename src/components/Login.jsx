import { useState, useRef } from "react";
import Header from "./Header";
import {checkValidData} from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import bgImg from "../assets/images/background-IMG.jpg"
function Login() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [signInErrorMessage, setSignInErrorMessage] = useState(null);
    const email = useRef(null); 
    const password = useRef(null); 
    const name = useRef(null); 
    const handleSignIN = ()=>{
        setIsSignIn(!isSignIn)
    }

    const handleButtonClick = ()=>{
      //validate the form data
     const validateMessage = checkValidData(email.current.value, password.current.value,  !isSignIn ? name.current.value : "netflix");
     setSignInErrorMessage(validateMessage)
     console.log(validateMessage)
     if(validateMessage)  return;
    
     //sign up logic $ sign in logic
     if(!isSignIn){
      //Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        user.phoneNumber = 1234
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSignInErrorMessage(`${errorCode}: ${errorMessage}`);
      });

     }
     else
     {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Sign in ", user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSignInErrorMessage(`${errorCode}: ${errorMessage}`);
      });
     }
    }

    return (
        <div>
          <Header />
          <div className="absolute">
            <img src={bgImg} alt="backgroundIMage" />
          </div>
          <form onSubmit={(e)=> e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 text-white bg-opacity-85">
            <h1 className="font-bold text-3xl py-4 m-2">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
            {!isSignIn && <input ref={name} type="text" required placeholder="Full Name" className="p-4 my-4 w-full bg-slate-850"/>}
            <input ref={email} type="text" required placeholder="Email Address" className="p-4 my-4 w-full bg-slate-850"/>
            <input  ref={password} type="text" required placeholder="Password" className="p-4 my-4 w-full"/>
            <p className="font-bold text-xl text-red-700">{signInErrorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full" onClick={handleButtonClick}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
            <p onClick={handleSignIN} className="my-4 cursor-pointer">
            {isSignIn ? (
                <span>
                New to Netflix? <span className="font-bold">Sign Up Now</span>
                </span>
            ) : (
                <span>
                Already Registered? <span className="font-bold">Please Sign In</span>
                </span>
            )}
            </p>
          </form>
        </div>
    );
}

export default Login;