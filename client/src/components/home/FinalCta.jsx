import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import AppointmentButton from '../shared/AppointmentButton';
import { finalCta } from '../../data/home';
import { fadeUp } from '../../lib/motion';

export default function FinalCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="navy">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="flex flex-col items-center gap-5 text-center"
      >
        <h2 className="text-h2 text-white max-w-xl">{finalCta.heading}</h2>
        <p className="text-body-lg text-white/70 max-w-md">{finalCta.body}</p>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <AppointmentButton size="lg">{finalCta.primaryCta}</AppointmentButton>
          <Button to={finalCta.secondaryLink} variant="ghost-light" size="lg">
            {finalCta.secondaryCta}
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
