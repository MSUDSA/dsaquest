import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './auth/login'

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/concepts' element={<Login />} />
        <Route path='/anything' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
