import Section, { Reveal } from './Section'
import { BadgeCheck, ExternalLink } from 'lucide-react'
import { certifications } from '../data/siteData'

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Learning and credentials">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <article className="card h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">
              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-violet-700/25 to-sky-700/25">
                {c.image ? (
                  <img src={c.image} alt={`${c.name} certificate`} loading="lazy" width="480" height="288" className="h-full w-full object-cover" />
                ) : (
                  <BadgeCheck size={44} className="text-white/40" role="img" aria-label="Certificate image placeholder" />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-white">{c.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{c.issuer}</p>
                <p className="mt-1 text-xs text-slate-500">{c.date}</p>
                {c.link && (
                  <a href={c.link} target="_blank" rel="noreferrer noopener" className="mt-3 inline-flex items-center gap-1 text-sm text-violet-300 hover:text-white">
                    View credential <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
