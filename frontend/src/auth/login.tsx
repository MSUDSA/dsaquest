import React, { useState } from 'react';
import { signUserIn } from '../lib/auth';
import { useNavigate } from 'react-router-dom';
import { mode } from '../lib';
import mockFunctions from '../mock';
import { userInfoType } from '../components/Navbar';

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserInfo : React.Dispatch<React.SetStateAction<userInfoType | null>>
}
const Login = ({setIsLoggedIn, setUserInfo} : LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let res;
    if (mode === "production") {
       res = await signUserIn({email, password})
    } else {
      res = mockFunctions().signUserIn({email, password})
    }
    if (res.status_code === 401) {
      setErrorMessage(res.error);
      setSuccessMessage("");
    } else {
      setSuccessMessage(res.success);
      setErrorMessage('');
      sessionStorage.setItem("userInfo", JSON.stringify({
        email: res.email,
        name: res.name,
        streak: res.streak,
        last_login: res.last_login
      }))
      sessionStorage.setItem("isLoggedIn", "true")
      setIsLoggedIn(true)
      setUserInfo({
        email: res.email,
        name: res.name,
      })
      navigate('/dashboard')

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