import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { introduction } from '../../data/home';
import { fadeUp } from '../../lib/motion';

export default function Introduction() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="approach" spacing="lg" background="white" className="scroll-mt-24">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12"
      >
        <div className="lg:col-span-5">
          <span className="text-eyebrow uppercase text-sage-deep font-semibold">{introduction.eyebrow}</span>
          <h2 className="text-h2 mt-3">{introduction.heading}</h2>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-5">
          {introduction.body.map((paragraph) => (
            <p key={paragraph} className="text-body-lg text-muted">
              {paragraph}
            </p>
          ))}
          <Button to={introduction.ctaLink} variant="outline" className="mt-2 w-fit">
            {introduction.cta}
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
