import React from "react";
import { motion } from "framer-motion";
import { skills } from "../utils/data";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-gray-400 text-center text-lg mb-8">
        User Interface And User Experience And Also Video Editing
      </p>

      {/* Image Section */}
      <motion.div
        className="relative rounded-lg overflow-hidden w-80 h-96 bg-gray-800 shadow-lg"
        whileHover={{ scale: 1.1, rotateY: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img
          src="path-to-your-image.jpg"
          alt="About Me"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Text Section */}
      <div className="text-center mt-8 max-w-2xl">
        <p className="text-gray-400 mb-6">
          A software engineer, the modern-day architect of digital realms,
          navigates the ethereal landscapes of code, sculpting intangible
          structures that shape our technological world...
        </p>
        <button className="bg-foundationOrange px-6 py-2 text-black rounded-md hover:bg-orange-600">
          Download CV
        </button>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 mt-16">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center gap-4"
          >
            {/* Animated Circular Progress */}
            <div className="relative w-24 h-24">
              <svg className="absolute top-0 left-0 w-full h-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#1a1a1a"
                  strokeWidth="6"
                  fill="none"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#ff6700"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="283"
                  strokeDashoffset="283"
                  initial={{ strokeDashoffset: 283 }}
                  animate={{
                    strokeDashoffset: 283 - (283 * skill.percentage) / 100,
                  }}
                  transition={{ duration: 1.5, delay: index * 0.3 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 mb-1"
                />
                <span className="text-lg font-bold">{skill.percentage}%</span>
              </div>
            </div>
            <h4 className="text-lg font-medium text-white">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
