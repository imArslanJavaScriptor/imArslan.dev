import React from "react";
import SideImg from "/src/assets/imArslan.jpeg";

function About() {
  return (
    <div>
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-5 primaryHeading">About</h2>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* <div className="md:col-span-2 space-y-4 text-gray-600 dark:text-gray-400 animate-fade-in-left paraText">
              <p>
                I'm Adebajo Stephen, a passionate 18-year-old self-taught
                Nigerian software engineer with over 18 months of experience and
                a strong drive for building impactful web experiences.
              </p>
              <p>
                As an 18-year-old front-end developer, I focus on creating
                seamless digital experiences, from sleek apps to intuitive
                interfaces that building user interfaces through web, learning
                React and Next.js to build applications.
              </p>
              <p>
                I'm currently working on advanced full-stack projects, diving
                deeper into the art and science of innovation in just one of the
                world's most companies like <strong>Google</strong> - Are
                18-year of technology.
              </p>
              <p>
                I'm also actively building my presence in the tech community.
                With my <strong>MD, fullstack.ng</strong>- I'm focused and
                committed with technologies in the indie hacker and maker space.
                Community creators have shared more than I have always enjoyed
                building projects and solutions.
              </p>
            </div> */}

            <div className="md:col-span-2 space-y-4 text-gray-600 dark:text-gray-400 animate-fade-in-left paraText">
              <p>
                I'm Arslan, a passionate and skilled full-stack web developer
                with a knack for creating dynamic and engaging digital
                experiences. With a strong foundation in both front-end and
                back-end development, I thrive on building seamless applications
                and intuitive user interfaces.
              </p>
              <p>
                As a developer, I specialize in leveraging technologies like
                React and Next.js to craft innovative web solutions. My love for
                coding is matched by my enthusiasm for continuous learning,
                always exploring new tools and frameworks to enhance my
                projects.
              </p>
              <p>
                Beyond coding, I have a deep passion for acting and music, which
                fuel my creativity and bring a unique perspective to my work.
                Whether I'm designing sleek apps or diving into complex
                full-stack projects, I aim to blend technical expertise with
                artistic flair.
              </p>
              <p>
                I'm also actively involved in the tech community, sharing my
                knowledge and collaborating with other creators. Through my work
                and contributions, I strive to make a meaningful impact in the
                ever-evolving world of technology.
              </p>
            </div>

            <div className="flex justify-center animate-fade-in-right">
              <div className="w-[350px] h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
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
    </div>
  );
}

export default About;
