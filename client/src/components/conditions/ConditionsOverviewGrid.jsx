import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { conditionCategories, conditions } from '../../data/conditions';
import { staggerContainer, fadeUp } from '../../lib/motion';
import { cn } from '../../lib/cn';

// One heading row per category. Hovering (desktop) or tapping/clicking
// (touch, and as an explicit toggle everywhere) reveals a dropdown listing
// that category's "Areas We Commonly Address" — each item links straight to
// the category's /conditions/:slug page. Mirrors the open/close pattern
// already used by the Navbar's mega menu (hover + click both toggle the
// same state) so behavior stays consistent across the site.
function AreaRow({ category }) {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const areas = conditions[category.slug]?.areas?.items ?? [];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'flex w-full items-center justify-between gap-3 rounded-(--radius-card) border border-border bg-white px-5 py-4 text-left shadow-soft transition-all duration-300 ease-calm hover:shadow-elevated',
          open && 'shadow-elevated',
        )}
      >
        <span className="text-h4 text-navy-deep">{category.title}</span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={cn('shrink-0 text-sage-deep transition-transform duration-300 ease-calm', open && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {open && areas.length > 0 && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-full z-20 mt-2 max-h-80 overflow-y-auto rounded-(--radius-card) border border-border bg-white p-2 shadow-elevated"
          >
            <ul className="flex flex-col">
              {areas.map((area) => (
                <li key={area.title}>
                  <Link
                    to={`/conditions/${category.slug}`}
                    className="block rounded-lg px-3 py-2 text-body-sm text-charcoal transition-colors hover:bg-navy/5 hover:text-navy"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {conditionCategories.map((category) => (
            <motion.div key={category.slug} variants={fadeUp}>
              <AreaRow category={category} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
