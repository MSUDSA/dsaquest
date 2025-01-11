import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './auth/login'
import Signup from './auth/signup'
import Navbar from './components/Navbar'
import './index.css'
import Dashboard from './pages/Dashboard'

function App() {

  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
