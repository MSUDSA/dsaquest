import { useState } from "react";
import Login from "../auth/login"
import Signup from "../auth/signup"

const LandingPage = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div>
            <button onClick={() => {
                setShowSignup(true)
                setShowLogin(false)
            }}>Sign Up</button>
            <button onClick={() => {
                setShowLogin(true)
                setShowSignup(false)
            }}>Log In</button>
            {showSignup ? <Signup /> : <></>}
            {showLogin ? <Login /> : <></>}
        </div>
    )
}

export default LandingPage