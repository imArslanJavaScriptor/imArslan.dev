import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { LuFileText } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";
import useDarkMode from "../hooks/useDarkMode";

function Header() {
  const { isDark, toggle } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="w-full flex justify-center sticky top-[10px] z-[100]">
      <nav className="bg-zinc-900 text-white rounded-full px-6 py-3 shadow-lg flex items-center justify-between max-w-4xl w-full relative mx-5">
        {/* Logo */}
        <a href="#home">
          <div className="text-lg font-bold tracking-wide">imArslan.dev</div>
        </a>

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
            <a href="#about" className="hover:text-gray-300">
              About
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
              href="https://github.com/imArslanJavaScriptor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="/MyResume.pdf"
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

        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            menuOpen ? "block bg-black/40" : "hidden"
          }`}
          onClick={toggleMenu}
        />

        <div
          className={`absolute top-0 left-0 right-0 rounded-[20px] max-w-4xl w-full bg-zinc-900 text-white z-50 p-6 ${
            menuOpen ? "fade-in" : "fade-out pointer-events-none"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="text-lg font-bold">imArslan.dev</div>
            <button onClick={toggleMenu}>
              <FiX size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-5">
            {["home", "about", "projects", "experience"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={toggleMenu}
                className="hover:text-gray-300 capitalize"
              >
                {item}
              </a>
            ))}
            <a
              href="https://github.com/imArslanJavaScriptor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              GitHub
            </a>
            <a
              href="/MyResume.pdf"
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
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Header;
