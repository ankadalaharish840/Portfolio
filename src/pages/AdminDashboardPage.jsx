import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  adminLogin,
  adminLogout,
  isAdminLoggedIn,
  getDraftContent,
  saveDraft,
  publishContent,
  discardDraft,
  hasUnpublishedChanges,
  resetAllContent,
  DEFAULT_SITE_CONTENT,
} from '../data/siteContent'

// ============ TAB DEFINITIONS ============
const TABS = [
  { id: 'brand', label: '🏢 Brand', icon: '🏢' },
  { id: 'hero', label: '🦸 Hero', icon: '🦸' },
  { id: 'navbar', label: '🧭 Navbar', icon: '🧭' },
  { id: 'projects', label: '📦 Projects', icon: '📦' },
  { id: 'about', label: '👤 About', icon: '👤' },
  { id: 'contact', label: '📧 Contact', icon: '📧' },
  { id: 'footer', label: '🦶 Footer', icon: '🦶' },
  { id: 'privacy', label: '🔒 Privacy', icon: '🔒' },
  { id: 'updates', label: '📰 Updates', icon: '📰' },
  { id: 'tech', label: '💻 Tech Stack', icon: '💻' },
]

// ============ REUSABLE FIELD COMPONENTS ============

function TextField({ label, value, onChange, placeholder, help }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{label}</label>
      <input
        type="text"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {help && <p className="mt-1 text-xs text-slate-500">{help}</p>}
    </div>
  )
}

function TextArea({ label, value, onChange, rows = 3, placeholder, help }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{label}</label>
      <textarea
        rows={rows}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {help && <p className="mt-1 text-xs text-slate-500">{help}</p>}
    </div>
  )
}

function DateField({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{label}</label>
      <input
        type="date"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
      />
    </div>
  )
}

function ArrayField({ label, value, onChange, itemLabel = 'item', help }) {
  const items = value || []
  const addItem = () => onChange([...items, ''])
  const updateItem = (index, newValue) => {
    const updated = [...items]
    updated[index] = newValue
    onChange(updated)
  }
  const removeItem = (index) => onChange(items.filter((_, i) => i !== index))

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{label}</label>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input type="text" value={item} onChange={(e) => updateItem(index, e.target.value)} placeholder={`${itemLabel} ${index + 1}`} className="flex-1 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white" />
            <button type="button" onClick={() => removeItem(index)} className="px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">✕</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addItem} className="mt-2 px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">+ Add {itemLabel}</button>
      {help && <p className="mt-1 text-xs text-slate-500">{help}</p>}
    </div>
  )
}

function StatCard({ stat, index, onChange, onRemove }) {
  return (
    <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/50">
      <div className="flex justify-between items-start mb-3">
        <span className="text-sm font-medium text-slate-500">Stat #{index + 1}</span>
        <button type="button" onClick={onRemove} className="text-red-500 hover:text-red-700 text-sm">Remove</button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div><label className="block text-xs text-slate-500 mb-1">Value</label><input type="text" value={stat.value || ''} onChange={(e) => onChange({ ...stat, value: e.target.value })} className="w-full px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" placeholder="500+" /></div>
        <div><label className="block text-xs text-slate-500 mb-1">Label</label><input type="text" value={stat.label || ''} onChange={(e) => onChange({ ...stat, label: e.target.value })} className="w-full px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" placeholder="Expenses tracked" /></div>
      </div>
      <div className="mt-2"><label className="block text-xs text-slate-500 mb-1">Sublabel</label><input type="text" value={stat.sublabel || ''} onChange={(e) => onChange({ ...stat, sublabel: e.target.value })} className="w-full px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" placeholder="(before coffee)" /></div>
    </div>
  )
}

function SectionDivider({ title }) {
  return (<div className="flex items-center gap-4 my-6"><div className="flex-1 border-t border-slate-200 dark:border-slate-700" /><span className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</span><div className="flex-1 border-t border-slate-200 dark:border-slate-700" /></div>)
}

// ============ TAB CONTENT COMPONENTS ============

