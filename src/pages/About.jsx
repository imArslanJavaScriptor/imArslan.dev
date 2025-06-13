import React, { useState } from "react";
import Button from "../components/ui/Button"
import Card from "../ui/Card";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const skills = {
    frontend: [
      { name: "React", level: 90, color: "bg-blue-500" },
      { name: "JavaScript", level: 88, color: "bg-yellow-500" },
      { name: "TypeScript", level: 85, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 82, color: "bg-teal-500" },
      { name: "Vue.js", level: 75, color: "bg-green-500" },
      { name: "HTML/CSS", level: 92, color: "bg-orange-500" },
    ],
    backend: [
      { name: "Node.js", level: 85, color: "bg-green-600" },
      { name: "Express", level: 80, color: "bg-gray-600" },
      { name: "Python", level: 78, color: "bg-blue-400" },
      { name: "MongoDB", level: 82, color: "bg-green-500" },
      { name: "PostgreSQL", level: 75, color: "bg-blue-700" },
      { name: "Firebase", level: 88, color: "bg-yellow-600" },
    ],
    tools: [
      { name: "Git", level: 90, color: "bg-red-500" },
      { name: "Docker", level: 70, color: "bg-blue-500" },
      { name: "AWS", level: 65, color: "bg-orange-600" },
      { name: "Figma", level: 85, color: "bg-purple-500" },
      { name: "Jest", level: 78, color: "bg-red-600" },
      { name: "Webpack", level: 72, color: "bg-blue-400" },
    ],
  };

  const timeline = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description:
        "Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      type: "work",
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      description:
        "Developed and maintained multiple client projects, improving application performance by 40% and implementing responsive designs across all platforms.",
      type: "work",
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "StartupHub",
      description:
        "Built responsive web applications using React and modern JavaScript. Collaborated with designers to implement pixel-perfect UI components.",
      type: "work",
    },
    {
      year: "2021",
      title: "Computer Science Degree",
      company: "University of Technology",
      description:
        "Bachelor's degree in Computer Science with focus on software engineering and web technologies. Graduated Magna Cum Laude.",
      type: "education",
    },
    {
      year: "2020",
      title: "Junior Web Developer",
      company: "Local Web Agency",
      description:
        "Started my professional journey building websites for small businesses. Learned the fundamentals of web development and client communication.",
      type: "work",
    },
  ];

  const hobbies = [
    {
      icon: "🎵",
      title: "Music Production",
      description:
        "Creating electronic music in my spare time using Ableton Live",
    },
    {
      icon: "📚",
      title: "Reading",
      description:
        "Love reading tech blogs, sci-fi novels, and personal development books",
    },
    {
      icon: "🏃‍♂️",
      title: "Running",
      description:
        "Regular runner who enjoys morning jogs and participating in local 5K races",
    },
    {
      icon: "📷",
      title: "Photography",
      description:
        "Landscape and street photography, especially during travels",
    },
    {
      icon: "🎮",
      title: "Gaming",
      description:
        "Enjoy strategy games and indie titles, also interested in game development",
    },
    {
      icon: "🌱",
      title: "Gardening",
      description:
        "Growing herbs and vegetables, finding it therapeutic and rewarding",
    },
  ];

  const values = [
    {
      title: "Continuous Learning",
      description:
        "I believe in constantly improving my skills and staying updated with the latest technologies and best practices in development.",
      icon: "🎯",
    },
    {
      title: "User-Centric Design",
      description:
        "Every project I work on prioritizes the end user experience, ensuring accessibility and intuitive design patterns.",
      icon: "👥",
    },
    {
      title: "Clean Code",
      description:
        "Writing maintainable, well-documented code that other developers can easily understand and build upon.",
      icon: "✨",
    },
    {
      title: "Collaboration",
      description:
        "Great products are built by great teams. I value open communication and constructive feedback.",
      icon: "🤝",
    },
  ];

  const tabs = [
    { id: "story", name: "My Story" },
    { id: "skills", name: "Skills" },
    { id: "experience", name: "Experience" },
    { id: "personal", name: "Personal" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto border-8 border-white dark:border-gray-700 shadow-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate developer, creative thinker, and lifelong learner
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "primary" : "ghost"}
              onClick={() => setActiveTab(tab.id)}
              className="transition-all duration-200"
            >
              {tab.name}
            </Button>
          ))}
        </div>

        {/* Content Sections */}
        {activeTab === "story" && (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Hello, I'm John Doe
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  I'm a passionate full-stack developer with over 3 years of
                  experience creating beautiful, functional, and user-friendly
                  web applications. My journey started with a curiosity about
                  how websites work, and it has evolved into a deep love for
                  solving complex problems through code.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  I specialize in modern JavaScript frameworks, particularly
                  React and Node.js, but I'm always eager to learn new
                  technologies and tackle different challenges. What drives me
                  is the opportunity to build solutions that make a real
                  difference in people's lives.
                </p>
                <Button variant="primary" size="lg">
                  Download My Resume
                </Button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Experience:</span>
                      <span className="font-semibold">3+ Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Projects Completed:</span>
                      <span className="font-semibold">50+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Technologies:</span>
                      <span className="font-semibold">15+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coffee Consumed:</span>
                      <span className="font-semibold">∞</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                What I Believe In
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={index} variant="elevated" padding="lg">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{value.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Technologies and tools I work with
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} variant="elevated" padding="lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 capitalize">
                    {category === "frontend"
                      ? "Frontend"
                      : category === "backend"
                      ? "Backend"
                      : "Tools & Others"}
                  </h3>
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`${skill.color} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                My Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Professional experience and education timeline
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>

                  {/* Content card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <Card variant="elevated" padding="lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {item.year}
                        </span>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            item.type === "work"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                          }`}
                        >
                          {item.type === "work" ? "Work" : "Education"}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 mb-3 font-medium">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "personal" && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Beyond Coding
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                What I do when I'm not building applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {hobbies.map((hobby, index) => (
                <Card key={index} hover variant="elevated" padding="lg">
                  <div className="text-center">
                    <div className="text-5xl mb-4">{hobby.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {hobby.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {hobby.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Fun Section */}
            <Card variant="gradient" padding="xl" className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Fun Facts About Me
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-700 dark:text-gray-300">
                <div>🎯 I can solve a Rubik's cube in under 2 minutes</div>
                <div>🌍 I've visited 12 countries and counting</div>
                <div>☕ I start every morning with a perfect cup of coffee</div>
                <div>🎸 I play guitar and write my own songs</div>
                <div>📚 I read at least one tech book every month</div>
                <div>🏔️ I love hiking and have climbed 3 peaks over 4000m</div>
              </div>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20 py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg mb-8 opacity-90">
            Ready to bring your ideas to life? I'd love to hear about your
            project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-blue-600">
              Start a Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
