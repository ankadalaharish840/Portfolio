import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404 — Lost in Mumbai Traffic | LocalCoreLabs'
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Giant 404 */}
          <div className="text-8xl md:text-9xl font-black gradient-text select-none mb-4">
            404
          </div>

          {/* Stuck robot */}
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-7xl mb-6"
          >
            🤖
          </motion.div>

          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Page lost in Mumbai traffic 🚦
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
            This page took a left turn at the Silk Board junction and never came back.
            Don't worry — our robot is out looking for it.
            <br />
            <span className="text-sm italic">(ETA: TBD. This is Mumbai after all.)</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              🏠 Back to Home
            </Link>
            <Link to="/projects" className="btn-secondary">
              🚀 See Projects
            </Link>
          </div>

          <div className="mt-12 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              💡 Fun fact: This 404 page took longer to design than some of our actual features.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
