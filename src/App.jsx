import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Updates from './components/Updates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  
  return (
    <div className="min-h-screen bg-dark-300">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Technologies />
        <Updates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
