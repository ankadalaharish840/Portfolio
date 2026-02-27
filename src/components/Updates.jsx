import { motion } from 'framer-motion'

const updates = [
  {
    date: 'February 2026',
    title: 'Claims Processing System v2.0',
    description: 'Major UI overhaul with futuristic glassmorphism design. Added bulk operations, enhanced PDF management, and comprehensive audit trails.',
    type: 'release',
    icon: 'rocket_launch',
  },
  {
    date: 'February 2026',
    title: 'HRMS Project Started',
    description: 'Started development of Human Resource Management System using Next.js 15 with TypeScript and modern architecture.',
    type: 'new',
    icon: 'add_circle',
  },
  {
    date: 'February 2026',
    title: 'Expense Tracker - iOS Release',
    description: 'Ported the Android Expense Tracker to iOS with full feature parity. Ready for App Store submission.',
    type: 'release',
    icon: 'phone_iphone',
  },
  {
    date: 'January 2026',
    title: 'Billing Software Launch',
    description: 'Launched billing software with AI-powered sales forecasting, inventory management, and comprehensive reporting.',
    type: 'release',
    icon: 'receipt_long',
  },
  {
    date: 'January 2026',
    title: 'Attendance Tracker - Error Tracking',
    description: 'Added comprehensive error tracking with Winston logger, database logging, and exportable error reports.',
    type: 'feature',
    icon: 'bug_report',
  },
  {
    date: 'December 2025',
    title: 'Expense Tracker - Android v1.0',
    description: 'Released the first version of Expense Tracker for Android with offline-first architecture and encrypted backups.',
    type: 'release',
    icon: 'android',
  },
]

const typeColors = {
  release: 'from-green-500 to-emerald-500',
  feature: 'from-blue-500 to-cyan-500',
  new: 'from-purple-500 to-pink-500',
  update: 'from-orange-500 to-yellow-500',
}

const typeLabels = {
  release: 'Release',
  feature: 'Feature',
  new: 'New Project',
  update: 'Update',
}

export default function Updates() {
  return (
    <section id="updates" className="py-20 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Latest <span className="gradient-text">Updates</span>
          </h2>
          <p className="section-subtitle">
            Stay up to date with my latest projects, releases, and feature additions.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 hidden md:block"></div>
          
          <div className="space-y-8">
            {updates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`hidden md:flex absolute left-4 w-8 h-8 rounded-full bg-gradient-to-br ${typeColors[update.type]} items-center justify-center shadow-lg`}>
                  <span className="material-icons-round text-white text-sm">{update.icon}</span>
                </div>
                
                {/* Card */}
                <div className="card p-6 hover:shadow-lg hover:shadow-primary-500/10 transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${typeColors[update.type]} text-white`}>
                      {typeLabels[update.type]}
                    </span>
                    <span className="text-sm text-slate-500">{update.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{update.title}</h3>
                  <p className="text-slate-400 text-sm">{update.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Load more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/ankadalaharish840" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <span className="material-icons-round text-sm">history</span>
            View All Activity on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
