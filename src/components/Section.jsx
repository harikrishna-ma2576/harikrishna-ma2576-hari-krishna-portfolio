import { motion } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={className}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
    transition={{ delay }}
  >
    {children}
  </motion.div>
)

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">{eyebrow}</p>
          <h2 id={`${id}-title`} className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
