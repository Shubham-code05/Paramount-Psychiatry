import { ClipboardList, FileText } from 'lucide-react';
import Section from '../components/ui/Section';
import PageHero from '../components/shared/PageHero';
import ResourceGrid from '../components/resources/ResourceGrid';
import FinalCta from '../components/shared/FinalCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { servicesMegaMenu } from '../data/navigation';

const seo = {
  title: 'Clinical & Evaluation Services | Paramount Psychiatry',
  description: 'Ongoing clinical psychiatric care and focused evaluation services at Paramount Psychiatry — individualized to each patient.',
};

const icons = {
  '/services/clinical-services': ClipboardList,
  '/services/evaluation-services': FileText,
};

const serviceGrid = servicesMegaMenu.map((item) => ({
  icon: icons[item.path],
  title: item.label,
  description: item.description,
  path: item.path,
}));

export default function ServicesPage() {
  usePageMeta(seo);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Clinical & Evaluation Services"
        intro="Paramount Psychiatry provides two complementary lines of care: ongoing clinical treatment, and focused psychiatric evaluations. Explore each to learn more."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Services' }]}
      />

      <Section spacing="md" background="white">
        <ResourceGrid items={serviceGrid} />
      </Section>

      <FinalCta />
    </>
  );
}
