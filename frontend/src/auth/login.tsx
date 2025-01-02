import React, { useState } from 'react';
import { signUserIn } from '../lib/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signUserIn({ email, password });
    if (res.status_code === 404) {
      setErrorMessage(res.error);
      setSuccessMessage("");
    } else {
      setSuccessMessage(res.success);
      setErrorMessage('');
    }
  };

  return (
    <div 
    className=''
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
    >
      <form onSubmit={handleSubmit} 
      className=''
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}
      >
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" style={{ backgroundColor: 'grey', color: 'orange' }}>Login</button>
        <p style={{ color: 'green' }}>{successMessage}</p>
        <p style={{ color: 'red' }}>{errorMessage}</p>
      </form>
    </div>
  );
};

export default Login;