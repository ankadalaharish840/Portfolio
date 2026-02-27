import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Attendance Tracker',
    description: 'Full-stack attendance tracking application with real-time monitoring, error tracking, and comprehensive user management. Features role-based access control, JWT authentication, and team management.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'PostgreSQL'],
    image: '/projects/attendance-tracker.png',
    github: 'https://github.com/ankadalaharish840/Attendance-Tracker',
    demo: null,
    features: ['Time Tracking', 'Leave Management', 'Error Logging', 'Multi-role System'],
    platform: 'Web',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Billing Software',
    description: 'Modern billing and inventory management application with real-time sales dashboard, AI-powered forecasting, and comprehensive reporting. Features low-stock alerts and customer management.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Recharts'],
    image: '/projects/billing-software.png',
    github: 'https://github.com/ankadalaharish840/Billing-Software',
    demo: null,
    features: ['Sales Dashboard', 'AI Forecasting', 'Inventory Management', 'Reports'],
    platform: 'Web',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Claims Processing System',
    description: 'Enterprise claims processing system with role-based dashboards, workflow tracking, PDF management, and futuristic glassmorphism UI. Features bulk operations and comprehensive audit trails.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Radix UI'],
    image: '/projects/claims-processing.png',
    github: 'https://github.com/ankadalaharish840/Claims_Processing_System',
    demo: null,
    features: ['Role-Based Dashboards', 'PDF Management', 'Workflow Tracking', 'Audit Logs'],
    platform: 'Web',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Expense Tracker (Android)',
    description: '100% offline personal finance Android app with military-grade encryption. Track income, expenses, lending, and borrowing with complete data privacy - no cloud, no accounts, no internet required.',
    tech: ['React Native', 'SQLite', 'TweetNaCl', 'Notifee'],
    image: '/projects/expense-android.png',
    github: 'https://github.com/ankadalaharish840/Expense-Tracker-Android',
    demo: null,
    features: ['100% Offline', 'PIN Protection', 'Encrypted Backups', 'Statistics'],
    platform: 'Android',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Expense Tracker (iOS)',
    description: 'Complete offline expense tracking for iOS with local SQLite database, visual statistics, and secure PIN protection. Modern UI with category management and backup/restore functionality.',
    tech: ['React Native', 'SQLite', 'iOS Native', 'CocoaPods'],
    image: '/projects/expense-ios.png',
    github: 'https://github.com/ankadalaharish840/Expense-Tracker-IOS',
    demo: null,
    features: ['100% Offline', 'Visual Charts', 'Category Management', 'Data Export'],
    platform: 'iOS',
    color: 'from-slate-500 to-slate-700',
  },
  {
    id: 6,
    title: 'HRMS',
    description: 'Human Resource Management System built with Next.js 15 and TypeScript. Modern architecture with server-side rendering, type-safe development, and responsive design.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React'],
    image: '/projects/hrms.png',
    github: 'https://github.com/ankadalaharish840/HRMS',
    demo: null,
    features: ['Employee Management', 'Attendance', 'Leave Management', 'Analytics'],
    platform: 'Web',
    color: 'from-indigo-500 to-blue-500',
  },
]

const platformIcons = {
  Web: 'language',
  Android: 'android',
  iOS: 'phone_iphone',
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of applications I've built, ranging from enterprise web systems to mobile apps.
            Each project showcases different technologies and problem-solving approaches.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} rounded-t-2xl p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white text-xs font-medium">
                    <span className="material-icons-round text-sm">{platformIcons[project.platform]}</span>
                    {project.platform}
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="px-2 py-1 bg-dark-200 rounded-lg text-xs text-slate-300">
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary-500/10 border border-primary-500/30 rounded-lg text-xs text-primary-400">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-dark-200 hover:bg-dark-100 rounded-xl text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
