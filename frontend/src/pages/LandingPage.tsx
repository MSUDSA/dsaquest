import { useState } from "react";
import Login from "../auth/login";
import Signup from "../auth/signup";

const LandingPage = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <main className="h-full">
            <div className="h-full flex flex-col justify-center items-center">
                <h1 style={{ color: 'orange' }}>Welcome to DSAQUEST</h1>
                <div>
                    <button onClick={() => {
                        setShowSignup(true);
                        setShowLogin(false);
                    }} style={{ marginRight: '10px', backgroundColor: 'grey', color: 'orange' }}>
                        Sign Up
                    </button>
                    <button onClick={() => {
                        setShowLogin(true);
                        setShowSignup(false);
                    }} style={{ backgroundColor: 'grey', color: 'orange' }}>
                        Log In
                    </button>
                </div>
                {showSignup && <Signup />}
                {showLogin && <Login />}
            </div>
        </main>
    );
};

export default LandingPage;