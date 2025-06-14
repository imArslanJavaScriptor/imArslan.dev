import React, { useState, useEffect } from "react";
import {
  User,
  Lock,
  Settings,
  FileText,
  Users,
  BarChart3,
  Mail,
  Shield,
  Plus,
  Edit,
  Trash2,
  Eye,
  LogOut,
  Save,
  X,
  Send,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useAdmin } from "../context/AdminContext";
import { useProjects } from "../context/ProjectsContext"; 
import {useLocalStorage} from "../hooks/useLocalStorage"
import { toast } from "react-toastify";

const AdminPanel = () => {
  const { isDark } = useTheme(); // Integrate with ThemeContext
  const { isAuthenticated, login, logout } = useAdmin(); // Integrate with AdminContext
  const {
    projects: portfolioItems,
    addProject,
    updateProject,
    deleteProject,
  } = useProjects(); // Integrate with ProjectContext
  const [messages, setMessages] = useLocalStorage("adminMessages", [
    {
      id: crypto.randomUUID(),
      name: "John Doe",
      email: "john@example.com",
      message: "Interested in web development services",
      date: "2024-06-14",
      status: "New",
    },
    {
      id: crypto.randomUUID(),
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Need help with mobile app design",
      date: "2024-06-13",
      status: "Read",
    },
  ]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [newItem, setNewItem] = useState({
    title: "",
    category: "",
    description: "",
    status: "Draft",
  });
  const [editItem, setEditItem] = useState(null);
  const [viewItem, setViewItem] = useState(null);
  const [errors, setErrors] = useState({});

  // Stats for dashboard
  const stats = {
    totalProjects: portfolioItems.length,
    publishedProjects: portfolioItems.filter(
      (item) => item.status === "Published"
    ).length,
    totalMessages: messages.length,
    newMessages: messages.filter((msg) => msg.status === "New").length,
  };

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(credentials);
    if (!success) {
      toast.error("Invalid credentials. Use admin/password for demo.");
    }
  };

  // Handle adding a new project
  const handleAddItem = () => {
    const newErrors = {};
    if (!newItem.title.trim()) newErrors.title = "Title is required";
    if (!newItem.category) newErrors.category = "Category is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    addProject({
      title: newItem.title,
      category: newItem.category,
      description: newItem.description,
      status: newItem.status,
    });
    setNewItem({ title: "", category: "", description: "", status: "Draft" });
    setShowAddModal(false);
    toast.success("Project added successfully!");
  };

  // Handle editing a project
  const handleEditItem = () => {
    const newErrors = {};
    if (!editItem.title.trim()) newErrors.title = "Title is required";
    if (!editItem.category) newErrors.category = "Category is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    updateProject(editItem.id, {
      title: editItem.title,
      category: editItem.category,
      description: editItem.description,
      status: editItem.status,
    });
    setEditItem(null);
    setShowEditModal(false);
    toast.success("Project updated successfully!");
  };

  // Handle deleting a project
  const handleDeleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      deleteProject(id);
      toast.success("Project deleted successfully!");
    }
  };

  // Handle viewing a project
  const handleViewItem = (item) => {
    setViewItem(item);
    setShowViewModal(true);
  };

  // Update message status
  const updateMessageStatus = (id, status) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id
          ? { ...msg, status, updatedAt: new Date().toISOString() }
          : msg
      )
    );
    toast.success(`Message marked as ${status}!`);
  };

  // Handle replying to a message (placeholder)
  const handleReply = (email) => {
    // In production, integrate with an email service or open mailto link
    window.location.href = `mailto:${email}?subject=Re: Your Inquiry`;
    toast.info("Opening email client...");
  };

  // Validate form inputs for modals
  const validateInput = (name, value) => {
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Unauthenticated view (login form)
  if (!isAuthenticated) {
    return (
      <div
        className={`min-h-screen ${
          isDark
            ? "bg-gray-900"
            : "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        } flex items-center justify-center p-4`}
      >
        <div
          className={`${
            isDark
              ? "bg-gray-800 border-gray-700"
              : "bg-white/10 backdrop-blur-md border-white/20"
          } rounded-2xl p-8 w-full max-w-md border`}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-white"
              } mb-2`}
            >
              Admin Access
            </h2>
            <p className={isDark ? "text-gray-400" : "text-gray-300"}>
              Sign in to access the dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className={`block text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-300"
                } mb-2`}
              >
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      username: e.target.value,
                    });
                    validateInput("username", e.target.value);
                  }}
                  className={`w-full pl-10 pr-4 py-3 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white/5 border-white/10 text-white"
                  } rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  placeholder="Enter username"
                  required
                  aria-describedby="username-error"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-300"
                } mb-2`}
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      password: e.target.value,
                    });
                    validateInput("password", e.target.value);
                  }}
                  className={`w-full pl-10 pr-4 py-3 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white/5 border-white/10 text-white"
                  } rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  placeholder="Enter password"
                  required
                  aria-describedby="password-error"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105`}
            >
              Sign In
            </button>
          </form>

          <div
            className={`mt-6 p-4 ${
              isDark
                ? "bg-blue-900 border-blue-700"
                : "bg-blue-500/10 border-blue-500/20"
            } rounded-lg`}
          >
            <p
              className={`text-sm ${
                isDark ? "text-blue-300" : "text-blue-300"
              }`}
            >
              <strong>Demo Credentials:</strong>
              <br />
              Username: admin
              <br />
              Password: password
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Header */}
      <header
        className={`${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        } shadow-sm border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-purple-600 mr-3" />
              <h1
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Admin Dashboard
              </h1>
            </div>
            <button
              onClick={logout}
              className={`flex items-center px-4 py-2 text-sm ${
                isDark
                  ? "text-gray-300 hover:text-red-400"
                  : "text-gray-700 hover:text-red-600"
              } transition-colors`}
              aria-label="Logout"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <nav
              className={`${
                isDark
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              } rounded-lg shadow-sm border p-4`}
            >
              <ul className="space-y-2">
                {[
                  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
                  { id: "portfolio", label: "Portfolio", icon: FileText },
                  { id: "messages", label: "Messages", icon: Mail },
                  { id: "users", label: "Users", icon: Users },
                  { id: "settings", label: "Settings", icon: Settings },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                          activeTab === item.id
                            ? isDark
                              ? "bg-purple-900 text-purple-300"
                              : "bg-purple-100 text-purple-700"
                            : isDark
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        aria-current={
                          activeTab === item.id ? "page" : undefined
                        }
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      label: "Total Projects",
                      value: stats.totalProjects,
                      color: "bg-blue-500",
                    },
                    {
                      label: "Published",
                      value: stats.publishedProjects,
                      color: "bg-green-500",
                    },
                    {
                      label: "Total Messages",
                      value: stats.totalMessages,
                      color: "bg-purple-500",
                    },
                    {
                      label: "New Messages",
                      value: stats.newMessages,
                      color: "bg-orange-500",
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className={`${
                        isDark
                          ? "bg-gray-800 border-gray-700"
                          : "bg-white border-gray-200"
                      } rounded-lg shadow-sm border p-6`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mr-4`}
                        >
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p
                            className={`text-sm ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {stat.label}
                          </p>
                          <p
                            className={`text-2xl font-bold ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {stat.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } rounded-lg shadow-sm border`}
                >
                  <div className="p-6 border-b border-gray-200">
                    <h3
                      className={`text-lg font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Recent Activity
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div
                        className={`flex items-center text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        New project "E-commerce Website" published
                      </div>
                      <div
                        className={`flex items-center text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Message received from John Doe
                      </div>
                      <div
                        className={`flex items-center text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        Profile settings updated
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "portfolio" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2
                    className={`text-2xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Portfolio Management
                  </h2>
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    aria-label="Add new project"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                  </button>
                </div>

                <div
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } rounded-lg shadow-sm border overflow-hidden`}
                >
                  <table className="w-full">
                    <thead
                      className={`${isDark ? "bg-gray-700" : "bg-gray-50"}`}
                    >
                      <tr>
                        <th
                          className={`px-6 py-3 text-left text-xs font-medium ${
                            isDark ? "text-gray-300" : "text-gray-500"
                          } uppercase tracking-wider`}
                        >
                          Title
                        </th>
                        <th
                          className={`px-6 py-3 text-left text-xs font-medium ${
                            isDark ? "text-gray-300" : "text-gray-500"
                          } uppercase tracking-wider`}
                        >
                          Category
                        </th>
                        <th
                          className={`px-6 py-3 text-left text-xs font-medium ${
                            isDark ? "text-gray-300" : "text-gray-500"
                          } uppercase tracking-wider`}
                        >
                          Status
                        </th>
                        <th
                          className={`px-6 py-3 text-left text-xs font-medium ${
                            isDark ? "text-gray-300" : "text-gray-500"
                          } uppercase tracking-wider`}
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className={`${
                        isDark ? "bg-gray-800" : "bg-white"
                      } divide-y ${
                        isDark ? "divide-gray-700" : "divide-gray-200"
                      }`}
                    >
                      {portfolioItems.map((item) => (
                        <tr key={item.id}>
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {item.title}
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm ${
                              isDark ? "text-gray-300" : "text-gray-500"
                            }`}
                          >
                            {item.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                item.status === "Published"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm ${
                              isDark ? "text-gray-300" : "text-gray-500"
                            }`}
                          >
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleViewItem(item)}
                                className={`${
                                  isDark
                                    ? "text-blue-400 hover:text-blue-300"
                                    : "text-blue-600 hover:text-blue-900"
                                }`}
                                aria-label={`View ${item.title}`}
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => {
                                  setEditItem(item);
                                  setShowEditModal(true);
                                }}
                                className={`${
                                  isDark
                                    ? "text-green-400 hover:text-green-300"
                                    : "text-green-600 hover:text-green-900"
                                }`}
                                aria-label={`Edit ${item.title}`}
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteItem(item.id)}
                                className={`${
                                  isDark
                                    ? "text-red-400 hover:text-red-300"
                                    : "text-red-600 hover:text-red-900"
                                }`}
                                aria-label={`Delete ${item.title}`}
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "messages" && (
              <div className="space-y-6">
                <h2
                  className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Messages
                </h2>

                <div
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } rounded-lg shadow-sm border`}
                >
                  <div className="divide-y divide-gray-200">
                    {messages.map((message) => (
                      <div key={message.id} className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h3
                                className={`text-lg font-semibold ${
                                  isDark ? "text-white" : "text-gray-900"
                                } mr-4`}
                              >
                                {message.name}
                              </h3>
                              <span
                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                  message.status === "New"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {message.status}
                              </span>
                            </div>
                            <p
                              className={`text-sm ${
                                isDark ? "text-gray-400" : "text-gray-600"
                              } mb-2`}
                            >
                              {message.email}
                            </p>
                            <p
                              className={`${
                                isDark ? "text-gray-300" : "text-gray-800"
                              } mb-2`}
                            >
                              {message.message}
                            </p>
                            <p
                              className={`text-xs ${
                                isDark ? "text-gray-500" : "text-gray-500"
                              }`}
                            >
                              {new Date(message.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            {message.status === "New" && (
                              <button
                                onClick={() =>
                                  updateMessageStatus(message.id, "Read")
                                }
                                className={`px-3 py-1 text-sm ${
                                  isDark
                                    ? "bg-blue-900 text-blue-300 hover:bg-blue-800"
                                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                                } rounded transition-colors`}
                              >
                                Mark as Read
                              </button>
                            )}
                            <button
                              onClick={() => handleReply(message.email)}
                              className={`px-3 py-1 text-sm ${
                                isDark
                                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                              } rounded transition-colors`}
                            >
                              <Send className="w-4 h-4 inline mr-1" />
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "users" && (
              <div
                className={`${
                  isDark
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                } rounded-lg shadow-sm border p-6`}
              >
                <h2
                  className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  } mb-4`}
                >
                  User Management
                </h2>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  User management features coming soon. Currently, only admin
                  access is supported.
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  disabled
                >
                  Add User (Coming Soon)
                </button>
              </div>
            )}

            {activeTab === "settings" && (
              <div
                className={`${
                  isDark
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                } rounded-lg shadow-sm border p-6`}
              >
                <h2
                  className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  } mb-4`}
                >
                  Settings
                </h2>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="siteTitle"
                      className={`block text-sm font-medium ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      } mb-2`}
                    >
                      Site Title
                    </label>
                    <input
                      id="siteTitle"
                      type="text"
                      defaultValue="My Portfolio"
                      className={`w-full px-3 py-2 border ${
                        isDark
                          ? "border-gray-600 bg-gray-700 text-white"
                          : "border-gray-300 bg-white text-gray-900"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contactEmail"
                      className={`block text-sm font-medium ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      } mb-2`}
                    >
                      Contact Email
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      defaultValue="contact@example.com"
                      className={`w-full px-3 py-2 border ${
                        isDark
                          ? "border-gray-600 bg-gray-700 text-white"
                          : "border-gray-300 bg-white text-gray-900"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    />
                  </div>
                  <button
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    onClick={() => toast.info("Settings saved! (Placeholder)")}
                  >
                    Save Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            className={`${
              isDark ? "bg-gray-800" : "bg-white"
            } rounded-lg p-6 w-full max-w-md`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3
                className={`text-lg font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Add New Project
              </h3>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setErrors({});
                }}
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="addTitle"
                  className={`block text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } mb-2`}
                >
                  Title
                </label>
                <input
                  id="addTitle"
                  type="text"
                  value={newItem.title}
                  onChange={(e) => {
                    setNewItem({ ...newItem, title: e.target.value });
                    validateInput("title", e.target.value);
                  }}
                  className={`w-full px-3 py-2 border ${
                    isDark
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="Project title"
                  aria-invalid={errors.title ? "true" : "false"}
                  aria-describedby={errors.title ? "title-error" : undefined}
                />
                {errors.title && (
                  <p id="title-error" className="text-red-500 text-xs mt-1">
                    {errors.title}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="addCategory"
                  className={`block text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } mb-2`}
                >
                  Category
                </label>
                <select
                  id="addCategory"
                  value={newItem.category}
                  onChange={(e) => {
                    setNewItem({ ...newItem, category: e.target.value });
                    validateInput("category", e.target.value);
                  }}
                  className={`w-full px-3 py-2 border ${
                    isDark
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  aria-invalid={errors.category ? "true" : "false"}
                  aria-describedby={
                    errors.category ? "category-error" : undefined
                  }
                >
                  <option value="">Select category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Branding">Branding</option>
                </select>
                {errors.category && (
                  <p id="category-error" className="text-red-500 text-xs mt-1">
                    {errors.category}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="addDescription"
                  className={`block text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } mb-2`}
                >
                  Description
                </label>
                <textarea
                  id="addDescription"
                  value={newItem.description}
                  onChange={(e) =>
                    setNewItem({ ...newItem, description: e.target.value })
                  }
                  className={`w-full px-3 py-2 border ${
                    isDark
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="Project description"
                  rows={4}
                />
              </div>

              <div>
                <label
                  htmlFor="addStatus"
                  className={`block text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } mb-2`}
                >
                  Status
                </label>
                <select
                  id="addStatus"
                  value={newItem.status}
                  onChange={(e) =>
                    setNewItem({ ...newItem, status: e.target.value })
                  }
                  className={`w-full px-3 py-2 border ${
                    isDark
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setErrors({});
                }}
                className={`px-4 py-2 ${
                  isDark
                    ? "text-gray-300 border-gray-600 hover:bg-gray-700"
                    : "text-gray-700 border-gray-300 hover:bg-gray-50"
                } border rounded-lg transition-colors`}
              >
                Cancel
              </button>
              <button
                onClick={handleAddItem}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Save className="w-4 h-4 mr-2" />
                Add Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Project Modal */}
      {showEditModal && editItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            className={`${
              isDark ? "bg-gray-800" : "bg-white"
            } rounded-lg p-6 w-full max-w-md`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3
                className={`text-lg font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Edit Project
              </h3>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setErrors({});
                }}
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="editTitle"
                  className={`block text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } mb-2`}
                >
                  Title
                </label>
                <input
                  id="editTitle"
                  type="text"
                  value={editItem.title}
                  onChange={(e) => {
                    setEditItem({ ...editItem, title: e.target.value });
                    validateInput("title", e.target.value);
                  }}
                  className={`w-full px-3 py-2 border ${
                    isDark
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="Project title"
                  aria-invalid={errors.title ? "true" : "false"}
                  aria-describedby={errors.title ? "title-error" : undefined}
                />
                {errors.title && (
                  <p id="title-error" className="text-red-500 text-xs mt-1">
                    {errors.title}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="editCategory"
                  className={`block text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } mb-2`}
                >
                  Category
                </label>
                <select
                  id="editCategory"
                  value={editItem.category}
                  onChange={(e) => {
                    setEditItem({ ...editItem, category: e.target.value });
                    validateInput("category", e.target.value);
                  }}
                  className={`w-full px-3 py-2 border ${
                    isDark
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  aria-invalid={errors.category ? "true" : "false"}
                  aria-describedby={
                    errors.category ? "category-error" : undefined
                  }
                >
                  <option value="">Select category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Branding">Branding</option>
                </select>
                {errors.category && (
                  <p id="category-error" className="text-red-500 text-xs mt-1">
                    {errors.category}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="editDescription"
                  className={`block text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } mb-2`}
                >
                  Description
                </label>
                <textarea
                  id="editDescription"
                  value={editItem.description}
                  onChange={(e) =>
                    setEditItem({ ...editItem, description: e.target.value })
                  }
                  className={`w-full px-3 py-2 border ${
                    isDark
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="Project description"
                  rows={4}
                />
              </div>

              <div>
                <label
                  htmlFor="editStatus"
                  className={`block text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } mb-2`}
                >
                  Status
                </label>
                <select
                  id="editStatus"
                  value={editItem.status}
                  onChange={(e) =>
                    setEditItem({ ...editItem, status: e.target.value })
                  }
                  className={`w-full px-3 py-2 border ${
                    isDark
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setErrors({});
                }}
                className={`px-4 py-2 ${
                  isDark
                    ? "text-gray-300 border-gray-600 hover:bg-gray-700"
                    : "text-gray-700 border-gray-300 hover:bg-gray-50"
                } border rounded-lg transition-colors`}
              >
                Cancel
              </button>
              <button
                onClick={handleEditItem}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Project Modal */}
      {showViewModal && viewItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            className={`${
              isDark ? "bg-gray-800" : "bg-white"
            } rounded-lg p-6 w-full max-w-md`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3
                className={`text-lg font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {viewItem.title}
              </h3>
              <button
                onClick={() => setShowViewModal(false)}
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Category
                </h4>
                <p className={`${isDark ? "text-white" : "text-gray-900"}`}>
                  {viewItem.category}
                </p>
              </div>
              <div>
                <h4
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Status
                </h4>
                <p className={`${isDark ? "text-white" : "text-gray-900"}`}>
                  {viewItem.status}
                </p>
              </div>
              <div>
                <h4
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Description
                </h4>
                <p className={`${isDark ? "text-white" : "text-gray-900"}`}>
                  {viewItem.description || "No description provided."}
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowViewModal(false)}
                className={`px-4 py-2 ${
                  isDark
                    ? "text-gray-300 border-gray-600 hover:bg-gray-700"
                    : "text-gray-700 border-gray-300 hover:bg-gray-50"
                } border rounded-lg transition-colors`}
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowViewModal(false);
                  setEditItem(viewItem);
                  setShowEditModal(true);
                }}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
