import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>

      <p className="projects-intro">
        A selection of projects that demonstrate my skills in building
        full stack and frontend applications.
      </p>

      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects