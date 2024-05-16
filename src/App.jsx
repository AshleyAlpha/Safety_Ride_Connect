import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import NavBar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Service from "./Pages/Service"
import Contact from "./Pages/Contact"
import SignIn from "./Pages/SignIn"
import Profile1 from "./Pages/Profile1"



const Layout = ()=>{

  return(
    <>
     <NavBar/>
     <Outlet/>
     <Footer/>
    </>
  )
}
function App() {
  return (
    <BrowserRouter>
    {/* <Profile1/> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signIn" element={<SignIn/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App