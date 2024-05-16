import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" h-[100vh] ">
      <div className="flex flex-col gap-3 h-[100%] w-64 p-4 text-2xl font-bold">
        <Link to="/" className="text-cyan-100">
          Home
        </Link>
        <Link to="/about " className="text-cyan-100">
          About Us
        </Link>
        <Link to="/contact" className="text-cyan-100">
          Contact
        </Link>
      </div>
      <div className=""></div>
    </div>
  );
};

export default SideBar;