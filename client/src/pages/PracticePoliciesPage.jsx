import Section from '../components/ui/Section';
import PageHero from '../components/shared/PageHero';
import PolicySection from '../components/resources/PolicySection';
import FinalCta from '../components/shared/FinalCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { practicePoliciesSeo, practicePoliciesHero, policySections } from '../data/practicePolicies';

export default function PracticePoliciesPage() {
  usePageMeta(practicePoliciesSeo);

  return (
    <>
      <PageHero
        title={practicePoliciesHero.title}
        intro={practicePoliciesHero.intro}
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Practice Policies' }]}
        sketch="/images/sketch/Practocepolices.png"
        sketchClassName="max-w-none"
      />

      <Section spacing="sm" background="white">
        <nav aria-label="Policy sections" className="flex flex-wrap gap-x-6 gap-y-2 border-b border-border pb-6">
          {policySections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-body-sm font-medium text-navy hover:text-navy-deep hover:underline underline-offset-4"
            >
              {section.heading}
            </a>
          ))}
        </nav>
      </Section>

      {policySections.map((section, index) => (
        <PolicySection
          key={section.id}
          id={section.id}
          heading={section.heading}
          paragraphs={section.paragraphs}
          link={section.link}
          background={index % 2 === 0 ? 'white' : 'ivory'}
        />
      ))}

      <FinalCta />
    </>
  );
}
