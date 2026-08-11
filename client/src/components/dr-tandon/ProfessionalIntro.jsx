import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import { professionalIntro } from '../../data/drTandonPage';
import { fadeUp } from '../../lib/motion';

export default function ProfessionalIntro() {
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
        <span className="text-eyebrow uppercase text-sage-deep font-semibold">{professionalIntro.eyebrow}</span>
        {professionalIntro.body.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? 'text-h3 font-display text-navy-deep' : 'text-body-lg text-muted'}>
            {paragraph}
          </p>
        ))}
      </motion.div>
    </Section>
  );
}
