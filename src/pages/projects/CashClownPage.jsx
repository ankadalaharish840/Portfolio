import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProjectLegalPanel from '../../components/ProjectLegalPanel'
import { ProjectMotionPreview } from '../../components/HumanVisuals'
import { getProjectContent } from '../../data/projectContent'

const defaultFeatureDetails = {
  'Point of Sale': 'Create fast invoices for daily billing.',
  'Sales Dashboard': 'Monitor business performance with visual summaries.',
  'Inventory Alerts': 'Track stock and get low-inventory reminders.',
  'Import/Export': 'Move billing data using common formats.',
}

export default function CashClownPage() {
  useEffect(() => {
    document.title = 'CashClown — LocalCoreLabs'
  }, [])

  const content = useMemo(() => getProjectContent('cashclown'), [])
  const features = content.features || []
  const projectTitle = content.title || 'CashClown'
  const projectTagline = content.tagline || 'Billing and inventory workflows with clear business visibility.'
  const githubUrl = content.githubUrl || 'https://github.com/ankadalaharish840/Billing-Software'

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 p-8 md:p-12 mb-10 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-4 right-6 text-8xl opacity-20 select-none">📊</div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-4">Web App</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{projectTitle}</h1>
            <p className="text-xl text-green-100 mb-6 max-w-xl">
              {projectTagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-sm font-semibold hover:bg-white/30 transition-all"
              >
                GitHub →
              </a>
              <Link to="/projects/cashclown/privacy" className="px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-sm font-semibold hover:bg-white/30 transition-all">
                Privacy Policy
              </Link>
              <Link to="/projects/cashclown/terms" className="px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-sm font-semibold hover:bg-white/30 transition-all">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }} className="mb-10">
          <ProjectMotionPreview projectId="cashclown" />
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
          projectId="cashclown"
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
