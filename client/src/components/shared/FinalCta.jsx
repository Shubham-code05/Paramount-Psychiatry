import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import AppointmentButton from './AppointmentButton';
import LeafCluster from '../decor/LeafCluster';
import { fadeUp } from '../../lib/motion';

// Generic closing CTA reused across every page on the site — keeps the
// "Make an Appointment" button and the Headway link centralized in one
// place. `body` is optional (the homepage uses it for a
// short supporting line; most pages omit it). `decorate` opts into the
// homepage's subtle botanical corner accents — off by default so every
// other page's CTA stays pixel-identical.
export default function FinalCta({
  eyebrow = 'Ready to take the next step?',
  heading = 'Your mental health deserves thoughtful care.',
  body,
  decorate = false,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="navy" className={decorate ? 'relative overflow-hidden' : undefined}>
      {decorate && (
        <>
          <LeafCluster animate="reveal" className="hidden md:block absolute top-8 left-[4%] lg:left-[8%]" />
          <LeafCluster animate="reveal" flip className="hidden md:block absolute bottom-8 right-[4%] lg:right-[8%]" />
        </>
      )}
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="flex flex-col items-center gap-4 text-center"
      >
        {eyebrow && <span className="text-eyebrow uppercase text-sage font-semibold">{eyebrow}</span>}
        <h2 className="text-h2 text-white max-w-xl">{heading}</h2>
        {body && <p className="text-body-lg text-white/70 max-w-md">{body}</p>}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <AppointmentButton size="lg" />
        </div>
      </motion.div>
    </Section>
  );
}
