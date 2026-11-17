import Section, { Reveal } from './Section'
import { Trophy, Wrench, Code2, Users } from 'lucide-react'
import { achievements } from '../data/siteData'

const icons = { Hackathon: Trophy, Workshop: Wrench, Coding: Code2, Extracurricular: Users }

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Hackathons, workshops and more">
      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a, i) => {
          const I = icons[a.type] || Trophy
          return (
            <Reveal key={i} delay={i * 0.06}>
              <article className="card flex h-full gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/30 to-blue-600/30 text-violet-300">
                  <I size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">{a.type} · {a.date}</p>
                  <h3 className="mt-1 font-display font-semibold text-white">{a.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{a.detail}</p>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
