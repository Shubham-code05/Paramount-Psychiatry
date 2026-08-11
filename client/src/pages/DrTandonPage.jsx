import DrHero from '../components/dr-tandon/DrHero';
import ProfessionalIntro from '../components/dr-tandon/ProfessionalIntro';
import Experience from '../components/dr-tandon/Experience';
import ClinicalAreas from '../components/dr-tandon/ClinicalAreas';
import EducationTraining from '../components/dr-tandon/EducationTraining';
import MedicalConnection from '../components/dr-tandon/MedicalConnection';
import TreatmentPhilosophy from '../components/dr-tandon/TreatmentPhilosophy';
import CredentialsResearch from '../components/dr-tandon/CredentialsResearch';
import LicensureLanguages from '../components/dr-tandon/LicensureLanguages';
import ClosingCta from '../components/dr-tandon/ClosingCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { drTandonSeo } from '../data/drTandonPage';

export default function DrTandonPage() {
  usePageMeta(drTandonSeo);

  return (
    <>
      <DrHero />
      <ProfessionalIntro />
      <Experience />
      <ClinicalAreas />
      <EducationTraining />
      <MedicalConnection />
      <TreatmentPhilosophy />
      <CredentialsResearch />
      <LicensureLanguages />
      <ClosingCta />
    </>
  );
}
