import { useState } from 'react'
import { motion } from 'framer-motion'

function PolicyModal({ title, content, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 overflow-y-auto">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative z-10 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full p-8 border border-slate-200 dark:border-slate-700 mb-16"
      >
        <div className="flex items-start justify-between mb-5 gap-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors text-sm font-bold"
          >
            ✕
          </button>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
          {content}
        </p>
        <button
          onClick={onClose}
          className="mt-8 px-5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors"
        >
          Close
        </button>
      </motion.div>
    </div>
  )
}

export default function ProjectLegalPanel({
  projectTitle,
  releaseDate,
  privacyPolicySummary,
  privacyPolicy,
  termsSummary,
  termsAndConditions,
}) {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

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
          className="card p-5 border-blue-200 dark:border-blue-800"
        >
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1">
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
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 transition-colors"
            >
              Read full privacy policy →
            </button>
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
            <button
              onClick={() => setShowTerms(true)}
              className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 transition-colors"
            >
              Read full terms →
            </button>
          )}
        </motion.div>
      </div>

      {showPrivacy && (
        <PolicyModal
          title={`Privacy Policy — ${projectTitle}`}
          content={privacyPolicy}
          onClose={() => setShowPrivacy(false)}
        />
      )}
      {showTerms && (
        <PolicyModal
          title={`Terms and Conditions — ${projectTitle}`}
          content={termsAndConditions}
          onClose={() => setShowTerms(false)}
        />
      )}
    </>
  )
}

