import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { FounderPortrait } from './HumanVisuals'

/* ── Mascot Robot ── */
function RobotMascot() {
  return (
    <div className="relative w-56 h-56 mx-auto select-none" aria-label="LocalCoreLabs robot mascot">
      <motion.div 
        animate={{ y: [0, -12, 0] }} 
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
          {/* Antenna with glow */}
          <motion.circle 
            cx="100" cy="6" r="9" 
            fill="#fbbf24"
            animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <rect x="96" y="4" width="8" height="22" rx="3" fill="#6366f1"/>
          <circle cx="100" cy="6" r="5" fill="#fef3c7"/>
          {/* Head - softer purple */}
          <rect x="50" y="24" width="100" height="72" rx="18" fill="#7c3aed"/>
          <rect x="54" y="28" width="92" height="60" rx="14" fill="#8b5cf6"/>
          {/* Eyes with blink */}
          <circle cx="78" cy="52" r="12" fill="white"/>
          <circle cx="122" cy="52" r="12" fill="white"/>
          <motion.circle cx="80" cy="53" r="5" fill="#4c1d95"
            animate={{ cx: [80, 82, 80, 78, 80], cy: [53, 53, 54, 53, 53] }} 
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle cx="124" cy="53" r="5" fill="#4c1d95"
            animate={{ cx: [124, 126, 124, 122, 124], cy: [53, 53, 54, 53, 53] }} 
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle cx="81" cy="51" r="2" fill="white"/>
          <circle cx="125" cy="51" r="2" fill="white"/>
          {/* Happy smile */}
          <motion.path 
            d="M 80 74 Q 100 88 120 74" 
            stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"
            animate={{ d: ["M 80 74 Q 100 88 120 74", "M 80 76 Q 100 92 120 76", "M 80 74 Q 100 88 120 74"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          {/* Neck */}
          <rect x="86" y="94" width="28" height="12" rx="4" fill="#7c3aed"/>
          {/* Body - warm gradient look */}
          <rect x="40" y="106" width="120" height="86" rx="20" fill="#6d28d9"/>
          <rect x="46" y="112" width="108" height="74" rx="16" fill="#7c3aed"/>
          {/* Chest panel - heart indicator */}
          <rect x="62" y="124" width="76" height="44" rx="10" fill="#4c1d95"/>
          <motion.circle 
            cx="100" cy="146" r="12" 
            fill="#f472b6"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.text 
            x="100" y="151" 
            textAnchor="middle" 
            fontSize="14" 
            fill="white"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1, repeat: Infinity }}
          >❤️</motion.text>
          {/* Left arm (waving) */}
          <motion.g
            animate={{ rotate: [-10, 20, -5, 18, -2, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '30px 118px' }}
          >
            <rect x="10" y="110" width="34" height="18" rx="9" fill="#8b5cf6"/>
            <circle cx="14" cy="119" r="7" fill="#6d28d9"/>
          </motion.g>
          {/* Right arm - thumbs up pose */}
          <rect x="156" y="110" width="34" height="18" rx="9" fill="#8b5cf6"/>
          <circle cx="186" cy="119" r="10" fill="#6d28d9"/>
          <text x="184" y="124" fontSize="12">👍</text>
          {/* Legs */}
          <rect x="62" y="188" width="32" height="24" rx="10" fill="#6d28d9"/>
          <rect x="106" y="188" width="32" height="24" rx="10" fill="#6d28d9"/>
          <rect x="66" y="206" width="24" height="8" rx="4" fill="#8b5cf6"/>
          <rect x="110" y="206" width="24" height="8" rx="4" fill="#8b5cf6"/>
        </svg>
      </motion.div>
      {/* Speech bubble with typing effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
        className="absolute -top-4 -right-8 bg-white dark:bg-slate-800 border-2 border-violet-300 dark:border-violet-600 rounded-2xl rounded-bl-sm px-4 py-2 shadow-xl"
      >
        <motion.span 
          className="text-sm font-medium text-violet-700 dark:text-violet-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Hey there! Let's build something cool 🚀
        </motion.span>
      </motion.div>
    </div>
  )
}

/* ── Floating shapes for warmth ── */
function FloatingShape({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
      transition={{ 
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: { delay, duration: 6, repeat: Infinity, ease: 'easeInOut' },
        rotate: { delay: delay + 0.5, duration: 8, repeat: Infinity, ease: 'easeInOut' }
      }}
      className={`absolute select-none pointer-events-none ${className}`}
    >
      {children}
    </motion.div>
  )
}

/* ── Interactive Feature Card ── */
function FeatureHighlight({ icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -3 }}
      className="flex items-start gap-3 p-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl border border-violet-100 dark:border-violet-800/50 shadow-sm hover:shadow-md hover:border-violet-300 dark:hover:border-violet-600 transition-all duration-300 cursor-default"
    >
      <span className="text-2xl">{icon}</span>
      <div>
        <h3 className="font-semibold text-slate-800 dark:text-white text-sm">{title}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{description}</p>
      </div>
    </motion.div>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Warm gradient background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-violet-50 via-rose-50/30 to-amber-50/40 dark:from-slate-900 dark:via-violet-950/20 dark:to-slate-900"
      />
      
      {/* Soft glowing orbs */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-violet-300/20 rounded-full blur-3xl dark:bg-violet-600/10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-rose-300/15 rounded-full blur-3xl dark:bg-rose-600/10" />
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl dark:bg-amber-600/10" />

      {/* Playful floating shapes */}
      <FloatingShape className="top-28 left-16 text-4xl hidden lg:block" delay={0.2}>✨</FloatingShape>
      <FloatingShape className="top-40 right-20 text-3xl hidden lg:block" delay={0.4}>💡</FloatingShape>
      <FloatingShape className="bottom-32 left-24 text-3xl hidden lg:block" delay={0.6}>🎯</FloatingShape>
      <FloatingShape className="bottom-48 right-16 text-2xl hidden lg:block" delay={0.8}>⚡</FloatingShape>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-20">

          {/* Text side */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <motion.span 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-100 to-rose-100 dark:from-violet-900/40 dark:to-rose-900/30 border border-violet-200 dark:border-violet-700 rounded-full text-violet-700 dark:text-violet-300 text-sm font-medium mb-6 shadow-sm cursor-default"
              >
                <motion.span 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >👋</motion.span>
                Hey! I'm building cool stuff from Mumbai
              </motion.span>
            </motion.div>

            <motion.h1 variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white mb-5 text-balance"
            >
              Software that{' '}
              <motion.span 
                className="bg-gradient-to-r from-violet-600 via-rose-500 to-amber-500 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                actually works
              </motion.span>
              <br />
              <span className="text-slate-600 dark:text-slate-300 text-3xl sm:text-4xl lg:text-5xl">
                (and makes you smile)
              </span>
            </motion.h1>

            <motion.p variants={item}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed"
            >
              I'm a developer who believes business tools should be{' '}
              <strong className="text-violet-600 dark:text-violet-400">simple</strong>,{' '}
              <strong className="text-rose-500 dark:text-rose-400">private</strong>, and{' '}
              <strong className="text-amber-600 dark:text-amber-400">maybe a little fun</strong>.
              No corporate jargon. No data harvesting. Just tools that help you get stuff done.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link to="/projects" className="btn-primary">
                  See What I've Built
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" className="btn-secondary">
                  Let's Chat
                </Link>
              </motion.div>
            </motion.div>

            {/* Feature highlights instead of stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <FeatureHighlight 
                icon="🔒" 
                title="Privacy First" 
                description="Your data stays on your device. Period." 
                delay={0.8}
              />
              <FeatureHighlight 
                icon="⚡" 
                title="Fast & Simple" 
                description="No bloat. No learning curve." 
                delay={0.9}
              />
              <FeatureHighlight 
                icon="🎨" 
                title="Actually Enjoyable" 
                description="Who said business tools can't be fun?" 
                delay={1.0}
              />
              <FeatureHighlight 
                icon="🇮🇳" 
                title="Made in Mumbai" 
                description="With chai, code, and care." 
                delay={1.1}
              />
            </div>
          </motion.div>

          {/* Robot side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
            className="flex flex-col items-center gap-8 hidden lg:flex"
          >
            <div className="grid gap-6">
              <RobotMascot />
              <FounderPortrait className="max-w-md" />
            </div>
            
            {/* Fun tagline with character */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center max-w-xs"
            >
              <motion.p 
                className="text-sm text-slate-500 dark:text-slate-400 italic leading-relaxed"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                "I turned my coffee addiction into a coding career. 
                <br />
                <span className="text-violet-500 font-medium">No regrets so far!</span>"
              </motion.p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                — Harish, the human behind the robot
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 cursor-pointer group"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-medium group-hover:text-violet-500 transition-colors">See Projects</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="group-hover:text-violet-500 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
