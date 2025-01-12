import React, { useState } from 'react';
import { signUserUp } from '../lib/auth';
import { useNavigate } from 'react-router-dom';
import mockFunctions from '../mock';
import { mode } from '../lib';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("isLoggedIn") === "true")
  const navigate = useNavigate()

  if (isLoggedIn) {
    navigate('/dashboard')
  }



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let res;
    if (mode === "production") {
       res = await signUserUp({email, password})
    } else {
      res = mockFunctions().signUserUp({name, email, password})
    }
    if (res.status_code === 401) {
      setDisplayMessage(res.error);
    } else {
      setDisplayMessage(res.success);
      navigate('/login')
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
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
        <button type="submit" style={{ backgroundColor: 'grey', color: 'orange' }}>Sign Up</button>
        <p>{displayMessage}</p>
      </form>
    </div>
  );
};

export default Signup;
