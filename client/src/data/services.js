// Clinical & Evaluation Services — content data (Phase 4).
// Same conservative-copy rules as data/conditions.js: no invented claims,
// hedged language where the requirements document doesn't specify detail.
// Rendered by the same reusable <ConditionPage /> component.

import { emergencyNotice } from './home';

const EYEBROW = 'Our Services';

const defaultApproach = {
  heading: 'The Paramount Approach',
  paragraphs: [
    'Services are individualized and grounded in evidence-based psychiatric practice, delivered collaboratively and adjusted over time as a patient’s needs change.',
    'When clinically appropriate, care may be coordinated with primary care physicians, therapists, and other members of a patient’s care team.',
  ],
};

const crisisDisclaimer = `${emergencyNotice.statement} For emergencies: ${emergencyNotice.instructions.join(' · ')}. ${emergencyNotice.note}`;

export const services = {
  'clinical-services': {
    slug: 'clinical-services',
    title: 'Clinical Services',
    eyebrow: EYEBROW,
    intro: 'Ongoing, collaborative psychiatric care built around each patient’s treatment plan.',
    overview: {
      paragraphs: [
        'Clinical Services cover the ongoing work of psychiatric care — consultation, treatment planning, monitoring, and support delivered in person or by telepsychiatry, coordinated with the rest of a patient’s care team when appropriate.',
      ],
    },
    areas: {
      heading: 'What Clinical Services Include',
      items: [
        { title: 'Integrated Psychiatric Consultations', description: 'Consultation that considers a patient’s full psychiatric and medical picture together.' },
        { title: 'Collaborative Care with Therapists', description: 'Coordination with a patient’s therapist or psychologist when appropriate.' },
        { title: 'Lifestyle & Wellness Counseling', description: 'Guidance on lifestyle factors that can support overall emotional well-being.' },
        { title: 'Relapse Prevention Planning', description: 'Planning aimed at recognizing early warning signs and maintaining treatment gains.' },
        { title: 'Personalized Treatment Planning', description: 'A treatment plan built around each patient’s history, circumstances, and goals.' },
        { title: 'Family Education', description: 'Education for family members to help them understand and support a patient’s care.' },
        { title: 'Caregiver Support', description: 'Support for caregivers involved in a patient’s ongoing care.' },
        { title: 'Medication Tapering & Optimization', description: 'Careful, gradual adjustment of medications when clinically appropriate.' },
        { title: 'Treatment Monitoring', description: 'Ongoing monitoring of symptoms, side effects, and progress toward treatment goals.' },
        { title: 'Telepsychiatry', description: 'Secure video visits for patients in New Jersey, and New York where applicable.' },
        { title: 'In-Person Psychiatry', description: 'In-person psychiatric visits in New Jersey.' },
        { title: 'Comprehensive Risk Assessment', description: 'Assessment of psychiatric risk factors as part of ongoing clinical care.' },
        { title: 'Crisis Assessment (Non-Emergency)', description: 'Assessment of an escalating or difficult situation within the context of ongoing outpatient care. This is not an emergency or 24-hour crisis service.' },
      ],
    },
    approach: defaultApproach,
    disclaimer: crisisDisclaimer,
    related: [
      { label: 'Comprehensive Psychiatric Services', path: '/conditions/comprehensive-psychiatric-services' },
      { label: 'Evaluation Services', path: '/services/evaluation-services' },
      { label: 'Specialized Consultations', path: '/conditions/specialized-consultations' },
      { label: 'Geriatric Psychiatry', path: '/conditions/geriatric-psychiatry' },
    ],
    seo: {
      title: 'Clinical Services | Paramount Psychiatry',
      description:
        'Ongoing, collaborative psychiatric care — treatment planning, medication management, telepsychiatry, and family support at Paramount Psychiatry.',
    },
  },

  'evaluation-services': {
    slug: 'evaluation-services',
    title: 'Evaluation Services',
    eyebrow: EYEBROW,
    intro: 'Focused psychiatric evaluations to support diagnosis, treatment decisions, and medical processes.',
    overview: {
      paragraphs: [
        'Evaluation Services provide focused psychiatric assessment outside of ongoing treatment — for a new diagnostic question, a cognitive concern, or a consultation requested by another provider or medical process.',
      ],
    },
    areas: {
      heading: 'What Evaluation Services Include',
      items: [
        { title: 'Comprehensive Mental Health Assessments', description: 'A thorough psychiatric assessment of emotional, behavioral, and psychosocial health.' },
        { title: 'Neurocognitive Screening', description: 'Screening of cognitive function as part of a psychiatric evaluation.' },
        { title: 'Memory Assessments', description: 'Focused assessment of memory concerns.' },
        { title: 'Diagnostic Reassessment', description: 'Reassessment of a prior diagnosis in light of current symptoms or history.' },
        { title: 'Psychiatric Consultation for Medical Providers', description: 'Consultation requested by another healthcare provider regarding a shared patient.' },
        { title: 'Psychiatric Consultation Before Medical Procedures', description: 'Consultation to support decision-making ahead of a planned medical procedure.' },
        { title: 'Fitness-for-Treatment Evaluations', description: 'Evaluation of a patient’s fitness for a specific treatment, where appropriate and at the physician’s discretion.' },
      ],
    },
    approach: defaultApproach,
    related: [
      { label: 'Comprehensive Psychiatric Services', path: '/conditions/comprehensive-psychiatric-services' },
      { label: 'Clinical Services', path: '/services/clinical-services' },
      { label: 'Pre-Surgical & Clinical Evaluations', path: '/conditions/pre-surgical-clinical-evaluations' },
      { label: 'Memory & Cognitive Health', path: '/conditions/memory-cognitive-health' },
    ],
    seo: {
      title: 'Evaluation Services | Paramount Psychiatry',
      description:
        'Focused psychiatric evaluations, including cognitive screening, diagnostic reassessment, and pre-procedure consultation, at Paramount Psychiatry.',
    },
  },
};
