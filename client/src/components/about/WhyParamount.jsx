import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import { whyParamount } from '../../data/aboutPage';
import { fadeUp } from '../../lib/motion';

export default function WhyParamount() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="lavender-soft">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center"
      >
        <h2 className="text-h2">{whyParamount.heading}</h2>
        {whyParamount.body.map((paragraph) => (
          <p key={paragraph} className="text-body-lg text-muted">
            {paragraph}
          </p>
        ))}
      </motion.div>
    </Section>
  );
}
