import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";

// Define the CV component and forward the ref
const CV = React.forwardRef((props, ref) => (
  <div ref={ref} className="bg-gray-100 p-6">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center p-6 bg-gray-50">
        <img
          src="https://via.placeholder.com/100" // Replace with your image URL
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-300"
        />
        <div className="ml-0 md:ml-6 mt-4 md:mt-0 text-center md:text-left">
          <h1 className="text-2xl font-bold">Nikunj Thesiya</h1>
          <h2 className="text-gray-600 text-lg">
            Front-End Developer / Web Designer
          </h2>
          <div className="flex gap-4 justify-center md:justify-start mt-2 text-gray-500">
            <a href="#" className="hover:text-blue-500">
              <FaGlobe />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      {/* Other sections */}
    </div>
  </div>
));

// Define the DownloadCV component
const DownloadCV = () => {
  const componentRef = useRef();

  return (
    <div className="p-4">
      <ReactToPrint
        trigger={() => (
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
            Download CV
          </button>
        )}
        content={() => componentRef.current}
      />
      <CV ref={componentRef} />
    </div>
  );
};

export default DownloadCV;
