import { useState, useEffect } from 'react'

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      let current = ''

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (!section) return

        const sectionTop = section.offsetTop - 150
        const sectionHeight = section.clientHeight

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = id
        }
      })

      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return active
}
