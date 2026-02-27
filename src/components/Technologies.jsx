import { motion } from 'framer-motion'

const technologies = [
  {
    category: 'Frontend',
    icon: 'web',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vite', level: 90 },
    ],
  },
  {
    category: 'Mobile',
    icon: 'smartphone',
    items: [
      { name: 'React Native', level: 90 },
      { name: 'Android', level: 85 },
      { name: 'iOS', level: 80 },
      { name: 'Expo', level: 75 },
    ],
  },
  {
    category: 'Backend',
    icon: 'dns',
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Supabase', level: 85 },
      { name: 'SQLite', level: 90 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: 'build',
    items: [
      { name: 'Git', level: 95 },
      { name: 'GitHub', level: 95 },
      { name: 'VS Code', level: 95 },
      { name: 'Vercel', level: 85 },
    ],
  },
]

const allTechs = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'React Native', icon: '📱' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express', icon: '🚂' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'SQLite', icon: '💾' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Git', icon: '📦' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Supabase', icon: '🔥' },
  { name: 'Vercel', icon: '🔺' },
  { name: 'JWT', icon: '🔐' },
]

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 md:py-32 bg-dark-200/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Technologies & <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            I work with a variety of modern technologies to build scalable and performant applications
            across web and mobile platforms.
          </p>
        </motion.div>
        
        {/* Tech Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {allTechs.map((tech, index) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 bg-dark-100/50 border border-slate-700/50 rounded-full text-sm font-medium flex items-center gap-2 hover:border-primary-500/50 transition-all cursor-default"
            >
              <span>{tech.icon}</span>
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="material-icons-round text-primary-400">{category.icon}</span>
                </div>
                <h3 className="font-bold text-lg">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, index) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-300">{item.name}</span>
                      <span className="text-sm text-slate-500">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
