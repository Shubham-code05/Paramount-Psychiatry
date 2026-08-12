import Section from '../components/ui/Section';
import PageHero from '../components/shared/PageHero';
import FAQAccordion from '../components/shared/FAQAccordion';
import FinalCta from '../components/shared/FinalCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { faqsSeo, faqsHero, faqCategories } from '../data/faqs';

export default function FaqsPage() {
  usePageMeta(faqsSeo);

  return (
    <>
      <PageHero
        eyebrow={faqsHero.eyebrow}
        title={faqsHero.title}
        intro={faqsHero.intro}
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Frequently Asked Questions' }]}
      />

      <Section spacing="md" background="white">
        <div className="max-w-3xl">
          <FAQAccordion idPrefix="site-faq" categories={faqCategories} />
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
