import { useEffect } from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { HumanStoryStrip } from '../components/HumanVisuals'
import { motion } from 'framer-motion'

export default function HomePage() {
  useEffect(() => {
    document.title = 'LocalCoreLabs — Business Tools from Mumbai'
  }, [])

  return (
    <>
      <Hero />
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-rose-50/40 to-white py-20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-300">
              Human snapshots
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
              Software is built by people, not just polished screenshots
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
              A few animated moments from the way LocalCoreLabs actually works: sketching, listening, shipping, then doing it again.
            </p>
          </motion.div>

          <HumanStoryStrip />
        </div>
      </section>
      <Projects />
    </>
  )
}
