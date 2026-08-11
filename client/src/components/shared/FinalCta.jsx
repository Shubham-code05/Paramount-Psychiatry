import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import AppointmentButton from './AppointmentButton';
import { fadeUp } from '../../lib/motion';

// Generic closing CTA reused across the Conditions overview and every
// individual condition/service page — keeps the "Make an Appointment" /
// "Contact Us" pairing and the Headway link centralized in one place.
export default function FinalCta({
  eyebrow = 'Ready to take the next step?',
  heading = 'Your mental health deserves thoughtful care.',
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="navy">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="flex flex-col items-center gap-4 text-center"
      >
        {eyebrow && <span className="text-eyebrow uppercase text-sage font-semibold">{eyebrow}</span>}
        <h2 className="text-h2 text-white max-w-xl">{heading}</h2>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <AppointmentButton size="lg" />
          <Button to="/contact" variant="ghost-light" size="lg">
            Contact Us
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
