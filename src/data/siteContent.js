// Central site content management - all editable text/content in one place
const SITE_CONTENT_KEY = 'lcl-site-content-v1'
const DRAFT_CONTENT_KEY = 'lcl-site-content-draft-v1'

// Default content for the entire website
export const DEFAULT_SITE_CONTENT = {
  // ============ BRAND & META ============
  brand: {
    name: 'LocalCoreLabs',
    emoji: '🚀',
    tagline: 'Full-stack products, privacy-first tools, and just enough chaos to keep things interesting.',
    metaTitle: 'LocalCoreLabs — Business Tools from Mumbai',
    copyright: 'Made with ☕ in Mumbai',
    funQuote: 'Any sufficiently advanced technology is indistinguishable from magic.',
    bugsJoke: 'Those are undocumented features. We prefer "surprise mechanics."',
  },

  // ============ CONTACT INFO ============
  contact: {
    email: 'ankadalaharish840@gmail.com',
    github: 'https://github.com/ankadalaharish840',
    linkedin: 'https://linkedin.com/in/harish-ankadala',
    location: 'Mumbai, India',
  },

  // ============ HERO SECTION ============
  hero: {
    badge: 'Built from Mumbai, with chai & semicolons',
    heading: 'Build Better Business Tools, One Laugh at a Time',
    subheading: 'Full-stack magic from Mumbai. Privacy-first. Zero corporate jargon. Maximum functionality.',
    ctaPrimary: '🚀 See Projects',
    ctaSecondary: '👋 Say Hi',
    robotSpeech: 'Beep boop! I build apps so you don\'t have to cry in Excel.',
    footerQuote: '"If it compiles, ship it." — Ancient Developer Proverb',
    stats: [
      { value: '500+', label: 'Expenses tracked', sublabel: '(before coffee)' },
      { value: '∞', label: 'Coffee consumed', sublabel: '(sponsored by chai)' },
      { value: '0', label: 'Excel nightmares', sublabel: '(we promise)' },
      { value: '256-bit', label: 'Encryption', sublabel: '(very secure)' },
    ],
  },

  // ============ NAVBAR ============
  navbar: {
    links: [
      { label: 'Home', path: '/' },
      { label: 'Projects', path: '/projects' },
      { label: 'About', path: '/about' },
      { label: 'Privacy', path: '/privacy' },
      { label: 'Contact', path: '/contact' },
    ],
    ctaButton: 'Say Hi 👋',
  },

  // ============ PROJECTS SECTION ============
  projects: {
    sectionTitle: 'Things We Actually Built 🛠️',
    sectionSubtitle: 'Three products. Real problems. Zero venture capital needed.',
    items: [
      {
        id: 'expense-tracker',
        emoji: '💰',
        title: 'Expense Tracker',
        description: 'Privacy-first expense tracking for iOS and Android.',
        color: 'from-orange-500 to-rose-500',
        tooltip: 'Track money, not people',
        platforms: ['iOS', 'Android'],
        features: ['100% Offline', 'PIN Protected', 'Encrypted Backup', 'Stats Dashboard'],
        githubUrl: 'https://github.com/ankadalaharish840/Expense-Tracker-Android',
        releaseDate: '2026-03-23',
      },
      {
        id: 'fileflingr',
        emoji: '📤',
        title: 'FileFlingr',
        description: 'Move files fast across Windows, iOS, Android, and Mac.',
        color: 'from-teal-500 to-cyan-500',
        tooltip: 'Fling files, not floppy disks',
        platforms: ['Windows', 'macOS', 'iOS', 'Android'],
        features: ['Local Transfer', 'Internet Transfer', 'Smart Compression', 'Storage Cleanup'],
        githubUrl: '',
        releaseDate: '2026-03-23',
      },
      {
        id: 'cashclown',
        emoji: '🤡',
        title: 'CashClown',
        description: 'Billing software built for real shops, not Fortune 500 finance teams.',
        color: 'from-green-500 to-emerald-500',
        tooltip: 'Serious billing, silly name',
        platforms: ['Web'],
        features: ['Point of Sale', 'Sales Dashboard', 'Inventory Alerts', 'Import/Export'],
        githubUrl: '',
        releaseDate: '2026-03-23',
      },
    ],
  },

  // ============ ABOUT PAGE ============
  about: {
    pageTitle: 'About LocalCoreLabs',
    introBadge: 'The Human Behind the Robot',
    teamMember: {
      name: 'Harish Ankadala',
      role: 'Founder & Full-Stack Developer',
      bio: 'Full-stack developer who believes business software should be as intuitive as ordering chai from your local tapri. Building tools that make life easier — one privacy-safe, locally-processed feature at a time.',
      avatar: '👨‍💻',
    },
    whyFunny: {
      title: 'Why the funny? 🤔',
      content: 'Because enterprise software doesn\'t have to feel like filing taxes. We make tools that work hard and make you smile a little. Life\'s too short for boring dashboards.',
    },
    timeline: [
      { year: '2024', title: 'The Spark', description: 'Had enough of bloated apps that spy on you. Started building alternatives.' },
      { year: '2025', title: 'First Launch', description: 'Expense Tracker 1.0 shipped. No VC. No tracking. Just vibes.' },
      { year: '2026 Q1', title: 'Product Suite', description: 'Launched FileFlingr and CashClown. Mumbai\'s one-person startup finally has a portfolio.' },
      { year: '2026 Q2', title: 'Mobile First', description: 'Android & iOS apps in development. Privacy everywhere.' },
      { year: '2026 Q3', title: 'Cloud Sync', description: 'Optional encrypted sync using your own Google Drive or OneDrive.' },
      { year: 'Future', title: 'Enterprise?', description: 'Maybe. But only if we can keep it fun and privacy-friendly.' },
    ],
  },

  // ============ CONTACT PAGE ============
  contactPage: {
    heading: 'Say Hi! 👋',
    subheading: 'Whether you\'ve got a question, feedback, or just want to say hello — I\'d love to hear from you.',
    locationLabel: 'Currently coding from',
    methods: [
      { type: 'github', label: 'GitHub', description: 'Check out the code' },
      { type: 'email', label: 'Email', description: 'Drop me a message' },
      { type: 'linkedin', label: 'LinkedIn', description: 'Let\'s connect' },
    ],
    formPlaceholders: {
      name: 'Your name',
      email: 'your.email@example.com',
      message: 'What\'s on your mind?',
    },
    submitButton: 'Send Message ✨',
    successMessage: 'Message received! I\'ll get back to you soon. 🚀',
  },

  // ============ PRIVACY PAGE ============
  privacy: {
    effectiveDate: 'March 23, 2026',
    sections: [
      {
        title: 'Who We Are',
        content: 'We are LocalCoreLabs, a one-person operation based in Mumbai, India. We build privacy-first tools and believe your data should stay yours.',
      },
      {
        title: 'What We Collect',
        content: 'We collect minimal data: your email (if you contact us), and basic analytics (page views, no personal tracking). Our apps store data locally on your device.',
      },
      {
        title: 'How We Use Data',
        content: 'Contact info is used only to respond to you. Analytics help us understand what pages are useful. We never sell, share, or monetize your data.',
      },
      {
        title: 'Your Rights',
        content: 'You can request deletion of any data we have about you. Just email us. We\'ll handle it faster than Mumbai traffic.',
      },
      {
        title: 'Contact',
        content: 'Questions? Email ankadalaharish840@gmail.com. We respond within 48 hours.',
      },
    ],
  },

  // ============ 404 PAGE ============
  notFound: {
    heading: 'This page got lost in Mumbai traffic',
    subheading: 'Last seen at Silk Board junction. If found, please redirect.',
    funFact: 'This 404 page took longer to design than some of our actual features.',
    ctaButton: 'Back to Safety',
  },

  // ============ FOOTER ============
  footer: {
    quickLinks: [
      { label: 'Home', path: '/' },
      { label: 'Projects', path: '/projects' },
      { label: 'About', path: '/about' },
      { label: 'Privacy', path: '/privacy' },
      { label: 'Contact', path: '/contact' },
    ],
    productLinks: [
      { label: 'Expense Tracker', path: '/projects/expense-tracker' },
      { label: 'FileFlingr', path: '/projects/fileflingr' },
      { label: 'CashClown', path: '/projects/cashclown' },
    ],
  },

  // ============ TECHNOLOGIES (About page) ============
  technologies: {
    categories: [
      { name: 'Frontend', level: 90, color: 'bg-blue-500' },
      { name: 'Mobile', level: 85, color: 'bg-purple-500' },
      { name: 'Backend', level: 80, color: 'bg-green-500' },
      { name: 'Tools', level: 75, color: 'bg-orange-500' },
    ],
    stack: [
      { name: 'React', emoji: '⚛️' },
      { name: 'React Native', emoji: '📱' },
      { name: 'TypeScript', emoji: '💙' },
      { name: 'Node.js', emoji: '🟢' },
      { name: 'Tailwind', emoji: '🎨' },
      { name: 'Vite', emoji: '⚡' },
      { name: 'Firebase', emoji: '🔥' },
      { name: 'PostgreSQL', emoji: '🐘' },
      { name: 'Git', emoji: '🌿' },
      { name: 'VS Code', emoji: '💻' },
      { name: 'Figma', emoji: '🎯' },
      { name: 'Docker', emoji: '🐳' },
    ],
  },

  // ============ UPDATES TIMELINE ============
  updates: [
    { date: 'Mar 2026', title: 'Portfolio Launch', description: 'This very website goes live!' },
    { date: 'Mar 2026', title: 'Expense Tracker v2', description: 'Major UI overhaul + cloud backup' },
    { date: 'Feb 2026', title: 'FileFlingr Beta', description: 'Cross-platform file transfer testing' },
    { date: 'Jan 2026', title: 'CashClown MVP', description: 'First billing feature complete' },
    { date: 'Dec 2025', title: 'LocalCoreLabs Born', description: 'One dev, one mission, zero investors' },
  ],

  // ============ PROJECT LEGAL CONTENT ============
  projectLegal: {
    'expense-tracker': {
      privacyPolicySummary: 'Your expense data lives entirely on your device — we never touch it. Backups are optional, encrypted end-to-end, and stored in your own Google Drive or OneDrive.',
      privacyPolicy: `Privacy Policy — Expense Tracker
Last updated: March 23, 2026

Your expense data is stored locally on your device by default. No automatic upload to our servers.

If you choose, you can connect Google Drive or OneDrive for encrypted backups in your own cloud accounts.

We do not collect expense data, track in-app behavior, build profiles, or sell your data.

Google login (for trial/premium) requires only basic account info — never your passwords or financial data.

Contact: support@localcorelabs.com`,
      termsSummary: 'A personal license to use the app for lawful expense tracking on your own devices. Don\'t hack, reverse-engineer, or clone it.',
      termsAndConditions: `Terms of Service — Expense Tracker
Last updated: March 23, 2026

You must be at least 13 years old to use this app.

We give you a personal, non-transferable license to use the app for personal expense tracking.

Do not hack, reverse-engineer, or clone the app.

LocalCoreLabs owns the app code. You own your data.

The app is provided "as is" without warranty.

Contact: support@localcorelabs.com`,
    },
    fileflingr: {
      privacyPolicySummary: 'FileFlingr transfers files directly between your devices. We do not collect file contents, transfer history, or analytics.',
      privacyPolicy: 'FileFlingr transfers files directly between devices using local network or internet connections. We do not collect, store, or transmit your file contents to any server operated by LocalCoreLabs.\n\nContact: support@localcorelabs.com',
      termsSummary: 'A personal license to transfer files for lawful purposes on your own devices.',
      termsAndConditions: 'FileFlingr is provided as a personal tool for lawful file transfer. Do not use it to share malicious or illegal content.\n\nContact: support@localcorelabs.com',
    },
    cashclown: {
      privacyPolicySummary: 'CashClown stores all billing data in your configured local storage. LocalCoreLabs does not have access to your business records.',
      privacyPolicy: 'CashClown stores all business data in your configured local storage — not on our servers. We do not collect or sell your business records.\n\nContact: support@localcorelabs.com',
      termsSummary: 'CashClown is a reporting tool — not financial or tax advice. Verify all reports before making decisions.',
      termsAndConditions: 'CashClown is provided as a business operations tool. It is not financial, accounting, or tax advice.\n\nContact: support@localcorelabs.com',
    },
  },
}

