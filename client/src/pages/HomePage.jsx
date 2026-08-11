import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import Introduction from '../components/home/Introduction';
import ConditionsPreview from '../components/home/ConditionsPreview';
import DoctorSection from '../components/home/DoctorSection';
import ValuesGrid from '../components/home/ValuesGrid';
import CareJourney from '../components/home/CareJourney';
import ServicesPreview from '../components/home/ServicesPreview';
import AccessSection from '../components/home/AccessSection';
import InsurancePreview from '../components/home/InsurancePreview';
import FinalCta from '../components/home/FinalCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Introduction />
      <ConditionsPreview />
      <DoctorSection />
      <ValuesGrid />
      <CareJourney />
      <ServicesPreview />
      <AccessSection />
      <InsurancePreview />
      <FinalCta />
    </>
  );
}
