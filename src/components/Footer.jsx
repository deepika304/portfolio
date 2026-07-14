import { contactInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <h2>Get In Touch</h2>
      <p>
        I'm currently looking for Web Designer and Front-End Developer
        opportunities.
      </p>

      <div className="footer-contact">
        <a href={`mailto:${contactInfo.email}`}>
          <i className="fa-solid fa-envelope"></i>
          {contactInfo.email}
        </a>

        <a href={`tel:${contactInfo.phone}`}>
          <i className="fa-solid fa-phone"></i>
          {contactInfo.phoneDisplay}
        </a>

        <a href={contactInfo.github} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
          GitHub
        </a>

        <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
      </div>

      <p className="copyright">© 2026 Deepika Joshi. All Rights Reserved.</p>
    </footer>
  )
}
