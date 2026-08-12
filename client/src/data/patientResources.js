// Patient Resources — content data (Phase 6).
// Conservative copy: no invented required documents, no broadened
// telepsychiatry availability beyond what's already stated site-wide.

import { UserPlus, ListChecks, Compass, Laptop2, ShieldCheck, HelpCircle } from 'lucide-react';
import { emergencyNotice } from './home';

export const patientResourcesSeo = {
  title: 'Patient Resources | Paramount Psychiatry',
  description: 'Helpful resources to prepare for your visit, including what to expect, telepsychiatry, and practice policies.',
};

export const patientResourcesHero = {
  eyebrow: 'Patient Resources',
  title: 'Helpful information for your care journey.',
  intro:
    'These resources are here to help you prepare for your appointments and understand what to expect at each step of care with Paramount Psychiatry.',
};

export const resourceGrid = [
  {
    icon: UserPlus,
    title: 'New Patients',
    description: 'What to know and prepare before your first appointment.',
    path: '/patient-resources/new-patients',
  },
  {
    icon: ListChecks,
    title: 'Preparing for Your Visit',
    description: 'A simple checklist to help you feel ready for your appointment.',
    path: '/patient-resources/prepare-for-your-visit',
  },
  {
    icon: Compass,
    title: 'What to Expect',
    description: 'An overview of the general process, from scheduling through follow-up.',
    path: '/patient-resources/what-to-expect',
  },
  {
    icon: Laptop2,
    title: 'Telepsychiatry',
    description: 'How secure virtual visits work and how to prepare for one.',
    path: '/patient-resources/telepsychiatry',
  },
  {
    icon: ShieldCheck,
    title: 'Practice Policies',
    description: 'Information on communication, appointments, and privacy.',
    path: '/patient-resources/practice-policies',
  },
  {
    icon: HelpCircle,
    title: 'Frequently Asked Questions',
    description: 'Answers to common questions about care, insurance, and telepsychiatry.',
    path: '/faqs',
  },
];

export const newPatientsSeo = {
  title: 'New Patients | Paramount Psychiatry',
  description: 'What to know and prepare before your first appointment at Paramount Psychiatry.',
};

export const newPatientsHero = {
  eyebrow: 'New Patients',
  title: 'Preparing for your first appointment.',
  intro: 'A little preparation can help your first visit feel more comfortable and productive.',
};

export const newPatientsContent = {
  intro:
    'Your first appointment is an opportunity to share your story and begin building a treatment plan together. It can help to have the following information available, where relevant to your situation:',
  checklist: [
    'A list of current medications, including dosages',
    'Relevant medical or psychiatric history, including past diagnoses or treatment',
    'Questions or concerns you would like to discuss',
    'Insurance information, if applicable',
    'A form of identification, if requested ahead of your visit',
  ],
  note:
    'Specific documentation needs can vary. If you have questions about what to bring, please contact the practice ahead of your appointment.',
};

export const prepareForVisitSeo = {
  title: 'Preparing for Your Visit | Paramount Psychiatry',
  description: 'A simple checklist to help you feel ready for your appointment at Paramount Psychiatry.',
};

export const prepareForVisitHero = {
  eyebrow: 'Preparing for Your Visit',
  title: 'A simple checklist before your appointment.',
  intro: 'A few minutes of preparation can help you make the most of your time together.',
};

export const prepareForVisitChecklist = [
  'Review your current medications.',
  'Think about your main concerns.',
  'Note relevant medical or psychiatric history.',
  'Prepare any questions you would like to ask.',
  'Have insurance information available, if applicable.',
];

export const whatToExpectSeo = {
  title: 'What to Expect | Paramount Psychiatry',
  description: 'An overview of the general process of care at Paramount Psychiatry, from scheduling through follow-up.',
};

export const whatToExpectHero = {
  eyebrow: 'What to Expect',
  title: 'A thoughtful process, from first conversation onward.',
  intro: 'Every patient’s path is individualized, but care generally follows this general process.',
};

export const whatToExpectProcess = {
  heading: 'The General Process',
  intro: 'The exact process depends on your individual needs, but these are the general steps.',
  steps: [
    { title: 'Scheduling', description: 'Request an appointment through Headway at a time that works for you.' },
    { title: 'Intake', description: 'Share your history and current concerns ahead of your first visit.' },
    { title: 'Initial Conversation', description: 'A conversation focused on understanding your story and goals.' },
    { title: 'Psychiatric Evaluation', description: 'A thorough evaluation informs an individualized plan.' },
    { title: 'Treatment Discussion', description: 'Treatment options are discussed and planned together.' },
    { title: 'Follow-Up', description: 'Care is reviewed and adjusted together over time.' },
  ],
};

export const telepsychiatrySeo = {
  title: 'Telepsychiatry | Paramount Psychiatry',
  description: 'How secure telepsychiatry visits work at Paramount Psychiatry, and how to prepare for one.',
};

export const telepsychiatryHero = {
  eyebrow: 'Telepsychiatry',
  title: 'Secure virtual psychiatric care.',
  intro: 'Telepsychiatry offers a secure, convenient way to receive psychiatric care from a private location of your choosing.',
};

export const telepsychiatryOverview = {
  heading: 'How Telepsychiatry Works',
  paragraphs: [
    'Telepsychiatry visits are conducted over a secure video connection, allowing for the same thoughtful, individualized care as an in-person appointment.',
    'Paramount Psychiatry offers in-person care in New Jersey, along with secure telepsychiatry, including telepsychiatry availability in New York where applicable.',
  ],
};

export const telepsychiatryChecklist = {
  heading: 'Preparing for Your Telepsychiatry Visit',
  items: [
    'Find a private, quiet environment for your appointment.',
    'Make sure you have a reliable internet connection.',
    'Use a device with a working camera and microphone.',
    'Be in a location appropriate for a psychiatric appointment at the time of your visit.',
  ],
};

export const telepsychiatryDisclaimer = `${emergencyNotice.statement} For emergencies: ${emergencyNotice.instructions.join(' · ')}. ${emergencyNotice.note}`;
