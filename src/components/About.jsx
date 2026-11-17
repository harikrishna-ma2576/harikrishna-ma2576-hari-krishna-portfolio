import Section, { Reveal } from './Section'
import { Icon } from './Icons'
import { about, education } from '../data/siteData'
import { GraduationCap, Target } from 'lucide-react'

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="Building smart solutions with data and code">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-5 text-base leading-relaxed text-slate-400">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <div className="grid gap-4 pt-2 sm:grid-cols-2">
            <div className="card p-4">
              <GraduationCap className="mb-2 text-violet-400" size={22} aria-hidden="true" />
              <p className="text-sm font-semibold text-white">Academic background</p>
              <p className="mt-1 text-sm">{education.degree}, graduating {education.graduation}</p>
            </div>
            <div className="card p-4">
              <Target className="mb-2 text-sky-400" size={22} aria-hidden="true" />
              <p className="text-sm font-semibold text-white">Career goal</p>
              <p className="mt-1 text-sm">{about.goals}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {about.interests.map((i) => (
              <li key={i.label} className="card group p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">
                <span className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-violet-600/30 to-blue-600/30 p-2.5 text-violet-300">
                  <Icon name={i.icon} size={22} />
                </span>
                <p className="font-display font-semibold text-white">{i.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
