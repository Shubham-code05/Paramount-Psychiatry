import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { learningCenterCategories } from '../../data/learningCenter';
import { cn } from '../../lib/cn';

export default function LearningCenterMenuPanel({ variant = 'desktop', onNavigate }) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-x-8 gap-y-1',
        variant === 'desktop' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2',
      )}
    >
      {learningCenterCategories.map((item) => (
        <Link
          key={item.slug}
          to={item.path ?? `/learning-center/${item.slug}`}
          onClick={onNavigate}
          className="rounded-lg px-2 py-2 text-body-sm text-charcoal transition-colors hover:bg-navy/5 hover:text-navy"
        >
          {item.title}
        </Link>
      ))}
      <div className="col-span-full mt-3 border-t border-border pt-5">
        <Link
          to="/learning-center"
          onClick={onNavigate}
          className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-navy hover:text-navy-deep transition-colors group"
        >
          Visit the Learning Center
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
