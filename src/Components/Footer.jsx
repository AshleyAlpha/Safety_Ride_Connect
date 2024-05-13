// import React from "react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-800 text-white py-4 text-center">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
//         <div className="mr-4 mb-4 lg:mb-0">
//           <img src="/mobile.png" alt="mobile" className="w-32 lg:w-48" />
//         </div>
//         <p className="mb-4 lg:mb-0">
//           &copy; {currentYear} Ride Service App. All rights reserved.
//         </p>
//         <div className="mt-4 lg:mt-0">
//           <a
//             href="https://www.linkedin.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-gray-400 mr-2"
//           >
//             <svg
//               className="h-6 w-6 fill-current"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.1 15.5H9.1V9.5h1.8v8zm-.9-9c-.57 0-1.03-.46-1.03-1.03s.46-1.03 1.03-1.03c.57 0 1.03.46 1.03 1.03s-.46 1.03-1.03 1.03zm7.8 9h-1.8v-4.7c0-1.13-.22-2.49-1.66-2.49-1.44 0-1.67 1.15-1.67 2.36V18h-1.8v-9h1.8v1.25c.6-.92 1.57-1.5 2.6-1.5 1.83 0 3.4 1.5 3.4 4.17V15.5z" />
//             </svg>
//           </a>
//           <a
//             href="https://www.instagram.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-gray-400 mr-2"
//           >
//             <svg
//               className="h-6 w-6 fill-current"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15.3c0 .7-.6 1.2-1.3 1.2H8.3c-.7 0-1.2-.6-1.2-1.3V8.3C7.1 7.6 7.7 7 8.4 7h7.3c.7 0 1.3.6 1.3 1.3v9z" />
//               <path d="M12 7.6c-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8 3.8-1.7 3.8-3.8-1.7-3.8-3.8-3.8zm0 6.6c-1.5 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm5.2-11.6h-16c-.9 0-1.7.8-1.7 1.7v16c0 .9.8 1.7 1.7 1.7h16c.9 0 1.7-.8 1.7-1.7v-16c0-.9-.8-1.7-1.7-1.7zm1.7 17.6c0 .9-.8 1.7-1.7 1.7h-16c-.9 0-1.7-.8-1.7-1.7v-16c0-.9.8-1.7 1.7-1.7h16c.9 0 1.7.8 1.7 1.7v16z" />
//             </svg>
//           </a>
//           <a
//             href="https://www.facebook.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-gray-400"
//           >
//             <svg
//               className="h-6 w-6 fill-current"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.67 8.76h-1.07c-.3 0-.54.24-.54.54v1.41h1.61v1.8h-1.61v5.49h-1.98v-5.49H9.4v-1.8h1.68v-1.3c0-1.74 1.1-2.69 2.63-2.69h1.96v1.79z" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-800">
      <div className="container mx-auto py-5 flex  md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">SRC.</span>
        </div>
        <span className="hidden  sm:hidden  md:block lg:block font-medium text-white mb-3">
          &copy; {currentYear} Ride Service App. All rights reserved.
        </span>
        <div className="flex gap-2 text-white cursor-pointer">
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
        {/* <span className="hidden md:block font-medium text-white">
          &copy; {currentYear} Ride Service App. All rights reserved.
        </span> */}
      </div>
    </div>
  );
};

export default Footer;
