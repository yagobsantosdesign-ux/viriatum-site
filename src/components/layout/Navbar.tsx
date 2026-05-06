import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

export function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const update = () => {
      const y = window.scrollY + 40
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('[data-navbar-theme]')
      )
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= y) {
          setTheme(sections[i].dataset.navbarTheme as 'dark' | 'light')
          return
        }
      }
      setTheme('dark')
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <motion.nav
      className={`navbar navbar--${theme}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <img src="/logo-horizontal.svg" className="navbar__logo" alt="Instituto Viriatum" />

      <div className="navbar__actions">
        <a href="#triagem" className="navbar__btn">
          INICIAR TRIAGEM
        </a>
      </div>
    </motion.nav>
  )
}
