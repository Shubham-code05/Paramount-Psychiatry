import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import AppointmentButton from '../shared/AppointmentButton';
import { drClosing } from '../../data/drTandonPage';
import { fadeUp } from '../../lib/motion';

export default function ClosingCta() {
  const shouldReduceMotion = useReducedMotion();
  const Icon = drClosing.icon;

  return (
    <Section spacing="lg" background="navy">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="flex flex-col items-center gap-5 text-center"
      >
        <Icon className="text-white/70" size={28} aria-hidden="true" />
        <h2 className="text-h2 text-white max-w-xl">{drClosing.heading}</h2>
        <p className="text-body-lg text-white/70 max-w-md">{drClosing.body}</p>
        <AppointmentButton size="lg" className="mt-2">
          {drClosing.cta}
        </AppointmentButton>
      </motion.div>
    </Section>
  );
}
