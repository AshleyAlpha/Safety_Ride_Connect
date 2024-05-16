import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ResetPassword from "./components/pages/Reset";
import UpdatePassword from "./components/pages/Update";
import OTP from "./components/pages/OTP";
import ProfileForm from "./components/pages/Profile";
function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/OTP" element={<OTP/>} />
        <Route path="/Profile" element={<ProfileForm/>} />
        <Route path="/Reset" element={<ResetPassword/>} />
        <Route path="/Update" element={<UpdatePassword/>} />


          {/* DASHBOARD */}
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
       
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
