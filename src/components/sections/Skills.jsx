import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Database, Cloud, Smartphone, Globe, Zap, Shield } from 'lucide-react';

const Skills = ({
  title = "Our Expertise",
  subtitle = "Technologies We Master",
  showProgressBars = true,
  animateOnScroll = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (animateOnScroll) {
            // Animate skill bars with staggered delay
            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => new Set([...prev, skill.name]));
                }, (categoryIndex * 200) + (skillIndex * 100));
              });
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animateOnScroll]);

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Vue.js', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 88 }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: Database,
      color: 'green',
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Python', level: 87 },
        { name: 'PostgreSQL', level: 89 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      icon: Smartphone,
      color: 'purple',
      skills: [
        { name: 'React Native', level: 88 },
        { name: 'Flutter', level: 75 },
        { name: 'iOS (Swift)', level: 70 },
        { name: 'Android (Kotlin)', level: 72 },
        { name: 'Expo', level: 85 }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'orange',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 82 },
        { name: 'Terraform', level: 70 }
      ]
    },
    {
      id: 'design',
      name: 'UI/UX Design',
      icon: Palette,
      color: 'pink',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Photoshop', level: 80 },
        { name: 'Illustrator', level: 75 },
        { name: 'Prototyping', level: 88 }
      ]
    },
    {
      id: 'other',
      name: 'Other Technologies',
      icon: Zap,
      color: 'indigo',
      skills: [
        { name: 'GraphQL', level: 82 },
        { name: 'Firebase', level: 87 },
        { name: 'Stripe API', level: 85 },
        { name: 'Socket.io', level: 80 },
        { name: 'OAuth', level: 78 }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        icon: 'text-blue-600 dark:text-blue-400',
        progress: 'bg-blue-600',
        border: 'border-blue-200 dark:border-blue-800'
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900/20',
        icon: 'text-green-600 dark:text-green-400',
        progress: 'bg-green-600',
        border: 'border-green-200 dark:border-green-800'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/20',
        icon: 'text-purple-600 dark:text-purple-400',
        progress: 'bg-purple-600',
        border: 'border-purple-200 dark:border-purple-800'
      },
      orange: {
        bg: 'bg-orange-100 dark:bg-orange-900/20',
        icon: 'text-orange-600 dark:text-orange-400',
        progress: 'bg-orange-600',
        border: 'border-orange-200 dark:border-orange-800'
      },
      pink: {
        bg: 'bg-pink-100 dark:bg-pink-900/20',
        icon: 'text-pink-600 dark:text-pink-400',
        progress: 'bg-pink-600',
        border: 'border-pink-200 dark:border-pink-800'
      },
      indigo: {
        bg: 'bg-indigo-100 dark:bg-indigo-900/20',
        icon: 'text-indigo-600 dark:text-indigo-400',
        progress: 'bg-indigo-600',
        border: 'border-indigo-200 dark:border-indigo-800'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  // Additional services/specializations
  const specializations = [
    {
      icon: Globe,
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern technologies"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description: "Responsive designs that work seamlessly across all devices"
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Built-in security measures and optimized performance"
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Seamless integration with third-party APIs and services"
    }
  ];

  return (
    <section 
      id="skills"
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
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and industry best practices to deliver 
            exceptional digital solutions that drive business growth.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={category.id}
                className={`transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 ${colors.border}`}>
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${colors.bg} mr-4`}>
                      <category.icon size={24} className={colors.icon} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          {showProgressBars && (
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          )}
                        </div>
                        
                        {showProgressBars && (
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${colors.progress} transition-all duration-1000 ease-out`}
                              style={{
                                width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%'
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specializations */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Specializations
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <spec.icon size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {spec.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our expertise can help bring your vision to life. 
              We're here to turn your ideas into exceptional digital experiences.
            </p>
            <button className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              <span>Let's Work Together</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;