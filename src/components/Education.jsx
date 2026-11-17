import Section, { Reveal } from './Section'
import { GraduationCap, Award } from 'lucide-react'
import { education } from '../data/siteData'

export default function Education() {
  const has = education.achievements.length > 0
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <Reveal>
        <div className="card grid gap-8 p-6 sm:p-8 md:grid-cols-[auto_1fr]">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 text-white">
            <GraduationCap size={28} aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-xl font-semibold text-white">{education.degree}</h3>
            <p className="mt-1 text-slate-300">{education.college}</p>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div><dt className="text-xs uppercase tracking-wider text-slate-500">Graduation</dt><dd className="text-white">{education.graduation}</dd></div>
              <div><dt className="text-xs uppercase tracking-wider text-slate-500">CGPA</dt><dd className="text-white">{education.cgpa}</dd></div>
            </dl>
            <div className="mt-6">
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-white"><Award size={16} className="text-violet-400" aria-hidden="true" /> Academic achievements</p>
              {has ? (
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-400">{education.achievements.map((a) => <li key={a}>{a}</li>)}</ul>
              ) : (
                <p className="text-sm italic text-slate-500">[Add your academic achievements in src/data/siteData.js]</p>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
