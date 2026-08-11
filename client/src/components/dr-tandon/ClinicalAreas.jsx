import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { clinicalAreas } from '../../data/drTandonPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function ClinicalAreas() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="white">
      <div className="flex flex-col gap-8">
        <SectionHeading eyebrow={clinicalAreas.eyebrow} title={clinicalAreas.heading} />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="flex flex-wrap gap-3"
        >
          {clinicalAreas.areas.map((area) => (
            <motion.span
              key={area}
              variants={fadeUp}
              className="rounded-full border border-border bg-sage-soft px-4 py-1.5 text-body-sm text-navy-deep"
            >
              {area}
            </motion.span>
          ))}
        </motion.div>

        <p className="text-caption text-muted">{clinicalAreas.note}</p>
      </div>
    </Section>
  );
}
