import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { licensureLanguages } from '../../data/drTandonPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function LicensureLanguages() {
  const shouldReduceMotion = useReducedMotion();
  const { licensure, languages } = licensureLanguages;

  return (
    <Section spacing="lg" background="white">
      <div className="flex flex-col gap-8">
        <SectionHeading eyebrow={licensureLanguages.eyebrow} title="Where and how care is provided." />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2">
              <licensure.icon className="text-sage-deep" size={20} aria-hidden="true" />
              <span className="text-body font-semibold text-navy-deep">{licensure.label}</span>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              {licensure.states.map((state) => (
                <li key={state} className="text-body text-muted">
                  {state}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2">
              <languages.icon className="text-sage-deep" size={20} aria-hidden="true" />
              <span className="text-body font-semibold text-navy-deep">{languages.label}</span>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              {languages.items.map((language) => (
                <li key={language} className="text-body text-muted">
                  {language}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
