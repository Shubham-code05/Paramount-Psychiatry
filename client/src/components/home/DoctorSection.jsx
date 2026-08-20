import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { doctor } from '../../data/home';
import site from '../../data/site';
import { fadeUp } from '../../lib/motion';
import LeafCluster from '../decor/LeafCluster';

export default function DoctorSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="warm" className="relative overflow-hidden">
      <LeafCluster
        animate="reveal"
        className="hidden lg:block absolute top-10 left-[6%] xl:left-[10%]"
      />
      <LeafCluster
        animate="reveal"
        flip
        className="hidden lg:block absolute bottom-10 right-[6%] xl:right-[10%]"
      />
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center"
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
    </Section>
  );
}
