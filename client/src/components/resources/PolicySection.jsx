import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { fadeUp } from '../../lib/motion';

// One named, anchorable policy block (Communication, Appointments, Privacy,
// etc.) on the Practice Policies page. `id` becomes the section's anchor so
// links like /practice-policies#privacy work.
export default function PolicySection({ id, heading, paragraphs, link, background = 'white' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id={id} spacing="md" background={background} className="scroll-mt-24">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="flex flex-col gap-4 max-w-3xl"
      >
        <SectionHeading title={heading} />
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-body text-charcoal">
            {paragraph}
          </p>
        ))}
        {link && (
          <Link
            to={link.path}
            className="group inline-flex w-fit items-center gap-1.5 text-body-sm font-medium text-navy hover:text-navy-deep"
          >
            {link.label}
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        )}
      </motion.div>
    </Section>
  );
}
