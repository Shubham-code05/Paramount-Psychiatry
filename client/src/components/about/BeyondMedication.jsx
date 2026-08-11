import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { beyondMedication } from '../../data/aboutPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function BeyondMedication() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="white">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={beyondMedication.eyebrow}
          title={beyondMedication.heading}
          description={beyondMedication.body}
        />

        <motion.ul
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2"
        >
          {beyondMedication.items.map(({ icon: Icon, title }) => (
            <motion.li key={title} variants={fadeUp} className="flex items-start gap-4 border-t border-border pt-5">
              <Icon className="text-sage-deep mt-0.5 shrink-0" size={22} aria-hidden="true" />
              <span className="text-body font-medium text-navy-deep">{title}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
