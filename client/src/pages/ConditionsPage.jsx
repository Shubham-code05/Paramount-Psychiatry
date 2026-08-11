import ConditionsHero from '../components/conditions/ConditionsHero';
import ConditionsOverviewGrid from '../components/conditions/ConditionsOverviewGrid';
import CommonConditionsSection from '../components/conditions/CommonConditionsSection';
import FinalCta from '../components/shared/FinalCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { conditionsSeo } from '../data/conditions';

export default function ConditionsPage() {
  usePageMeta(conditionsSeo);

  return (
    <>
      <ConditionsHero />
      <ConditionsOverviewGrid />
      <CommonConditionsSection />
      <FinalCta />
    </>
  );
}
