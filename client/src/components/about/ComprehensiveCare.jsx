import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { comprehensiveCare } from '../../data/aboutPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function ComprehensiveCare() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="sage-soft">
      <div className="flex flex-col gap-8">
        <SectionHeading
          eyebrow={comprehensiveCare.eyebrow}
          title={comprehensiveCare.heading}
          description={comprehensiveCare.body}
        />

        <div className="flex flex-wrap gap-3">
          {comprehensiveCare.ageGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-navy px-4 py-1.5 text-body-sm font-medium text-white"
            >
              {group}
            </span>
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="flex flex-wrap gap-3"
        >
          {comprehensiveCare.conditions.map((condition) => (
            <motion.span
              key={condition}
              variants={fadeUp}
              className="rounded-full border border-border bg-white-warm px-4 py-1.5 text-body-sm text-charcoal"
            >
              {condition}
            </motion.span>
          ))}
        </motion.div>

        <p className="text-caption text-muted">{comprehensiveCare.note}</p>
      </div>
    </Section>
  );
}
