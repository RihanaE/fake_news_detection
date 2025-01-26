// import React from "react";
// import { Button } from "./Button";

// const NavBar = () => {
//   return (
//     <header className="flex justify-between items-center bg-white p-4 sticky w-full">
//       <h1 className="text-2xl font-bold text-blue-600 self-start">FactCheck</h1>
//       <div className="flex items-center gap-4">
//         <nav>
//           <ul className="flex justify-between gap-4">
//             <li>
//               <a href="#" className="text-gray-600 hover:text-blue-600">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#howitworks"
//                 className="text-gray-600 hover:text-blue-600"
//               >
//                 How It Works
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="text-gray-600 hover:text-blue-600">
//                 About
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       {/* <Button className="bg-blue-600 text-white">Sign In</Button> */}
//     </header>
//   );
// };
// export default NavBar;


import React from "react";

const NavBar = () => {
  return (
    <header className="flex items-center bg-white p-4 sticky top-0 w-full shadow-sm z-10">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600 mr-auto">FactCheck</h1>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="flex justify-center gap-32">
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a
              href="#howitworks"
              className="text-gray-600 hover:text-blue-600"
            >
              How It Works
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-600 hover:text-blue-600">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
