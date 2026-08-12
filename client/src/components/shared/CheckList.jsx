import { Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../lib/motion';
import { cn } from '../../lib/cn';

// Reassuring preparation/checklist pattern — used for "Preparing for Your
// Visit", "New Patients", and the Telepsychiatry setup list. Semantic <ul>
// with a decorative check mark; not an interactive checkbox.
// `items`: string[]
// Check-mark circle alternates between the two soft accent tones so a long
// checklist doesn't read as monochrome.
const markStyles = ['bg-sage-soft text-sage-deep', 'bg-lavender-soft text-lavender-deep'];

export default function CheckList({ items, className }) {
  const shouldReduceMotion = useReducedMotion();

  if (!items?.length) return null;

  return (
    <motion.ul
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
      className={cn('flex flex-col gap-3', className)}
    >
      {items.map((item, index) => (
        <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-body text-charcoal">
          <span
            className={cn(
              'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
              markStyles[index % markStyles.length],
            )}
          >
            <Check size={13} strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
