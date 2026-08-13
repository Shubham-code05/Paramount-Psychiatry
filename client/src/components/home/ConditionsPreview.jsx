import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { conditionsPreview } from '../../data/home';
import { fadeUp, staggerContainer } from '../../lib/motion';
import { cn } from '../../lib/cn';

// Arrow color cycles through the three supporting pastels — sage, blue,
// lavender — in equal rotation, same treatment for all three.
const arrowColors = ['text-sage-deep', 'text-navy', 'text-lavender-deep'];

export default function ConditionsPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="lavender-soft">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={conditionsPreview.eyebrow}
          title={conditionsPreview.heading}
          description={conditionsPreview.body}
        />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {conditionsPreview.items.map((item, index) => (
            <motion.div key={item.path} variants={fadeUp}>
              <Link
                to={item.path}
                className="group flex h-full flex-col justify-between gap-6 bg-white-warm p-6 transition-colors hover:bg-white"
              >
                <div>
                  <h3 className="text-h4">{item.title}</h3>
                  <p className="text-body-sm text-muted mt-2">{item.description}</p>
                </div>
                <ArrowRight
                  size={18}
                  className={cn(
                    'transition-transform group-hover:translate-x-1',
                    arrowColors[index % arrowColors.length],
                  )}
                  aria-hidden="true"
                />
              </Link>
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
