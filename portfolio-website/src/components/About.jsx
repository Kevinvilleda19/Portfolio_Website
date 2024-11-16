import { Code, Laptop, Server } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Languages",
      icon: <Code className="w-8 h-8 text-blue-500" />,
      technologies: ["Python", "JavaScript"],
    },
    {
      category: "Frontend",
      icon: <Laptop className="w-8 h-8 text-green-500" />,
      technologies: ["HTML", "CSS", "React", "Responsive Design"],
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8 text-purple-500" />,
      technologies: ["Flask", "SQL", "SQLite", "PostgreSQL", "RESTful APIs"],
    },
    {
      category: "Tools & Frameworks",
      icon: <Code className="w-8 h-8 text-orange-500" />,
      technologies: ["Vite", "Git", "JSON-server", "JWT Authentication"],
    },
    {
      category: "Specialized Skills",
      icon: <Code className="w-8 h-8 text-teal-500" />,
      technologies: [
        "3D Model Integration",
        "Augmented Reality",
        "Agile Methodologies",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg leading-relaxed text-gray-300">
            I'm a passionate developer with a focus on creating elegant solutions
            to complex problems. With experience in both frontend and backend
            development, I enjoy building full-stack applications that provide
            real value to users.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-600"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 rounded-full bg-gray-800">{skill.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium shadow hover:shadow-md hover:bg-blue-700 transition-colors"
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
