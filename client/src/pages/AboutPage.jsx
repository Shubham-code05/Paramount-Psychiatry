import AboutHero from '../components/about/AboutHero';
import AboutIntro from '../components/about/AboutIntro';
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
      <AboutIntro />
      <MissionVision />
      <CoreValues />
      <WhyParamount />
      <AboutCta />
    </>
  );
}
