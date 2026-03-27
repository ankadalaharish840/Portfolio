import { useState, useEffect, useRef, useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeContext } from '../App'

const projectLinks = [
  { name: 'Expense Tracker', href: '/projects/expense-tracker' },
  { name: 'FileFlingr', href: '/projects/fileflingr' },
  { name: 'CashClown', href: '/projects/cashclown' },
  { name: 'View All Projects', href: '/projects' },
]

function MoonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}
function SunIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  )
}

function HamburgerIcon({ open }) {
  return (
    <div className="w-6 h-5 flex flex-col justify-between">
      <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
      <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
      <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const { darkMode, toggleDark } = useContext(ThemeContext)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProjectsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); setProjectsOpen(false) }, [location])

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-violet-600 dark:text-violet-400'
        : 'text-slate-600 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400'
    }`

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-md shadow-slate-200/60 dark:shadow-slate-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-md group-hover:shadow-violet-500/40 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-base">L</span>
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white hidden sm:block">
              LocalCoreLabs <span className="animate-bounce-subtle inline-block">🚀</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>

            {/* Projects dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProjectsOpen(v => !v)}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400 transition-colors"
              >
                Projects
                <motion.svg
                  animate={{ rotate: projectsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {projectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="nav-dropdown"
                  >
                    {projectLinks.map(link => (
                      <Link key={link.href} to={link.href} className="nav-dropdown-item">
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/privacy" className={navLinkClass}>Privacy</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode (for fun 😄)'}
              className="p-2 rounded-xl text-slate-500 hover:text-violet-600 hover:bg-violet-50 dark:text-slate-400 dark:hover:text-violet-300 dark:hover:bg-slate-800 transition-all"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* CTA */}
            <Link to="/contact" className="hidden md:inline-flex btn-primary text-sm py-2 px-4">
              Say Hi 👋
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              <HamburgerIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="px-4 py-5 space-y-1">
              {[
                { to: '/', label: 'Home' },
                { to: '/projects', label: 'Projects' },
                { to: '/about', label: 'About' },
                { to: '/privacy', label: 'Privacy' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <Link key={to} to={to}
                  className="block py-2.5 px-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors">
                  {label}
                </Link>
              ))}
              <div className="pt-2">
                <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                  Say Hi 👋
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

