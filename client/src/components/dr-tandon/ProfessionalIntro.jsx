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
        className="mx-auto flex max-w-3xl flex-col gap-8"
      >
        <span className="text-eyebrow uppercase text-sage-deep font-semibold">{professionalIntro.eyebrow}</span>
        {professionalIntro.body.map((paragraph, index) =>
          index === 0 ? (
            <p
              key={paragraph}
              className="border-l-2 border-sage pl-6 text-body-lg font-medium text-navy-deep md:pl-8"
            >
              {paragraph}
            </p>
          ) : (
            <p key={paragraph} className="text-body leading-relaxed text-muted">
              {paragraph}
            </p>
          ),
        )}
      </motion.div>
    </Section>
  );
}
