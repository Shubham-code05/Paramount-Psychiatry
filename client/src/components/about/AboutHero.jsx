import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Breadcrumbs from '../shared/Breadcrumbs';
import { aboutHero } from '../../data/aboutPage';
import { fadeUp } from '../../lib/motion';

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="xl" background="warm" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-[58%_42%_36%_64%/60%_38%_62%_40%] bg-sage-soft opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 top-32 h-64 w-64 rounded-[42%_58%_60%_40%/38%_62%_38%_62%] bg-blue-soft opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-6 bottom-6 h-16 w-16 rounded-[38%_62%_58%_42%/62%_38%_58%_42%] bg-lavender-soft opacity-50"
        aria-hidden="true"
      />

      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
        variants={fadeUp}
        className="relative flex max-w-2xl flex-col gap-6"
      >
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'About' }]} />
        <span className="text-eyebrow uppercase text-sage-deep font-semibold">{aboutHero.eyebrow}</span>
        <h1 className="text-display text-navy-deep">{aboutHero.headline}</h1>
        <p className="text-body-lg text-muted">{aboutHero.subcopy}</p>
      </motion.div>
    </Section>
  );
}
