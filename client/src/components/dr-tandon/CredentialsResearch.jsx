import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { credentials } from '../../data/drTandonPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function CredentialsResearch() {
  const shouldReduceMotion = useReducedMotion();
  const rows = [credentials.boardCertification, credentials.research];

  return (
    <Section spacing="lg" background="lavender-soft">
      <div className="flex flex-col gap-8">
        <SectionHeading eyebrow={credentials.eyebrow} title="Board certification and research." />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="flex flex-col gap-4"
        >
          {rows.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl bg-white-warm px-6 py-5 shadow-soft"
            >
              <Icon className="text-navy mt-0.5 shrink-0" size={22} aria-hidden="true" />
              <p className="text-body text-navy-deep">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