function BrandTab({ content, setContent }) {
  const brand = content.brand || {}
  const contact = content.contact || {}
  const updateBrand = (k, v) => setContent({ ...content, brand: { ...brand, [k]: v } })
  const updateContact = (k, v) => setContent({ ...content, contact: { ...contact, [k]: v } })

  return (
    <div className="space-y-6">
      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"><h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Brand Identity</h3><p className="text-sm text-blue-600 dark:text-blue-300">Core branding across the site</p></div>
      <TextField label="Brand Name" value={brand.name} onChange={(v) => updateBrand('name', v)} />
      <TextField label="Brand Emoji" value={brand.emoji} onChange={(v) => updateBrand('emoji', v)} />
      <TextArea label="Brand Tagline" value={brand.tagline} onChange={(v) => updateBrand('tagline', v)} rows={2} />
      <TextField label="Meta Title (Browser Tab)" value={brand.metaTitle} onChange={(v) => updateBrand('metaTitle', v)} />
      <TextField label="Copyright Text" value={brand.copyright} onChange={(v) => updateBrand('copyright', v)} />
      <SectionDivider title="Fun Elements" />
      <TextArea label="Fun Quote (Footer)" value={brand.funQuote} onChange={(v) => updateBrand('funQuote', v)} rows={2} />
      <TextArea label="Bugs Joke (Footer)" value={brand.bugsJoke} onChange={(v) => updateBrand('bugsJoke', v)} rows={2} />
      <SectionDivider title="Contact Information" />
      <TextField label="Email" value={contact.email} onChange={(v) => updateContact('email', v)} />
      <TextField label="GitHub URL" value={contact.github} onChange={(v) => updateContact('github', v)} />
      <TextField label="LinkedIn URL" value={contact.linkedin} onChange={(v) => updateContact('linkedin', v)} />
      <TextField label="Location" value={contact.location} onChange={(v) => updateContact('location', v)} />
    </div>
  )
}

function HeroTab({ content, setContent }) {
  const hero = content.hero || {}
  const stats = hero.stats || []
  const updateHero = (k, v) => setContent({ ...content, hero: { ...hero, [k]: v } })
  const updateStats = (s) => setContent({ ...content, hero: { ...hero, stats: s } })

  return (
    <div className="space-y-6">
      <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg"><h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">Hero Section</h3><p className="text-sm text-purple-600 dark:text-purple-300">First thing visitors see</p></div>
      <TextField label="Badge Text" value={hero.badge} onChange={(v) => updateHero('badge', v)} help="Small text above heading" />
      <TextArea label="Main Heading" value={hero.heading} onChange={(v) => updateHero('heading', v)} rows={2} />
      <TextArea label="Subheading" value={hero.subheading} onChange={(v) => updateHero('subheading', v)} rows={2} />
      <div className="grid grid-cols-2 gap-4">
        <TextField label="Primary CTA Button" value={hero.ctaPrimary} onChange={(v) => updateHero('ctaPrimary', v)} />
        <TextField label="Secondary CTA Button" value={hero.ctaSecondary} onChange={(v) => updateHero('ctaSecondary', v)} />
      </div>
      <SectionDivider title="Fun Elements" />
      <TextArea label="Robot Speech Bubble" value={hero.robotSpeech} onChange={(v) => updateHero('robotSpeech', v)} rows={2} />
      <TextArea label="Footer Quote" value={hero.footerQuote} onChange={(v) => updateHero('footerQuote', v)} rows={2} />
      <SectionDivider title="Stats Cards" />
      <div className="grid gap-4 md:grid-cols-2">
        {stats.map((stat, i) => (<StatCard key={i} stat={stat} index={i} onChange={(u) => { const n = [...stats]; n[i] = u; updateStats(n) }} onRemove={() => updateStats(stats.filter((_, j) => j !== i))} />))}
      </div>
      <button type="button" onClick={() => updateStats([...stats, { value: '', label: '', sublabel: '' }])} className="px-4 py-2 text-sm text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg border border-purple-300 dark:border-purple-700">+ Add Stat</button>
    </div>
  )
}

