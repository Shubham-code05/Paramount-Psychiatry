import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import AppointmentButton from '../shared/AppointmentButton';
import { aboutCta } from '../../data/aboutPage';
import { fadeUp } from '../../lib/motion';

export default function AboutCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="navy">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="flex flex-col items-center gap-6 text-center"
      >
        <h2 className="text-h2 text-white max-w-xl">{aboutCta.heading}</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <AppointmentButton size="lg">{aboutCta.primaryCta}</AppointmentButton>
        </div>
      </motion.div>
    </Section>
  );
}
