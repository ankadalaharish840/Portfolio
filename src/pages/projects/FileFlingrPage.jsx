import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProjectLegalPanel from '../../components/ProjectLegalPanel'
import { getProjectContent } from '../../data/projectContent'

const defaultFeatureDetails = {
  'Local Transfer': 'Transfer files quickly over local network.',
  Compression: 'Reduce file size before transfer or storage.',
  'Cross-Platform': 'Use the app across supported desktop systems.',
  'No Account': 'Start using without account registration.',
}

export default function FileFlingrPage() {
  useEffect(() => {
    document.title = 'FileFlingr — LocalCoreLabs'
  }, [])

  const content = useMemo(() => getProjectContent('fileflingr'), [])
  const features = content.features || []
  const projectTitle = content.title || 'FileFlingr'
  const projectTagline = content.tagline || 'Transfer, compress, and clean up files with local-first control.'
  const githubUrl = content.githubUrl || ''

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-500 p-8 md:p-12 mb-10 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-4 right-6 text-8xl opacity-20 select-none">📦</div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-4">Cross-Platform</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{projectTitle}</h1>
            <p className="text-xl text-teal-100 mb-6 max-w-xl">
              {projectTagline}
            </p>
            <p className="text-sm text-teal-100/90 mb-6">Available on: Windows, iOS, Android, and Mac</p>
            <div className="flex flex-wrap gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-sm font-semibold hover:bg-white/30 transition-all"
                >
                  GitHub →
                </a>
              )}
              <a href="#privacy" className="px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-sm font-semibold hover:bg-white/30 transition-all">
                Privacy Policy
              </a>
              <a href="#terms" className="px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-sm font-semibold hover:bg-white/30 transition-all">
                Terms and Conditions
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Feature Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature} className="card p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{feature}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {defaultFeatureDetails[feature] || 'Feature configured from dashboard updates.'}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <ProjectLegalPanel
          projectTitle={projectTitle}
          releaseDate={content.releaseDate}
          privacyPolicySummary={content.privacyPolicySummary}
          privacyPolicy={content.privacyPolicy}
          termsSummary={content.termsSummary}
          termsAndConditions={content.termsAndConditions}
        />
      </div>
    </div>
  )
}
