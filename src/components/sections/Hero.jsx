import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Download, Github, ExternalLink } from 'lucide-react';

const Hero = ({ 
  title = "Welcome to Our Amazing WebApp",
  subtitle = "Building the future with modern technology",
  description = "We create beautiful, responsive, and performant web applications using the latest technologies and best practices.",
  primaryCTA = "Get Started",
  secondaryCTA = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  showStats = true,
  backgroundType = "gradient" // gradient, image, video
}) => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Animated text rotation
  const rotatingTexts = [
    "Modern Web Applications",
    "Responsive User Interfaces", 
    "Scalable Solutions",
    "Amazing User Experiences"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Stats data
  const stats = [
    { label: "Projects Completed", value: "100+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "10+" }
  ];

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      // Default action - scroll to next section
      const nextSection = document.getElementById('about');
      nextSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      // Default action - scroll to projects
      const projectsSection = document.getElementById('projects');
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundType === "gradient" && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 dark:from-blue-800 dark:via-purple-800 dark:to-gray-900">
            <div className="absolute inset-0 bg-black/20" />
          </div>
        )}
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">{title.split(' ').slice(0, -2).join(' ')}</span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {title.split(' ').slice(-2).join(' ')}
            </span>
          </h1>

          {/* Rotating Subtitle */}
          <div className="h-16 mb-6">
            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 font-medium">
              {subtitle} {" "}
              <span className="inline-block">
                <span 
                  key={currentText}
                  className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-bold animate-pulse"
                >
                  {rotatingTexts[currentText]}
                </span>
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-blue-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handlePrimaryClick}
              className="group relative px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2"
            >
              <span>{primaryCTA}</span>
              <ChevronRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </button>
            
            <button
              onClick={handleSecondaryClick}
              className="group px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Play size={20} />
              <span>{secondaryCTA}</span>
            </button>
          </div>

          {/* Action Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="#"
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
            >
              <Download size={20} />
              <span>Download</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          </div>

          {/* Stats */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;