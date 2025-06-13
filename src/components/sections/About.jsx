import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const About = ({
  title = "About Us",
  subtitle = "Crafting Digital Excellence Since 2020",
  description = "We are a passionate team of developers, designers, and innovators dedicated to creating exceptional digital experiences that drive business growth and user satisfaction.",
  showTimeline = true,
  showValues = true,
  showTeam = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
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

  // Company values/features
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We focus on delivering solutions that create real value for our clients and their users."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We work closely with our clients as partners in their digital transformation journey."
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "We maintain the highest standards in code quality, design, and user experience."
    }
  ];

  // Company timeline
  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to transform digital experiences"
    },
    {
      year: "2021",
      title: "First Major Client",
      description: "Delivered our first enterprise-level application"
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew to 10+ talented professionals"
    },
    {
      year: "2023",
      title: "100+ Projects",
      description: "Reached milestone of 100 successful projects"
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Extended services to international markets"
    }
  ];

  // Tab content
  const tabContent = {
    mission: {
      title: "Our Mission",
      content: "To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital landscape."
    },
    vision: {
      title: "Our Vision", 
      content: "To be the leading force in digital transformation, creating a world where technology seamlessly integrates with human needs to solve complex challenges."
    },
    approach: {
      title: "Our Approach",
      content: "We combine human-centered design with cutting-edge technology, following agile methodologies to deliver solutions that are not just functional, but truly transformative."
    }
  };

  const achievements = [
    "100+ Successful Projects Delivered",
    "50+ Happy Clients Worldwide", 
    "99% Client Satisfaction Rate",
    "24/7 Technical Support",
    "Agile Development Process",
    "Modern Technology Stack"
  ];

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
            {subtitle}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          
          {/* Left Column - Tab Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {tabContent[tab].title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {tabContent[activeTab].content}
              </p>
              
              {/* Achievements List */}
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          {showValues && (
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Our Core Values
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                        <value.icon size={24} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Timeline */}
        {showTimeline && (
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Our Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200 dark:bg-blue-800" />
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10" />
                    
                    {/* Content Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">
                          {item.year}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <button className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              <span>Get Started Today</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;