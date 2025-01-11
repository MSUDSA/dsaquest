import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './auth/login'
import Signup from './auth/signup'
import Dashboard from './components/Dashboard'
import './index.css'
<<<<<<< Updated upstream
import Dashboard from './pages/Dashboard'
=======
// import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
>>>>>>> Stashed changes

function App() {

  return (

    <Router>
      <Sidebar />
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
<<<<<<< Updated upstream
        <Route path='/signup' element={<Dashboard />} />
=======
        <Route path='/dashboard' element={<Dashboard />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  )
}

export default App
