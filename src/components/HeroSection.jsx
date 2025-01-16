import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Arslan from "../images/Arslan.jpeg";
import DownloadCV from "./DownloadCV";

const HeroSection = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
  });

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        experience: Math.min(prev.experience + 1, 5),
        projects: Math.min(prev.projects + 2, 20),
        clients: Math.min(prev.clients + 4, 80),
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-gray-400">Hi I am</p>
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-orange-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Muhammad Arslan
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mt-2 text-foundationOrange"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Web Developer
          </motion.h2>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-behance"></i>
            </a>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
              Hire Me
            </button>
            <a
              href="/resume.pdf" // Replace with the actual path to your CV file
              download="My_CV.pdf" // Optional: Sets the default download file name
              className="bg-transparent text-white border border-gray-600 px-6 py-2 rounded-md hover:bg-gray-700 transition"
            >
              Download CV
            </a>
          </div>

          {/* Counters */}
          <div className="flex space-x-10 mt-8">
            <div className="text-center">
              <p className="text-3xl font-bold">{counters.experience}+</p>
              <p className="text-gray-400">Experiences</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{counters.projects}+</p>
              <p className="text-gray-400">Project done</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{counters.clients}+</p>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={Arslan} alt="Profile" className="rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
