import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>
                <strong>Role:</strong> {project.role}
              </p>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
