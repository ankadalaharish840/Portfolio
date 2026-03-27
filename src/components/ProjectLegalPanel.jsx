import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProjectLegalPanel({
  projectId,
  projectTitle,
  releaseDate,
  privacyPolicySummary,
  privacyPolicy,
  termsSummary,
  termsAndConditions,
}) {
  const displayPrivacySummary =
    privacyPolicySummary ||
    (privacyPolicy ? privacyPolicy.slice(0, 280).trimEnd() + '…' : 'No privacy policy set.')
  const displayTermsSummary =
    termsSummary ||
    (termsAndConditions ? termsAndConditions.slice(0, 280).trimEnd() + '…' : 'No terms set.')

  return (
    <>
      <div className="space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-5 border-violet-200 dark:border-violet-800"
        >
          <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wide mb-1">
            Release Info
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>{projectTitle}</strong> — available since{' '}
            <strong>{releaseDate || 'TBD'}</strong>
          </p>
        </motion.div>

        <motion.div
          id="privacy"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-5 scroll-mt-24"
        >
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
            Privacy Policy
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
            {displayPrivacySummary}
          </p>
          {privacyPolicy && (
            <Link
              to={`/projects/${projectId}/privacy`}
              className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline underline-offset-2 transition-colors"
            >
              Read full privacy policy →
            </Link>
          )}
        </motion.div>

        <motion.div
          id="terms"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-5 scroll-mt-24"
        >
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
            Terms &amp; Conditions
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
            {displayTermsSummary}
          </p>
          {termsAndConditions && (
            <Link
              to={`/projects/${projectId}/terms`}
              className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline underline-offset-2 transition-colors"
            >
              Read full terms →
            </Link>
          )}
        </motion.div>
      </div>
    </>
  )
}

