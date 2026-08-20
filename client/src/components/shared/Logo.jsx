import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

// Footer (dark background) keeps the original text wordmark — the approved
// logo artwork has an opaque cream backdrop that would box awkwardly on navy.
export default function Logo({ className, dark = false }) {
  if (dark) {
    return (
      <Link
        to="/"
        className={cn('flex flex-col leading-none font-display select-none', className)}
        aria-label="Paramount Psychiatry — home"
      >
        <span className="text-lg md:text-xl tracking-[0.14em] font-semibold text-white">
          PARAMOUNT
        </span>
        <span className="text-[0.6rem] md:text-xs tracking-[0.32em] font-medium mt-0.5 text-white/70">
          PSYCHIATRY
        </span>
      </Link>
    );
  }

  return (
    <Link
      to="/"
      className={cn('flex items-center select-none', className)}
      aria-label="Paramount Psychiatry — home"
    >
      <img
        src="/images/logo.png"
        alt=""
        className="h-14 w-auto object-contain md:h-16 lg:h-20"
      />
    </Link>
  );
}
