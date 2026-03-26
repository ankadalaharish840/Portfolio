import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/* ── Mascot Robot ── */
function RobotMascot() {
  return (
    <div className="relative w-48 h-48 mx-auto select-none" aria-label="LocalCoreLabs robot mascot">
      <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
          {/* Antenna */}
          <rect x="96" y="4" width="8" height="22" rx="3" fill="#3b82f6"/>
          <circle cx="100" cy="6" r="7" fill="#60a5fa"/>
          <circle cx="100" cy="6" r="3" fill="white"/>
          {/* Head */}
          <rect x="50" y="24" width="100" height="72" rx="18" fill="#2563eb"/>
          <rect x="54" y="28" width="92" height="60" rx="14" fill="#3b82f6"/>
          {/* Eyes */}
          <circle cx="78" cy="52" r="12" fill="white"/>
          <circle cx="122" cy="52" r="12" fill="white"/>
          <motion.circle cx="80" cy="53" r="5" fill="#1e40af"
            animate={{ cx: [80, 82, 80, 78, 80] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle cx="124" cy="53" r="5" fill="#1e40af"
            animate={{ cx: [124, 126, 124, 122, 124] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle cx="81" cy="51" r="2" fill="white"/>
          <circle cx="125" cy="51" r="2" fill="white"/>
          {/* Mouth */}
          <rect x="76" y="76" width="48" height="8" rx="4" fill="white"/>
          <rect x="82" y="78" width="10" height="4" rx="2" fill="#93c5fd"/>
          <rect x="95" y="78" width="10" height="4" rx="2" fill="#93c5fd"/>
          <rect x="108" y="78" width="10" height="4" rx="2" fill="#93c5fd"/>
          {/* Neck */}
          <rect x="86" y="94" width="28" height="12" rx="4" fill="#2563eb"/>
          {/* Body */}
          <rect x="40" y="106" width="120" height="86" rx="20" fill="#1d4ed8"/>
          <rect x="46" y="112" width="108" height="74" rx="16" fill="#2563eb"/>
          {/* Chest panel */}
          <rect x="62" y="124" width="76" height="44" rx="10" fill="#1e40af"/>
          <circle cx="78" cy="136" r="7" fill="#60a5fa" opacity="0.9"/>
          <circle cx="78" cy="136" r="3" fill="white"/>
          <circle cx="100" cy="136" r="7" fill="#34d399" opacity="0.9"/>
          <circle cx="100" cy="136" r="3" fill="white"/>
          <circle cx="122" cy="136" r="7" fill="#f59e0b" opacity="0.9"/>
          <circle cx="122" cy="136" r="3" fill="white"/>
          <rect x="68" y="150" width="64" height="8" rx="4" fill="#1e40af"/>
          <rect x="68" y="162" width="40" height="4" rx="2" fill="#3b82f6" opacity="0.6"/>
          {/* Left arm (waving) */}
          <motion.g
            animate={{ rotate: [-10, 14, -8, 12, -4, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '30px 118px' }}
          >
            <rect x="10" y="110" width="34" height="18" rx="9" fill="#2563eb"/>
            <circle cx="14" cy="119" r="7" fill="#1d4ed8"/>
          </motion.g>
          {/* Right arm */}
          <rect x="156" y="110" width="34" height="18" rx="9" fill="#2563eb"/>
          <circle cx="176" cy="119" r="7" fill="#1d4ed8"/>
          {/* Legs */}
          <rect x="62" y="188" width="32" height="24" rx="10" fill="#1d4ed8"/>
          <rect x="106" y="188" width="32" height="24" rx="10" fill="#1d4ed8"/>
          <rect x="66" y="206" width="24" height="8" rx="4" fill="#3b82f6"/>
          <rect x="110" y="206" width="24" height="8" rx="4" fill="#3b82f6"/>
        </svg>
      </motion.div>
      {/* Speech bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -top-2 -right-4 bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 rounded-2xl rounded-bl-sm px-3 py-1.5 shadow-lg text-xs font-semibold text-blue-700 dark:text-blue-300 whitespace-nowrap"
      >
        Beep boop! I build! 🤖
      </motion.div>
    </div>
  )
}

/* ── Floating code decoration ── */
function FloatingCode({ children, className }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute font-mono font-bold text-blue-400/20 dark:text-blue-500/20 select-none pointer-events-none ${className}`}
    >
      {children}
    </motion.div>
  )
}

/* ── Stat card ── */
function StatCard({ emoji, value, label, tooltip }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      title={tooltip}
      className="card p-5 text-center cursor-default group"
    >
      <div className="text-3xl mb-1">{emoji}</div>
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 gradient-text">{value}</div>
      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">{label}</div>
    </motion.div>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-violet-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30 hero-pattern" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl dark:bg-blue-600/10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl dark:bg-violet-600/10" />

      {/* Floating decorations */}
      <FloatingCode className="top-32 left-10 text-5xl hidden lg:block">{'{'}</FloatingCode>
      <FloatingCode className="top-44 right-16 text-4xl hidden lg:block" >{'}'}</FloatingCode>
      <FloatingCode className="bottom-40 left-20 text-3xl hidden lg:block">{'</>'}</FloatingCode>
      <FloatingCode className="bottom-32 right-24 text-3xl hidden lg:block">{'()'}</FloatingCode>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">

          {/* Text side */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                <span className="animate-bounce-subtle inline-block">🏙️</span>
                Built from Mumbai, with chai & semicolons
              </span>
            </motion.div>

            <motion.h1 variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white mb-5 text-balance"
            >
              Build Better Business Tools,{' '}
              <span className="gradient-text">One Laugh</span> at a Time
            </motion.h1>

            <motion.p variants={item}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed"
            >
              Full-stack magic from Mumbai: Expense trackers, billing wizards, file slingers.{' '}
              <strong className="text-slate-800 dark:text-slate-200">
                Privacy? We've got your back (and your PIN).
              </strong>
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
              <Link to="/projects" className="btn-primary">
                🚀 See Projects
              </Link>
              <Link to="/contact" className="btn-secondary">
                👋 Say Hi
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              <StatCard emoji="💰" value="500+" label="Expenses tracked (without peeking 👀)" tooltip="100% local, zero cloud snooping" />
              <StatCard emoji="☕" value="∞" label="Coupons to buy coffee forever" tooltip="Our users are fully caffeinated" />
              <StatCard emoji="📊" value="0" label="Excel nightmares remaining" tooltip="CashClown to the rescue!" />
              <StatCard emoji="🔐" value="256-bit" label="Encryption so strong not even we can peek" tooltip="AES-256. Try us." />
            </motion.div>
          </motion.div>

          {/* Robot side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-6 hidden lg:flex"
          >
            <RobotMascot />
            <div className="flex gap-2 text-xs text-slate-400 dark:text-slate-500 font-mono">
              <span className="animate-bounce-subtle inline-block" style={{ animationDelay: '0ms' }}>{'{'}</span>
              <span className="animate-bounce-subtle inline-block" style={{ animationDelay: '100ms' }}>code</span>
              <span className="animate-bounce-subtle inline-block" style={{ animationDelay: '200ms' }}>+</span>
              <span className="animate-bounce-subtle inline-block" style={{ animationDelay: '300ms' }}>coffee</span>
              <span className="animate-bounce-subtle inline-block" style={{ animationDelay: '400ms' }}>+</span>
              <span className="animate-bounce-subtle inline-block" style={{ animationDelay: '500ms' }}>chaos</span>
              <span className="animate-bounce-subtle inline-block" style={{ animationDelay: '600ms' }}>{'}'}</span>
            </div>
            <p className="text-center text-sm text-slate-400 dark:text-slate-500 italic">
              "If it compiles, ship it." — LocalCoreLabs engineering team (just me)
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 cursor-pointer"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
