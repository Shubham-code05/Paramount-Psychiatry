import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// items: [{ label, path? }] — the last item should omit `path` (current page).
export default function Breadcrumbs({ items, className }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-caption text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight size={12} className="text-muted/60" aria-hidden="true" />}
              {isLast || !item.path ? (
                <span aria-current="page" className="text-charcoal font-medium">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-navy transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
