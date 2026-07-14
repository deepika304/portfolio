import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import ScrollTopButton from './components/ScrollTopButton'

import useTheme from './hooks/useTheme'
import useActiveSection from './hooks/useActiveSection'
import useScrollTop from './hooks/useScrollTop'

const sectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'certifications',
  'contact',
]

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(sectionIds)
  const { visible, scrollToTop } = useScrollTop()

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Footer />

      <ScrollTopButton visible={visible} onClick={scrollToTop} />
    </>
  )
}
