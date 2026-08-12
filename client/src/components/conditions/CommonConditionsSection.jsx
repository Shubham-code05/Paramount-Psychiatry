import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { commonConditionsGroups } from '../../data/conditions';
import { staggerContainer, fadeUp } from '../../lib/motion';

export default function CommonConditionsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="commonly-treated" spacing="md" background="ivory" className="scroll-mt-24">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
        variants={staggerContainer}
        className="flex flex-col gap-10"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            eyebrow="At a Glance"
            title="Conditions we commonly treat"
            description="A quick reference across the areas above. Each links to the category page that covers it in more depth."
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {commonConditionsGroups.map((group) => (
            <motion.div key={group.heading} variants={fadeUp} className="flex flex-col gap-3">
              <h3 className="text-eyebrow uppercase text-sage-deep font-semibold">{group.heading}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="inline-flex rounded-full border border-border bg-white px-3.5 py-1.5 text-body-sm text-charcoal transition-colors duration-200 hover:border-navy/30 hover:text-navy"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
