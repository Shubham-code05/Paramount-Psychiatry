import { useParams } from 'react-router-dom';
import ConditionPage from '../components/conditions/ConditionPage';
import NotFoundPage from './NotFoundPage';
import { usePageMeta } from '../hooks/usePageMeta';
import { conditions } from '../data/conditions';

// Single route (/conditions/:slug) drives every condition page from
// data/conditions.js — adding a new category later means adding a data
// entry and a nav link, not a new page component.
export default function ConditionDetailPage() {
  const { slug } = useParams();
  const data = conditions[slug];

  usePageMeta(data?.seo ?? {});

  if (!data) return <NotFoundPage />;

  return <ConditionPage data={data} />;
}
