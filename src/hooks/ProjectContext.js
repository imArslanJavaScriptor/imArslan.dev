import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: uuidv4(),
      title: "Sample Project",
      category: "Web Development",
      description: "A sample web project",
      status: "Published",
    },
  ]);

  const addProject = (project) => {
    setProjects([...projects, { id: uuidv4(), ...project }]);
  };

  const updateProject = (id, updatedProject) => {
    setProjects(
      projects.map((p) => (p.id === id ? { ...p, ...updatedProject } : p))
    );
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <ProjectContext.Provider
      value={{ projects, addProject, updateProject, deleteProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
