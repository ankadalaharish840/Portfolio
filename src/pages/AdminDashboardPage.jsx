import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ALL_PROJECTS } from '../components/Projects'
import {
  adminLogin,
  adminLogout,
  getProjectContent,
  isAdminLoggedIn,
  saveProjectContent,
  resetProjectContent,
} from '../data/projectContent'

function projectName(projectId) {
  return ALL_PROJECTS.find((p) => p.id === projectId)?.title || projectId
}

export default function AdminDashboardPage() {
  const [authenticated, setAuthenticated] = useState(() => isAdminLoggedIn())
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [selectedProjectId, setSelectedProjectId] = useState(ALL_PROJECTS[0].id)
  const [savedMessage, setSavedMessage] = useState('')

  const selectedContent = useMemo(() => getProjectContent(selectedProjectId), [selectedProjectId, savedMessage])

  const [title, setTitle] = useState(selectedContent.title || '')
  const [tagline, setTagline] = useState(selectedContent.tagline || '')
  const [githubUrl, setGithubUrl] = useState(selectedContent.githubUrl || '')
  const [releaseDate, setReleaseDate] = useState(selectedContent.releaseDate || '')
  const [featuresText, setFeaturesText] = useState((selectedContent.features || []).join('\n'))
  const [privacyPolicySummary, setPrivacyPolicySummary] = useState(selectedContent.privacyPolicySummary || '')
  const [privacyPolicy, setPrivacyPolicy] = useState(selectedContent.privacyPolicy || '')
  const [termsSummary, setTermsSummary] = useState(selectedContent.termsSummary || '')
  const [termsAndConditions, setTermsAndConditions] = useState(selectedContent.termsAndConditions || '')

  function refreshFromStore(projectId) {
    const current = getProjectContent(projectId)
    setTitle(current.title || '')
    setTagline(current.tagline || '')
    setGithubUrl(current.githubUrl || '')
    setReleaseDate(current.releaseDate || '')
    setFeaturesText((current.features || []).join('\n'))
    setPrivacyPolicySummary(current.privacyPolicySummary || '')
    setPrivacyPolicy(current.privacyPolicy || '')
    setTermsSummary(current.termsSummary || '')
    setTermsAndConditions(current.termsAndConditions || '')
  }

  function handleProjectChange(projectId) {
    setSelectedProjectId(projectId)
    refreshFromStore(projectId)
    setSavedMessage('')
  }

  function handleLogin(e) {
    e.preventDefault()
    const ok = adminLogin(username.trim(), password)
    if (!ok) {
      setLoginError('Invalid username or password.')
      return
    }
    setLoginError('')
    setAuthenticated(true)
    refreshFromStore(selectedProjectId)
  }

  function handleSave(e) {
    e.preventDefault()
    saveProjectContent(selectedProjectId, {
      title: title.trim(),
      tagline: tagline.trim(),
      githubUrl: githubUrl.trim(),
      releaseDate,
      features: featuresText.split('\n').map((line) => line.trim()).filter(Boolean),
      privacyPolicySummary: privacyPolicySummary.trim(),
      privacyPolicy: privacyPolicy.trim(),
      termsSummary: termsSummary.trim(),
      termsAndConditions: termsAndConditions.trim(),
    })
    setSavedMessage(`Saved changes for ${projectName(selectedProjectId)}.`)
  }

  function handleReset() {
    resetProjectContent(selectedProjectId)
    refreshFromStore(selectedProjectId)
    setSavedMessage(`Reset overrides for ${projectName(selectedProjectId)}.`)
  }

  function handleLogout() {
    adminLogout()
    setAuthenticated(false)
    setUsername('')
    setPassword('')
    setSavedMessage('')
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="card p-7">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Project Admin Login</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Private access page for full project content customization.
            </p>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Username</label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
              {loginError && <p className="text-sm text-red-600">{loginError}</p>}
              <button type="submit" className="btn-primary w-full justify-center">Login</button>
            </form>
            <div className="mt-5 text-xs text-slate-500 dark:text-slate-400">
              Authorized administrators only.
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="card p-7">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Project Control Dashboard</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">Edit hero content, release dates, feature lists, and complete legal content for each project.</p>
            </div>
            <button onClick={handleLogout} className="btn-secondary">Logout</button>
          </div>

          <form onSubmit={handleSave} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Project</label>
              <select
                value={selectedProjectId}
                onChange={(e) => handleProjectChange(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                {ALL_PROJECTS.map((project) => (
                  <option key={project.id} value={project.id}>{project.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Project Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Tagline / Hero Description</label>
              <textarea
                rows={3}
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">GitHub URL (optional)</label>
              <input
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Release Date</label>
              <input
                type="date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Feature Updates (one line per feature)</label>
              <textarea
                rows={6}
                value={featuresText}
                onChange={(e) => setFeaturesText(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Privacy Policy Summary</label>
              <textarea
                rows={4}
                value={privacyPolicySummary}
                onChange={(e) => setPrivacyPolicySummary(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Privacy Policy</label>
              <textarea
                rows={8}
                value={privacyPolicy}
                onChange={(e) => setPrivacyPolicy(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Terms and Conditions Summary</label>
              <textarea
                rows={4}
                value={termsSummary}
                onChange={(e) => setTermsSummary(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Terms and Conditions</label>
              <textarea
                rows={8}
                value={termsAndConditions}
                onChange={(e) => setTermsAndConditions(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button type="submit" className="btn-primary">Save Changes</button>
              <button type="button" className="btn-secondary" onClick={handleReset}>Reset Project Overrides</button>
            </div>

            {savedMessage && (
              <p className="text-sm text-green-700 dark:text-green-300">{savedMessage}</p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}
