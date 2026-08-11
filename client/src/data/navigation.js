// Full future site navigation structure (data foundation only).
// The Phase 1 Navbar renders `primaryNav` — a flat, top-level list.
// `navigation` holds the richer nested structure for later mega-menu work,
// reconciling the site map (About / Conditions / Services split) with the
// routes defined in src/routes.

export const navigation = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About Us',
    path: '/about',
    children: [
      { label: 'About Paramount Psychiatry', path: '/about/practice' },
      { label: 'About Dr. Tandon', path: '/about/dr-pooja-tandon' },
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
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Clinical Services', path: '/services/clinical-services' },
      { label: 'Evaluation Services', path: '/services/evaluation-services' },
    ],
  },
  {
    label: 'Insurance & Fees',
    path: '/insurance-fees',
  },
  {
    label: 'Practice Policies & Patient Information',
    path: '/practice-policies',
    children: [
      { label: 'Practice Policies', path: '/practice-policies' },
      { label: 'Patient Information', path: '/patient-information' },
    ],
  },
  {
    label: 'Frequently Asked Questions',
    path: '/faqs',
  },
  {
    label: 'Patient Resources',
    path: '/patient-resources',
  },
  {
    label: 'Contact Us',
    path: '/contact',
  },
];

// Flat, top-level list used by the Navbar.
// `megaMenu` flags the items that open a dropdown panel — 'conditions' for
// the full conditions mega-menu, 'services' for the small services panel.
export const primaryNav = [
  { label: 'About', path: '/about' },
  { label: 'Conditions', path: '/conditions', megaMenu: 'conditions' },
  { label: 'Services', path: '/services', megaMenu: 'services' },
  { label: 'Insurance & Fees', path: '/insurance-fees' },
  { label: 'Patient Resources', path: '/patient-resources' },
  { label: 'FAQs', path: '/faqs' },
];

// Grouped Conditions data for the Navbar mega-menu — organizes the flat
// conditions list (above) into categories instead of one long list.
export const conditionsMegaMenu = [
  {
    heading: 'Comprehensive & Common Concerns',
    items: [
      { label: 'Comprehensive Psychiatric Services', path: '/conditions/comprehensive-psychiatric-services' },
      { label: 'ADHD & Executive Function', path: '/conditions/adhd-executive-function' },
      { label: 'Anxiety & Stress Disorders', path: '/conditions/anxiety-stress-disorders' },
      { label: 'Depression & Mood Disorders', path: '/conditions/depression-mood-disorders' },
      { label: 'Trauma & Life Transitions', path: '/conditions/trauma-life-transitions' },
    ],
  },
  {
    heading: 'Specialized Care',
    items: [
      { label: "Women's Mental Health", path: '/conditions/womens-mental-health' },
      { label: 'Sleep & Wellness', path: '/conditions/sleep-wellness' },
      { label: 'Psychotic Disorders', path: '/conditions/psychotic-disorders' },
      { label: 'Eating Disorders', path: '/conditions/eating-disorders' },
      { label: 'LGBTQ+ Mental Health', path: '/conditions/lgbtq-mental-health' },
      { label: 'Behavioral & Impulse Disorders', path: '/conditions/behavioral-impulse-disorders' },
    ],
  },
  {
    heading: 'Life Stage & Medical Psychiatry',
    items: [
      { label: 'Memory & Cognitive Health', path: '/conditions/memory-cognitive-health' },
      { label: 'Geriatric Psychiatry', path: '/conditions/geriatric-psychiatry' },
      { label: 'Medical Psychiatry', path: '/conditions/medical-psychiatry' },
    ],
  },
  {
    heading: 'Evaluations & Consultations',
    items: [
      { label: 'Pre-Surgical & Clinical Evaluations', path: '/conditions/pre-surgical-clinical-evaluations' },
      { label: 'Specialized Consultations', path: '/conditions/specialized-consultations' },
    ],
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
