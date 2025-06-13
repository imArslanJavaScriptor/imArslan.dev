import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

// Create the context
const ProjectContext = createContext();

// Custom hook for accessing the context
export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolioProjects");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error loading projects from localStorage:", error);
      return [];
    }
  });

  // Save projects to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("portfolioProjects", JSON.stringify(projects));
    } catch (error) {
      console.error("Error saving projects to localStorage:", error);
    }
  }, [projects]);

  // Add a new project with a unique ID
  const addProject = (project) => {
    const newProject = {
      id: crypto.randomUUID(), // Use crypto.randomUUID for unique IDs
      ...project,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setProjects((prev) => [...prev, newProject]);
  };

  // Update an existing project
  const updateProject = (id, updatedProject) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id
          ? {
              ...project,
              ...updatedProject,
              updatedAt: new Date().toISOString(),
            }
          : project
      )
    );
  };

  // Delete a project by ID
  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      projects,
      addProject,
      updateProject,
      deleteProject,
    }),
    [projects]
  );

  return (
    <ProjectContext.Provider value={contextValue}>
      {children}
    </ProjectContext.Provider>
  );
};

// Export default for the provider
export default ProjectProvider;
