import { navLinks } from '../data/portfolioData'

export default function Navbar({ theme, toggleTheme, activeSection }) {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button id="theme-toggle" onClick={toggleTheme}>
          <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </nav>
    </header>
  )
}
