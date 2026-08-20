import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import { aboutIntro } from '../../data/aboutPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function AboutIntro() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="white">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="mx-auto flex max-w-3xl flex-col gap-6"
      >
        {aboutIntro.paragraphs.map((paragraph, index) => (
          <motion.p
            key={paragraph}
            variants={fadeUp}
            className={index === 0 ? 'text-body-lg text-navy-deep' : 'text-body text-muted'}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </Section>
  );
}