function NavbarTab({ content, setContent }) {
  const navbar = content.navbar || {}
  const links = navbar.links || []
  const updateNavbar = (k, v) => setContent({ ...content, navbar: { ...navbar, [k]: v } })
  const updateLink = (i, f, v) => { const n = [...links]; n[i] = { ...n[i], [f]: v }; updateNavbar('links', n) }

  return (
    <div className="space-y-6">
      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"><h3 className="font-semibold text-green-800 dark:text-green-200 mb-1">Navigation Bar</h3><p className="text-sm text-green-600 dark:text-green-300">Main navigation menu</p></div>
      <TextField label="CTA Button Text" value={navbar.ctaButton} onChange={(v) => updateNavbar('ctaButton', v)} />
      <SectionDivider title="Navigation Links" />
      <div className="space-y-3">
        {links.map((link, i) => (
          <div key={i} className="flex gap-3 items-end p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <div className="flex-1"><label className="block text-xs text-slate-500 mb-1">Label</label><input type="text" value={link.label} onChange={(e) => updateLink(i, 'label', e.target.value)} className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" /></div>
            <div className="flex-1"><label className="block text-xs text-slate-500 mb-1">Path</label><input type="text" value={link.path} onChange={(e) => updateLink(i, 'path', e.target.value)} className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" /></div>
            <button type="button" onClick={() => updateNavbar('links', links.filter((_, j) => j !== i))} className="px-3 py-2 text-red-600 hover:bg-red-50 rounded">✕</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => updateNavbar('links', [...links, { label: '', path: '' }])} className="px-4 py-2 text-sm text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg border border-green-300 dark:border-green-700">+ Add Nav Link</button>
    </div>
  )
}

function ProjectsTab({ content, setContent }) {
  const projects = content.projects || {}
  const items = projects.items || []
  const legal = content.projectLegal || {}
  const [sel, setSel] = useState(items[0]?.id || '')
  const updateProjects = (k, v) => setContent({ ...content, projects: { ...projects, [k]: v } })
  const updateProject = (i, f, v) => { const n = [...items]; n[i] = { ...n[i], [f]: v }; updateProjects('items', n) }
  const updateLegal = (pid, f, v) => setContent({ ...content, projectLegal: { ...legal, [pid]: { ...(legal[pid] || {}), [f]: v } } })
  const idx = items.findIndex(p => p.id === sel)
  const cur = items[idx] || {}
  const curLegal = legal[sel] || {}

  return (
    <div className="space-y-6">
      <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg"><h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">Projects Section</h3><p className="text-sm text-orange-600 dark:text-orange-300">Manage portfolio projects</p></div>
      <TextField label="Section Title" value={projects.sectionTitle} onChange={(v) => updateProjects('sectionTitle', v)} />
      <TextArea label="Section Subtitle" value={projects.sectionSubtitle} onChange={(v) => updateProjects('sectionSubtitle', v)} rows={2} />
      <SectionDivider title="Edit Project" />
      <div className="flex gap-2 flex-wrap mb-4">
        {items.map((p) => (<button key={p.id} type="button" onClick={() => setSel(p.id)} className={`px-4 py-2 rounded-lg text-sm font-medium ${sel === p.id ? 'bg-orange-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200'}`}>{p.emoji} {p.title}</button>))}
      </div>
      {idx >= 0 && (
        <div className="p-4 border border-orange-200 dark:border-orange-800 rounded-lg space-y-4">
          <div className="grid grid-cols-2 gap-4"><TextField label="Title" value={cur.title} onChange={(v) => updateProject(idx, 'title', v)} /><TextField label="Emoji" value={cur.emoji} onChange={(v) => updateProject(idx, 'emoji', v)} /></div>
          <TextArea label="Description" value={cur.description} onChange={(v) => updateProject(idx, 'description', v)} />
          <TextField label="GitHub URL" value={cur.githubUrl} onChange={(v) => updateProject(idx, 'githubUrl', v)} />
          <DateField label="Release Date" value={cur.releaseDate} onChange={(v) => updateProject(idx, 'releaseDate', v)} />
          <TextField label="Tooltip" value={cur.tooltip} onChange={(v) => updateProject(idx, 'tooltip', v)} />
          <TextField label="Gradient Colors" value={cur.color} onChange={(v) => updateProject(idx, 'color', v)} help="e.g., from-orange-500 to-rose-500" />
          <ArrayField label="Features" value={cur.features} onChange={(v) => updateProject(idx, 'features', v)} itemLabel="Feature" />
          <ArrayField label="Platforms" value={cur.platforms} onChange={(v) => updateProject(idx, 'platforms', v)} itemLabel="Platform" />
          <SectionDivider title="Legal Content" />
          <TextArea label="Privacy Summary" value={curLegal.privacyPolicySummary} onChange={(v) => updateLegal(sel, 'privacyPolicySummary', v)} rows={3} />
          <TextArea label="Full Privacy Policy" value={curLegal.privacyPolicy} onChange={(v) => updateLegal(sel, 'privacyPolicy', v)} rows={8} />
          <TextArea label="Terms Summary" value={curLegal.termsSummary} onChange={(v) => updateLegal(sel, 'termsSummary', v)} rows={3} />
          <TextArea label="Full Terms & Conditions" value={curLegal.termsAndConditions} onChange={(v) => updateLegal(sel, 'termsAndConditions', v)} rows={8} />
        </div>
      )}
    </div>
  )
}

function AboutTab({ content, setContent }) {
  const about = content.about || {}
  const team = about.teamMember || {}
  const whyFunny = about.whyFunny || {}
  const timeline = about.timeline || []
  const updateAbout = (k, v) => setContent({ ...content, about: { ...about, [k]: v } })
  const updateTeam = (k, v) => updateAbout('teamMember', { ...team, [k]: v })
  const updateWhyFunny = (k, v) => updateAbout('whyFunny', { ...whyFunny, [k]: v })
  const updateTimeline = (i, f, v) => { const n = [...timeline]; n[i] = { ...n[i], [f]: v }; updateAbout('timeline', n) }

  return (
    <div className="space-y-6">
      <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg"><h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-1">About Page</h3><p className="text-sm text-indigo-600 dark:text-indigo-300">Tell your story</p></div>
      <TextField label="Page Title" value={about.pageTitle} onChange={(v) => updateAbout('pageTitle', v)} />
      <TextField label="Intro Badge" value={about.introBadge} onChange={(v) => updateAbout('introBadge', v)} />
      <SectionDivider title="Team Member" />
      <div className="grid grid-cols-2 gap-4"><TextField label="Name" value={team.name} onChange={(v) => updateTeam('name', v)} /><TextField label="Avatar Emoji" value={team.avatar} onChange={(v) => updateTeam('avatar', v)} /></div>
      <TextField label="Role" value={team.role} onChange={(v) => updateTeam('role', v)} />
      <TextArea label="Bio" value={team.bio} onChange={(v) => updateTeam('bio', v)} rows={4} />
      <SectionDivider title="Why Funny Section" />
      <TextField label="Section Title" value={whyFunny.title} onChange={(v) => updateWhyFunny('title', v)} />
      <TextArea label="Content" value={whyFunny.content} onChange={(v) => updateWhyFunny('content', v)} rows={4} />
      <SectionDivider title="Timeline" />
      <div className="space-y-3">
        {timeline.map((item, i) => (
          <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <div className="flex justify-between items-start mb-3"><span className="text-sm font-medium text-slate-500">Event #{i + 1}</span><button type="button" onClick={() => updateAbout('timeline', timeline.filter((_, j) => j !== i))} className="text-red-500 text-sm">Remove</button></div>
            <div className="grid grid-cols-3 gap-3">
              <div><label className="block text-xs text-slate-500 mb-1">Year</label><input type="text" value={item.year} onChange={(e) => updateTimeline(i, 'year', e.target.value)} className="w-full px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" /></div>
              <div className="col-span-2"><label className="block text-xs text-slate-500 mb-1">Title</label><input type="text" value={item.title} onChange={(e) => updateTimeline(i, 'title', e.target.value)} className="w-full px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" /></div>
            </div>
            <div className="mt-2"><label className="block text-xs text-slate-500 mb-1">Description</label><textarea rows={2} value={item.description} onChange={(e) => updateTimeline(i, 'description', e.target.value)} className="w-full px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" /></div>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => updateAbout('timeline', [...timeline, { year: '', title: '', description: '' }])} className="px-4 py-2 text-sm text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg border border-indigo-300 dark:border-indigo-700">+ Add Event</button>
    </div>
  )
}

function ContactTab({ content, setContent }) {
  const cp = content.contactPage || {}
  const placeholders = cp.formPlaceholders || {}
  const updateCP = (k, v) => setContent({ ...content, contactPage: { ...cp, [k]: v } })
  const updatePH = (k, v) => updateCP('formPlaceholders', { ...placeholders, [k]: v })

  return (
    <div className="space-y-6">
      <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg"><h3 className="font-semibold text-pink-800 dark:text-pink-200 mb-1">Contact Page</h3><p className="text-sm text-pink-600 dark:text-pink-300">How people can reach you</p></div>
      <TextField label="Page Heading" value={cp.heading} onChange={(v) => updateCP('heading', v)} />
      <TextArea label="Page Subheading" value={cp.subheading} onChange={(v) => updateCP('subheading', v)} rows={2} />
      <TextField label="Location Label" value={cp.locationLabel} onChange={(v) => updateCP('locationLabel', v)} />
      <TextField label="Submit Button Text" value={cp.submitButton} onChange={(v) => updateCP('submitButton', v)} />
      <TextField label="Success Message" value={cp.successMessage} onChange={(v) => updateCP('successMessage', v)} />
      <SectionDivider title="Form Placeholders" />
      <div className="grid grid-cols-3 gap-4">
        <TextField label="Name Field" value={placeholders.name} onChange={(v) => updatePH('name', v)} />
        <TextField label="Email Field" value={placeholders.email} onChange={(v) => updatePH('email', v)} />
        <TextField label="Message Field" value={placeholders.message} onChange={(v) => updatePH('message', v)} />
      </div>
    </div>
  )
}

function FooterTab({ content, setContent }) {
  const footer = content.footer || {}
  const updateFooter = (k, v) => setContent({ ...content, footer: { ...footer, [k]: v } })
  const updateLink = (listKey, i, f, v) => { const list = footer[listKey] || []; const n = [...list]; n[i] = { ...n[i], [f]: v }; updateFooter(listKey, n) }
  const renderList = (listKey, title) => (
    <div>
      <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">{title}</h4>
      <div className="space-y-2">
        {(footer[listKey] || []).map((link, i) => (
          <div key={i} className="flex gap-2">
            <input type="text" value={link.label} onChange={(e) => updateLink(listKey, i, 'label', e.target.value)} placeholder="Label" className="flex-1 px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" />
            <input type="text" value={link.path} onChange={(e) => updateLink(listKey, i, 'path', e.target.value)} placeholder="Path" className="flex-1 px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" />
            <button type="button" onClick={() => updateFooter(listKey, (footer[listKey] || []).filter((_, j) => j !== i))} className="text-red-500">✕</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => updateFooter(listKey, [...(footer[listKey] || []), { label: '', path: '' }])} className="mt-2 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">+ Add Link</button>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg"><h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Footer</h3><p className="text-sm text-slate-600 dark:text-slate-400">Footer links. Brand info uses Brand tab.</p></div>
      <div className="grid md:grid-cols-2 gap-6">{renderList('quickLinks', 'Quick Links')}{renderList('productLinks', 'Product Links')}</div>
    </div>
  )
}

function PrivacyTab({ content, setContent }) {
  const privacy = content.privacy || {}
  const sections = privacy.sections || []
  const updatePrivacy = (k, v) => setContent({ ...content, privacy: { ...privacy, [k]: v } })
  const updateSection = (i, f, v) => { const n = [...sections]; n[i] = { ...n[i], [f]: v }; updatePrivacy('sections', n) }

  return (
    <div className="space-y-6">
      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg"><h3 className="font-semibold text-red-800 dark:text-red-200 mb-1">Privacy Policy Page</h3><p className="text-sm text-red-600 dark:text-red-300">Your site-wide privacy policy</p></div>
      <TextField label="Effective Date" value={privacy.effectiveDate} onChange={(v) => updatePrivacy('effectiveDate', v)} />
      <SectionDivider title="Policy Sections" />
      <div className="space-y-4">
        {sections.map((s, i) => (
          <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <div className="flex justify-between items-start mb-3"><span className="text-sm font-medium text-slate-500">Section #{i + 1}</span><button type="button" onClick={() => updatePrivacy('sections', sections.filter((_, j) => j !== i))} className="text-red-500 text-sm">Remove</button></div>
            <TextField label="Title" value={s.title} onChange={(v) => updateSection(i, 'title', v)} />
            <TextArea label="Content" value={s.content} onChange={(v) => updateSection(i, 'content', v)} rows={4} />
          </div>
        ))}
      </div>
      <button type="button" onClick={() => updatePrivacy('sections', [...sections, { title: '', content: '' }])} className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg border border-red-300 dark:border-red-700">+ Add Section</button>
    </div>
  )
}

function UpdatesTab({ content, setContent }) {
  const updates = content.updates || []
  const updateUpdates = (u) => setContent({ ...content, updates: u })
  const updateItem = (i, f, v) => { const n = [...updates]; n[i] = { ...n[i], [f]: v }; updateUpdates(n) }

  return (
    <div className="space-y-6">
      <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg"><h3 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-1">Updates Timeline</h3><p className="text-sm text-cyan-600 dark:text-cyan-300">Recent updates on homepage</p></div>
      <button type="button" onClick={() => updateUpdates([{ date: '', title: '', description: '' }, ...updates])} className="px-4 py-2 text-sm text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 rounded-lg border border-cyan-300 dark:border-cyan-700">+ Add Update (at top)</button>
      <div className="space-y-3">
        {updates.map((item, i) => (
          <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <div className="flex justify-between items-start mb-3"><span className="text-sm font-medium text-slate-500">Update #{i + 1}</span><button type="button" onClick={() => updateUpdates(updates.filter((_, j) => j !== i))} className="text-red-500 text-sm">Remove</button></div>
            <div className="grid grid-cols-3 gap-3">
              <div><label className="block text-xs text-slate-500 mb-1">Date</label><input type="text" value={item.date} onChange={(e) => updateItem(i, 'date', e.target.value)} className="w-full px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" placeholder="Mar 2026" /></div>
              <div className="col-span-2"><label className="block text-xs text-slate-500 mb-1">Title</label><input type="text" value={item.title} onChange={(e) => updateItem(i, 'title', e.target.value)} className="w-full px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" /></div>
            </div>
            <div className="mt-2"><label className="block text-xs text-slate-500 mb-1">Description</label><input type="text" value={item.description} onChange={(e) => updateItem(i, 'description', e.target.value)} className="w-full px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TechTab({ content, setContent }) {
  const tech = content.technologies || {}
  const categories = tech.categories || []
  const stack = tech.stack || []
  const updateTech = (k, v) => setContent({ ...content, technologies: { ...tech, [k]: v } })
  const updateCategory = (i, f, v) => { const n = [...categories]; n[i] = { ...n[i], [f]: v }; updateTech('categories', n) }
  const updateStackItem = (i, f, v) => { const n = [...stack]; n[i] = { ...n[i], [f]: v }; updateTech('stack', n) }

  return (
    <div className="space-y-6">
      <div className="p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg"><h3 className="font-semibold text-violet-800 dark:text-violet-200 mb-1">Tech Stack</h3><p className="text-sm text-violet-600 dark:text-violet-300">Technologies on About page</p></div>
      <SectionDivider title="Skill Categories" />
      <div className="grid md:grid-cols-2 gap-4">
        {categories.map((cat, i) => (
          <div key={i} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <div className="grid grid-cols-2 gap-2">
              <div><label className="block text-xs text-slate-500 mb-1">Name</label><input type="text" value={cat.name} onChange={(e) => updateCategory(i, 'name', e.target.value)} className="w-full px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" /></div>
              <div><label className="block text-xs text-slate-500 mb-1">Level (%)</label><input type="number" min="0" max="100" value={cat.level} onChange={(e) => updateCategory(i, 'level', parseInt(e.target.value) || 0)} className="w-full px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" /></div>
            </div>
            <div className="mt-2"><label className="block text-xs text-slate-500 mb-1">Color Class</label><input type="text" value={cat.color} onChange={(e) => updateCategory(i, 'color', e.target.value)} className="w-full px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" placeholder="bg-blue-500" /></div>
          </div>
        ))}
      </div>
      <SectionDivider title="Tech Stack Pills" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stack.map((item, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input type="text" value={item.emoji} onChange={(e) => updateStackItem(i, 'emoji', e.target.value)} className="w-12 px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-center" placeholder="⚛️" />
            <input type="text" value={item.name} onChange={(e) => updateStackItem(i, 'name', e.target.value)} className="flex-1 px-2 py-1.5 text-sm rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700" placeholder="React" />
            <button type="button" onClick={() => updateTech('stack', stack.filter((_, j) => j !== i))} className="text-red-500 text-sm">✕</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => updateTech('stack', [...stack, { name: '', emoji: '' }])} className="px-4 py-2 text-sm text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-lg border border-violet-300 dark:border-violet-700">+ Add Tech</button>
    </div>
  )
}

// ============ MAIN COMPONENT ============

export default function AdminDashboardPage() {
  const [authenticated, setAuthenticated] = useState(() => isAdminLoggedIn())
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [activeTab, setActiveTab] = useState('brand')
  const [content, setContent] = useState(() => getDraftContent())
  const [statusMessage, setStatusMessage] = useState('')
  const [isPublishing, setIsPublishing] = useState(false)

  useEffect(() => { if (authenticated) saveDraft(content) }, [content, authenticated])

  const hasDraft = hasUnpublishedChanges()

  function handleLogin(e) {
    e.preventDefault()
    if (!adminLogin(username.trim(), password)) { setLoginError('Invalid username or password.'); return }
    setLoginError('')
    setAuthenticated(true)
    setContent(getDraftContent())
  }

  function handleLogout() { adminLogout(); setAuthenticated(false); setUsername(''); setPassword('') }

  function handlePublish() {
    setIsPublishing(true)
    setStatusMessage('Publishing changes...')
    setTimeout(() => {
      publishContent()
      setStatusMessage('✅ Published successfully! Changes are now live.')
      setIsPublishing(false)
      setContent(getDraftContent())
    }, 1000)
  }

  function handleDiscard() {
    if (confirm('Discard all unpublished changes?')) { discardDraft(); setContent(getDraftContent()); setStatusMessage('Draft discarded.') }
  }

  function handleReset() {
    if (confirm('Reset ALL content to defaults?')) { resetAllContent(); setContent(DEFAULT_SITE_CONTENT); setStatusMessage('All content reset.') }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
        <div className="max-w-md mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="card p-7">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">🔐 Admin Login</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Access the visual content editor.</p>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div><label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Username</label><input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" /></div>
              <div><label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" /></div>
              {loginError && <p className="text-sm text-red-600">{loginError}</p>}
              <button type="submit" className="btn-primary w-full justify-center">Login</button>
            </form>
          </motion.div>
        </div>
      </div>
    )
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'brand': return <BrandTab content={content} setContent={setContent} />
      case 'hero': return <HeroTab content={content} setContent={setContent} />
      case 'navbar': return <NavbarTab content={content} setContent={setContent} />
      case 'projects': return <ProjectsTab content={content} setContent={setContent} />
      case 'about': return <AboutTab content={content} setContent={setContent} />
      case 'contact': return <ContactTab content={content} setContent={setContent} />
      case 'footer': return <FooterTab content={content} setContent={setContent} />
      case 'privacy': return <PrivacyTab content={content} setContent={setContent} />
      case 'updates': return <UpdatesTab content={content} setContent={setContent} />
      case 'tech': return <TechTab content={content} setContent={setContent} />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-bold text-slate-900 dark:text-white">✨ Site Editor</h1>
              {hasDraft && <span className="px-2 py-0.5 text-xs bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 rounded-full">Unsaved Draft</span>}
            </div>
            <div className="flex items-center gap-3">
              <button onClick={handleDiscard} className="px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" disabled={!hasDraft}>Discard</button>
              <button onClick={handleReset} className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">Reset All</button>
              <button onClick={handlePublish} disabled={isPublishing} className="px-4 py-1.5 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium disabled:opacity-50">{isPublishing ? '⏳ Publishing...' : '🚀 Publish'}</button>
              <button onClick={handleLogout} className="px-3 py-1.5 text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">Logout</button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 flex">
        <div className="w-48 fixed left-0 top-16 bottom-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-y-auto">
          <nav className="p-3 space-y-1">
            {TABS.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>{tab.label}</button>))}
          </nav>
        </div>
        <div className="ml-48 flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence>{statusMessage && (<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300 text-sm">{statusMessage}</motion.div>)}</AnimatePresence>
            <motion.div key={activeTab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">{renderTab()}</motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
