import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const timeline = [
  {
    year: '2024',
    title: 'LocalCoreLabs Founded',
    desc: 'Started as a personal lab for practical business tools. The robot acquired sentience. Mostly harmless.',
    icon: '🚀',
  },
  {
    year: '2024',
    title: 'Expense Tracker Android',
    desc: 'Built a 100% offline, PIN-encrypted expense tracker. Zero cloud. Zero drama. 100% yours.',
    icon: '💰',
  },
  {
    year: '2024',
    title: 'CashClown Billing Software',
    desc: 'Replaced Excel nightmares for shop owners with an AI-forecasting billing system. Excel cried.',
    icon: '📊',
  },
  {
    year: '2025',
    title: 'FileFlingr',
    desc: 'Built a local-first file transfer & compression tool. Your drive finally breathed again.',
    icon: '📦',
  },
  {
    year: '2025',
    title: 'Cross-Platform Expansion',
    desc: 'Expanded product support to iOS, Android, Windows, and Mac where it matters most.',
    icon: '🌍',
  },
  {
    year: '2026',
    title: 'Still Building…',
    desc: 'More privacy-first tools, AI integrations & possibly a sentient billing robot. Stay tuned.',
    icon: '⚙️',
  },
]

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About — LocalCoreLabs'
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            👨‍💻 The Human Behind the Robot
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            About <span className="gradient-text">LocalCoreLabs</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Why funny? Because coding's already serious enough.
            Let's ship great software and laugh while doing it.<span className="ml-1">😎</span>
          </p>
        </motion.div>

        {/* Team card (just Harish) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-8 mb-14 flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="w-32 h-32 shrink-0 rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-xl shadow-blue-500/30 text-6xl select-none">
            🧑‍💻
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Harish Ankadala</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I build tools that simplify the boring, protect your privacy, and occasionally make you laugh.
              Based in Mumbai, fueled by filter coffee, React Native, and the occasional JavaScript stack trace at 2AM.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            How We Got Here 🗺️
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-violet-600 hidden sm:block" />
            <div className="space-y-6">
              {timeline.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex gap-5"
                >
                  <div className="relative z-10 hidden sm:flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border-2 border-blue-500 dark:border-blue-600 flex items-center justify-center text-xl shadow-md">
                      {event.icon}
                    </div>
                  </div>
                  <div className="card p-5 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl sm:hidden">{event.icon}</span>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">{event.year}</span>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">{event.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why funny */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="card p-8 text-center bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/30 dark:to-violet-950/30 border-blue-200 dark:border-blue-800"
        >
          <div className="text-4xl mb-4">😎</div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Why the funny?</h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Coding is serious. Deadlines are serious. Stack traces at 2AM are <em>very</em> serious.
            But the best products are built with joy. So we ship with semicolons <em>and</em> smiles.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/projects" className="btn-primary">See What We Built</Link>
            <Link to="/contact" className="btn-secondary">Work With Us</Link>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
