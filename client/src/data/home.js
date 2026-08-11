// Homepage content — Phase 2.
// Copy is intentionally conservative: no invented credentials, awards,
// statistics, testimonials, or insurance names beyond what has been supplied.

import { HeartPulse, Wind, Users2, ShieldCheck, Stethoscope, Sparkles, Laptop2, ClipboardList, FileText } from 'lucide-react';
import coreValues from './values';

export const hero = {
  eyebrow: 'Paramount Psychiatry',
  headline: 'Where compassionate listening meets evidence-based psychiatry.',
  subcopy:
    'Thoughtful, personalized psychiatric care designed around the whole person—not just the symptoms.',
  primaryCta: 'Make an Appointment',
  secondaryCta: 'Explore Our Approach',
};

export const trustStrip = [
  { label: 'Board-Certified Psychiatrist', icon: ShieldCheck },
  { label: 'Adult & Geriatric Psychiatry', icon: Users2 },
  { label: 'Evidence-Based Care', icon: Stethoscope },
  { label: 'Personalized Treatment', icon: Sparkles },
  { label: 'Telepsychiatry', icon: Laptop2 },
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
  cta: 'Meet Dr. Tandon',
  ctaLink: '/about/dr-pooja-tandon',
};

export const values = {
  eyebrow: 'Why Paramount Psychiatry',
  heading: 'Psychiatric care that sees the whole person.',
  items: coreValues,
};

export const careJourney = {
  eyebrow: 'Your Care Journey',
  heading: 'A thoughtful process, from first conversation onward.',
  steps: [
    { number: '01', title: 'Schedule', description: 'Request an appointment through Headway at a time that works for you.' },
    { number: '02', title: 'Complete Intake', description: 'Share your history and current concerns ahead of your first visit.' },
    { number: '03', title: 'Comprehensive Evaluation', description: 'A thorough psychiatric evaluation informs an individualized plan.' },
    { number: '04', title: 'Personalized Treatment Plan', description: 'Care is planned collaboratively, tailored to your goals.' },
    { number: '05', title: 'Ongoing Follow-Up', description: 'Treatment is reviewed and adjusted together over time.' },
  ],
};

export const servicesPreview = {
  eyebrow: 'Our Services',
  heading: 'Comprehensive psychiatric care, tailored to you.',
  body: 'Paramount Psychiatry provides comprehensive psychiatric evaluation, individualized treatment planning, medication management where appropriate, and collaborative, ongoing care — alongside dedicated evaluation services.',
  cta: 'Explore Our Services',
  ctaLink: '/services',
  items: [
    {
      icon: ClipboardList,
      title: 'Clinical Services',
      description: 'Comprehensive evaluation, individualized treatment planning, and ongoing collaborative care.',
    },
    {
      icon: FileText,
      title: 'Evaluation Services',
      description: 'Focused psychiatric evaluations, including pre-surgical and specialized consultations.',
    },
  ],
};

export const access = {
  eyebrow: 'Access to Care',
  heading: 'Convenient, secure access to psychiatric care.',
  body: 'Paramount Psychiatry offers in-person care in New Jersey along with secure telepsychiatry, including telepsychiatry availability in New York where applicable — designed to make consistent, ongoing care more convenient.',
  cta: 'Learn More',
  ctaLink: '/contact',
  points: [
    { icon: HeartPulse, label: 'In-person care in New Jersey' },
    { icon: Laptop2, label: 'Secure telepsychiatry' },
    { icon: Wind, label: 'New York telepsychiatry, where applicable' },
  ],
};

export const insurancePreview = {
  eyebrow: 'Insurance & Fees',
  heading: 'Clear information about coverage and costs.',
  body: 'Paramount Psychiatry accepts a range of insurance plans. Full details on accepted plans and self-pay fees are available on the Insurance & Fees page.',
  cta: 'View Insurance & Fees',
  ctaLink: '/insurance-fees',
};

export const finalCta = {
  heading: 'Your mental health deserves thoughtful care.',
  body: 'Take the next step toward personalized psychiatric care.',
  primaryCta: 'Make an Appointment',
  secondaryCta: 'Contact Us',
  secondaryLink: '/contact',
};

export const emergencyNotice = {
  statement:
    'Paramount Psychiatry is an outpatient psychiatric practice and does not provide emergency or 24-hour crisis services.',
  instructions: ['Call 911', 'Go to the nearest emergency department', 'Call or text 988'],
  note: 'Please do not use email or the website contact form for emergencies.',
};
