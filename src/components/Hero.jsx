export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="intro">Hello, I'm</p>
        <h1>Deepika Joshi</h1>
        <h2>Web Designer & Front-End Developer</h2>
        <p className="hero-text">
          Passionate about creating clean, responsive and user-friendly
          websites while continuously learning modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="/DeepikaJoshiResume_.pdf" className="btn secondary-btn" download>
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/DeepikaPhoto.jpeg" alt="Deepika Joshi" />
      </div>
    </section>
  )
}
