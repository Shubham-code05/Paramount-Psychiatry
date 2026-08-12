import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { experience } from '../../data/drTandonPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="lavender-soft">
      <div className="flex flex-col gap-8">
        <SectionHeading eyebrow={experience.eyebrow} title={experience.heading} description={experience.body} />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experience.settings.map((setting) => (
            <motion.div
              key={setting}
              variants={fadeUp}
              className="rounded-xl border border-border bg-white-warm px-5 py-4 text-body font-medium text-navy-deep"
            >
              {setting}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
