import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { LuFileText } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";
import useDarkMode from "../hooks/useDarkMode";

function Header() {
  const { isDark, toggle } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="w-full flex justify-center sticky top-[10px] z-[100]">
      <nav className="bg-zinc-900 text-white rounded-full px-6 py-3 shadow-lg flex items-center justify-between max-w-4xl w-full relative">
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide">imArslan.dev</div>

        {/* Dark Mode Toggle - always visible */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggle}
            className={`flex items-center px-3 py-1.5 rounded-full shadow-md transition-colors ${
              isDark ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <span className="mr-2">{isDark ? "🌙" : "☀️"}</span>
            <span className="text-sm font-medium">
              {isDark ? "Light" : "Dark"}
            </span>
          </button>

          {/* Menu Icon for Mobile */}
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Nav links */}
          <div className="flex gap-6 items-center text-sm font-medium ml-10">
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

          {/* Icons + Contact + Dark Toggle */}
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
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-zinc-900 text-white rounded-xl shadow-xl p-6 flex flex-col gap-4 z-50 transition-all duration-300 lg:hidden">
            <a href="#home" onClick={toggleMenu} className="hover:text-gray-300">
              Home
            </a>
            <a href="#projects" onClick={toggleMenu} className="hover:text-gray-300">
              Projects
            </a>
            <a href="#experience" onClick={toggleMenu} className="hover:text-gray-300">
              Experience
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium shadow-sm hover:bg-gray-200 transition w-fit"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
