import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './auth/login'
import Signup from './auth/signup'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'


function App() {

  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/*' element={<Home />} />

      </Routes>
    </Router>
  )
}

export default App
