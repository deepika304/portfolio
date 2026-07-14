import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="section-title">
        <h2>Certifications</h2>
      </div>

      <div className="certificate-container">
        {certifications.map((cert) => (
          <div className="certificate-card" key={cert.title}>
            <img src={cert.image} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
