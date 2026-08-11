import { motion, useReducedMotion } from 'framer-motion';
import { UserRound } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { doctor } from '../../data/home';
import site from '../../data/site';
import { fadeUp } from '../../lib/motion';

export default function DoctorSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="warm">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 mx-auto aspect-4/5 w-full max-w-sm lg:order-1 lg:col-span-5"
        >
          <div className="absolute inset-0 rounded-4xl bg-blue-soft" />
          <div className="absolute inset-4 rounded-4xl bg-white-warm shadow-elevated flex items-center justify-center">
            <UserRound size={96} className="text-sage/60" strokeWidth={1} aria-hidden="true" />
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="order-1 flex flex-col gap-5 lg:order-2 lg:col-span-7"
        >
          <span className="text-eyebrow uppercase text-sage-deep font-semibold">{doctor.eyebrow}</span>
          <h2 className="text-h2">{doctor.heading}</h2>
          <p className="text-body font-medium text-navy-deep">{site.provider} — Board-Certified Adult & Geriatric Psychiatrist</p>
          {doctor.body.map((paragraph) => (
            <p key={paragraph} className="text-body-lg text-muted">
              {paragraph}
            </p>
          ))}
          <Button to={doctor.ctaLink} variant="outline" className="mt-2 w-fit">
            {doctor.cta}
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
