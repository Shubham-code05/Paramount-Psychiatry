import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { servicesPreview } from '../../data/home';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function ServicesPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="sage-soft">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={servicesPreview.eyebrow}
          title={servicesPreview.heading}
          description={servicesPreview.body}
        />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {servicesPreview.items.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={fadeUp}>
              <Card variant="elevated" className="h-full">
                <Icon className="text-navy" size={28} aria-hidden="true" />
                <h3 className="text-h3 mt-4">{title}</h3>
                <p className="text-body text-muted mt-2">{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Button to={servicesPreview.ctaLink} variant="primary" className="w-fit">
          {servicesPreview.cta}
        </Button>
      </div>
    </Section>
  );
}
