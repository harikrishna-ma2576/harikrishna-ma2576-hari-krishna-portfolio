import Section, { Reveal } from './Section'
import { Icon } from './Icons'
import { skills } from '../data/siteData'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Technical skills" title="Tools and technologies I work with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="card h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-lg bg-gradient-to-br from-violet-600/30 to-blue-600/30 p-2 text-violet-300">
                  <Icon name={group.icon} size={20} />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{group.category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
