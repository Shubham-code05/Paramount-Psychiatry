import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { fadeUp, staggerContainer } from '../../lib/motion';
import { cn } from '../../lib/cn';

// Calm, editorial numbered-step sequence — a restrained alternative to the
// homepage's circular-badge <CareJourney />, used anywhere a page needs to
// walk through a process (Services' "How Care Works" / "What to Expect",
// and the Patient Resources "What to Expect" page).
// `steps`: [{ title, description }]
// Top-border/number color alternates between the two soft accent tones.
const accentStyles = ['border-sage-deep/40 text-sage-deep', 'border-lavender-deep/40 text-lavender-deep'];

export default function ProcessSteps({ eyebrow, heading, intro, steps, background = 'white' }) {
  const shouldReduceMotion = useReducedMotion();

  if (!steps?.length) return null;

  return (
    <Section spacing="md" background={background}>
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="flex flex-col gap-8"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading eyebrow={eyebrow} title={heading} description={intro} maxWidth="max-w-2xl" />
        </motion.div>
        <ol className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              variants={fadeUp}
              className={cn('flex flex-col gap-2 border-t-2 pt-4', accentStyles[index % accentStyles.length])}
            >
              <span className="text-caption font-semibold" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-h4 text-navy-deep">{step.title}</h3>
              {step.description && <p className="text-body-sm text-muted">{step.description}</p>}
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </Section>
  );
}
