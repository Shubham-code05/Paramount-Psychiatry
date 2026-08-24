import DrHero from '../components/dr-tandon/DrHero';
import ProfessionalIntro from '../components/dr-tandon/ProfessionalIntro';
import EducationCredentials from '../components/dr-tandon/EducationCredentials';
import ClosingCta from '../components/dr-tandon/ClosingCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { drTandonSeo } from '../data/drTandonPage';

export default function DrTandonPage() {
  usePageMeta(drTandonSeo);

  return (
    <>
      <DrHero />
      <ProfessionalIntro />
      <EducationCredentials />
      <ClosingCta />
    </>
  );
}
