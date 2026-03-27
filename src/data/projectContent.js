const STORAGE_KEY = 'lcl-project-content-v1'
const SESSION_KEY = 'lcl-admin-session-v1'

// Credentials are loaded from .env.local (never committed to git)
export const ADMIN_CREDENTIALS = {
  username: import.meta.env.VITE_ADMIN_USERNAME || '',
  password: import.meta.env.VITE_ADMIN_PASSWORD || '',
}

const ET_PRIVACY_POLICY = `Privacy Policy — Expense Tracker
Last updated: March 23, 2026

Welcome to Expense Tracker, built by LocalCoreLabs. This page explains what happens with your data — we promise not to be creepy, and we'll try not to put you to sleep in the process. By using Expense Tracker, you agree to this Privacy Policy.

WHO WE ARE
We are LocalCoreLabs, the folks behind Expense Tracker. Our mission: help you understand where your money goes, without us knowing where your money goes.

WHAT DATA WE STORE (AND WHERE)
When you use Expense Tracker, your expense data is stored locally on your device by default. No automatic upload of your expenses to our servers. No secret data warehouse with your coffee habits.

If you choose, you can connect Google Drive or OneDrive to store encrypted backups in your own cloud accounts. That's optional — the app works perfectly without it.

ENCRYPTION AND PIN
Your expense data is protected with a PIN-based encryption system. Even we can't read your expense entries, and neither can anyone who picks up your phone — unless they know your PIN.

You are responsible for choosing a strong PIN (not "1234") and keeping it safe.

WHAT WE DO NOT COLLECT
We do not collect your expense data on our servers. We do not track your in-app behavior for analytics. We do not build marketing profiles about you. We do not sell your data. Your money story stays on your device.

GOOGLE LOGIN, TRIALS, AND PREMIUM
You can use Expense Tracker in three ways:

No login (anonymous mode): You see ads. Your data still stays local.

Login with Google — 60-day trial: You sign in, we get basic account info (name, email, Google ID) to recognize you and give you an ad-free trial. We do not get your Google password or any bank or financial details.

Premium (ad-free): We use your Google account info only to maintain your premium status. We do not use it for marketing or building profiles.

ADS
If you are not logged in, not on trial, and not premium, you will see ads through third-party ad networks. We do not share your expense entries with advertisers. Ad networks operate under their own privacy policies.

OPTIONAL CLOUD BACKUPS
If you turn on cloud backup, encrypted copies of your data are stored in your own Google Drive and/or Microsoft OneDrive. Files are unreadable without your PIN. You can turn cloud sync off at any time, or revoke our access from your Google or Microsoft account settings.

THIRD-PARTY SERVICES WE USE
Google OAuth — for login and trial/premium management
Google Drive (optional) — for encrypted backups in your own account
Microsoft OneDrive (optional) — for encrypted backups in your own account
Advertising partners — to show ads to non-trial, non-premium users

Each service operates under its own privacy policy.

YOUR CHOICES AND CONTROLS
Use the app without logging in (with ads). Log in with Google for a 60-day ad-free trial or premium. Enable or disable cloud backups at any time. Change your PIN inside the app. Delete your local data through the app or by uninstalling. Delete cloud backups directly from Google Drive or OneDrive if you no longer want them.

DATA RETENTION
Your local data stays on your device until you delete it or uninstall the app. If you signed in with Google, we may keep minimal account info (email, subscription status) as long as needed to provide access and meet legal obligations. Contact us to request removal.

SECURITY
We use PIN-based encryption for your expense data and restrict access to systems where account info is stored. No app can promise 100% perfect security — please use a strong PIN, keep your device updated, and protect physical access to your device.

CHILDREN'S PRIVACY
Expense Tracker is not designed for children under 13. If you believe a child has signed in and provided information to us, contact us and we will take appropriate action.

CHANGES TO THIS PRIVACY POLICY
If we change what we do with your data, we will update this page and the "Last updated" date. For major changes, we may also show an in-app notice. Continued use after changes means you accept the updated policy.

CONTACT
LocalCoreLabs — Localcorelabs@gmail.com`

