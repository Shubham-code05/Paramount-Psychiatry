import { motion, useReducedMotion } from 'framer-motion';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import PageHero from '../components/shared/PageHero';
import FAQAccordion from '../components/shared/FAQAccordion';
import Button from '../components/ui/Button';
import FinalCta from '../components/shared/FinalCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { fadeUp } from '../lib/motion';
import {
  insuranceFeesSeo,
  insuranceFeesHero,
  insuranceSection,
  feesSection,
  outOfNetworkSection,
  goodFaithEstimateSection,
  paymentFaqs,
} from '../data/insuranceFees';

function TextSection({ heading, paragraphs, background, cta }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="md" background={background}>
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="flex flex-col gap-5 max-w-3xl"
      >
        <SectionHeading title={heading} />
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-body text-charcoal">
            {paragraph}
          </p>
        ))}
        {cta && (
          <div className="pt-2">
            <Button to={cta.to} variant="outline">
              {cta.label}
            </Button>
          </div>
        )}
      </motion.div>
    </Section>
  );
}

export default function InsuranceFeesPage() {
  usePageMeta(insuranceFeesSeo);

  return (
    <>
      <PageHero
        eyebrow={insuranceFeesHero.eyebrow}
        title={insuranceFeesHero.title}
        intro={insuranceFeesHero.intro}
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Insurance & Fees' }]}
        sketch="/images/sketch/clearinformationinsurance.png"
      />

      <TextSection heading={insuranceSection.heading} paragraphs={insuranceSection.paragraphs} background="white" />
      <TextSection heading={feesSection.heading} paragraphs={feesSection.paragraphs} background="ivory" cta={feesSection.cta} />
      <TextSection heading={outOfNetworkSection.heading} paragraphs={outOfNetworkSection.paragraphs} background="white" />
      <TextSection heading={goodFaithEstimateSection.heading} paragraphs={goodFaithEstimateSection.paragraphs} background="ivory" />

      <Section spacing="md" background="white">
        <div className="flex flex-col gap-8 max-w-3xl">
          <SectionHeading title={paymentFaqs.heading} maxWidth="max-w-2xl" />
          <FAQAccordion idPrefix="insurance" categories={[{ items: paymentFaqs.items }]} />
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
