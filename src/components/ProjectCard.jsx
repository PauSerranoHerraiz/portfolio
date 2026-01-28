function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>

      <p className="project-description">
        {project.description}
      </p>

      <p className="project-challenges">
        <strong>Technical challenge:</strong> {project.challenges}
      </p>

      <ul className="tech-list">
        {project.tech.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        
        <a href={project.demo} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </article>
  );
}

export default ProjectCard