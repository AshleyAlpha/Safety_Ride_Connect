
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ width: "100%" }}>
      <div className="bg-slate-500 fixed bottom-0 left-0 w-full h-20 flex  md:flex-row items-center justify-between">
        <h1 className="text-2xl text-cyan-500 ml-3 font-bold">SRC.</h1>
        <p className="hidden  sm:hidden  md:block lg:block font-medium text-white mb-3">
          &copy; {currentYear} Ride Service App. All rights reserved.
        </p>
        <div className="flex gap-2 text-white cursor-pointer  justify-center mr-3">
          <a
            href="https://www.linkedin.com/in/irakoze-marie-antoinette/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/irakoze.chance.56?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/irakoze.chance.56?igsh=MTJzMzRrMDRuanJoNA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
    // <div className="bg-gray-800">
    //   <div className="container mx-auto py-5 flex bg-gray-800  md:flex-row items-center justify-between">
    //     <div className="flex items-center gap-2">
    //       <span className="text-2xl font-bold text-black">SRC.</span>
    //     </div>
    //     <span className="hidden  sm:hidden  md:block lg:block font-medium text-black mb-3">
    //       &copy; {currentYear} Ride Service App. All rights reserved.
    //     </span>
    //     <div className="flex gap-2 text-black cursor-pointer">
    //       <a
    //         href="https://www.linkedin.com/in/irakoze-marie-antoinette/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin />
    //       </a>
    //       <a
    //         href="https://www.facebook.com/irakoze.chance.56?mibextid=ZbWKwL"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaFacebook />
    //       </a>dm:flex-row sm:flex-row flex-col sm:justify-around md:justify-around sm:items-center md:items-center
    //       <a
    //         href="https://www.instagram.com/irakoze.chance.56?igsh=MTJzMzRrMDRuanJoNA=="
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaInstagram />
    //       </a>
    //     </div>
    //     {/* <span className="hidden md:block font-medium text-white">
    //       &copy; {currentYear} Ride Service App. All rights reserved.
    //     </span> */}
    //   </div>
    // </div>
  );
};

export default Footer;
