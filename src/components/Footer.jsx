import { profile } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS &amp; Framer Motion.
    </footer>
  )
}
