import React, { useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Modal from "../components/ui/Modal";
import { useTheme } from "../context/ThemeContext";

const Portfolio = () => {
  const { isDark, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectModal, setShowProjectModal] = useState(false);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Applications" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "design", name: "UI/UX Design" },
    { id: "api", name: "Backend/API" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      longDescription:
        "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, payment integration with Stripe, order tracking, and an admin dashboard. Built with modern technologies to ensure scalability and performance.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
      features: [
        "User Authentication & Authorization",
        "Product Catalog with Search & Filters",
        "Shopping Cart & Checkout Process",
        "Payment Integration (Stripe)",
        "Order Management & Tracking",
        "Admin Dashboard",
        "Responsive Design",
        "Email Notifications",
      ],
      duration: "3 months",
      role: "Full Stack Developer",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "web",
      description: "Collaborative task management tool with real-time updates",
      longDescription:
        "A modern task management application that allows teams to collaborate effectively. Features real-time updates, drag-and-drop functionality, team workspaces, and comprehensive project tracking capabilities.",
      tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "https://github.com/yourusername/task-manager",
      live: "https://taskmanager-demo.vercel.app",
      features: [
        "Real-time Collaboration",
        "Drag & Drop Interface",
        "Team Workspaces",
        "Project Templates",
        "Time Tracking",
        "File Attachments",
        "Mobile Responsive",
        "Dark Mode Support",
      ],
      duration: "2 months",
      role: "Frontend Developer",
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      category: "web",
      description: "Interactive weather dashboard with data visualization",
      longDescription:
        "A comprehensive weather analytics dashboard that provides detailed weather information with interactive charts and forecasts. Integrates with multiple weather APIs to provide accurate and up-to-date information.",
      tech: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://weather-analytics.vercel.app",
      features: [
        "Current Weather Conditions",
        "7-Day Forecast",
        "Interactive Charts",
        "Location Search",
        "Weather Alerts",
        "Historical Data",
        "Export Data Feature",
        "Responsive Design",
      ],
      duration: "1 month",
      role: "Frontend Developer",
    },
    {
      id: 4,
      title: "Food Delivery Mobile App",
      category: "mobile",
      description: "React Native food delivery app with real-time tracking",
      longDescription:
        "A complete food delivery mobile application built with React Native. Features restaurant browsing, order placement, real-time tracking, and payment integration. Includes both customer and restaurant owner interfaces.",
      tech: ["React Native", "Firebase", "Google Maps API", "Redux"],
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      github: "https://github.com/yourusername/food-delivery-app",
      live: "#",
      features: [
        "Restaurant Discovery",
        "Menu Browsing",
        "Order Placement",
        "Real-time Order Tracking",
        "Payment Integration",
        "User Reviews & Ratings",
        "Push Notifications",
        "Restaurant Dashboard",
      ],
      duration: "4 months",
      role: "Mobile Developer",
    },
    {
      id: 5,
      title: "Fitness Tracker UI Design",
      category: "design",
      description: "Modern UI/UX design for a fitness tracking application",
      longDescription:
        "A comprehensive UI/UX design project for a fitness tracking application. Includes user research, wireframing, prototyping, and final design implementation with a focus on user experience and accessibility.",
      tech: ["Figma", "Adobe XD", "Principle", "InVision"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      github: "#",
      live: "https://www.figma.com/your-design-link",
      features: [
        "User Research & Personas",
        "Wireframing & Prototyping",
        "Visual Design System",
        "Interactive Prototypes",
        "Accessibility Compliance",
        "Cross-platform Design",
        "Usability Testing",
        "Design Documentation",
      ],
      duration: "2 months",
      role: "UI/UX Designer",
    },
    {
      id: 6,
      title: "RESTful API for Blog Platform",
      category: "api",
      description:
        "Scalable backend API with authentication and content management",
      longDescription:
        "A robust RESTful API built for a blog platform with comprehensive features including user management, content creation, commenting system, and advanced search capabilities. Implements best practices for security and scalability.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Joi", "Jest"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      github: "https://github.com/yourusername/blog-api",
      live: "https://blog-api-docs.herokuapp.com",
      features: [
        "User Authentication & Authorization",
        "CRUD Operations for Posts",
        "Comment System",
        "Tag & Category Management",
        "Search & Filtering",
        "File Upload Support",
        "Rate Limiting",
        "API Documentation",
      ],
      duration: "2 months",
      role: "Backend Developer",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Portfolio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development,
            mobile apps, and design
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "primary" : "ghost"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-200"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              hover
              variant="elevated"
              image={{ src: project.image, alt: project.title }}
              onClick={() => handleProjectClick(project)}
              className="cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="mb-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full uppercase font-semibold">
                  {categories
                    .find((cat) => cat.id === project.category)
                    ?.name.replace(" Apps", "")
                    .replace(" Applications", "")}
                </span>
              </div>

              <Card.Title>{project.title}</Card.Title>
              <Card.Description className="mb-4">
                {project.description}
              </Card.Description>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, "_blank");
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.live, "_blank");
                  }}
                >
                  View Live
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20 py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss your next project and bring your ideas to life
          </p>
          <Button variant="secondary" size="lg" className="text-blue-600">
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={showProjectModal}
        onClose={() => setShowProjectModal(false)}
        size="xl"
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-6">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Project Overview
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedProject.longDescription}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Duration:
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {selectedProject.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Role:
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {selectedProject.role}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                onClick={() => window.open(selectedProject.github, "_blank")}
                className="flex-1"
              >
                View on GitHub
              </Button>
              <Button
                variant="primary"
                onClick={() => window.open(selectedProject.live, "_blank")}
                className="flex-1"
              >
                View Live Project
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Portfolio;
