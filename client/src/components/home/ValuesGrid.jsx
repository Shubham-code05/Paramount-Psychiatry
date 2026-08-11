import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { values } from '../../data/home';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function ValuesGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="white">
      <div className="flex flex-col gap-10">
        <SectionHeading align="center" eyebrow={values.eyebrow} title={values.heading} />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.items.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={fadeUp}>
              <Card variant="outlined" hover className="h-full">
                <Icon className="text-navy" size={26} aria-hidden="true" />
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
