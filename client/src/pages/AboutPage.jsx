import AboutHero from '../components/about/AboutHero';
import Philosophy from '../components/about/Philosophy';
import ComprehensiveCare from '../components/about/ComprehensiveCare';
import WholePersonCare from '../components/about/WholePersonCare';
import BeyondMedication from '../components/about/BeyondMedication';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import WhyParamount from '../components/about/WhyParamount';
import AboutCta from '../components/about/AboutCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { aboutSeo } from '../data/aboutPage';

export default function AboutPage() {
  usePageMeta(aboutSeo);

  return (
    <>
      <AboutHero />
      <Philosophy />
      <ComprehensiveCare />
      <WholePersonCare />
      <BeyondMedication />
      <MissionVision />
      <CoreValues />
      <WhyParamount />
      <AboutCta />
    </>
  );
}
