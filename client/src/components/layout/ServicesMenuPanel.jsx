import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesMegaMenu } from '../../data/navigation';
import { cn } from '../../lib/cn';

export default function ServicesMenuPanel({ variant = 'desktop', onNavigate }) {
  return (
    <div className={cn('flex flex-col', variant === 'desktop' ? 'gap-5' : 'gap-4')}>
      {servicesMegaMenu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={onNavigate}
          className="group -m-2 flex flex-col gap-1 rounded-xl p-2 transition-colors hover:bg-navy/5"
        >
          <span className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-charcoal transition-colors group-hover:text-navy">
            {item.label}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
          <span className="text-caption text-muted">{item.description}</span>
        </Link>
      ))}
    </div>
  );
}
