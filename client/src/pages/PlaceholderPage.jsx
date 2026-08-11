import { motion, useReducedMotion } from 'framer-motion';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import AppointmentButton from '../components/shared/AppointmentButton';
import Button from '../components/ui/Button';
import { fadeUp } from '../lib/motion';

export default function PlaceholderPage({ eyebrow, title, description }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="xl" background="warm">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
        variants={fadeUp}
        className="flex flex-col items-start gap-6"
      >
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
        <p className="text-body text-muted max-w-xl">
          This page is part of the Paramount Psychiatry site foundation and will be built out with full content
          in a later phase.
        </p>
        <div className="flex flex-wrap gap-3">
          <AppointmentButton />
          <Button to="/" variant="outline">
            Back to Home
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
