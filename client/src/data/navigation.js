// Full site navigation structure (data foundation only — not imported by the
// Navbar, which renders the flat `primaryNav` below plus its mega-menu data).
// This nested tree documents the complete site map, including pages that sit
// outside the primary nav but must keep working (Services, the legacy
// Patient Resources hub) per the client-approved IA (client-feedback update).

export const navigation = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Paramount Psychiatry', path: '/about' },
      { label: 'Meet Dr. Pooja Tandon', path: '/about/dr-pooja-tandon' },
    ],
  },
  {
    label: 'Conditions We Treat',
    path: '/conditions',
    children: [
      { label: 'Comprehensive Psychiatric Services', path: '/conditions/comprehensive-psychiatric-services' },
      { label: 'ADHD & Executive Function', path: '/conditions/adhd-executive-function' },
      { label: 'Anxiety & Stress Disorders', path: '/conditions/anxiety-stress-disorders' },
      { label: 'Depression & Mood Disorders', path: '/conditions/depression-mood-disorders' },
      { label: 'Trauma & Life Transitions', path: '/conditions/trauma-life-transitions' },
      { label: "Women's Mental Health", path: '/conditions/womens-mental-health' },
      { label: 'Sleep & Wellness', path: '/conditions/sleep-wellness' },
      { label: 'Psychotic Disorders', path: '/conditions/psychotic-disorders' },
      { label: 'Memory & Cognitive Health', path: '/conditions/memory-cognitive-health' },
      { label: 'Geriatric Psychiatry', path: '/conditions/geriatric-psychiatry' },
      { label: 'Medical Psychiatry', path: '/conditions/medical-psychiatry' },
      { label: 'Eating Disorders', path: '/conditions/eating-disorders' },
      { label: 'LGBTQ+ Mental Health', path: '/conditions/lgbtq-mental-health' },
      { label: 'Behavioral & Impulse Disorders', path: '/conditions/behavioral-impulse-disorders' },
      { label: 'Pre-Surgical & Clinical Evaluations', path: '/conditions/pre-surgical-clinical-evaluations' },
      { label: 'Specialized Consultations', path: '/conditions/specialized-consultations' },
      { label: 'Conditions We Commonly Treat', path: '/conditions#commonly-treated' },
    ],
  },
  {
    label: 'Insurance & Fees',
    path: '/insurance-fees',
  },
  {
    label: 'Practice Policies',
    path: '/practice-policies',
  },
  {
    label: 'Mental Health Learning Center',
    path: '/learning-center',
    children: [
      { label: 'Understanding Mental Health', path: '/learning-center/understanding-mental-health' },
      { label: 'Anxiety & Stress', path: '/learning-center/anxiety-stress' },
      { label: 'Depression & Mood', path: '/learning-center/depression-mood' },
      { label: 'ADHD & Executive Function', path: '/learning-center/adhd-executive-function' },
      { label: 'Sleep & Wellness', path: '/learning-center/sleep-wellness' },
      { label: 'Trauma & Life Transitions', path: '/learning-center/trauma-life-transitions' },
      { label: "Women's Mental Health", path: '/learning-center/womens-mental-health' },
      { label: 'Memory & Cognitive Health', path: '/learning-center/memory-cognitive-health' },
      { label: 'Geriatric Mental Health', path: '/learning-center/geriatric-mental-health' },
      { label: 'Treatment & Medication', path: '/learning-center/treatment-medication' },
      { label: 'Therapy & Coping', path: '/learning-center/therapy-coping' },
      { label: 'Frequently Asked Questions', path: '/faqs' },
    ],
  },
  {
    label: 'Contact Us',
    path: '/contact',
  },
  {
    label: 'Make an Appointment',
    path: '/appointment',
  },
  // Not part of the primary nav, but still live routes — linked from the
  // Footer (Services) and reachable directly (Patient Resources).
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Clinical Services', path: '/services/clinical-services' },
      { label: 'Evaluation Services', path: '/services/evaluation-services' },
    ],
  },
  {
    label: 'Patient Resources',
    path: '/patient-resources',
    children: [
      { label: 'New Patients', path: '/patient-resources/new-patients' },
      { label: 'Preparing for Your Visit', path: '/patient-resources/prepare-for-your-visit' },
      { label: 'What to Expect', path: '/patient-resources/what-to-expect' },
      { label: 'Telepsychiatry', path: '/patient-resources/telepsychiatry' },
    ],
  },
];

// Flat, top-level list used by the Navbar — client-approved information
// architecture (client-feedback update). `megaMenu` flags the items that
// open a dropdown panel: currently just 'about' (2 links). Conditions We
// Treat and Mental Health Learning Center are plain links straight to their
// pages — no dropdown. "Make an Appointment" is rendered separately as the
// Navbar's primary CTA, not a nav item.
//
// Services, the legacy Patient Resources hub, and FAQs are no longer
// top-level items, but their routes and content are preserved — reachable
// via the Footer, and (FAQs) via the Learning Center menu — per the
// regression-safety requirement not to break existing pages.
export const primaryNav = [
  { label: 'About', path: '/about', megaMenu: 'about' },
  { label: 'Conditions We Treat', path: '/conditions' },
  { label: 'Insurance & Fees', path: '/insurance-fees' },
  { label: 'Practice Policies', path: '/practice-policies' },
  { label: 'Mental Health Learning Center', path: '/learning-center' },
  { label: 'Contact Us', path: '/contact' },
];

// About dropdown — the two subsections the client asked for: the practice
// overview and Dr. Tandon's dedicated profile page (which now holds her
// photo/bio — kept off the homepage per the client's direction).
export const aboutMegaMenu = [
  {
    label: 'About Paramount Psychiatry',
    path: '/about',
    description: 'Our philosophy, approach to care, and what to expect as a patient.',
  },
  {
    label: 'Meet Dr. Pooja Tandon',
    path: '/about/dr-pooja-tandon',
    description: 'Credentials, clinical background, and treatment philosophy.',
  },
];

// Small Services dropdown — just the two service-line pages. Kept separate
// from conditionsMegaMenu since Services is a distinct top-level nav item.
export const servicesMegaMenu = [
  {
    label: 'Clinical Services',
    path: '/services/clinical-services',
    description: 'Comprehensive evaluation, individualized treatment planning, and ongoing collaborative care.',
  },
  {
    label: 'Evaluation Services',
    path: '/services/evaluation-services',
    description: 'Focused psychiatric evaluations, including pre-surgical and specialized consultations.',
  },
];

export default navigation;
