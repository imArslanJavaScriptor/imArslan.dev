import { Menu, X } from "lucide-react";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 left-0 w-full bg-BackgroundMain text-white shadow-md z-50">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-6 py-4 bg-blue-500">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-foundationOrange">
            imArslan.dev
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-lg">
            <li className="hover:text-foundationOrange transition">Home</li>
            <li className="hover:text-foundationOrange transition">Services</li>
            <li className="hover:text-foundationOrange transition">About</li>
            <li className="hover:text-foundationOrange transition">Contact</li>
            <li className="hover:text-foundationOrange transition">Portfolio</li>
          </ul>

          {/* Hire Me Button */}
          <button className="hidden md:block btn btnPrimary">Hire Me</button>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 text-lg">
            <li
              className="hover:text-foundationOrange transition"
              onClick={toggleMenu}
            >
              Home
            </li>
            <li
              className="hover:text-foundationOrange transition"
              onClick={toggleMenu}
            >
              Services
            </li>
            <li
              className="hover:text-foundationOrange transition"
              onClick={toggleMenu}
            >
              About
            </li>
            <li
              className="hover:text-foundationOrange transition"
              onClick={toggleMenu}
            >
              Contact
            </li>
            <li
              className="hover:text-foundationOrange transition"
              onClick={toggleMenu}
            >
              Portfolio
            </li>
          </ul>
          <button
            className="btn btnPrimary"
            onClick={toggleMenu}
          >
            Hire Me
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
