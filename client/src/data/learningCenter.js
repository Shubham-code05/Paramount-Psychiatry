// Mental Health Learning Center — information architecture only (client-feedback update).
// Category copy is intentionally neutral/structural: no articles, clinical claims, or
// statistics are fabricated here. Each category renders a "content coming soon" state
// until the practice supplies and approves real article content. The one exception is
// "Frequently Asked Questions", which links straight to the existing, already-approved
// /faqs page instead of a placeholder.

import {
  BrainCircuit,
  Wind,
  CloudRain,
  Focus,
  MoonStar,
  Compass,
  HeartHandshake,
  BookOpenCheck,
  UserCog,
  ClipboardList,
  MessagesSquare,
  HelpCircle,
} from 'lucide-react';

export const learningCenterSeo = {
  title: 'Mental Health Learning Center | Paramount Psychiatry',
  description: 'A growing library of mental health education from Paramount Psychiatry, organized by topic.',
};

export const learningCenterHero = {
  eyebrow: 'Mental Health Learning Center',
  title: 'A growing library of mental health education.',
  intro:
    'Browse by topic to learn more about the areas of care Paramount Psychiatry addresses. Content is being developed and published on an ongoing basis.',
};

// `path` is only set where a category should link somewhere other than its
// own /learning-center/:slug placeholder page (currently just FAQs, which
// reuses the existing, fully-built FAQs page).
export const learningCenterCategories = [
  {
    slug: 'understanding-mental-health',
    title: 'Understanding Mental Health',
    description: 'A general introduction to mental health, wellness, and when to seek care.',
    icon: BrainCircuit,
  },
  {
    slug: 'anxiety-stress',
    title: 'Anxiety & Stress',
    description: 'Resources on anxiety disorders and everyday stress management.',
    icon: Wind,
  },
  {
    slug: 'depression-mood',
    title: 'Depression & Mood',
    description: 'Resources on depression and mood-related conditions.',
    icon: CloudRain,
  },
  {
    slug: 'adhd-executive-function',
    title: 'ADHD & Executive Function',
    description: 'Resources on attention, focus, and everyday executive functioning.',
    icon: Focus,
  },
  {
    slug: 'sleep-wellness',
    title: 'Sleep & Wellness',
    description: 'Resources on sleep health and its connection to overall wellness.',
    icon: MoonStar,
  },
  {
    slug: 'trauma-life-transitions',
    title: 'Trauma & Life Transitions',
    description: 'Resources on trauma-related concerns and navigating life changes.',
    icon: Compass,
  },
  {
    slug: 'womens-mental-health',
    title: "Women's Mental Health",
    description: 'Resources on mental health across the stages of a woman’s life.',
    icon: HeartHandshake,
  },
  {
    slug: 'memory-cognitive-health',
    title: 'Memory & Cognitive Health',
    description: 'Resources on memory concerns and cognitive health.',
    icon: BookOpenCheck,
  },
  {
    slug: 'geriatric-mental-health',
    title: 'Geriatric Mental Health',
    description: 'Resources on mental health care for older adults.',
    icon: UserCog,
  },
  {
    slug: 'treatment-medication',
    title: 'Treatment & Medication',
    description: 'Resources on psychiatric treatment approaches and medication management.',
    icon: ClipboardList,
  },
  {
    slug: 'therapy-coping',
    title: 'Therapy & Coping',
    description: 'Resources on psychotherapy and everyday coping strategies.',
    icon: MessagesSquare,
  },
  {
    slug: 'faqs',
    title: 'Frequently Asked Questions',
    description: 'Answers to common questions about care, insurance, and telepsychiatry.',
    icon: HelpCircle,
    path: '/faqs',
  },
];
