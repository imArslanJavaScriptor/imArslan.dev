import React, { useState } from "react";
import { allProjects } from "../data/projectsData.js";

const categories = ["All", "Applications", "Web development", "UI/UX"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Featured Projects
        </h2>

        {/* Category Filters */}
        <div className="flex justify-center gap-6 text-sm mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? "text-yellow-400"
                  : "text-gray-400"
              } hover:text-yellow-400 transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-[#2c2c2c] rounded-xl overflow-hidden group transition-shadow hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.category}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-yellow-400 text-black font-semibold py-1 px-3 rounded hover:bg-yellow-500 transition"
                >
                  View Detail
                </button>
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="bg-white text-black font-semibold py-1 px-3 rounded hover:bg-gray-300 transition"
                >
                  Visit Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for View Detail */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div className="bg-[#1f1f1f] rounded-lg max-w-lg w-full p-6 relative text-white">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-52 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">{selectedProject.title}</h3>
            <p className="mt-2 text-sm text-gray-300">
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