// ============ STORAGE FUNCTIONS ============

function readContent(key) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function writeContent(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data))
    window.dispatchEvent(new CustomEvent('lcl-content-updated'))
  } catch {
    console.error('Failed to save content')
  }
}

// Deep merge helper
function deepMerge(target, source) {
  const output = { ...target }
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      output[key] = deepMerge(target[key] || {}, source[key])
    } else {
      output[key] = source[key]
    }
  }
  return output
}

// ============ PUBLIC API ============

// Get published content (what the live site shows)
export function getSiteContent() {
  const saved = readContent(SITE_CONTENT_KEY)
  if (!saved) return DEFAULT_SITE_CONTENT
  return deepMerge(DEFAULT_SITE_CONTENT, saved)
}

// Get draft content (what admin is editing)
export function getDraftContent() {
  const draft = readContent(DRAFT_CONTENT_KEY)
  if (draft) return deepMerge(DEFAULT_SITE_CONTENT, draft)
  // Fall back to published content if no draft
  return getSiteContent()
}

// Save draft (does NOT affect live site)
export function saveDraft(content) {
  writeContent(DRAFT_CONTENT_KEY, content)
}

// Publish draft to live site
export function publishContent() {
  const draft = readContent(DRAFT_CONTENT_KEY)
  if (draft) {
    writeContent(SITE_CONTENT_KEY, draft)
    // Clear draft after publishing
    localStorage.removeItem(DRAFT_CONTENT_KEY)
    return true
  }
  return false
}

