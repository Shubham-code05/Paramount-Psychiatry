import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import { philosophy } from '../../data/aboutPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function Philosophy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="white">
      <div className="flex flex-col gap-10">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <span className="text-eyebrow uppercase text-sage-deep font-semibold">{philosophy.eyebrow}</span>
          <h2 className="text-h2 mt-3">{philosophy.heading}</h2>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2"
        >
          {philosophy.points.map((point) => (
            <motion.div key={point.title} variants={fadeUp}>
              <h3 className="text-h4 text-navy-deep">{point.title}</h3>
              <p className="text-body text-muted mt-2">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-body-lg text-navy-deep max-w-2xl border-l-2 border-sage pl-6"
        >
          {philosophy.closing}
        </motion.p>
      </div>
    </Section>
  );
}
