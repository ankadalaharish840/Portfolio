import { useEffect, useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectContent } from '../../data/projectContent'

const PROJECT_META = {
  'expense-tracker': {
    title: 'Expense Tracker',
    badge: 'Mobile App',
    accent: 'from-orange-500 to-rose-500',
  },
  fileflingr: {
    title: 'FileFlingr',
    badge: 'Cross-Platform',
    accent: 'from-teal-500 to-cyan-500',
  },
  cashclown: {
    title: 'CashClown',
    badge: 'Web App',
    accent: 'from-green-500 to-emerald-600',
  },
}

export default function ProjectLegalDocumentPage({ documentType }) {
  const { projectId } = useParams()
  const projectMeta = PROJECT_META[projectId]

  const content = useMemo(() => {
    if (!projectMeta) return null
    return getProjectContent(projectId)
  }, [projectId, projectMeta])

  useEffect(() => {
    if (!projectMeta || !content) return
    const title = documentType === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'
    document.title = `${title} — ${content.title || projectMeta.title} — LocalCoreLabs`
  }, [content, documentType, projectMeta])

  if (!projectMeta || !content) {
    return <Navigate to="/projects" replace />
  }

  const pageTitle = documentType === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'
  const fullContent = documentType === 'privacy' ? content.privacyPolicy : content.termsAndConditions
  const summary = documentType === 'privacy' ? content.privacyPolicySummary : content.termsSummary
  const siblingPath = documentType === 'privacy' ? `/projects/${projectId}/terms` : `/projects/${projectId}/privacy`
  const siblingLabel = documentType === 'privacy' ? 'View Terms and Conditions' : 'View Privacy Policy'

  if (!fullContent) {
    return <Navigate to={`/projects/${projectId}`} replace />
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 mb-8 text-sm">
          <Link to="/projects" className="text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
            Projects
          </Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <Link to={`/projects/${projectId}`} className="text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
            {content.title || projectMeta.title}
          </Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-slate-900 dark:text-white font-medium">{pageTitle}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-3xl bg-gradient-to-br ${projectMeta.accent} p-8 md:p-12 mb-8 text-white relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-4">
              {projectMeta.badge}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{pageTitle}</h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6">
              {content.title || projectMeta.title} legal document page. This is a dedicated page for the full {pageTitle.toLowerCase()}.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={`/projects/${projectId}`}
                className="px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-sm font-semibold hover:bg-white/30 transition-all"
              >
                Back to Project
              </Link>
              <Link
                to={siblingPath}
                className="px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-sm font-semibold hover:bg-white/30 transition-all"
              >
                {siblingLabel}
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="card p-6 md:p-8 mb-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-600 dark:text-violet-400 mb-3">
            Summary
          </p>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
            {summary || 'No summary available.'}
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="card p-6 md:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-600 dark:text-violet-400 mb-2">
                Full Document
              </p>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {pageTitle} for {content.title || projectMeta.title}
              </h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Release date: <strong>{content.releaseDate || 'TBD'}</strong>
            </p>
          </div>
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <div className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-8 whitespace-pre-line">
              {fullContent}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  )
}