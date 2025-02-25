import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  featured = false, // Optional prop to highlight featured projects
}) => {
  return (
    <div className={`project-card fade-in ${featured ? "border-blue-500" : ""}`}>
      <div className="relative">
        <img
          src={image || "/placeholder-image.jpg"} // Fallback image if none provided
          alt={title}
          className="w-full h-48 object-cover object-center transition-transform duration-300 hover:scale-105"
          loading="lazy" // Optimize performance for multiple cards
        />
        {featured && (
          <span className="absolute top-2 left-2 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow">
            Featured
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 gradient-text">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span key={tech} className="project-tech">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gray-700 hover:bg-blue-600"
              aria-label={`View ${title} GitHub repository`}
            >
              <Github className="w-5 h-5 mr-2" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;