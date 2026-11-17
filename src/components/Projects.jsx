import Section, { Reveal } from './Section'
import { ExternalLink, FolderCode } from 'lucide-react'
import { projects } from '../data/siteData'
import { GithubIcon } from './Icons'

const LinkBtn = ({ href, children, label, primary }) =>
  href ? (
    <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className={`${primary ? 'btn-primary' : 'btn-ghost'} !px-4 !py-2`}>{children}</a>
  ) : (
    <span aria-disabled="true" title="Add this link in src/data/siteData.js" className="btn-disabled !px-4 !py-2">{children}</span>
  )

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I have built">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-900/20">
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-violet-700/40 via-indigo-700/30 to-sky-700/40">
                {p.image ? (
                  <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" width="600" height="352" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                ) : (
                  <div className="flex h-full items-center justify-center text-white/40" role="img" aria-label="Project image placeholder">
                    <FolderCode size={48} />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-0.5 text-sm text-violet-300">{p.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-md bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-200">{t}</li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-3">
                  <LinkBtn href={p.github} label={`${p.title} on GitHub`}><GithubIcon className="h-4 w-4" /> GitHub</LinkBtn>
                  <LinkBtn href={p.demo} label={`${p.title} live demo`} primary><ExternalLink size={16} /> Live Demo</LinkBtn>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
