import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Projects = ({
  title = "Our Projects",
  subtitle = "Showcasing Our Best Work",
  showFilter = true,
  showPagination = true,
  projectsPerPage = 6,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React and Node.js",
      longDescription:
        "A comprehensive e-commerce platform built with modern technologies including React, Node.js, MongoDB, and Stripe integration. Features include user authentication, product management, shopping cart, payment processing, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      completedDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication",
      longDescription:
        "A secure mobile banking application built with React Native, featuring biometric authentication, real-time transactions, account management, and push notifications. Implemented with end-to-end encryption and fraud detection.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      completedDate: "2024-02-20",
    },
    {
      id: 3,
      title: "AI-Powered Dashboard",
      description: "Analytics dashboard with machine learning insights",
      longDescription:
        "An intelligent analytics dashboard that leverages machine learning to provide business insights. Built with React, Python, and TensorFlow, featuring real-time data visualization, predictive analytics, and automated reporting.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "web",
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      completedDate: "2024-03-10",
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Instagram-like social media platform",
      longDescription:
        "A full-featured social media application similar to Instagram, built with React Native and Node.js. Includes photo sharing, stories, messaging, live streaming, and social features with real-time updates.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Node.js", "Socket.io", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      completedDate: "2024-04-05",
    },
    {
      id: 5,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform",
      longDescription:
        "A complete healthcare management system for hospitals and clinics. Features patient management, appointment scheduling, medical records, billing, and telemedicine capabilities. Built with security and HIPAA compliance in mind.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      category: "web",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      completedDate: "2024-05-12",
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet application",
      longDescription:
        "A secure cryptocurrency wallet application with multi-currency support, built with React Native and blockchain integration. Features include secure key management, transaction history, price tracking, and portfolio management.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Web3.js", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      completedDate: "2024-06-01",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "web",
      name: "Web Apps",
      count: projects.filter((p) => p.category === "web").length,
    },
    {
      id: "mobile",
      name: "Mobile Apps",
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "featured",
      name: "Featured",
      count: projects.filter((p) => p.featured).length,
    },
  ];

  // Filter projects based on selected category
  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "featured") return project.featured;
    return project.category === selectedCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
            {subtitle}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects, from web applications
            to mobile apps, each crafted with attention to detail and
            cutting-edge technology.
          </p>
        </div>

        {/* Category Filter */}
        {showFilter && (
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    <Eye size={24} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900">
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-x-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {showPagination && totalPages > 1 && (
          <div className="flex justify-center items-center gap-x-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <ChevronLeft size={20} />
              <span className="ml-2">Previous</span>
            </button>
            <span className="px-4 py-2 text-gray-900 dark:text-gray-100">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <span className="mr-2">Next</span>
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn"
            onClick={closeModal}
          >
            <div
              className="relative bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-slideUp"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X size={24} />
              </button>
              <div className="aspect-video overflow-hidden rounded-t-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedProject.longDescription}
                </p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={`${selectedProject.id}-${tech}`}
                        className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-medium">Completed:</span>{" "}
                    {new Date(
                      selectedProject.completedDate
                    ).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-x-4">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        View Live
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <Github size={20} className="mr-2" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
