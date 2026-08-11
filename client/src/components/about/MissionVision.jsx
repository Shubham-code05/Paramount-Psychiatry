import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import { mission, vision } from '../../data/aboutPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function MissionVision() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="warm">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <motion.div variants={fadeUp} className="border-l-2 border-navy pl-6 md:pl-8">
          <span className="text-eyebrow uppercase text-sage-deep font-semibold">{mission.eyebrow}</span>
          <p className="text-h3 mt-3 font-display text-navy-deep">{mission.statement}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="border-l-2 border-sage pl-6 md:pl-8">
          <span className="text-eyebrow uppercase text-sage-deep font-semibold">{vision.eyebrow}</span>
          <p className="text-h3 mt-3 font-display text-navy-deep">{vision.statement}</p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
