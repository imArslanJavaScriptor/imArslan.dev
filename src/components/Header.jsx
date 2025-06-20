import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuFileText } from "react-icons/lu";
import useDarkMode from "../hooks/useDarkMode";

function Header() {
  const { isDark, toggle } = useDarkMode();
  return (
    <header className="w-full flex justify-center sticky top-[10px] z-[100]">
      <nav className="bg-zinc-900 text-white rounded-full px-6 py-3 shadow-lg flex items-center gap-8 max-w-4xl w-full justify-between">
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide">imArslan.dev</div>

        {/* Nav links */}
        <div className="flex gap-6 items-center text-sm font-medium">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#experience" className="hover:text-gray-300">
            Experience
          </a>
        </div>

        {/* Icons */}
        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <LuFileText className="w-5 h-5" />
          </a>
          <div className="w-px h-6 bg-gray-600 mx-2" />
          <a
            href="#contact"
            className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium shadow-sm hover:bg-gray-200 transition"
          >
            Contact
          </a>
            <button
              onClick={toggle}
              className={`flex items-center px-4 py-2 rounded-full shadow-md transition-colors ${
                isDark ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <span className="mr-2">{isDark ? "🌙" : "☀️"}</span>
              <span>{isDark ? "Light" : "Dark"}</span>
            </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
