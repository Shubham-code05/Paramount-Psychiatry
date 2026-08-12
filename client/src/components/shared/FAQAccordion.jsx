import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../lib/motion';
import { cn } from '../../lib/cn';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function AccordionItem({ id, question, answer, isOpen, onToggle }) {
  const panelId = `${id}-panel`;
  const buttonId = `${id}-trigger`;

  return (
    <div className="border-b border-border">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-body font-medium text-navy-deep transition-colors hover:text-navy"
        >
          {question}
          <ChevronDown
            size={18}
            aria-hidden="true"
            className={cn('shrink-0 text-sage-deep transition-transform duration-300 ease-calm', isOpen && 'rotate-180')}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!isOpen}
        className={cn(
          'grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-calm',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="min-h-0">
          <p className="pb-5 text-body-sm text-muted max-w-2xl">{answer}</p>
        </div>
      </div>
    </div>
  );
}

// Accessible accordion (single or multiple panels open at once).
// `categories`: [{ heading?, items: [{ question, answer }] }]
// `idPrefix`: keeps aria ids unique when more than one accordion renders on a page.
export default function FAQAccordion({ categories, idPrefix = 'faq' }) {
  const [openKeys, setOpenKeys] = useState(() => new Set());
  const shouldReduceMotion = useReducedMotion();

  function toggle(key) {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-10">
      {categories.map((category) => (
        <div key={category.heading ?? 'faq-group'} className="flex flex-col gap-2">
          {category.heading && <h2 className="text-h3 text-navy-deep mb-2">{category.heading}</h2>}
          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {category.items.map((item) => {
              const key = `${idPrefix}-${slugify(category.heading ?? '')}-${slugify(item.question)}`;
              return (
                <motion.div key={key} variants={fadeUp}>
                  <AccordionItem
                    id={key}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openKeys.has(key)}
                    onToggle={() => toggle(key)}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
