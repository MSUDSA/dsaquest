import React, { useState } from 'react';
import {signUserUp} from '../lib/auth'
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your signup logic here (e.g., API call)
    const res = await signUserUp({name, email, password});
    if (res["status_code"] == 404) {
      setDisplayMessage(res["error"]);
    }
    else {
      setDisplayMessage(res['success']);
    }
  };
  const [displayMessage, setDisplayMessage] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Sign Up</button>
      <p>{displayMessage}</p>
    </form>
  );
};

export default Signup;
