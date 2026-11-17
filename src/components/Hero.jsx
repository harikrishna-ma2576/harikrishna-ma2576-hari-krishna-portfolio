import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { profile } from '../data/siteData'
import { GithubIcon, LinkedinIcon } from './Icons'

const Social = ({ href, label, children }) =>
  href ? (
    <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label}
       className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:-translate-y-0.5 hover:border-violet-400/60 hover:text-white">
      {children}
    </a>
  ) : (
    <span aria-label={`${label} (add your link in siteData.js)`} title="Add your link in src/data/siteData.js"
          className="cursor-not-allowed rounded-xl border border-dashed border-white/10 p-3 text-slate-600">
      {children}
    </span>
  )

export default function Hero() {
  const initials = profile.name.split(' ').map((w) => w[0]).slice(0, 2).join('')
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-violet-700/25 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-700/25 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Open to internships
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
            Hi, I&rsquo;m <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-4 font-display text-xl text-slate-200 sm:text-2xl">{profile.shortTitle}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View My Projects <ArrowDown size={16} /></a>
            <a href={profile.resume} download={profile.resumeFileName} className="btn-ghost"><Download size={16} /> Download Resume</a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <Social href={profile.github} label="GitHub"><GithubIcon className="h-5 w-5" /></Social>
            <Social href={profile.linkedin} label="LinkedIn"><LinkedinIcon className="h-5 w-5" /></Social>
            <Social href={`mailto:${profile.email}`} label="Email"><Mail size={20} /></Social>
          </div>
        </motion.div>

        <motion.div className="mx-auto" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <div className="rounded-[2rem] bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-500 p-[2px] shadow-2xl shadow-violet-900/40">
            <div className="flex h-72 w-72 items-center justify-center overflow-hidden rounded-[calc(2rem-2px)] bg-navy sm:h-80 sm:w-80">
              {profile.photo ? (
                <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="320" height="320" fetchpriority="high" className="h-full w-full object-cover" />
              ) : (
                <span role="img" aria-label="Profile photo placeholder" className="gradient-text font-display text-7xl font-bold">{initials}</span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
