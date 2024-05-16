import React from "react";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ResetPassword from "./components/pages/Reset";
import UpdatePassword from "./components/pages/Update";
import OTP from "./components/pages/OTP";
import ProfileForm from "./components/pages/Profile";
import Layout from "./Dashboard/Layout";
import Services from "./Dashboard/Services";
import Dashboard from "./Dashboard/Dashboard";
import Testimonials from "./Dashboard/Testimonials";
import Transactions from "./Dashboard/Transactions";
import Users from "./Dashboard/Users";
import Settings from "./Dashboard/Settings";

function App() {
  return (
    <div className="w-full">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/OTP" element={<OTP/>} />
        <Route path="/Profile" element={<ProfileForm/>} />
        <Route path="/Reset" element={<ResetPassword/>} />
        <Route path="/Update" element={<UpdatePassword/>} />
        </Routes>
    </BrowserRouter> */}

      {/* DASHBOARD */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Transactions" element={<Transactions />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
