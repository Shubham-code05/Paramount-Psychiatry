// Homepage content — Phase 2.
// Copy is intentionally conservative: no invented credentials, awards,
// statistics, testimonials, or insurance names beyond what has been supplied.

import { HeartPulse, Laptop2 } from 'lucide-react';
import coreValues from './values';

export const hero = {
  headline: 'Where compassionate listening meets evidence-based psychiatry.',
  subcopy:
    'Thoughtful, personalized psychiatric care designed around the whole person—not just the symptoms.',
};

export const trustStrip = [
  { label: 'In-person care in New Jersey', icon: HeartPulse },
  { label: 'Secure telepsychiatry in New Jersey and New York', icon: Laptop2 },
];

export const introduction = {
  eyebrow: 'Our Approach',
  heading: 'Care begins with listening.',
  body: [
    'Every patient carries a unique story, and treatment works best when it starts there. At Paramount Psychiatry, evaluation and treatment planning are built around the whole person — history, circumstances, and goals — not a single symptom or diagnosis.',
    'Care is collaborative: decisions about treatment are made together, informed by evidence-based psychiatry and adjusted as needs change over time.',
  ],
  cta: 'Learn About Paramount Psychiatry',
  ctaLink: '/about',
  valuesEyebrow: 'Why Paramount Psychiatry',
  values: coreValues,
};

export const conditionsPreview = {
  eyebrow: 'Conditions We Treat',
  heading: 'Thoughtful care for the challenges that affect everyday life.',
  body: 'Paramount Psychiatry provides individualized psychiatric care across a broad range of conditions, tailoring evaluation and treatment to each patient rather than a one-size-fits-all approach.',
  cta: 'Explore All Conditions',
  ctaLink: '/conditions',
  items: [
    {
      title: 'ADHD & Executive Function',
      description: 'Support for attention, focus, and day-to-day organization.',
      path: '/conditions/adhd-executive-function',
    },
    {
      title: 'Anxiety & Stress Disorders',
      description: 'Evidence-based care for persistent worry and stress.',
      path: '/conditions/anxiety-stress-disorders',
    },
    {
      title: 'Depression & Mood Disorders',
      description: 'Personalized treatment for low mood and mood instability.',
      path: '/conditions/depression-mood-disorders',
    },
    {
      title: 'Trauma & Life Transitions',
      description: 'Compassionate support through difficult chapters and change.',
      path: '/conditions/trauma-life-transitions',
    },
    {
      title: "Women's Mental Health",
      description: 'Psychiatric care attentive to the stages of a woman’s life.',
      path: '/conditions/womens-mental-health',
    },
    {
      title: 'Sleep & Wellness',
      description: 'Addressing sleep difficulties that affect overall health.',
      path: '/conditions/sleep-wellness',
    },
    {
      title: 'Memory & Cognitive Health',
      description: 'Evaluation and care for cognitive and memory concerns.',
      path: '/conditions/memory-cognitive-health',
    },
    {
      title: 'Geriatric Psychiatry',
      description: 'Specialized psychiatric care for older adults.',
      path: '/conditions/geriatric-psychiatry',
    },
  ],
};

export const doctor = {
  eyebrow: 'Meet Dr. Pooja Tandon',
  heading: 'Expertise grounded in experience. Care grounded in compassion.',
  body: [
    'Dr. Pooja Tandon, MD is a board-certified adult and geriatric psychiatrist at Paramount Psychiatry.',
    'Her practice focuses on individualized, evidence-based care across mood, anxiety, attention, and life-stage-related concerns, with particular attention to the needs of adult and older-adult patients.',
  ],
  cta: 'Meet Dr. Pooja Tandon',
  ctaLink: '/about/dr-pooja-tandon',
};

export const careJourney = {
  eyebrow: 'Your Care Journey',
  heading: 'A thoughtful process, from first conversation onward.',
  steps: [
    { number: '01', title: 'Schedule', description: 'Request an appointment through Headway at a time that works for you.' },
    { number: '02', title: 'Complete Onboarding', description: 'Fill out intake form, create profile, provide insurance and payment details' },
    { number: '03', title: 'Comprehensive Evaluation', description: 'A thorough psychiatric evaluation informs an individualized plan.' },
    { number: '04', title: 'Personalized Treatment Plan', description: 'Care is planned collaboratively, tailored to your goals.' },
    { number: '05', title: 'Ongoing Follow-Up', description: 'Treatment is reviewed and adjusted together over time.' },
  ],
};

// Only `body` is used — heading and button labels/links are the shared
// <FinalCta /> component's defaults (which this data used to duplicate).
export const finalCta = {
  body: 'Take the next step toward personalized psychiatric care.',
};

export const emergencyNotice = {
  statement:
    'Paramount Psychiatry is an outpatient psychiatric practice and does not provide emergency or 24-hour crisis services.',
  instructions: ['Call 911', 'Go to the nearest emergency department', 'Call or text 988'],
  note: 'Please do not use email or the website contact form for emergencies.',
};
