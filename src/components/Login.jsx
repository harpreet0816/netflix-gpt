import { useState } from "react";
import Header from "./Header";
import bgImg from "../assets/images/background-IMG.jpg"
function Login() {
    const [isSignIn, setIsSignIn] = useState(true);
    const handleSignIN = ()=>{
        setIsSignIn(!isSignIn)
    }
    return (
        <div>
          <Header />
          <div className="absolute">
            <img src={bgImg} alt="backgroundIMage" />
          </div>
          <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 text-white bg-opacity-85">
            <h1 className="font-bold text-3xl py-4 m-2">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
            {!isSignIn && <input type="text" required placeholder="Full Name" className="p-4 my-4 w-full bg-slate-850"/>}
            <input type="text" required placeholder="Email Address" className="p-4 my-4 w-full bg-slate-850"/>
            <input type="text" required placeholder="Password" className="p-4 my-4 w-full"/>
            <button className="p-4 my-6 bg-red-700 w-full">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
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