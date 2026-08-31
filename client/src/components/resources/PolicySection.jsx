import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Section from '../ui/Section';
import { fadeUp } from '../../lib/motion';

// One named, anchorable policy block (Communication, Appointments, Privacy,
// etc.) on the Practice Policies page. `id` becomes the section's anchor so
// links like /practice-policies#privacy work. Layout matches <WhyParamount
// />'s "Why Paramount Psychiatry?" section: heading in a lg:col-span-5 left
// column, copy (and an optional link) in a lg:col-span-7 right column, with
// the same bottom divider treatment.
export default function PolicySection({ id, heading, paragraphs, link, background = 'white' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id={id} spacing="md" background={background} className="scroll-mt-24">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="flex flex-col gap-10"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-h2">{heading}</h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-5">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-body-lg text-muted">
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
          </div>
        </div>

        <div className="border-t border-border pt-10" aria-hidden="true" />
      </motion.div>
    </Section>
  );
}
