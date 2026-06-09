import React from "react";

function About() {
  return (
    <section id="about" className="px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-5 lg:mb-10 primaryHeading text-center">
          About
        </h2>
        <div className="w-full space-y-4 text-gray-600 dark:text-gray-400 animate-fade-in-left paraText">
          <p>
            🧑‍💻 About Me — A Software Engineer Building Full-Stack Solutions{" "}
            <br />
            Hi, I'm Arslan — a Software Engineer dedicated to architecting
            robust, scalable, and high-performance web applications. I bridge
            the gap between intuitive user interfaces and powerful backend
            logic, ensuring that every application I build is secure, efficient,
            and user-centric. I bring discipline, architectural precision, and a
            deep commitment to problem-solving into every project.
          </p>
          <p>
            🛠️ Technologies & Infrastructure <br />I specialize in the MERN/PERN
            stack and cloud infrastructure. My expertise includes Node.js,
            Express.js, React.js, Next.js, and TypeScript, backed by deep
            knowledge of database management with MongoDB and PostgreSQL. I am
            proficient in managing Linux-based servers, Nginx, and Docker-driven
            CI/CD workflows on cloud platforms. Additionally, I have experience
            integrating real-time communication and VoIP solutions like Twilio
            and WebRTC to meet complex business requirements.
          </p>
          <p>
            🚀 Why Partner With Me <br />
            If you need a developer who understands the entire application
            lifecycle—from database schema design and API development to
            infrastructure management and deployment—I am ready to deliver. I
            don't just write code; I engineer scalable systems that drive
            business impact. Whether you are building a SaaS dashboard, a
            complex web platform, or need a reliable engineer to maintain and
            optimize your server-side operations, I provide the technical
            expertise and autonomy required for a successful remote
            collaboration.
          </p>
          <p>
            I am constantly exploring new technologies and optimizing backend
            architectures to stay ahead of industry standards. Let's connect and
            build something technically excellent and highly performant
            together.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
