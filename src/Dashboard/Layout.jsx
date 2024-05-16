import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../Dashboard/Header";
import SideBar from "../Dashboard/Sidebar";

const Layout = () => {
  return (
    <div className="bg-black p-3 ">
        <Header/>
     <div className="flex">
        <SideBar/>
        <div className="flex  w-[100%] h-[100vh] bg-green-100 rounded-lg border border-[#828181]">
        <Outlet/>
        </div>
     </div>
    </div>
  );
}

export default Layout