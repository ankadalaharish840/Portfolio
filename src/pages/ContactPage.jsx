import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function GithubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

const CONTACT_EMAIL = 'ankadalaharish840@gmail.com'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — LocalCoreLabs'
  }, [])

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Name must be at least 2 characters.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(err => ({ ...err, [e.target.name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
    // Simulate send — replace with EmailJS or Formspree for real sending
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            📬 We read every message (yes, really)
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Say <span className="gradient-text">Hi!</span> 👋
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Got a project idea, a bug report, or just want to discuss why your Excel spreadsheet betrayed you?
            We're listening.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            <a href={`mailto:${CONTACT_EMAIL}`}
              className="card p-5 flex items-center gap-4 hover:border-blue-400 dark:hover:border-blue-500 group transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-2xl shrink-0">
                📧
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Email</div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all">
                  {CONTACT_EMAIL}
                </div>
              </div>
            </a>

            <a href="https://github.com/ankadalaharish840" target="_blank" rel="noopener noreferrer"
              className="card p-5 flex items-center gap-4 hover:border-blue-400 dark:hover:border-blue-500 group transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center shrink-0 text-slate-600 dark:text-slate-300">
                <GithubIcon />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">GitHub</div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  ankadalaharish840
                </div>
              </div>
            </a>

            <div className="card p-5">
              <div className="text-2xl mb-2">🏙️</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">Location</div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Mumbai, India</div>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                IST (UTC+5:30) · Response time: faster than Mumbai local rush 🚦
              </p>
            </div>

            <div className="card p-5 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/30 dark:to-violet-950/30 border-blue-200 dark:border-blue-800">
              <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                💬 "Let's build something that breaks Excel's monopoly."
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="card p-7">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message received!</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    We'll get back to you faster than a git push. Probably.
                  </p>
                  <button onClick={() => setStatus('idle')}
                    className="btn-secondary mt-6 text-sm">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Drop Us a Line</h2>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="What should we call you? (Not 'undefined')"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.name ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="you@company.com (we won't spam, pinky promise)"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.email ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={5}
                      placeholder="Tell us about your project, idea, or how Excel ruined your week…"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${errors.message ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Brewing code coffee...
                      </>
                    ) : '🚀 Send Message'}
                  </button>
                  <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
                    No spam. No tracking. Just a human reading your message (with coffee). ☕
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
