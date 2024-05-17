import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUsers, FaServicestack } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { ImUsers } from "react-icons/im";

const SideBar = () => {
  const [expandUsers, setExpandUsers] = useState(false);

  const toggleUsers = () => {
    setExpandUsers(!expandUsers);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-col gap-3 p-4 text-2xl font-bold">
        <Link to="/Dashboard" className="text-green-700 flex items-center">
          <AiOutlineDashboard className="mr-2" />
          Dashboard
        </Link>

        <div onClick={toggleUsers} className="cursor-pointer">
          <div className="text-green-700 flex items-center">
            <FaUsers className="mr-2" />
            Users {expandUsers ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {expandUsers && (
            <div className="pl-6">
              <Link to="/Users/Drivers" className="text-green-700 flex items-center">
              <FaCarSide className="mr-2" />
                Drivers
              </Link><br />
              <Link to="/Users/Customers" className="text-green-700 flex items-center">
              <ImUsers className="mr-2" />
                Customers
              </Link>
            </div>
          )}
        </div>

        <Link to="/Services" className="text-green-700 flex items-center">
          <FaServicestack className="mr-2" />
          Services
        </Link>

        <Link
          to="/Transactions"
          className="text-green-700 flex items-center"
        >
          <AiOutlineTransaction className="mr-2" />
          Transactions
        </Link>

        <Link
          to="/Testimonials"
          className="text-green-700 flex items-center"
        >
          <BiMessageDetail className="mr-2" />
          Testimonials
        </Link>

        <Link to="/Settings" className="text-green-700 flex items-center">
          <FiSettings className="mr-2" />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
