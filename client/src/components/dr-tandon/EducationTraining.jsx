import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { educationTraining } from '../../data/drTandonPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function EducationTraining() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="blue-soft">
      <div className="flex flex-col gap-10">
        <SectionHeading eyebrow={educationTraining.eyebrow} title={educationTraining.heading} />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="relative flex flex-col gap-8 max-w-2xl"
        >
          <div className="absolute left-6 top-2 bottom-2 w-px bg-navy/15" aria-hidden="true" />

          {educationTraining.timeline.map(({ icon: Icon, title, institution }) => (
            <motion.div key={title} variants={fadeUp} className="relative flex gap-5">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                <Icon size={20} aria-hidden="true" />
              </div>
              <div className="pt-1.5">
                <h3 className="text-h4">{title}</h3>
                <p className="text-body-sm text-muted mt-1">{institution}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-body text-navy-deep/80 max-w-2xl border-l-2 border-sage pl-6">{educationTraining.note}</p>
      </div>
    </Section>
  );
}
