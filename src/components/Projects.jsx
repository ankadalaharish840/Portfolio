import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAllProjectContent } from '../data/projectContent'
import { AnimatedProjectThumbnail } from './HumanVisuals'

export const ALL_PROJECTS = [
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    emoji: '💰',
    tagline: 'Track spends locally. PIN-encrypted. Ad-free bliss.',
    description: 'iOS and Android app that tracks income, expenses, lending & borrowing with offline privacy-first storage.',
    features: ['100% Offline', 'PIN Protected', 'Encrypted Backup', 'Stats Dashboard'],
    platform: 'Mobile',
    color: 'from-orange-500 to-rose-500',
    github: 'https://github.com/ankadalaharish840/Expense-Tracker-Android',
    tooltip: 'Your wallet, encrypted. Not even we can peek.',
  },
  {
    id: 'fileflingr',
    title: 'FileFlingr',
    emoji: '📦',
    tagline: 'Transfer files across Windows, iOS, Android, and Mac.',
    description: 'Transfer files over LAN or internet, compress large folders, and clean storage clutter in one place.',
    features: ['Local Transfer', 'Compression', 'Cross-Platform', 'No Account'],
    platform: 'Cross-Platform',
    color: 'from-teal-500 to-cyan-500',
    github: null,
    tooltip: 'No more bloated drives, just pure flingage!',
  },
  {
    id: 'cashclown',
    title: 'CashClown',
    emoji: '📊',
    tagline: 'Billing software with AI insights. No more Excel nightmares.',
    description: 'Billing for shops and gyms with inventory control, sales forecasting, and clean reporting.',
    features: ['Sales Dashboard', 'AI Forecast', 'Inventory', 'Import/Export'],
    platform: 'Web',
    color: 'from-green-500 to-emerald-500',
    github: 'https://github.com/ankadalaharish840/Billing-Software',
    tooltip: 'This project fixes what Excel broke',
  },
]

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

function ProjectCard({ project }) {
  const allContent = getAllProjectContent()
  const managed = allContent[project.id]
  const pageLink = `/projects/${project.id}`
  const features = managed?.features?.length ? managed.features : project.features
  const title = managed?.title || project.title
  const tagline = managed?.tagline || project.tagline
  const githubUrl = managed?.githubUrl || project.github

  return (
    <motion.div
      variants={card}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="card group flex flex-col overflow-hidden"
    >
      <div className={`h-40 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10" />
        <span className="relative z-10 inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white text-xs font-semibold w-fit">
          {project.platform}
        </span>
        <div className="relative z-10 flex items-end justify-between">
          <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
          <span className="text-4xl">{project.emoji}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-3 italic">"{tagline}"</p>
        <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 line-clamp-2 flex-1">{project.description}</p>

        <AnimatedProjectThumbnail projectId={project.id} />

        <div className="flex flex-wrap gap-1.5 mb-4">
          {features.slice(0, 4).map((feature) => (
            <span key={feature} className="feature-badge">{feature}</span>
          ))}
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Release Date: <strong>{managed?.releaseDate || 'TBD'}</strong>
        </p>

        <div className="flex items-center gap-2 mt-auto pt-2 border-t border-violet-50 dark:border-slate-700">
          <Link
            to={pageLink}
            className="flex-1 text-center text-xs font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white rounded-lg py-2.5 transition-all shadow-sm hover:shadow-md"
            title={project.tooltip}
          >
            View Details →
          </Link>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 text-xs font-semibold border border-violet-200 dark:border-slate-600 text-violet-600 dark:text-violet-300 rounded-lg hover:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-gradient-to-b from-white to-violet-50/30 dark:from-slate-800/30 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Things We <span className="gradient-text">Actually Built</span> 🛠️
          </h2>
          <p className="section-subtitle">
            Three products. Real problems. Questionable names. Zero spreadsheet nightmares.
          </p>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ALL_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/projects" className="btn-secondary">
            Browse All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
