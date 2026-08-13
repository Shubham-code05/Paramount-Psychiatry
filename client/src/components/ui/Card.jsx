import { cn } from '../../lib/cn';

const variants = {
  default: 'bg-white border border-border shadow-soft',
  soft: 'bg-sage-soft border border-transparent',
  lavender: 'bg-lavender-soft border border-transparent',
  outlined: 'bg-transparent border border-border',
  elevated: 'bg-white border border-transparent shadow-elevated',
};

export default function Card({ variant = 'default', hover = false, className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-(--radius-card) p-6 md:p-8 transition-all duration-300 ease-calm',
        variants[variant],
        hover && 'hover:-translate-y-1 hover:shadow-elevated',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
