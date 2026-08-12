import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { comprehensiveCare } from '../../data/aboutPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

// The section itself is sage-tinted, so the pill rotation skips sage here
// (it would blend into the background) and rotates white/blue/lavender instead.
const pillStyles = ['bg-white-warm', 'bg-blue-soft', 'bg-lavender-soft'];

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
          {comprehensiveCare.conditions.map((condition, index) => (
            <motion.span
              key={condition}
              variants={fadeUp}
              className={`rounded-full border border-border px-4 py-1.5 text-body-sm text-charcoal ${pillStyles[index % pillStyles.length]}`}
            >
              {condition}
            </motion.span>
          ))}
        </motion.div>

        <p className="text-caption text-muted">
          {comprehensiveCare.note}{' '}
          <Link to="/conditions" className="font-medium text-navy hover:text-navy-deep hover:underline underline-offset-4">
            View Conditions We Treat
          </Link>
        </p>
      </div>
    </Section>
  );
}
