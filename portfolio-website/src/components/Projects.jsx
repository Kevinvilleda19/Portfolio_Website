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
      title: "FreelanceFlow",
      description:
        "A management tool for freelancers to track projects, clients, and finances.",
      image: "https://i.postimg.cc/2yN3v6m0/DALL-E-2024-11-18-18-46-14-A-sleek-and-modern-logo-for-Freelance-Flow-featuring-a-vibrant-swirl-de.webp",
      technologies: ["Python", "SQL"],
      githubUrl: "https://github.com/Kevinvilleda19/Freelancer-Job-Management-System",
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
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-xl flex items-end p-4">
                  <p className="text-sm font-medium text-white">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium bg-blue-700 text-white rounded-full shadow"
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
                    className="px-4 py-2 text-sm font-semibold text-gray-800 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
                  >
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
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
