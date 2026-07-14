import { education } from '../data/portfolioData'
export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-title">
        <h2>About Me</h2>
      </div>

      <div className="about-container">
        <div className="about-text">
          <p>
            I'm Deepika Joshi, an MCA graduate with a passion for designing
            clean, responsive, and user-friendly websites. I enjoy
            transforming ideas into visually appealing digital experiences
            while continuously improving my frontend skills.
          </p>
        </div>

        <div className="about-info">
          <div className="info-card">
            <h3>Education</h3>
{education.map((edu) => (
  <p key={edu.degree}>
    {edu.degree} — {edu.institution}
    <br />
    {edu.duration}
  </p>
))}
          </div>

          <div className="info-card">
            <h3>Location</h3>
            <p>Indore, Madhya Pradesh</p>
          </div>
        </div>
      </div>
    </section>
  )
}
