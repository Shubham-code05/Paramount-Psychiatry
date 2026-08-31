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

// Two-column layout matching <WhyParamount />'s "Why Paramount Psychiatry?"
// pattern: heading in a lg:col-span-5 left column, copy (and an optional
// cta button) in a lg:col-span-7 right column, with the same bottom
// divider treatment.
function TwoColumnSection({ heading, paragraphs, background = 'white', cta }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="md" background={background}>
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="flex flex-col gap-10"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-h2">{heading}</h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-5">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-body-lg text-muted">
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
          </div>
        </div>

        <div className="border-t border-border pt-10" aria-hidden="true" />
      </motion.div>
    </Section>
  );
}

export default function InsuranceFeesPage() {
  usePageMeta(insuranceFeesSeo);

  return (
    <>
      <PageHero
        title={insuranceFeesHero.title}
        intro={insuranceFeesHero.intro}
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Insurance & Fees' }]}
        sketch="/images/sketch/clearinformationinsurance.png"
      />

      <TwoColumnSection heading={insuranceSection.heading} paragraphs={insuranceSection.paragraphs} />
      <TwoColumnSection heading={feesSection.heading} paragraphs={feesSection.paragraphs} background="ivory" cta={feesSection.cta} />
      <TwoColumnSection heading={outOfNetworkSection.heading} paragraphs={outOfNetworkSection.paragraphs} background="white" />
      <TwoColumnSection heading={goodFaithEstimateSection.heading} paragraphs={goodFaithEstimateSection.paragraphs} background="ivory" />

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
