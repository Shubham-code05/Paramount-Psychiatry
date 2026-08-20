import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import coreValues from '../../data/values';
import { fadeUp, staggerContainer } from '../../lib/motion';

// Cycle through the site's pastel accent tokens for each card's icon badge.
const badgeTints = ['bg-sage-soft', 'bg-blue-soft', 'bg-lavender-soft'];

export default function CoreValues() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="white">
      <div className="flex flex-col gap-10">
        <SectionHeading align="center" title="Our Core Values" />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {coreValues.map(({ icon: Icon, title, description }, index) => (
            <motion.div key={title} variants={fadeUp}>
              <Card variant="default" hover className="h-full">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${badgeTints[index % badgeTints.length]}`}>
                  <Icon className="text-navy" size={20} aria-hidden="true" />
                </div>
                <h3 className="text-h4 mt-4">{title}</h3>
                <p className="text-body-sm text-muted mt-2">{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
