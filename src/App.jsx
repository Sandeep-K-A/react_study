import { useState } from "react"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"



const App = () => {
  const [profileName, setProfileName] = useState("John")
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  )
}

export default App