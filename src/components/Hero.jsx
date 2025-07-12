import React from "react";
import ShrinkedProfileIMG from "../assets/ShrinkedProfileIMG.png";

function Hero() {
  return (
    <section
      id="home"
      className="px-6 py-20 text-center flex flex-col items-center justify-center"
    >
      {/* Avatar */}
      <div className="w-[175px] h-[175px] rounded-full bg-black dark:bg-white flex items-center justify-center mb-6">
        <div className="w-[160px] h-[160px]">
          <img
            src={ShrinkedProfileIMG}
            alt="Profile"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Hi, I'm <span>Arslan</span>.
      </h1>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
        Frontend Developer
      </h2>

      {/* Description */}
      <p className="paraText max-w-xl mx-auto mb-6">
        Self-taught developer passionate about crafting user interfaces and
        interactive web applications that make a positive impact — always eager
        to learn and grow in the tech world.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="darkModeBTN px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-800"
        >
          Hire Me!
        </button>
        <a
          href="https://www.linkedin.com/in/findarslan"
          target="_blank"
          className="bg-green-100 text-green-700 px-6 py-2 rounded-full font-semibold shadow-md border border-green-300 hover:bg-green-200 transition"
        >
          ● Available for collaborations
        </a>
      </div>

      {/* Tech Skills Animation */}
      <div className="icon-scroll-wrapper my-8 max-w-[800px] mx-auto">
        <div className="icon-scroll-track items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            alt="Firebase"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            className="h-8 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            className="h-10 w-auto bg-white rounded"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="h-10 w-auto"
          />

          {/* Repeat once more to create seamless infinite loop */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            alt="Firebase"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            className="h-8 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            className="h-10 w-auto bg-white rounded"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="h-10 w-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
