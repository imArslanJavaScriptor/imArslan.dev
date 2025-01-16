import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaDribbble,
  FaBehance,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-foundationOrange text-3xl font-bold">imArslan.dev</div>

          {/* Navigation Links */}
          <ul className="flex gap-6 text-sm md:text-base">
            <li className="hover:text-foundationOrange cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-foundationOrange cursor-pointer transition">
              Services
            </li>
            <li className="hover:text-foundationOrange cursor-pointer transition">
              About me
            </li>
            <li className="hover:text-foundationOrange cursor-pointer transition">
              Portfolio
            </li>
            <li className="hover:text-foundationOrange cursor-pointer transition">
              Contact me
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-6 gap-4 text-lg">
          <a
            href="#"
            className="text-gray-400 hover:text-foundationOrange transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-foundationOrange transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-foundationOrange transition"
            aria-label="Dribbble"
          >
            <FaDribbble />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-foundationOrange transition"
            aria-label="Behance"
          >
            <FaBehance />
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center mt-8 text-center gap-3">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-foundationOrange" />
            <span>imArslan7061@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-foundationOrange" />
            <span>+92 348 2375 564</span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <span>
            Designed by{" "}
            <a
              href="#"
              className="text-foundationOrange hover:underline"
            >
              MuhammadArslan
            </a>{" "}
            | Web Developer
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
