import {Route, Routes, useLocation } from "react-router-dom"
import Sidebar from "../components/sidebar"
import Settings from "./Settings"
import Concepts from "./Concepts"
import Quiz from "./Quiz"
import Dashboard from "./Dashboard"


const Home = () => {
  const location = useLocation()
  return (
    <>
     <div className="flex h-full">
       <Sidebar route={location.pathname[1].toUpperCase() + location.pathname.slice(2)}/>
      <main className="flex-1 p-4 bg-gray-100">
       <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/concepts' element={<Concepts />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
     </main> 
   </div>
    </>
  )
}

export default Home