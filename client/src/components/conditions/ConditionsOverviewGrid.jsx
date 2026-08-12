import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { conditionCategories } from '../../data/conditions';
import { staggerContainer, fadeUp } from '../../lib/motion';

const [featured, ...rest] = conditionCategories;

export default function ConditionsOverviewGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="md" background="white">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
        variants={staggerContainer}
        className="flex flex-col gap-10"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            eyebrow="Areas of Care"
            title="A full range of psychiatric care, organized around you."
            description="Explore the categories below, or browse conditions we commonly treat further down the page."
          />
        </motion.div>

        {/* Featured category — Comprehensive Psychiatric Services is the foundation every plan builds on. */}
        <motion.div variants={fadeUp}>
          <Link
            to={`/conditions/${featured.slug}`}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-(--radius-card) bg-navy-deep p-8 text-white shadow-elevated transition-transform duration-300 ease-calm hover:-translate-y-0.5 md:flex-row md:items-center md:justify-between md:gap-8 md:p-10"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-[58%_42%_36%_64%/60%_38%_62%_40%] bg-white/5"
              aria-hidden="true"
            />
            <div className="relative flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                <featured.icon size={22} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-eyebrow uppercase text-sage font-semibold">Where Every Plan Begins</span>
                <h3 className="text-h3 text-white">{featured.title}</h3>
                <p className="text-body-sm text-white/70 max-w-md">{featured.description}</p>
              </div>
            </div>
            <span className="relative inline-flex shrink-0 items-center gap-1.5 text-body-sm font-semibold text-white">
              Learn More
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((category) => (
            <motion.div key={category.slug} variants={fadeUp} className="h-full">
              <Link
                to={`/conditions/${category.slug}`}
                className="group flex h-full flex-col gap-4 rounded-(--radius-card) border border-border bg-white p-6 shadow-soft transition-all duration-300 ease-calm hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-soft text-sage-deep">
                  <category.icon size={20} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div className="flex flex-1 flex-col gap-1.5">
                  <h3 className="text-h4 text-navy-deep">{category.title}</h3>
                  <p className="text-body-sm text-muted">{category.description}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-navy">
                  Learn More
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
