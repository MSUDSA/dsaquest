import {Route, Routes, useLocation } from "react-router-dom"
import Sidebar from "../components/sidebar"
import Settings from "./Settings"
import Concepts from "./Concepts"
import Quiz from "./Quiz"
import Dashboard from "./Dashboard"
import { userInfoType } from "../components/Navbar"
interface HomeProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserInfo : React.Dispatch<React.SetStateAction<userInfoType | null>>
}

const Home = ({setUserInfo, setIsLoggedIn} : HomeProps) => {
  const location = useLocation()
  return (
    <>
     <div className="flex h-full">
       <Sidebar route={location.pathname[1].toUpperCase() + location.pathname.slice(2)} setUserInfo={setUserInfo} setIsLoggedIn={setIsLoggedIn}/>
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