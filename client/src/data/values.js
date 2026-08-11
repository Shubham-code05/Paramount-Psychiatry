// The six Paramount Psychiatry core values — shared between the homepage
// and the About page so both read identically.

import { HeartHandshake, Sparkles, Award, Brain, Users, HandHeart } from 'lucide-react';

const coreValues = [
  {
    icon: HeartHandshake,
    title: 'Compassion First',
    description: 'Every conversation starts with listening, without judgment, to what a patient is experiencing.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Care',
    description: 'Treatment plans are built around each patient’s history, goals, and circumstances.',
  },
  {
    icon: Award,
    title: 'Clinical Excellence',
    description: 'Evaluation and treatment are grounded in current, evidence-based psychiatric practice.',
  },
  {
    icon: Brain,
    title: 'Whole-Person Wellness',
    description: 'Mental health is considered alongside physical health and life context, not in isolation.',
  },
  {
    icon: Users,
    title: 'Collaboration & Education',
    description: 'Patients are informed partners in decisions about their own care.',
  },
  {
    icon: HandHeart,
    title: 'Respect & Inclusion',
    description: 'Every patient is treated with dignity, regardless of background or identity.',
  },
];

export default coreValues;
