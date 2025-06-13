import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Settings,
  BarChart3,
  Users,
  FolderOpen,
  LogOut,
  Dashboard,
  Eye,
  Trash2,
  X,
} from "lucide-react";
import { toast } from "react-toastify";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import AdminAuth from "./AdminAuth";

const AdminPanel = ({ isDarkMode, onThemeToggle }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [projects, setProjects] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectModal, setShowProjectModal] = useState(false);

  // Check authentication on mount
  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Load projects from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem("portfolioProjects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  // Save projects to localStorage
  const saveProjects = (updatedProjects) => {
    try {
      localStorage.setItem(
        "portfolioProjects",
        JSON.stringify(updatedProjects)
      );
      setProjects(updatedProjects);
    } catch (error) {
      toast.error("Failed to save projects to local storage");
    }
  };

  const handleAuthenticate = (status) => {
    setIsAuthenticated(status);
    if (status) {
      localStorage.setItem("adminAuth", "true");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
    toast.success("Logged out successfully");
  };

  const handleAddProject = async (projectData) => {
    try {
      const newProject = {
        ...projectData,
        id: crypto.randomUUID(), // Generate unique ID
        createdAt: new Date().toISOString(),
      };
      const updatedProjects = [...projects, newProject];
      saveProjects(updatedProjects);
      setShowProjectForm(false);
      toast.success("Project added successfully!");
    } catch (error) {
      toast.error("Failed to add project");
    }
  };

  const handleEditProject = async (projectData) => {
    try {
      const updatedProjects = projects.map((p) =>
        p.id === projectData.id
          ? { ...projectData, updatedAt: new Date().toISOString() }
          : p
      );
      saveProjects(updatedProjects);
      setEditingProject(null);
      setShowProjectForm(false);
      toast.success("Project updated successfully!");
    } catch (error) {
      toast.error("Failed to update project");
    }
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const updatedProjects = projects.filter((p) => p.id !== projectId);
      saveProjects(updatedProjects);
      setShowProjectModal(false);
      toast.success("Project deleted successfully!");
    }
  };

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  const openEditForm = (project) => {
    setEditingProject(project);
    setShowProjectForm(true);
  };

  const closeProjectForm = () => {
    setShowProjectForm(false);
    setEditingProject(null);
  };

  // Dashboard Statistics
  const stats = {
    totalProjects: projects.length,
    completedProjects: projects.filter((p) => p.status === "completed").length,
    inProgressProjects: projects.filter((p) => p.status === "in-progress")
      .length,
    plannedProjects: projects.filter((p) => p.status === "planned").length,
  };

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Dashboard },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "add-project", label: "Add Project", icon: Plus },
  ];

  if (!isAuthenticated) {
    return (
      <AdminAuth onAuthenticate={handleAuthenticate} isDarkMode={isDarkMode} />
    );
  }

  const DashboardContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Welcome Section */}
      <div
        className={`p-6 rounded-xl ${
          isDarkMode
            ? "bg-gray-800 border border-gray-700"
            : "bg-white border border-gray-200"
        }`}
      >
        <h2
          className={`text-2xl font-bold mb-2 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Welcome back, Admin! 👋
        </h2>
        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Here's an overview of your portfolio projects and recent activity.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Total Projects",
            value: stats.totalProjects,
            icon: FolderOpen,
            color: "blue-600",
          },
          {
            title: "Completed",
            value: stats.completedProjects,
            icon: CheckCircle,
            color: "green-600",
          },
          {
            title: "In Progress",
            value: stats.inProgressProjects,
            icon: BarChart3,
            color: "yellow-600",
          },
          {
            title: "Planned",
            value: stats.plannedProjects,
            icon: Settings,
            color: "purple-600",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-xl ${
              isDarkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.title}
                </p>
                <p
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stat.value}
                </p>
              </div>
              <div
                className={`w-12 h-12 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-lg flex items-center justify-center`}
              >
                <stat.icon className={`w-6 h-6 text-${stat.color}`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Projects */}
      <div
        className={`p-6 rounded-xl ${
          isDarkMode
            ? "bg-gray-800 border border-gray-700"
            : "bg-white border border-gray-200"
        }`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Recent Projects
        </h3>
        <ProjectList
          projects={projects.slice(0, 5)}
          onEdit={openEditForm}
          onDelete={handleDeleteProject}
          onView={handleViewProject}
          isDarkMode={isDarkMode}
        />
      </div>
    </motion.div>
  );

  const ProjectsContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div
        className={`p-6 rounded-xl ${
          isDarkMode
            ? "bg-gray-800 border border-gray-700"
            : "bg-white border border-gray-200"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3
            className={`text-xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            All Projects
          </h3>
          <button
            onClick={() => setShowProjectForm(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} className="mr-2" />
            Add New Project
          </button>
        </div>
        <ProjectList
          projects={projects}
          onEdit={openEditForm}
          onDelete={handleDeleteProject}
          onView={handleViewProject}
          isDarkMode={isDarkMode}
        />
      </div>
    </motion.div>
  );

  return (
    <div
      className={`min-h-screen flex ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        className={`w-64 ${
          isDarkMode
            ? "bg-gray-800 border-r border-gray-700"
            : "bg-white border-r border-gray-200"
        } p-6 flex flex-col justify-between`}
      >
        <div>
          <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id === "add-project") {
                    setShowProjectForm(true);
                  }
                }}
                className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : isDarkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <tab.icon size={20} className="mr-3" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            isDarkMode
              ? "text-gray-300 hover:bg-gray-700"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <LogOut size={20} className="mr-3" />
          Logout
        </button>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            {tabs.find((tab) => tab.id === activeTab)?.label || "Admin Panel"}
          </h1>
          <button
            onClick={onThemeToggle}
            className={`p-2 rounded-lg ${
              isDarkMode
                ? "bg-gray-700 text-gray-300"
                : "bg-gray-200 text-gray-600"
            }`}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "dashboard" && <DashboardContent />}
          {activeTab === "projects" && <ProjectsContent />}
        </AnimatePresence>

        {/* Project Form Modal */}
        <AnimatePresence>
          {showProjectForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className={`relative w-full max-w-2xl mx-4 p-6 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } max-h-[90vh] overflow-y-auto`}
              >
                <button
                  onClick={closeProjectForm}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <X size={24} />
                </button>
                <ProjectForm
                  onSubmit={
                    editingProject ? handleEditProject : handleAddProject
                  }
                  initialData={editingProject}
                  onCancel={closeProjectForm}
                  isDarkMode={isDarkMode}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project View Modal */}
        <AnimatePresence>
          {showProjectModal && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setShowProjectModal(false)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className={`relative w-full max-w-2xl mx-4 p-6 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } max-h-[90vh] overflow-y-auto`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowProjectModal(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <X size={24} />
                </button>
                <h2
                  className={`text-2xl font-bold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {selectedProject.title}
                </h2>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p
                  className={`mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {selectedProject.description}
                </p>
                <div className="mb-4">
                  <h4
                    className={`font-semibold mb-2 ${
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      openEditForm(selectedProject);
                      setShowProjectModal(false);
                    }}
                    className="flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    <Settings size={20} className="mr-2" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProject(selectedProject.id)}
                    className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Trash2 size={20} className="mr-2" />
                    Delete
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AdminPanel;
