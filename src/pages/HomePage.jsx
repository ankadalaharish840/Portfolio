import { useEffect } from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export default function HomePage() {
  useEffect(() => {
    document.title = 'LocalCoreLabs — Business Tools from Mumbai'
  }, [])

  return (
    <>
      <Hero />
      <Projects />
    </>
  )
}
