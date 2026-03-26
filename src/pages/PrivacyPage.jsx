import { useEffect } from 'react'
import { motion } from 'framer-motion'

function Section({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="card p-7 mb-5"
    >
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
        {title}
      </h2>
      <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
        {children}
      </div>
    </motion.div>
  )
}

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy — LocalCoreLabs'
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-4xl block mb-4">🔐</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            <strong>Effective Date:</strong> March 23, 2026 · Last Updated: March 23, 2026
          </p>
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-sm text-green-700 dark:text-green-300">
            🎉 <strong>TL;DR version:</strong> We barely collect data. What stays on your device,{' '}
            <em>stays on your device.</em> No ads, no trackers, no funny business — just funny code.
          </div>
        </motion.div>

        <Section title="1. Who We Are 👋">
          <p>
            <strong>LocalCoreLabs</strong> is a software studio founded by Harish Ankadala, based in Mumbai, India.
            We build business tools, data-processing apps, and privacy-first mobile/web applications.
          </p>
          <p>
            Questions? Complaints? Existential crises about data? Contact us at:{' '}
            <a href="mailto:ankadalaharish840@gmail.com" className="text-blue-600 dark:text-blue-400 underline">
              ankadalaharish840@gmail.com
            </a>
          </p>
        </Section>

        <Section title="2. What We Collect (Spoiler: Not Much) 🤏">
          <p>
            Our apps are designed on a <strong>privacy-first, local-first</strong> principle. Here's the breakdown:
          </p>
          <ul className="list-none space-y-2">
            <li className="flex gap-2"><span className="text-green-500 shrink-0 mt-0.5">✅</span><span><strong>Expense Tracker:</strong> All data (transactions, categories, PINs) is stored <em>exclusively on your device</em> in an encrypted SQLite database. We never see it.</span></li>
            <li className="flex gap-2"><span className="text-green-500 shrink-0 mt-0.5">✅</span><span><strong>CashClown (Billing Software):</strong> Business data lives in your local database. No cloud sync unless you configure one yourself.</span></li>
            <li className="flex gap-2"><span className="text-green-500 shrink-0 mt-0.5">✅</span><span><strong>FileFlingr:</strong> File transfers happen peer-to-peer on your local network. Files don't pass through our servers.</span></li>
            <li className="flex gap-2"><span className="text-yellow-500 shrink-0 mt-0.5">⚠️</span><span><strong>Portfolio website (this site):</strong> We use basic server logs. No cookies, no tracking pixels, no analytics SDKs.</span></li>
          </ul>
        </Section>

        <Section title="3. Data We Absolutely Don't Collect 🚫">
          <ul className="list-none space-y-1.5">
            {[
              'Your financial data, transactions, or balances',
              'Your name, email, or phone number (unless you contact us)',
              'Location data',
              'Device identifiers for advertising',
              'Browsing history or behavior analytics',
              'Your PIN or encryption keys (they never leave your device)',
            ].map(item => (
              <li key={item} className="flex gap-2">
                <span className="text-red-500 shrink-0">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="4. Contact Form Data 📬">
          <p>
            If you use our contact form, we receive your <strong>name, email address, and message</strong>.
            This is used solely to respond to your inquiry — we won't add you to any mailing list,
            sell your data, or forward it to third parties.
            We delete inquiry data within 12 months if no further correspondence occurs.
          </p>
        </Section>

        <Section title="5. Encryption & Security 🔒">
          <p>
            Our Expense Tracker app uses <strong>TweetNaCl (NaCl crypto library)</strong> for
            AES-256-equivalent symmetric encryption of local backups. Your PIN is hashed using
            a secure one-way algorithm — it is never stored or transmitted in plain text.
          </p>
          <p>
            Google Drive backup (optional, user-initiated) sends encrypted blobs to <em>your own</em>{' '}
            Google Drive account. We never have access to your Drive credentials or the unencrypted contents.
          </p>
        </Section>

        <Section title="6. Third-Party Services 🔗">
          <p>
            Some apps optionally integrate with third-party services:
          </p>
          <ul className="list-none space-y-1.5">
            <li className="flex gap-2"><span className="text-blue-500">•</span><span><strong>Google Drive API</strong> — for optional encrypted backup. Subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Google's Privacy Policy</a>.</span></li>
            <li className="flex gap-2"><span className="text-blue-500">•</span><span><strong>Google Play Store</strong> — distribution platform. Subject to Google's policies.</span></li>
          </ul>
          <p>We do <strong>not</strong> use advertising networks, analytics SDKs (Firebase Analytics, Mixpanel, etc.), or crash reporters that phone home.</p>
        </Section>

        <Section title="7. Your Rights (GDPR & Indian DPDP Act) ⚖️">
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="space-y-1 list-none">
            {[
              'Access a copy of data we hold about you',
              'Rectify inaccurate data',
              'Request erasure ("right to be forgotten")',
              'Restrict or object to processing',
              'Data portability',
            ].map(right => (
              <li key={right} className="flex gap-2">
                <span className="text-violet-500 shrink-0">→</span>
                <span>{right}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2">
            To exercise any right, email us at{' '}
            <a href="mailto:ankadalaharish840@gmail.com" className="text-blue-600 dark:text-blue-400 underline">
              ankadalaharish840@gmail.com
            </a>.
            Since most of our apps store data <em>locally on your device</em>, the simplest way to
            exercise your rights is to use the in-app delete/export features.
          </p>
        </Section>

        <Section title="8. Children's Privacy 👶">
          <p>
            Our apps are not directed at children under 13. We do not knowingly collect personal data
            from children. If you believe a child has provided us personal data, contact us immediately
            and we'll handle it faster than a React re-render.
          </p>
        </Section>

        <Section title="9. Changes to This Policy 📝">
          <p>
            We may update this Privacy Policy from time to time. Major changes will be noted with
            a new "Last Updated" date above. Continued use of our apps after changes constitutes
            acceptance. We promise not to sneak in anything shady — that's not our vibe.
          </p>
        </Section>

        <Section title="10. Contact 📫">
          <p>
            Have a privacy concern? Found a bug? Want to share your CashClown success story?
          </p>
          <p>
            📧{' '}
            <a href="mailto:ankadalaharish840@gmail.com" className="text-blue-600 dark:text-blue-400 underline font-medium">
              ankadalaharish840@gmail.com
            </a>
          </p>
          <p>🏙️ Mumbai, Maharashtra, India</p>
        </Section>

        <div className="text-center mt-10 text-xs text-slate-400 dark:text-slate-500 italic">
          This privacy policy was written by an actual human (not an AI) who cares about your data. 🤝
        </div>
      </div>
    </div>
  )
}
