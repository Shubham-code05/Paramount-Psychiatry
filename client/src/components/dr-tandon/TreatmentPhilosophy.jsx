import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import { treatmentPhilosophy } from '../../data/drTandonPage';
import { fadeUp } from '../../lib/motion';

export default function TreatmentPhilosophy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="white">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="max-w-2xl flex flex-col gap-4"
      >
        <span className="text-eyebrow uppercase text-sage-deep font-semibold">{treatmentPhilosophy.eyebrow}</span>
        <h2 className="text-h2">{treatmentPhilosophy.heading}</h2>
        {treatmentPhilosophy.body.map((paragraph) => (
          <p key={paragraph} className="text-body-lg text-muted">
            {paragraph}
          </p>
        ))}
      </motion.div>
    </Section>
  );
}
