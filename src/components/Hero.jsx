import React from "react";
import ShrinkedProfileIMG from "../assets/ShrinkedProfileIMG.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="px-6 py-10 text-center flex flex-col items-center justify-center"
    >
      {/* Avatar */}
      <div className="w-[185px] h-[185px] rounded-full bg-black dark:bg-white flex items-center justify-center mb-6">
        <div className="w-[180px] h-[180px]">
          <img
            src={ShrinkedProfileIMG}
            alt="Profile"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
        Hi, I'm <span>Arslan</span>.
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 tracking-wide uppercase">
        Software Engineer
      </h2>

      {/* Description */}
      <p className="paraText max-w-xl mx-auto mb-6">
        Versatile Software Engineer with a passion for building scalable,
        high-performance web applications across the full stack. Experienced in
        architecting robust database schemas, developing secure RESTful APIs,
        and managing cloud-based server infrastructure. Committed to bridging
        the gap between elegant user interfaces and efficient backend logic to
        deliver high-impact digital solutions.
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
          {/* Core Languages & Frameworks */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="h-10 w-auto"
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

          {/* Backend & Databases */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="Express.js"
            className="h-10 w-auto bg-white rounded"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            className="h-8 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
            className="h-10 w-auto"
          />

          {/* DevOps & Infrastructure */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            alt="Docker"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            alt="Linux"
            className="h-10 w-auto"
          />

          {/* Repeat for seamless loop */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="h-10 w-auto"
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
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="Express.js"
            className="h-10 w-auto bg-white rounded"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            className="h-8 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            alt="Docker"
            className="h-10 w-auto"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            alt="Linux"
            className="h-10 w-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
