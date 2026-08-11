import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

// Text-based wordmark placeholder. Replace with:
//   <img src="/images/paramount-logo.svg" alt="Paramount Psychiatry" />
// once a real logo asset is available — no other call sites need to change.
export default function Logo({ className, dark = false }) {
  return (
    <Link
      to="/"
      className={cn('flex flex-col leading-none font-display select-none', className)}
      aria-label="Paramount Psychiatry — home"
    >
      <span className={cn('text-lg md:text-xl tracking-[0.14em] font-semibold', dark ? 'text-white' : 'text-navy-deep')}>
        PARAMOUNT
      </span>
      <span
        className={cn(
          'text-[0.6rem] md:text-xs tracking-[0.32em] font-medium mt-0.5',
          dark ? 'text-white/70' : 'text-sage-deep',
        )}
      >
        PSYCHIATRY
      </span>
    </Link>
  );
}
