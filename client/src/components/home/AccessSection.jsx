import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { access } from '../../data/home';
import { fadeUp } from '../../lib/motion';

export default function AccessSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="warm">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12"
      >
        <div className="lg:col-span-6">
          <span className="text-eyebrow uppercase text-sage-deep font-semibold">{access.eyebrow}</span>
          <h2 className="text-h2 mt-3">{access.heading}</h2>
          <p className="text-body-lg text-muted mt-4 max-w-lg">{access.body}</p>
          <Button to={access.ctaLink} variant="outline" className="mt-6 w-fit">
            {access.cta}
          </Button>
        </div>

        <ul className="flex flex-col gap-4 lg:col-span-6 lg:justify-center">
          {access.points.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-border bg-white-warm px-6 py-4"
            >
              <Icon className="text-navy shrink-0" size={22} aria-hidden="true" />
              <span className="text-body font-medium text-navy-deep">{label}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
