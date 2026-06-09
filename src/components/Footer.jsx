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
            {/* <a
              href="https://www.upwork.com/freelancers/~01f57a1af7c694a9d3?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <FaUpwork className="w-6 h-6" />
            </a> */}
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
             All rights reserved - © 2026 imArslan.dev
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
