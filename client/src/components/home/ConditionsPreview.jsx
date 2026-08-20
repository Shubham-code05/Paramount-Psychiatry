import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { conditionsPreview } from '../../data/home';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function ConditionsPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="sage-soft">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={conditionsPreview.eyebrow}
          title={conditionsPreview.heading}
          description={conditionsPreview.body}
        />

        {/*
          Informational only — these cards intentionally are not links.
          Only the "Explore All Conditions" button below navigates to the
          Conditions page.
        */}
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {conditionsPreview.items.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <Card variant="elevated" className="h-full">
                <h3 className="text-h4">{item.title}</h3>
                <p className="text-body-sm text-muted mt-2">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Button to={conditionsPreview.ctaLink} variant="primary" className="w-fit">
          {conditionsPreview.cta}
        </Button>
      </div>
    </Section>
  );
}
