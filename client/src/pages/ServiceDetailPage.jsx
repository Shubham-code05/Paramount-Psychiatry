import { useParams } from 'react-router-dom';
import ConditionPage from '../components/conditions/ConditionPage';
import NotFoundPage from './NotFoundPage';
import { usePageMeta } from '../hooks/usePageMeta';
import { services } from '../data/services';

// Same pattern as ConditionDetailPage, driven by data/services.js.
export default function ServiceDetailPage() {
  const { slug } = useParams();
  const data = services[slug];

  usePageMeta(data?.seo ?? {});

  if (!data) return <NotFoundPage />;

  return <ConditionPage data={data} parent={{ label: 'Services', path: '/services' }} />;
}
