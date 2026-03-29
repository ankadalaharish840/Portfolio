import { motion } from 'framer-motion'

function Aura({ className, color }) {
  return <div className={`absolute rounded-full blur-3xl opacity-50 ${className}`} style={{ background: color }} />
}

export function FounderPortrait({ className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-[2rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-rose-50 to-sky-50 p-5 shadow-[0_30px_80px_-40px_rgba(180,83,9,0.45)] dark:border-slate-700 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 ${className}`}
    >
      <Aura className="-top-8 -left-8 h-32 w-32" color="rgba(251, 191, 36, 0.28)" />
      <Aura className="right-0 top-12 h-28 w-28" color="rgba(244, 114, 182, 0.22)" />
      <Aura className="bottom-0 left-16 h-24 w-24" color="rgba(56, 189, 248, 0.2)" />

      <div className="relative rounded-[1.5rem] border border-white/70 bg-white/60 p-4 backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/50">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 dark:text-amber-300">Builder Mode</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Shipping from Mumbai with coffee and clean commits.</p>
          </div>
          <motion.div
            animate={{ rotate: [0, 8, -8, 0], y: [0, -2, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-2xl bg-amber-100 px-3 py-2 text-lg shadow-sm dark:bg-amber-500/10"
          >
            ☕
          </motion.div>
        </div>

        <svg viewBox="0 0 360 320" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a developer working at a desk">
          <rect x="28" y="220" width="304" height="20" rx="10" fill="#7c3aed" opacity="0.12" />
          <rect x="60" y="180" width="240" height="18" rx="9" fill="#cbd5e1" />
          <rect x="86" y="195" width="16" height="60" rx="8" fill="#94a3b8" />
          <rect x="258" y="195" width="16" height="60" rx="8" fill="#94a3b8" />

          <motion.rect
            x="186"
            y="105"
            width="94"
            height="60"
            rx="10"
            fill="#1e293b"
            animate={{ y: [105, 101, 105] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <rect x="193" y="112" width="80" height="45" rx="7" fill="#38bdf8" opacity="0.24" />
          <rect x="216" y="165" width="35" height="9" rx="4.5" fill="#64748b" />

          <ellipse cx="145" cy="111" rx="41" ry="45" fill="#f8c9a1" />
          <path d="M103 106C103 76 123 54 155 54C177 54 194 72 194 99V112H103V106Z" fill="#1f2937" />
          <path d="M113 94C116 69 136 54 155 54C175 54 191 69 193 93C182 87 171 84 151 84C131 84 122 88 113 94Z" fill="#111827" />
          <ellipse cx="128" cy="109" rx="4" ry="5" fill="#1f2937" />
          <ellipse cx="161" cy="109" rx="4" ry="5" fill="#1f2937" />
          <path d="M136 128C144 135 153 135 160 128" stroke="#b45309" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          <rect x="106" y="145" width="80" height="72" rx="24" fill="#ea580c" />
          <rect x="118" y="157" width="55" height="34" rx="10" fill="#fb923c" opacity="0.28" />
          <path d="M120 178C134 162 157 158 176 166" stroke="#fdba74" strokeWidth="4" strokeLinecap="round" />
          <path d="M95 168C106 160 121 165 125 177L132 200" stroke="#f8c9a1" strokeWidth="14" strokeLinecap="round" />
          <path d="M187 171C204 167 214 177 214 188L208 206" stroke="#f8c9a1" strokeWidth="14" strokeLinecap="round" />

          <motion.g
            animate={{ rotate: [-2, 3, -2] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '207px 188px' }}
          >
            <rect x="198" y="177" width="40" height="10" rx="5" fill="#f8c9a1" />
            <rect x="227" y="171" width="24" height="14" rx="5" fill="#0f172a" />
          </motion.g>

          <motion.g
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <rect x="44" y="42" width="72" height="46" rx="12" fill="#ffffff" opacity="0.88" />
            <rect x="56" y="56" width="47" height="7" rx="3.5" fill="#f59e0b" opacity="0.8" />
            <rect x="56" y="68" width="34" height="7" rx="3.5" fill="#cbd5e1" />
          </motion.g>

          <motion.g
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut' }}
          >
            <rect x="254" y="36" width="66" height="66" rx="18" fill="#ffffff" opacity="0.9" />
            <circle cx="287" cy="60" r="12" fill="#f472b6" opacity="0.75" />
            <path d="M270 84C279 74 295 72 304 82" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" fill="none" />
          </motion.g>
        </svg>
      </div>
    </motion.div>
  )
}

function SnapshotSvg({ variant }) {
  if (variant === 'call') {
    return (
      <svg viewBox="0 0 220 160" className="h-36 w-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a video call">
        <rect x="12" y="18" width="196" height="120" rx="24" fill="#0f172a" />
        <rect x="22" y="28" width="84" height="100" rx="18" fill="#f8fafc" />
        <rect x="114" y="28" width="84" height="100" rx="18" fill="#ecfeff" />
        <circle cx="64" cy="60" r="18" fill="#f8c9a1" />
        <path d="M46 58C48 40 60 32 75 35C82 37 88 43 88 56V63H46V58Z" fill="#0f172a" />
        <rect x="42" y="82" width="44" height="26" rx="13" fill="#7c3aed" />
        <circle cx="156" cy="60" r="18" fill="#f6c59f" />
        <path d="M138 58C140 40 151 33 165 35C173 37 180 44 180 55V63H138V58Z" fill="#075985" />
        <rect x="134" y="82" width="44" height="26" rx="13" fill="#06b6d4" />
        <rect x="70" y="138" width="80" height="8" rx="4" fill="#94a3b8" opacity="0.6" />
      </svg>
    )
  }

  if (variant === 'launch') {
    return (
      <svg viewBox="0 0 220 160" className="h-36 w-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a product launch celebration">
        <rect x="18" y="22" width="184" height="116" rx="26" fill="#fff7ed" />
        <circle cx="74" cy="64" r="18" fill="#f8c9a1" />
        <path d="M56 62C57 46 68 38 80 38C92 38 101 47 101 60V68H56V62Z" fill="#7c2d12" />
        <rect x="52" y="84" width="46" height="28" rx="14" fill="#f97316" />
        <circle cx="146" cy="66" r="18" fill="#f6c59f" />
        <path d="M127 65C130 48 141 39 155 41C166 43 173 52 173 64V71H127V65Z" fill="#1d4ed8" />
        <rect x="123" y="86" width="48" height="28" rx="14" fill="#22c55e" />
        <motion.path
          d="M110 44L116 56L130 58L120 68L123 82L110 75L97 82L100 68L90 58L104 56Z"
          fill="#facc15"
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '110px 63px' }}
        />
        <rect x="76" y="122" width="68" height="6" rx="3" fill="#fdba74" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 220 160" className="h-36 w-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a developer sketching ideas">
      <rect x="18" y="18" width="184" height="120" rx="26" fill="#eff6ff" />
      <rect x="34" y="32" width="90" height="92" rx="18" fill="#ffffff" />
      <rect x="132" y="32" width="52" height="20" rx="10" fill="#dbeafe" />
      <rect x="132" y="58" width="52" height="20" rx="10" fill="#fde68a" />
      <rect x="132" y="84" width="52" height="20" rx="10" fill="#fecdd3" />
      <circle cx="78" cy="58" r="18" fill="#f8c9a1" />
      <path d="M58 56C61 41 72 34 86 35C95 37 101 44 101 55V64H58V56Z" fill="#111827" />
      <rect x="56" y="82" width="44" height="28" rx="14" fill="#2563eb" />
      <path d="M98 88L124 98" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
      <circle cx="126" cy="100" r="6" fill="#f59e0b" />
    </svg>
  )
}

export function HumanStoryStrip() {
  const stories = [
    {
      title: 'Sketching product ideas',
      description: 'From a rough concept to something a real business can use.',
      variant: 'sketch',
    },
    {
      title: 'Talking to real people',
      description: 'Feedback loops stay close to the users, not a slide deck.',
      variant: 'call',
    },
    {
      title: 'Shipping the launch',
      description: 'Small releases, quick fixes, then the next iteration.',
      variant: 'launch',
    },
  ]

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {stories.map((story, index) => (
        <motion.div
          key={story.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.45 }}
          whileHover={{ y: -6, rotate: index === 1 ? 0 : index % 2 === 0 ? -1 : 1 }}
          className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-slate-800"
        >
          <div className="rounded-[1.25rem] bg-gradient-to-br from-slate-50 via-white to-rose-50 p-3 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
            >
              <SnapshotSvg variant={story.variant} />
            </motion.div>
          </div>
          <div className="pt-4 text-left">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{story.title}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{story.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function ProjectMotionPreview({ projectId }) {
  const config = {
    'expense-tracker': {
      label: 'Daily money flow',
      bg: 'from-orange-50 via-rose-50 to-amber-50 dark:from-slate-900 dark:via-orange-950/20 dark:to-slate-900',
      accent: 'bg-orange-500',
      panel: 'from-orange-500 to-rose-500',
      title: 'Quick entry, private by default',
      stats: ['Income', 'Bills', 'Savings'],
    },
    fileflingr: {
      label: 'Cross-device handoff',
      bg: 'from-cyan-50 via-teal-50 to-sky-50 dark:from-slate-900 dark:via-cyan-950/20 dark:to-slate-900',
      accent: 'bg-cyan-500',
      panel: 'from-cyan-500 to-teal-500',
      title: 'Files moving between your devices',
      stats: ['Desktop', 'Phone', 'Cloud'],
    },
    cashclown: {
      label: 'Shop floor snapshot',
      bg: 'from-emerald-50 via-lime-50 to-green-50 dark:from-slate-900 dark:via-emerald-950/20 dark:to-slate-900',
      accent: 'bg-emerald-500',
      panel: 'from-emerald-500 to-green-500',
      title: 'Billing and reporting without spreadsheet chaos',
      stats: ['Sales', 'Stock', 'Forecast'],
    },
  }[projectId]

  if (!config) return null

  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-br ${config.bg} p-5 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.4)]`}>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{config.label}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{config.title}</h3>
        </div>
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          className={`h-3 w-3 rounded-full ${config.accent}`}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-[1.5rem] border border-white/60 bg-white/80 p-4 backdrop-blur dark:border-slate-700/70 dark:bg-slate-800/70"
        >
          <svg viewBox="0 0 300 220" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated product preview illustration">
            <rect x="28" y="26" width="244" height="168" rx="26" fill="#ffffff" />
            <rect x="44" y="44" width="98" height="132" rx="18" fill="#e2e8f0" />
            <rect x="156" y="44" width="98" height="50" rx="16" fill="#f8fafc" />
            <rect x="156" y="104" width="98" height="72" rx="16" fill="#f8fafc" />
            <rect x="56" y="56" width="74" height="16" rx="8" fill="#cbd5e1" />
            <rect x="56" y="84" width="60" height="12" rx="6" fill="#94a3b8" />
            <rect x="56" y="102" width="66" height="12" rx="6" fill="#94a3b8" opacity="0.8" />
            <motion.rect
              x="56"
              y="126"
              width="54"
              height="34"
              rx="12"
              fill="url(#panelGrad)"
              animate={{ width: [54, 64, 54] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="188"
              cy="69"
              r="14"
              fill="#22c55e"
              animate={{ r: [14, 17, 14], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
            <motion.path
              d="M171 144C182 129 195 126 205 136C214 145 227 142 238 128"
              stroke="#0ea5e9"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              animate={{ d: ['M171 144C182 129 195 126 205 136C214 145 227 142 238 128', 'M171 149C182 135 194 131 205 138C214 145 226 139 238 123', 'M171 144C182 129 195 126 205 136C214 145 227 142 238 128'] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <defs>
              <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <div className="space-y-3">
          {config.stats.map((stat, index) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
              className="rounded-[1.25rem] border border-white/60 bg-white/75 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
            >
              {stat}
            </motion.div>
          ))}

          <motion.div
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className={`rounded-[1.5rem] bg-gradient-to-r ${config.panel} p-4 text-left text-white shadow-lg`}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-white/70">Animated preview</p>
            <p className="mt-2 text-sm leading-relaxed text-white/90">A live-feeling scene makes the portfolio read less like a static catalog and more like real product work in motion.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function AnimatedProjectThumbnail({ projectId }) {
  const config = {
    'expense-tracker': {
      title: 'Secure ledger',
      bar: 'from-orange-500 to-rose-500',
      glow: 'bg-orange-400/30',
      line: '#f97316',
    },
    fileflingr: {
      title: 'Fast transfer',
      bar: 'from-cyan-500 to-teal-500',
      glow: 'bg-cyan-400/30',
      line: '#06b6d4',
    },
    cashclown: {
      title: 'Live billing',
      bar: 'from-emerald-500 to-green-500',
      glow: 'bg-emerald-400/30',
      line: '#22c55e',
    },
  }[projectId]

  if (!config) return null

  return (
    <div className="relative mb-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-3 dark:border-slate-700 dark:bg-slate-800/70">
      <div className={`pointer-events-none absolute -top-6 right-4 h-16 w-16 rounded-full blur-2xl ${config.glow}`} />
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{config.title}</p>
        <motion.span
          animate={{ scale: [1, 1.18, 1], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-2.5 w-2.5 rounded-full bg-lime-500"
        />
      </div>

      <div className="grid grid-cols-[0.8fr_1.2fr] gap-2">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-xl border border-white/70 bg-slate-50 p-2 dark:border-slate-700 dark:bg-slate-900"
        >
          <div className={`mb-2 h-3 w-16 rounded-full bg-gradient-to-r ${config.bar}`} />
          <div className="space-y-1.5">
            <div className="h-2 w-full rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-2 w-4/5 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-2 w-3/5 rounded bg-slate-200 dark:bg-slate-700" />
          </div>
        </motion.div>

        <div className="rounded-xl border border-white/70 bg-slate-50 p-2 dark:border-slate-700 dark:bg-slate-900">
          <svg viewBox="0 0 170 80" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated analytics thumbnail">
            <rect x="6" y="8" width="158" height="64" rx="10" fill="#ffffff" />
            <rect x="16" y="50" width="12" height="14" rx="4" fill="#cbd5e1" />
            <rect x="34" y="42" width="12" height="22" rx="4" fill="#94a3b8" />
            <motion.rect
              x="52"
              y="34"
              width="12"
              height="30"
              rx="4"
              fill={config.line}
              animate={{ height: [30, 36, 30], y: [34, 28, 34] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <rect x="70" y="24" width="12" height="40" rx="4" fill="#38bdf8" opacity="0.7" />
            <motion.path
              d="M94 54C105 46 114 44 122 38C130 32 138 26 152 22"
              stroke={config.line}
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              animate={{ d: ['M94 54C105 46 114 44 122 38C130 32 138 26 152 22', 'M94 57C104 50 113 47 122 41C131 35 139 28 152 20', 'M94 54C105 46 114 44 122 38C130 32 138 26 152 22'] }}
              transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}