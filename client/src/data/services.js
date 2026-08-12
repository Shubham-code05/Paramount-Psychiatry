// Clinical & Evaluation Services — content data (Phase 5).
// Same conservative-copy rules as data/conditions.js: no invented claims,
// no guaranteed diagnoses or outcomes, hedged language where appropriate.
// Rendered by the same reusable <ConditionPage /> component used for
// /conditions/:slug, so new content is added here rather than in markup.

import { emergencyNotice } from './home';

const EYEBROW_CLINICAL = 'Clinical Services';
const EYEBROW_EVALUATION = 'Evaluation Services';

const paramountApproach = {
  heading: 'The Paramount Approach',
  paragraphs: [
    'Care is individualized and grounded in evidence-based psychiatric practice, delivered collaboratively and adjusted over time as a patient’s needs change.',
    'When clinically appropriate, care may be coordinated with primary care physicians, therapists, and other members of a patient’s care team.',
  ],
};

const crisisDisclaimer = `${emergencyNotice.statement} For emergencies: ${emergencyNotice.instructions.join(' · ')}. ${emergencyNotice.note}`;

export const services = {
  'clinical-services': {
    slug: 'clinical-services',
    title: 'Clinical Services',
    eyebrow: EYEBROW_CLINICAL,
    intro:
      'Thoughtful, evidence-based psychiatric care tailored to the individual — with ongoing treatment and follow-up as needs change over time.',
    overview: {
      paragraphs: [
        'Clinical Services cover the ongoing work of psychiatric care. Depending on a patient’s needs, this may include psychiatric evaluation, diagnostic clarification, medication management, supportive psychotherapy, ongoing follow-up, and collaborative care with other members of a patient’s care team when appropriate.',
      ],
    },
    areas: {
      heading: 'Core Clinical Services',
      items: [
        {
          title: 'Psychiatric Evaluation',
          description:
            'A thorough assessment of emotional, behavioral, and psychosocial health to establish an accurate diagnosis and inform treatment planning.',
        },
        {
          title: 'Medication Management',
          description:
            'Thoughtful, evidence-based medication management with careful monitoring of effectiveness, side effects, and treatment goals.',
        },
        {
          title: 'Follow-Up Psychiatric Care',
          description:
            'Ongoing visits focused on monitoring progress, adjusting treatment, and supporting long-term stability.',
        },
        {
          title: 'Brief Supportive Psychotherapy',
          description:
            'Therapeutic support integrated into psychiatric visits to help patients build coping strategies and resilience.',
        },
        {
          title: 'Diagnostic Clarification',
          description: 'Careful review of symptoms and history to help clarify a diagnosis or refine a previous one.',
        },
        {
          title: 'Collaborative Care',
          description:
            'Coordination with therapists, primary care physicians, and other providers when clinically appropriate.',
        },
      ],
    },
    process: {
      heading: 'How Care Works',
      intro: 'Clinical care follows a general process, individualized to each patient at every step.',
      steps: [
        { title: 'Understand', description: 'Every visit begins with listening — to your history, concerns, and goals.' },
        { title: 'Evaluate', description: 'A thorough psychiatric evaluation informs an accurate clinical picture.' },
        { title: 'Develop a Treatment Plan', description: 'A plan is built collaboratively around your needs and goals.' },
        { title: 'Monitor & Adjust', description: 'Progress, side effects, and symptoms are reviewed and adjusted over time.' },
        { title: 'Continue Ongoing Care', description: 'Follow-up care continues for as long as it remains helpful.' },
      ],
    },
    audience: {
      heading: 'Who May Benefit',
      intro: 'Clinical psychiatric care may be appropriate for individuals seeking support with:',
      items: [
        { label: 'Mood symptoms', path: '/conditions/depression-mood-disorders' },
        { label: 'Anxiety and stress', path: '/conditions/anxiety-stress-disorders' },
        { label: 'Attention and executive-function concerns', path: '/conditions/adhd-executive-function' },
        { label: 'Sleep concerns', path: '/conditions/sleep-wellness' },
        { label: 'Life transitions', path: '/conditions/trauma-life-transitions' },
        { label: 'Behavioral concerns', path: '/conditions/behavioral-impulse-disorders' },
        { label: 'Other psychiatric concerns', path: '/conditions' },
      ],
    },
    approach: paramountApproach,
    disclaimer: crisisDisclaimer,
    related: [
      { label: 'Evaluation Services', path: '/services/evaluation-services' },
      { label: 'Comprehensive Psychiatric Services', path: '/conditions/comprehensive-psychiatric-services' },
      { label: 'Specialized Consultations', path: '/conditions/specialized-consultations' },
      { label: 'Geriatric Psychiatry', path: '/conditions/geriatric-psychiatry' },
    ],
    relatedHeading: 'Related Services',
    seo: {
      title: 'Clinical Services | Paramount Psychiatry',
      description:
        'Ongoing, evidence-based psychiatric care at Paramount Psychiatry — evaluation, medication management, supportive psychotherapy, and collaborative follow-up care.',
    },
  },

  'evaluation-services': {
    slug: 'evaluation-services',
    title: 'Evaluation Services',
    eyebrow: EYEBROW_EVALUATION,
    intro: 'Thoughtful, comprehensive psychiatric assessment to support diagnostic clarity and treatment decisions.',
    overview: {
      paragraphs: [
        'Evaluation Services provide focused psychiatric assessment to help clarify symptoms, diagnostic questions, treatment needs, medication considerations, and complex psychiatric presentations. An evaluation does not guarantee a specific diagnosis or outcome — findings and recommendations are individualized to each patient.',
      ],
    },
    areas: {
      heading: 'Evaluation Types',
      items: [
        {
          title: 'Comprehensive Psychiatric Evaluations',
          description:
            'A thorough assessment of emotional, behavioral, cognitive, and psychosocial health to establish or clarify a diagnosis.',
        },
        {
          title: 'Diagnostic Clarification',
          description: 'A focused evaluation to help clarify a diagnostic question or an evolving symptom picture.',
        },
        {
          title: 'Second Opinions',
          description: 'Review of a previous diagnosis or treatment plan to offer an independent clinical perspective.',
        },
        {
          title: 'Medication Consultation',
          description: 'A focused review of current or past medications and treatment options.',
        },
        {
          title: 'Specialized Consultations',
          description: 'Evaluation for complex or diagnostically challenging psychiatric presentations.',
        },
        {
          title: 'Pre-Surgical & Clinical Evaluations',
          description:
            'Evaluations conducted ahead of a planned medical or surgical procedure, performed at the physician’s discretion.',
        },
      ],
    },
    process: {
      heading: 'What to Expect',
      intro: 'The exact evaluation process depends on each individual’s needs, but generally follows these steps.',
      steps: [
        { title: 'Before the Visit', description: 'Intake information and relevant history are gathered ahead of your appointment.' },
        { title: 'Clinical Conversation', description: 'A thorough conversation about your history, symptoms, and concerns.' },
        { title: 'Assessment', description: 'A focused psychiatric assessment relevant to the evaluation.' },
        { title: 'Discussion of Findings', description: 'Findings are reviewed together in clear, understandable terms.' },
        { title: 'Recommendations / Next Steps', description: 'Individualized recommendations for treatment or further care.' },
      ],
    },
    audience: {
      heading: 'When an Evaluation May Help',
      intro: 'An evaluation may be a helpful next step if you are:',
      items: [
        { label: 'Seeking diagnostic clarification' },
        { label: 'Wanting a second opinion' },
        { label: 'Reviewing a previous diagnosis' },
        { label: 'Considering treatment options', path: '/services/clinical-services' },
        { label: 'Preparing for a specialized clinical evaluation', path: '/conditions/pre-surgical-clinical-evaluations' },
      ],
    },
    afterward: {
      heading: 'After the Evaluation',
      intro: 'Depending on the findings, recommendations following an evaluation may include:',
      items: [
        { label: 'Treatment planning' },
        { label: 'Medication considerations' },
        { label: 'Follow-up psychiatric care', path: '/services/clinical-services' },
        { label: 'Coordination with other members of a care team, when appropriate' },
      ],
    },
    related: [
      { label: 'Clinical Services', path: '/services/clinical-services' },
      { label: 'Comprehensive Psychiatric Services', path: '/conditions/comprehensive-psychiatric-services' },
      { label: 'Pre-Surgical & Clinical Evaluations', path: '/conditions/pre-surgical-clinical-evaluations' },
      { label: 'Memory & Cognitive Health', path: '/conditions/memory-cognitive-health' },
    ],
    relatedHeading: 'Related Services',
    seo: {
      title: 'Evaluation Services | Paramount Psychiatry',
      description:
        'Comprehensive psychiatric evaluations, diagnostic clarification, second opinions, and pre-surgical consultations at Paramount Psychiatry.',
    },
  },
};