const ET_TERMS = `Terms of Service — Expense Tracker
Last updated: March 23, 2026

Welcome to Expense Tracker, built by LocalCoreLabs ("we," "us," or "our"). By installing or using the app, you agree to these Terms. If you don't agree, please uninstall the app and go do something fun instead.

1. WHO CAN USE THIS APP
You must be at least 13 years old (or the minimum legal age in your country) and have the legal authority to agree to these Terms. You promise not to use the app for anything illegal or generally villainous.

2. YOUR LICENSE
We give you a personal, non-transferable, revocable, limited license to download and use the app on your own devices for personal expense tracking. You are not buying the app or its code — think of it as a library book that lives on your phone.

3. WHAT YOU MUST NOT DO
No hacking: Do not hack, crack, or bypass security or PIN protections in the app. Do not try to access data that isn't yours.
No reverse engineering: Do not decompile or disassemble the app to inspect its source code.
No cloning: Do not copy the app's design, features, or branding to create a competing product. Be inspired — but don't build an evil twin.
No abuse: Do not use bots or automated tools to overload services connected to the app.

Violations may result in access termination and, if necessary, legal action. Please don't make us do paperwork.

4. HOW THE APP WORKS
By default, your expense data lives on your device. You can optionally connect Google Drive or OneDrive for encrypted backups in your own accounts. Using the app with or without logging in is your choice. Logging in with Google may give you a 60-day ad-free trial and access to premium features. Full details are in the Privacy Policy.

5. YOUR RESPONSIBILITIES
Keep your PIN and device secure. Use the app only for lawful personal expense tracking. You are responsible for anything that happens under your account or on your device. We are not liable if you log an expense wrong and think you're richer than you are.

6. INTELLECTUAL PROPERTY
LocalCoreLabs owns the app, its code, design, and logo — protected by copyright and applicable law. You own your data — the expenses you enter and categories you create. By using the app, you give us a limited right to process your data only as needed to run the app and sync to your cloud accounts if you choose. Feedback you send may be used to improve the app.

7. TRIALS, PREMIUM, AND PAYMENTS
Log in with Google for one 60-day ad-free trial per person. Go premium for no ads, subject to your chosen plan. Payments and refunds go through the app store (Google Play / App Store). Their rules apply. We can change pricing in the future but will not retroactively change what you already paid for.

8. THIRD-PARTY SERVICES
The app interacts with Google OAuth, Google Drive, Microsoft OneDrive, and advertising networks. These services operate under their own terms and privacy policies. We are not responsible for what they do.

9. NO FINANCIAL ADVICE
The app helps you track money; it does not tell you what to do with it. We are not financial advisors. You are fully responsible for your financial decisions. If things go sideways because your graphs looked good, that's on you.

10. DISCLAIMER
The app is provided "as is" and "as available." We do not promise it will always be bug-free, perfectly secure, or available 24/7. To the fullest extent allowed by law, we disclaim all warranties.

11. LIMITATION OF LIABILITY
To the maximum extent permitted by law, our total liability is limited to the amount you paid us in the last 12 months, or USD 50 if you never paid. We are not liable for indirect, incidental, or consequential damages.

12. TERMINATION
You can leave any time by uninstalling the app and optionally deleting your cloud backups. We can suspend or terminate your access if you violate these Terms or if we change or shut down the app.

13. GOVERNING LAW
These Terms are governed by the laws of India. Disputes will be handled in the courts of Mumbai, Maharashtra, unless local law requires otherwise. We will always try to resolve issues by email first.

14. CHANGES TO THESE TERMS
We may update these Terms as features change or laws require. We will update the "Last updated" date and may show an in-app notice. Continued use after changes means you accept the new Terms.

CONTACT
LocalCoreLabs — Localcorelabs@gmail.com

By using Expense Tracker, you confirm you've read and agreed to these Terms. If you actually read all of this: you're our kind of person.`

