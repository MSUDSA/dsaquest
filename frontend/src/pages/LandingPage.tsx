import { useState } from "react";
import Login from "../auth/login"
import Signup from "../auth/signup"
import { main } from "framer-motion/client";
import LoginSignUp from "../components/authPages";

const LandingPage = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <main className="h-full ">
            <div className=" h-full flex justify-center items-center">
                <LoginSignUp></LoginSignUp>
                {/* <button className = "" onClick={() => {
                    setShowSignup(true)
                    setShowLogin(false)
                }}>Sign Up</button>
                <button className= "" onClick={() => {
                    setShowLogin(true)
                    setShowSignup(false)
                }}>Log In</button>
                {showSignup ? <Signup /> : <></>}
                {showLogin ? <Login /> : <></>} */}
            </div>
        </main>

    )
}

export default LandingPage