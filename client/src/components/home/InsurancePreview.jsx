import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { insurancePreview } from '../../data/home';
import { fadeUp } from '../../lib/motion';

export default function InsurancePreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="white">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="flex flex-col items-center gap-5 text-center"
      >
        <SectionHeading
          align="center"
          eyebrow={insurancePreview.eyebrow}
          title={insurancePreview.heading}
          description={insurancePreview.body}
        />
        <Button to={insurancePreview.ctaLink} variant="outline">
          {insurancePreview.cta}
        </Button>
      </motion.div>
    </Section>
  );
}
