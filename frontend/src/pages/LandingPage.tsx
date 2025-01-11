import { useState } from "react";
import Login from "../auth/login";
import Signup from "../auth/signup";

const LandingPage = () => {
    return (
        <main className="h-full">
            <div className="h-full flex flex-col justify-center items-center">
                <h1 style={{ color: 'orange' }}>Welcome to DSAQUEST</h1>
            </div>
        </main>
    );
};

export default LandingPage;