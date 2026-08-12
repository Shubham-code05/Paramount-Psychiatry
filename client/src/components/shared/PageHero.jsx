import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Breadcrumbs from './Breadcrumbs';
import { fadeUp } from '../../lib/motion';

// Shared hero for simple content pages (Insurance & Fees, Patient Resources
// and its sub-pages, FAQs, Appointment) — same visual language as the hero
// embedded in <ConditionPage />, extracted so these pages don't each redefine it.
// `crumbs`: [{ label, path? }] — full breadcrumb trail including "Home" and the current page.
export default function PageHero({ eyebrow, title, intro, crumbs }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="xl" background="warm" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-[58%_42%_36%_64%/60%_38%_62%_40%] bg-sage-soft opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-[42%_58%_60%_40%/38%_62%_38%_62%] bg-lavender-soft opacity-60"
        aria-hidden="true"
      />
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
        variants={fadeUp}
        className="relative flex max-w-2xl flex-col gap-6"
      >
        <Breadcrumbs items={crumbs} />
        {eyebrow && <span className="text-eyebrow uppercase text-sage-deep font-semibold">{eyebrow}</span>}
        <h1 className="text-display text-navy-deep">{title}</h1>
        {intro && <p className="text-body-lg text-muted">{intro}</p>}
      </motion.div>
    </Section>
  );
}
