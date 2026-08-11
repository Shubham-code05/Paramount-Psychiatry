import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { medicalConnection } from '../../data/drTandonPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function MedicalConnection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="warm">
      <div className="flex flex-col gap-8">
        <SectionHeading
          eyebrow={medicalConnection.eyebrow}
          title={medicalConnection.heading}
          description={medicalConnection.body}
        />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="flex flex-wrap gap-3"
        >
          {medicalConnection.factors.map((factor) => (
            <motion.span
              key={factor}
              variants={fadeUp}
              className="rounded-full bg-white-warm border border-border px-4 py-1.5 text-body-sm text-charcoal shadow-soft"
            >
              {factor}
            </motion.span>
          ))}
        </motion.div>

        <p className="text-caption text-muted">{medicalConnection.note}</p>
      </div>
    </Section>
  );
}
