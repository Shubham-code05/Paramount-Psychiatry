import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import coreValues from '../../data/values';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function CoreValues() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="white">
      <div className="flex flex-col gap-10">
        <SectionHeading align="center" eyebrow="Core Values" title="What guides every visit." />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {coreValues.map(({ icon: Icon, title, description }, index) => (
            <motion.div key={title} variants={fadeUp} className="border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <span className="text-eyebrow text-sage-deep font-semibold">{String(index + 1).padStart(2, '0')}</span>
                <Icon className="text-navy" size={22} aria-hidden="true" />
              </div>
              <h3 className="text-h4 mt-3">{title}</h3>
              <p className="text-body-sm text-muted mt-2">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
