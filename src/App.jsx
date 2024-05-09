import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ResetPassword from "./components/pages/Reset";
import UpdatePassword from "./components/pages/Update";


function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Reset" element={<ResetPassword/>} />
        <Route path="/Update" element={<UpdatePassword/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
