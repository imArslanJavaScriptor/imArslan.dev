import React from "react";
import SideImg from "/src/assets/imArslan.jpeg";

function About() {
  return (
    <section id="about" className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-5 primaryHeading">About</h2>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4 text-gray-600 dark:text-gray-400 animate-fade-in-left paraText">
            <p>
              🧑‍💻 About Me — A Frontend Developer <br /> Who Builds with Purpose Hi, I'm
              Arslan — a passionate Frontend Developer with a creative eye and
              technical precision. I specialize in crafting visually engaging,
              high-performance web experiences that not only look great but also
              feel seamless and intuitive. I bring energy, discipline, and a
              deep sense of user empathy into every project I work on.
            </p>
            <p>
              🛠️ Technologies I Use to Bring Ideas to Life <br />
              Over the years, I’ve developed expertise in a powerful set of
              tools and frameworks including: React.js, Next.js, Tailwind CSS,
              HTML, CSS, JavaScript, and TypeScript. I’ve also worked with
              Zustand, Redux Toolkit, Framer Motion, GSAP, and Shadcn UI to
              create animations and smooth user experiences. For backend and
              integrations, I use Firebase, and for CMS-driven sites, I’ve
              delivered great results using WordPress and Elementor.
            </p>
            <p>
              🚀 Why You Should Hire Me <br />
              If you're looking for a Frontend Developer who combines
              performance, design, and functionality — you’ve found the right
              person. I don't just write code — I deliver experiences that
              elevate your brand and convert users into fans. Whether it's a
              landing page, SaaS dashboard, or full-blown web application, I
              ensure everything is pixel-perfect, fast, and future-proof. Let’s
              build something amazing together — I’m the best fit for your next
              frontend project.
            </p>
            <p>
              I'm also actively involved in the tech community, sharing my
              knowledge and collaborating with other creators. Through my work
              and contributions, I strive to make a meaningful impact in the
              ever-evolving world of technology.
            </p>
          </div>

          <div className="flex justify-center animate-fade-in-right">
            <div className="max-w-[350px] w-full h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src={SideImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
