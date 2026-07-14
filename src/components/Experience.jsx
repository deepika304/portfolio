import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-title">
        <h2>Experience</h2>
      </div>

      {experience.map((job) => (
        <div className="experience-card" key={job.title}>
          <h3>{job.title}</h3>
          <h4>{job.company}</h4>
          <ul>
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
