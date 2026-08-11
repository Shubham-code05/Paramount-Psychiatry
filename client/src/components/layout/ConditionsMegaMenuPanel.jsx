import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { conditionsMegaMenu } from '../../data/navigation';
import { cn } from '../../lib/cn';

export default function ConditionsMegaMenuPanel({ variant = 'desktop', onNavigate }) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6',
        variant === 'desktop' ? 'sm:grid-cols-2 lg:grid-cols-4 gap-8' : 'sm:grid-cols-2',
      )}
    >
      {conditionsMegaMenu.map((group) => (
        <div key={group.heading} className="flex flex-col gap-3">
          <span className="text-eyebrow uppercase text-sage-deep font-semibold">{group.heading}</span>
          <ul className="flex flex-col gap-2">
            {group.items.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={onNavigate}
                  className="text-body-sm text-charcoal hover:text-navy transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="col-span-full mt-2 border-t border-border pt-5 sm:col-span-2 lg:col-span-4">
        <Link
          to="/conditions"
          onClick={onNavigate}
          className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-navy hover:text-navy-deep transition-colors group"
        >
          Explore All Conditions
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
