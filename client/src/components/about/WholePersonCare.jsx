import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import { wholePersonCare } from '../../data/aboutPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

const tagStyles = ['bg-white text-navy-deep', 'bg-navy text-white', 'bg-white/70 text-navy-deep'];

export default function WholePersonCare() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="lavender-soft">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="lg:col-span-5"
        >
          <span className="text-eyebrow uppercase text-sage-deep font-semibold">{wholePersonCare.eyebrow}</span>
          <h2 className="text-h2 mt-3">{wholePersonCare.heading}</h2>
          <p className="text-body-lg text-navy-deep/80 mt-4">{wholePersonCare.body}</p>
          <p className="text-caption text-navy-deep/60 mt-6">{wholePersonCare.note}</p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="flex flex-wrap content-start gap-3 lg:col-span-7 lg:items-center"
        >
          {wholePersonCare.examples.map((example, index) => (
            <motion.span
              key={example}
              variants={fadeUp}
              className={`rounded-full px-5 py-2.5 text-body-sm font-medium shadow-soft ${tagStyles[index % tagStyles.length]}`}
            >
              {example}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
