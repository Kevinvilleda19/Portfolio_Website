import ProjectCard from "./ProjectCard";

function Projects() {
  const projectData = [
    {
      title: "Vista Mart",
      description:
        "A 3D-enabled e-commerce platform featuring AR integration and cart functionality.",
      image: "https://i.postimg.cc/mkrj2zx1/Vista-Mart-logo.png",
      technologies: ["React", "Tailwind CSS", "Flask", "3D Models", "Augmented Reality (AR)"],
      githubUrl: "https://github.com/Kevinvilleda19/VistaMart",
    },
    {
      title: "AlgoAura",
      description:
        "An AI-driven coding assistant with a React frontend and Flask backend.",
      image: "/AlgoAura Logo.jpg", // Replace with AlgoAura’s actual image
      technologies: ["React", "Flask", "Python", "AI","JavaScript", "Ollama","RESTful APIs","Tailwind CSS"],
      githubUrl: "https://github.com/Kevinvilleda19/Ai-Code-Explainer", // Replace with actual repo link
    },
    {
      title: "LaneMastery.gg",
      description:
        "A League of Legends-focused web app for improving player performance.",
      image: "https://i.postimg.cc/HLc4KDwX/lanemastery-page.jpg",
      technologies: ["Javascript", "CSS", "HTML"],
      githubUrl: "https://github.com/Kevinvilleda19/Lanemastery.gg",
      liveUrl: "https://kevinvilleda19.github.io/Lanemastery.gg/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-teal-900 text-white relative overflow-hidden"
    >
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] animate-pulse opacity-50 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 drop-shadow-lg animate-fade-in">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden border border-blue-500/30"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl transition-transform duration-500 hover:scale-110 brightness-75 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 hover:opacity-90 transition-opacity duration-300 rounded-t-xl flex items-end p-4">
                  <p className="text-sm font-medium text-white drop-shadow-md">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold text-gray-900 bg-gradient-to-r from-gray-200 to-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;