import React, { useState, useEffect } from "react";
import { allProjects } from "../data/projectsData"; 

function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    setVisibleProjects(allProjects.slice(0, visibleCount));
  }, [visibleCount]);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="projects" className="max-w-4xl mx-auto w-full px-4 py-10">
      <h2 className="text-4xl font-bold mb-8 primaryHeading text-center">Projects</h2>

      <div className="space-y-6">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className={`bg-gray-200 dark:bg-[#222]/50 text-black dark:text-[#efefef] 
            backdrop-blur-2xl rounded-[20px] shadow-lg border-t-[5px]  border-transparent transition-colors duration-300 dark:hover:border-gray-200 hover:border-gray-800
              overflow-hidden grid grid-cols-1 md:grid-cols-2 border-t-transparent`}
          >
            <div className="p-5 order-10 ">
              <h1
                className={`text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}
              >
                {project.title}
              </h1>
              <p className="mt-4 text-lg font-medium line-clamp-4">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-black/10 dark:bg-white/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 darkModeBTN rounded-[100px] text-sm font-medium px-4 py-2"
              >
                Visit Website
              </a>
            </div>
            <div className="h-[300px] w-full md:order-10">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        ))}
      </div>

      {visibleCount < allProjects.length && (
        <div className="flex items-center justify-center">
          <button
            onClick={handleSeeMore}
            className="darkModeBTN rounded-[100px] mt-8 px-5 py-2 text-sm font-medium"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
