import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-container">
        {skills.map((group) => (
          <div className="skill-category" key={group.category}>
            <h3>{group.category}</h3>
            <div className="skill-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
