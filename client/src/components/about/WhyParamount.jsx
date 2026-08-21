import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import { whyParamount } from '../../data/aboutPage';
import { fadeUp } from '../../lib/motion';

export default function WhyParamount() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="sage-soft">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-(--radius-card) bg-white-warm px-8 py-12 text-center shadow-elevated md:px-14 md:py-16"
      >
        <span className="h-1 w-14 rounded-full bg-gold" aria-hidden="true" />
        <h2 className="text-h2">{whyParamount.heading}</h2>
        <div className="flex flex-col gap-4">
          {whyParamount.body.map((paragraph) => (
            <p key={paragraph} className="text-body-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
