import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'
import NavBar from "./components/NavBar"
import { useEffect } from "react"
import { connectWalletProvider } from "./interactions/helpers"

function App() {


  useEffect(() => {
    (async () => {
      await connectWalletProvider();
    })()
  }, [])

  return (
    <div className="min-h-screen relative">
      <NavBar />
      <Outlet />
      <div className="">
        <Footer />
      </div>
    </div>
  )
}
export default App
