import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import Introduction from '../components/home/Introduction';
import DoctorSection from '../components/home/DoctorSection';
import ConditionsPreview from '../components/home/ConditionsPreview';
import CareJourney from '../components/home/CareJourney';
import FinalCta from '../components/shared/FinalCta';
import { finalCta } from '../data/home';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Introduction />
      <DoctorSection />
      <ConditionsPreview />
      <CareJourney />
      <FinalCta eyebrow={null} body={finalCta.body} decorate />
    </>
  );
}
