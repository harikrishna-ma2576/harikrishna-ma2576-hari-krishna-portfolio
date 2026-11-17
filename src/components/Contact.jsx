import { useState } from 'react'
import Section, { Reveal } from './Section'
import { Download, Mail, Send } from 'lucide-react'
import { profile } from '../data/siteData'
import { GithubIcon, LinkedinIcon } from './Icons'

const Row = ({ href, icon, label, value }) => {
  const body = (
    <>
      <span className="rounded-lg bg-white/5 p-2.5 text-violet-300">{icon}</span>
      <span><span className="block text-xs uppercase tracking-wider text-slate-500">{label}</span><span className="text-sm text-slate-200">{value}</span></span>
    </>
  )
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer noopener" className="card flex items-center gap-4 p-4 transition hover:border-violet-400/40">{body}</a>
  ) : (
    <div className="card flex items-center gap-4 p-4 opacity-60">{body}</div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (profile.formEndpoint) {
      setStatus('sending')
      try {
        const r = await fetch(profile.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (!r.ok) throw new Error('failed')
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } catch {
        setStatus('error')
      }
    } else {
      // No backend configured: open the visitor's email app with the message pre-filled.
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('sent')
    }
  }

  const field = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/30'

  return (
    <Section id="contact" eyebrow="Contact" title="Let&rsquo;s work together">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="space-y-4">
          <p className="text-slate-400">I am actively looking for internship opportunities in AI, machine learning and data science. Feel free to reach out.</p>
          <Row href={`mailto:${profile.email}`} icon={<Mail size={20} />} label="Email" value={profile.email} />
          <Row href={profile.linkedin} icon={<LinkedinIcon className="h-5 w-5" />} label="LinkedIn" value={profile.linkedin || '[Add your LinkedIn URL]'} />
          <Row href={profile.github} icon={<GithubIcon className="h-5 w-5" />} label="GitHub" value={profile.github || '[Add your GitHub URL]'} />
          <a href={profile.resume} download={profile.resumeFileName} className="btn-primary w-full"><Download size={16} /> Download Resume</a>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="card space-y-4 p-6" aria-label="Contact form">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">Name</label>
              <input id="name" required autoComplete="name" value={form.name} onChange={set('name')} className={field} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">Email</label>
              <input id="email" type="email" required autoComplete="email" value={form.email} onChange={set('email')} className={field} placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">Message</label>
              <textarea id="message" required rows={5} value={form.message} onChange={set('message')} className={field} placeholder="How can I help?" />
            </div>
            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
              <Send size={16} /> {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm">
              {status === 'sent' && <span className="text-emerald-400">{profile.formEndpoint ? 'Thanks! Your message was sent.' : 'Your email app should open with the message ready to send.'}</span>}
              {status === 'error' && <span className="text-rose-400">Something went wrong. Please email me directly.</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
