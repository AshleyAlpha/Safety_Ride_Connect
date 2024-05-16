import React from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaServicestack } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className=" h-[100vh] ">
      <div className="flex flex-col gap-3 h-[100%] w-64 p-4 text-2xl font-bold">
        
        <Link to="/Services " className="text-green-700 flex items-center">
        <FaServicestack  className="mr-2"/>
          Services
        </Link>
        <Link to="/Dashboard" className="text-green-700 flex items-center">
        <AiOutlineDashboard className="mr-2"/>
          Dashboard
        </Link>
        <Link to="/Testimonials" className="text-green-700">
          Testimonials
        </Link>
        <Link to="/Transactions" className="text-green-700">
          Transactions
        </Link>
        <Link to="/Users" className="text-green-700 flex items-center">
        <FaUsers className="mr-2"/>
          Users
        </Link>

        <Link to="/Settings" className="text-green-700 flex items-center">
  <FiSettings className="mr-2"/>
  Settings
</Link>



      </div>
      <div className=""></div>
    </div>
  );
};

export default SideBar;