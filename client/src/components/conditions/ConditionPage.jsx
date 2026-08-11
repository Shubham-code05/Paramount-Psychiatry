import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Info, ArrowUpRight } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Breadcrumbs from '../shared/Breadcrumbs';
import FinalCta from '../shared/FinalCta';
import { fadeUp, staggerContainer } from '../../lib/motion';

// Single reusable template driving every /conditions/:slug and
// /services/:slug page. New categories are added by adding an entry to
// data/conditions.js or data/services.js — this component never changes.
//
// `data` shape: { title, eyebrow, intro, overview: { heading?, paragraphs },
//   areas: { heading?, items: [{ title, description }] }, approach: { heading?, paragraphs },
//   disclaimer?: string, related: [{ label, path }] }
// `parent`: { label, path } — the breadcrumb's middle segment (defaults to Conditions We Treat).
export default function ConditionPage({ data, parent = { label: 'Conditions We Treat', path: '/conditions' } }) {
  const shouldReduceMotion = useReducedMotion();
  const { title, eyebrow, intro, overview, areas, approach, disclaimer, related } = data;

  return (
    <>
      <Section spacing="xl" background="warm" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-[58%_42%_36%_64%/60%_38%_62%_40%] bg-sage-soft opacity-60"
          aria-hidden="true"
        />
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          className="relative flex max-w-2xl flex-col gap-6"
        >
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, parent, { label: title }]} />
          <span className="text-eyebrow uppercase text-sage-deep font-semibold">{eyebrow}</span>
          <h1 className="text-display text-navy-deep">{title}</h1>
          {intro && <p className="text-body-lg text-muted">{intro}</p>}
        </motion.div>
      </Section>

      {overview?.paragraphs?.length > 0 && (
        <Section spacing="lg" background="white">
          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="flex flex-col gap-5 max-w-3xl"
          >
            <SectionHeading title={overview.heading ?? 'Overview'} />
            {overview.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-body text-charcoal">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </Section>
      )}

      {areas?.items?.length > 0 && (
        <Section spacing="lg" background="ivory">
          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUp}>
              <SectionHeading title={areas.heading ?? 'Areas We Commonly Address'} maxWidth="max-w-2xl" />
            </motion.div>
            <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
              {areas.items.map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-deep" aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-h4 text-navy-deep">{item.title}</h3>
                    {item.description && <p className="text-body-sm text-muted">{item.description}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>
      )}

      {disclaimer && (
        <Section spacing="sm" background="white">
          <div className="flex gap-3 rounded-(--radius-card) border border-border bg-sage-soft/60 p-5 md:p-6 max-w-3xl">
            <Info size={20} className="shrink-0 text-sage-deep" aria-hidden="true" />
            <p className="text-body-sm text-charcoal">{disclaimer}</p>
          </div>
        </Section>
      )}

      {approach?.paragraphs?.length > 0 && (
        <Section spacing="lg" background="white">
          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="flex flex-col gap-5 max-w-3xl"
          >
            <SectionHeading eyebrow="Our Approach" title={approach.heading ?? 'The Paramount Approach'} />
            {approach.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-body text-charcoal">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </Section>
      )}

      {related?.length > 0 && (
        <Section spacing="lg" background="ivory">
          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <SectionHeading title="Related Conditions & Areas" maxWidth="max-w-2xl" />
            </motion.div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <motion.div key={item.path} variants={fadeUp}>
                  <Link
                    to={item.path}
                    className="group flex h-full items-center justify-between gap-2 rounded-(--radius-card) border border-border bg-white p-4 text-body-sm font-medium text-charcoal shadow-soft transition-all duration-300 ease-calm hover:-translate-y-0.5 hover:shadow-elevated hover:text-navy"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-sage-deep transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>
      )}

      <FinalCta />
    </>
  );
}
