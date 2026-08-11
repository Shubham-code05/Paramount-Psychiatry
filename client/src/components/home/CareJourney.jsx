import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { careJourney } from '../../data/home';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function CareJourney() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="blue-soft">
      <div className="flex flex-col gap-12">
        <SectionHeading align="center" eyebrow={careJourney.eyebrow} title={careJourney.heading} />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="relative flex flex-col gap-10 lg:flex-row lg:gap-4"
        >
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-navy/15 lg:left-0 lg:right-0 lg:top-6 lg:bottom-auto lg:h-px lg:w-auto"
            aria-hidden="true"
          />

          {careJourney.steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative flex gap-4 lg:flex-1 lg:flex-col lg:items-center lg:gap-4 lg:text-center"
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white text-body-sm font-semibold">
                {step.number}
              </div>
              <div className="lg:px-2">
                <h3 className="text-h4">{step.title}</h3>
                <p className="text-body-sm text-muted mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
