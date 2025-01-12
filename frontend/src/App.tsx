import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './auth/login'
import Signup from './auth/signup'
import './index.css'
import Navbar, { userInfoType } from './components/Navbar'
import Home from './pages/Home'
import { useState } from 'react'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("isLoggedIn") === "true")
    const [userInfo, setUserInfo] = useState<userInfoType | null>(JSON.parse(sessionStorage.getItem("userInfo") || "{}") || null)
  
  return (

    <Router>
      <Navbar isLoggedIn={isLoggedIn} userInfo={userInfo} setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo}/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo}/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/*' element={<Home setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo}/>} />

      </Routes>
    </Router>
  )
}

export default App