// Discard draft and revert to published content
export function discardDraft() {
  localStorage.removeItem(DRAFT_CONTENT_KEY)
  window.dispatchEvent(new CustomEvent('lcl-content-updated'))
}

// Check if there are unpublished changes
export function hasUnpublishedChanges() {
  const draft = readContent(DRAFT_CONTENT_KEY)
  return !!draft
}

// Reset all content to defaults
export function resetAllContent() {
  localStorage.removeItem(SITE_CONTENT_KEY)
  localStorage.removeItem(DRAFT_CONTENT_KEY)
  window.dispatchEvent(new CustomEvent('lcl-content-updated'))
}

// Get specific section
export function getSection(sectionKey) {
  const content = getSiteContent()
  return content[sectionKey] || null
}

// Update specific section in draft
export function updateDraftSection(sectionKey, data) {
  const draft = getDraftContent()
  draft[sectionKey] = data
  saveDraft(draft)
}

// ============ LEGACY COMPATIBILITY ============
// For existing projectContent.js consumers

const SESSION_KEY = 'lcl-admin-session-v1'

export const ADMIN_CREDENTIALS = {
  username: import.meta.env.VITE_ADMIN_USERNAME || '',
  password: import.meta.env.VITE_ADMIN_PASSWORD || '',
}

export function adminLogin(username, password) {
  const ok = username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
  if (ok) {
    localStorage.setItem(SESSION_KEY, 'true')
  }
  return ok
}

export function adminLogout() {
  localStorage.removeItem(SESSION_KEY)
}

export function isAdminLoggedIn() {
  return localStorage.getItem(SESSION_KEY) === 'true'
}

// Project content helpers (legacy compatibility)
export function getProjectContent(projectId) {
  const content = getSiteContent()
  const project = content.projects.items.find(p => p.id === projectId)
  const legal = content.projectLegal[projectId] || {}
  return {
    title: project?.title || '',
    tagline: project?.description || '',
    features: project?.features || [],
    githubUrl: project?.githubUrl || '',
    releaseDate: project?.releaseDate || '',
    ...legal,
  }
}

export function getAllProjectContent() {
  const content = getSiteContent()
  const result = {}
  content.projects.items.forEach(project => {
    result[project.id] = getProjectContent(project.id)
  })
  return result
}
