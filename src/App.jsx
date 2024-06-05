import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'
import NavBar from "./components/NavBar"

function App() {



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
