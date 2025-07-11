// import React from "react";
// import {
//   Moon,
//   Sun,
//   Menu,
//   X,
//   Github,
//   Linkedin,
//   Mail,
//   ExternalLink,
//   MapPin,
//   Calendar,
// } from "lucide-react";

// function Footer() {
//   return (
//     <div>
//       <footer className="px-6 py-8 border-t border-gray-200 dark:border-gray-700">
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-gray-600 dark:text-gray-400 text-sm">
//             Copyright 2025 | imArslan.dev
//           </p>
//           <div className="flex justify-center space-x-4 mt-4">
//             <a
//               href="#"
//               className="text-gray-400 hover:text-gray-600 transition-colors"
//             >
//               <span className="sr-only">Twitter</span>
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//               </svg>
//             </a>
//             <a
//               href="www.linkedin.com/in/findarslan"
//               className="text-gray-400 hover:text-gray-600 transition-colors"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-gray-600 transition-colors"
//             >
//               <Github className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Footer;


import React from "react";
import { Github, Linkedin } from "lucide-react";
import { FaUpwork } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 px-6 py-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        {/*  Branding Content */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Connect with me</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/findarslan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01f57a1af7c694a9d3?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <FaUpwork className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/imArslanJavaScriptor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-right">
             All rights reserved - © 2025 imArslan.dev
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
