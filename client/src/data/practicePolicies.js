// Practice Policies — content data (Phase 6).
// No fabricated cancellation fees, response-time SLAs, or prescription
// rules. Where the practice hasn't supplied an exact policy, copy uses
// neutral language and points the patient to contact the office directly.

import { emergencyNotice } from './home';

export const practicePoliciesSeo = {
  title: 'Practice Policies | Paramount Psychiatry',
  description: 'Practice policies covering communication, appointments, cancellations, prescriptions, telepsychiatry, privacy, and emergencies.',
};

export const practicePoliciesHero = {
  eyebrow: 'Practice Policies',
  title: 'Practice policies, in plain language.',
  intro: 'An overview of how communication, scheduling, and privacy generally work at Paramount Psychiatry.',
};

export const policySections = [
  {
    id: 'communication',
    heading: 'Communication',
    paragraphs: [
      'Non-urgent questions can be sent by phone or email, and the practice will respond as soon as reasonably possible. For time-sensitive matters, calling the office directly is the most reliable way to reach us.',
      'Please do not use email or the website contact form for emergencies.',
    ],
  },
  {
    id: 'appointments',
    heading: 'Appointments',
    paragraphs: [
      'Appointments are requested through Headway. Appointment length and format can vary depending on the type of visit. If you have questions about what to expect from a specific appointment, please contact the practice.',
    ],
  },
  {
    id: 'cancellations',
    heading: 'Cancellations / Rescheduling',
    paragraphs: [
      'If you need to cancel or reschedule an appointment, please contact the practice as soon as possible. Specific cancellation windows and any associated fees are set by the practice — please contact the office directly for current policy details.',
    ],
  },
  {
    id: 'prescription-requests',
    heading: 'Prescription Requests',
    paragraphs: [
      'Prescription refill requests should be directed to the practice with reasonable advance notice to allow time for review. For current procedures and expected turnaround times, please contact the office directly.',
    ],
  },
  {
    id: 'telepsychiatry',
    heading: 'Telepsychiatry',
    paragraphs: [
      'Telepsychiatry visits are conducted over a secure video connection. Patients are asked to be in a private, appropriate location for the full duration of the appointment.',
    ],
    link: { label: 'Preparing for a Telepsychiatry Visit', path: '/patient-resources/telepsychiatry' },
  },
  {
    id: 'privacy',
    heading: 'Privacy',
    paragraphs: [
      'Paramount Psychiatry is committed to protecting patient privacy in accordance with applicable law. Specific privacy practices, including any formal Notice of Privacy Practices, are available directly from the practice — please contact the office to request a copy or ask questions.',
    ],
  },
  {
    id: 'emergencies',
    heading: 'Emergencies',
    paragraphs: [
      `${emergencyNotice.statement} For emergencies: ${emergencyNotice.instructions.join(' · ')}. ${emergencyNotice.note}`,
    ],
  },
];
