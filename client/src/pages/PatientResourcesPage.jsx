import Section from '../components/ui/Section';
import PageHero from '../components/shared/PageHero';
import ResourceGrid from '../components/resources/ResourceGrid';
import FinalCta from '../components/shared/FinalCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { patientResourcesSeo, patientResourcesHero, resourceGrid } from '../data/patientResources';

export default function PatientResourcesPage() {
  usePageMeta(patientResourcesSeo);

  return (
    <>
      <PageHero
        eyebrow={patientResourcesHero.eyebrow}
        title={patientResourcesHero.title}
        intro={patientResourcesHero.intro}
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Patient Resources' }]}
      />

      <Section spacing="md" background="white">
        <ResourceGrid items={resourceGrid} />
      </Section>

      <FinalCta />
    </>
  );
}
  