const DEFAULT_CONTENT = {
  'expense-tracker': {
    title: 'Expense Tracker',
    tagline: 'Privacy-first expense tracking for iOS and Android.',
    githubUrl: 'https://github.com/ankadalaharish840/Expense-Tracker-Android',
    releaseDate: '2026-03-23',
    features: ['100% Offline', 'PIN Protected', 'Encrypted Backup', 'Stats Dashboard'],
    privacyPolicySummary: 'Your expense data lives entirely on your device — we never touch it. Backups are optional, encrypted end-to-end, and stored in your own Google Drive or OneDrive. Google login (for the trial or premium) requires only basic account info — never your passwords or financial data.',
    privacyPolicy: ET_PRIVACY_POLICY,
    termsSummary: 'A personal license to use the app for lawful expense tracking on your own devices. Don\'t hack, reverse-engineer, or clone it. You own your data; LocalCoreLabs owns the code. The 60-day ad-free trial is one per person. Payments go through Google Play / App Store.',
    termsAndConditions: ET_TERMS,
    lastUpdated: '2026-03-23',
  },
  fileflingr: {
    title: 'FileFlingr',
    tagline: 'Move files fast across Windows, iOS, Android, and Mac.',
    githubUrl: '',
    releaseDate: '2026-03-23',
    features: ['Local Transfer', 'Internet Transfer', 'Smart Compression', 'Storage Cleanup'],
    privacyPolicySummary: 'FileFlingr transfers files directly between your devices. We do not collect file contents, transfer history, or analytics data of any kind. What you move stays between you and the destination.',
    privacyPolicy: 'FileFlingr transfers files directly between devices using local network or internet connections. We do not collect, store, or transmit your file contents to any server operated by LocalCoreLabs. No analytics, no behavior tracking, no data profiling. The app is a conduit — your files are yours.\n\nOptional compression features run entirely on your device.\n\nContact: Localcorelabs@gmail.com',
    termsSummary: 'A personal license to transfer and manage files for lawful purposes on your own devices. Do not use FileFlingr to share malicious, illegal, or infringing content. Provided as-is without warranty.',
    termsAndConditions: 'FileFlingr is provided as a personal, non-transferable tool for lawful file transfer and compression on your own devices.\n\nYou must not use FileFlingr to transfer, distribute, or store content that is malicious, illegal, harmful, or violates third-party intellectual property rights.\n\nLocalCoreLabs owns the app code and design. You own your files. The app is provided "as is" without warranty. We are not liable for data loss during transfer — always keep backups of important files.\n\nContact: Localcorelabs@gmail.com',
    lastUpdated: '2026-03-23',
  },
  cashclown: {
    title: 'CashClown',
    tagline: 'Billing software built for real shops, not Fortune 500 finance teams.',
    githubUrl: '',
    releaseDate: '2026-03-23',
    features: ['Point of Sale', 'Sales Dashboard', 'Inventory Alerts', 'Import/Export'],
    privacyPolicySummary: 'CashClown stores all billing and sales data in your configured local storage or database. LocalCoreLabs does not have access to your business records and does not sell any business data.',
    privacyPolicy: 'CashClown stores all business, billing, and inventory data in your configured local storage or database — not on LocalCoreLabs servers. We do not collect, access, or sell your business records.\n\nIf you use import/export features, data is processed locally on your device. No cloud transfer to our servers occurs.\n\nYou are responsible for backing up your own database and keeping your system secure.\n\nContact: Localcorelabs@gmail.com',
    termsSummary: 'CashClown is a reporting and operations tool — not financial or tax advice. Verify all reports before filing or making financial decisions. Your data, your responsibility.',
    termsAndConditions: 'CashClown is provided as a business operations and reporting tool. It is not financial, accounting, tax, or legal advice. You are responsible for verifying all reports and figures before making business decisions or filing with any regulatory body.\n\nLocalCoreLabs owns the app code. You own your business data. The app is provided "as is." We are not liable for business decisions made based on app reports.\n\nYou must not use CashClown for fraudulent billing, tax evasion, or any unlawful business activity.\n\nContact: Localcorelabs@gmail.com',
    lastUpdated: '2026-03-23',
  },
}

function readStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

function writeStore(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    window.dispatchEvent(new CustomEvent('lcl-content-updated'))
  } catch {
    // no-op
  }
}

export function getProjectContent(projectId) {
  const overrides = readStore()
  return {
    ...DEFAULT_CONTENT[projectId],
    ...(overrides[projectId] || {}),
  }
}

export function getAllProjectContent() {
  const overrides = readStore()
  const merged = {}
  Object.keys(DEFAULT_CONTENT).forEach((id) => {
    merged[id] = {
      ...DEFAULT_CONTENT[id],
      ...(overrides[id] || {}),
    }
  })
  return merged
}

export function saveProjectContent(projectId, nextContent) {
  const store = readStore()
  store[projectId] = {
    ...nextContent,
    lastUpdated: new Date().toISOString().slice(0, 10),
  }
  writeStore(store)
}

export function resetProjectContent(projectId) {
  const store = readStore()
  delete store[projectId]
  writeStore(store)
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

export const MANAGED_PROJECT_IDS = Object.keys(DEFAULT_CONTENT)
