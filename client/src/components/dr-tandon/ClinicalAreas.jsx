import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { clinicalAreas } from '../../data/drTandonPage';
import { fadeUp, staggerContainer } from '../../lib/motion';
import { cn } from '../../lib/cn';

// Pill background cycles through the three supporting brand tints — sage,
// blue, warm gold — in equal rotation, same treatment for all three.
const pillStyles = ['bg-sage-soft', 'bg-blue-soft', 'bg-gold/15'];

export default function ClinicalAreas() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="white">
      <div className="flex flex-col gap-8">
        <SectionHeading eyebrow={clinicalAreas.eyebrow} title={clinicalAreas.heading} />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="flex flex-wrap gap-3"
        >
          {clinicalAreas.areas.map((area, index) => (
            <motion.span
              key={area}
              variants={fadeUp}
              className={cn(
                'rounded-full border border-border px-4 py-1.5 text-body-sm text-navy-deep',
                pillStyles[index % pillStyles.length],
              )}
            >
              {area}
            </motion.span>
          ))}
        </motion.div>

        <p className="text-caption text-muted">
          {clinicalAreas.note}{' '}
          <Link to="/conditions" className="font-medium text-navy hover:text-navy-deep hover:underline underline-offset-4">
            View Conditions We Treat
          </Link>
        </p>
      </div>
    </Section>
  );
}
