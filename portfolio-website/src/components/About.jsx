import { Code, Laptop, Server, Brain, Globe } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Languages",
      icon: <Code className="w-8 h-8 text-blue-400" />,
      technologies: ["Python", "C++", "JavaScript"],
    },
    {
      category: "Frontend",
      icon: <Laptop className="w-8 h-8 text-teal-400" />,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Vite",
        "Responsive Design",
      ],
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8 text-purple-400" />,
      technologies: ["Flask", "SQL", "SQLite", "PostgreSQL", "RESTful APIs"],
    },
    {
      category: "Tools & Frameworks",
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      technologies: [
        "Git",
        "JSON-server",
        "JWT Authentication",
        "Ollama",
        "VPS Deployment",
      ],
    },
    {
      category: "Specialized Skills",
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      technologies: [
        "3D Model Integration",
        "Augmented Reality (AR)",
        "AI Development",
        "Agile Methodologies",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-teal-900 text-white relative overflow-hidden"
    >
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] animate-pulse opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 drop-shadow-lg animate-fade-in">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg leading-relaxed text-gray-300 animate-fade-in delay-200 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 font-mono tracking-wide">
            Hey there! I’m a full-stack dev who loves tackling big challenges with slick code.
            I’ve built stuff like AlgoAura—an AI coding assistant—and Vista Mart, an AR-powered
            e-commerce platform, proving I can deliver next-level tech that works and wows.
            I’m all about crafting fast, user-friendly solutions with React, Flask, and a toolbox
            full of modern tricks. Let’s build something awesome together!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-2 border border-blue-500/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-gray-900 to-blue-950 shadow-md hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full text-sm font-medium shadow-md hover:scale-105 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;