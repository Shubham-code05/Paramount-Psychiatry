import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium ' +
  'transition-colors transition-transform duration-200 ease-out ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ' +
  'disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

const variants = {
  primary: 'bg-navy text-white hover:bg-navy-deep',
  secondary: 'bg-sage-soft text-navy-deep hover:bg-sage',
  outline: 'bg-transparent text-navy border border-navy/30 hover:border-navy hover:bg-navy/5',
  ghost: 'bg-transparent text-navy hover:bg-navy/5',
  // For use on dark (navy) backgrounds — kept separate from `ghost` so its
  // text color never has to fight `ghost`'s via a conflicting className override.
  'ghost-light': 'bg-transparent text-white hover:bg-white/10',
};

const sizes = {
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-5 py-2.5',
  lg: 'text-base px-6 py-3.5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  to,
  href,
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
