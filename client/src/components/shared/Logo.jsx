import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

// Footer (dark background) uses the same navy-backed logo artwork as the
// Navbar — both sit on the site's navy-deep background, so the mark blends
// seamlessly in both places.
export default function Logo({ className, dark = false }) {
  if (dark) {
    return (
      <Link
        to="/"
        className={cn('flex items-center select-none', className)}
        aria-label="Paramount Psychiatry — home"
      >
        <img
          src="/images/navimage.png"
          alt="Paramount Psychiatry"
          className="h-16 w-auto object-contain md:h-20"
        />
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
