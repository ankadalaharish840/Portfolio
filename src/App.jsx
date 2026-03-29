import { useState, useEffect, createContext, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectsIndexPage from './pages/projects/ProjectsIndexPage'

const ExpenseTrackerPage = lazy(() => import('./pages/projects/ExpenseTrackerPage'))
const FileFlingrPage = lazy(() => import('./pages/projects/FileFlingrPage'))
const CashClownPage = lazy(() => import('./pages/projects/CashClownPage'))
const ProjectLegalDocumentPage = lazy(() => import('./pages/projects/ProjectLegalDocumentPage'))
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'))

export const ThemeContext = createContext({ darkMode: false, toggleDark: () => {} })

function RouteFallback() {
  return (
    <div className="min-h-[55vh] flex items-center justify-center px-4">
      <div className="card px-5 py-4 text-sm text-slate-600 dark:text-slate-300">Loading page...</div>
    </div>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try { return localStorage.getItem('lcl-dark') === 'true' } catch { return false }
  })

  useEffect(() => {
    try { localStorage.setItem('lcl-dark', darkMode) } catch { /* noop */ }
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDark: () => setDarkMode(d => !d) }}>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/projects" element={<ProjectsIndexPage />} />
              <Route path="/projects/expense-tracker" element={<ExpenseTrackerPage />} />
              <Route path="/projects/fileflingr" element={<FileFlingrPage />} />
              <Route path="/projects/cashclown" element={<CashClownPage />} />
              <Route path="/projects/:projectId/privacy" element={<ProjectLegalDocumentPage documentType="privacy" />} />
              <Route path="/projects/:projectId/terms" element={<ProjectLegalDocumentPage documentType="terms" />} />
              <Route path="/studio-release-control-lcl-9a7f" element={<AdminDashboardPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}
