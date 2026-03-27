import { motion } from 'framer-motion'

const contactMethods = [
  {
    name: 'GitHub',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    href: 'https://github.com/ankadalaharish840',
    label: 'ankadalaharish840',
    color: 'hover:text-white hover:bg-slate-700',
  },
  {
    name: 'Email',
    icon: <span className="material-icons-round">email</span>,
    href: 'mailto:Localcorelabs@gmail.com',
    label: 'Localcorelabs@gmail.com',
    color: 'hover:text-white hover:bg-red-500/20 hover:border-red-500/50',
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    href: 'https://linkedin.com/in/harish-ankadala',
    label: 'harish-ankadala',
    color: 'hover:text-white hover:bg-blue-600/20 hover:border-blue-600/50',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-200/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            I'm always open to discussing new projects, opportunities, or just having a chat about technology.
          </p>
        </motion.div>
        
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target={method.name !== 'Email' ? '_blank' : undefined}
              rel={method.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className={`card p-6 flex flex-col items-center text-center transition-all ${method.color}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-dark-200 flex items-center justify-center mb-4 text-slate-400">
                {method.icon}
              </div>
              <h3 className="font-semibold mb-1">{method.name}</h3>
              <p className="text-sm text-slate-400 break-all">{method.label}</p>
            </a>
          ))}
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card p-8 md:p-12 text-center bg-gradient-to-br from-primary-500/10 to-purple-500/10 border-primary-500/30"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Let's build something amazing together
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Whether you have a project in mind, need technical consultation, or just want to connect, 
            I'd love to hear from you.
          </p>
          <a 
            href="mailto:Localcorelabs@gmail.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span className="material-icons-round text-sm">send</span>
            Send Me a Message
          </a>
        </motion.div>
      </div>
    </section>
  )
}
