import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ALL_PROJECTS } from '../../components/Projects'
import { AnimatedProjectThumbnail } from '../../components/HumanVisuals'
import { getAllProjectContent } from '../../data/projectContent'

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function ProjectsIndexPage() {
  useEffect(() => {
    document.title = 'Projects — LocalCoreLabs'
  }, [])

  const filters = ['All', ...new Set(ALL_PROJECTS.map((p) => p.platform))]
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.platform === filter)
  const allContent = getAllProjectContent()

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            Projects Catalog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Everything shipped so far with feature highlights, release dates, and project-level policy pages.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === f
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          key={filter}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project) => {
            const managed = allContent[project.id]
            const features = managed?.features?.length ? managed.features : project.features
            const title = managed?.title || project.title
            const tagline = managed?.tagline || project.tagline
            const githubUrl = managed?.githubUrl || project.github
            return (
              <motion.div key={project.id} variants={card} whileHover={{ y: -5 }} className="card flex flex-col overflow-hidden group">
                <div className={`h-36 bg-gradient-to-br ${project.color} p-5 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <span className="relative z-10 text-xs font-bold text-white bg-white/20 backdrop-blur-sm rounded-lg px-2.5 py-1 w-fit">
                    {project.platform}
                  </span>
                  <div className="relative z-10 flex items-end justify-between">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <span className="text-3xl">{project.emoji}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-slate-500 dark:text-slate-400 text-sm italic mb-3">"{tagline}"</p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 line-clamp-2 flex-1">{project.description}</p>
                  <AnimatedProjectThumbnail projectId={project.id} />
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {features.slice(0, 4).map((f) => (
                      <span key={f} className="feature-badge">{f}</span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    Release Date: <strong>{managed?.releaseDate || 'TBD'}</strong>
                  </p>
                  <div className="flex gap-2 mt-auto pt-3 border-t border-slate-100 dark:border-slate-700">
                    <Link
                      to={`/projects/${project.id}`}
                      className="flex-1 text-center text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 transition-colors"
                      title={project.tooltip}
                    >
                      View Details →
                    </Link>
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 text-xs border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400 dark:text-slate-500">
            <div className="text-5xl mb-4">No matches</div>
            <p>No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
