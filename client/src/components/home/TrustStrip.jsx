import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import { trustStrip } from '../../data/home';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function TrustStrip() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="sm" background="white" className="border-y border-border">
      <motion.ul
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={staggerContainer}
        className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
      >
        {trustStrip.map(({ icon: Icon, label }) => (
          <motion.li key={label} variants={fadeUp} className="flex items-center gap-2 text-body-sm text-charcoal">
            <Icon size={18} className="text-sage-deep" aria-hidden="true" />
            {label}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
