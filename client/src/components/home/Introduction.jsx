import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { introduction } from '../../data/home';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function Introduction() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="approach" spacing="lg" background="white" className="scroll-mt-24">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="flex flex-col gap-10"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
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
          </div>
        </div>

        <Button to={introduction.ctaLink} variant="outline" className="mx-auto">
          {introduction.cta}
        </Button>

        <div className="flex flex-col gap-8 border-t border-border pt-10">
          <span className="text-eyebrow uppercase text-sage-deep font-semibold text-center">
            {introduction.valuesEyebrow}
          </span>

          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {introduction.values.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={fadeUp}>
                <Card variant="outlined" hover className="h-full">
                  <Icon className="text-navy" size={26} aria-hidden="true" />
                  <h3 className="text-h4 mt-4">{title}</h3>
                  <p className="text-body-sm text-muted mt-2">{description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
