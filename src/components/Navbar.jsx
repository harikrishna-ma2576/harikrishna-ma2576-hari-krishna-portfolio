import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/siteData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? 'border-b border-white/10 bg-ink/80 backdrop-blur-lg' : ''}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-lg font-bold text-white">
          HK<span className="gradient-text">.</span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="text-sm text-slate-400 transition hover:text-white">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href={profile.resume} download={profile.resumeFileName} className="btn-ghost hidden !py-2 lg:inline-flex">Resume</a>
        <button
          className="rounded-lg p-2 text-slate-200 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-white/10 px-5 pb-5 pt-3 lg:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
