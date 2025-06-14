import React, { createContext, useContext, useState } from "react";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: crypto.randomUUID(),
      title: "E-commerce Website",
      category: "Web Development",
      description: "Full-stack e-commerce platform with React and Node.js",
      status: "Published",
      createdAt: "2024-06-10",
    },
    {
      id: crypto.randomUUID(),
      title: "Mobile Banking App",
      category: "Mobile App",
      description:
        "React Native banking application with secure authentication",
      status: "Draft",
      createdAt: "2024-06-12",
    },
    {
      id: crypto.randomUUID(),
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete brand identity package for tech startup",
      status: "Published",
      createdAt: "2024-06-08",
    },
  ]);

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString().split("T")[0],
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id, updatedProject) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, ...updatedProject } : project
      )
    );
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <ProjectsContext.Provider
      value={{ projects, addProject, updateProject, deleteProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};
