import { motion, useReducedMotion } from 'framer-motion';
import { UserRound } from 'lucide-react';
import Section from '../ui/Section';
import Breadcrumbs from '../shared/Breadcrumbs';
import { drHero } from '../../data/drTandonPage';
import { fadeUp } from '../../lib/motion';

// Portrait placeholder — swap the frame's contents for:
//   <img src="/images/dr-pooja-tandon.jpg" alt="Dr. Pooja Tandon, MD" className="h-full w-full object-cover rounded-4xl" />
// once real photography is available. No other markup needs to change.
export default function DrHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="xl" background="warm">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          className="flex flex-col gap-6 lg:col-span-7"
        >
          <Breadcrumbs
            items={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Dr. Pooja Tandon' }]}
          />
          <span className="text-eyebrow uppercase text-sage-deep font-semibold">{drHero.eyebrow}</span>
          <h1 className="text-display text-navy-deep">{drHero.heading}</h1>
          <p className="text-body-lg text-muted">{drHero.subcopy}</p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-4/5 w-full max-w-sm lg:col-span-5"
        >
          <div className="absolute inset-0 rounded-4xl bg-sage-soft" />
          <div className="absolute inset-4 flex items-center justify-center rounded-4xl bg-white-warm shadow-elevated">
            <UserRound size={110} className="text-sage/60" strokeWidth={1} aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
