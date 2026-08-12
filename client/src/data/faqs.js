// Frequently Asked Questions — content data (Phase 6).
// Emergency language is pulled verbatim from data/home.js so it stays
// identical to the footer's emergency notice — never restated or altered.

import site from './site';
import { emergencyNotice } from './home';

export const faqsSeo = {
  title: 'Frequently Asked Questions | Paramount Psychiatry',
  description: 'Answers to common questions about appointments, insurance, telepsychiatry, and care at Paramount Psychiatry.',
};

export const faqsHero = {
  eyebrow: 'Frequently Asked Questions',
  title: 'Answers to common questions.',
  intro: 'A quick reference for questions about appointments, insurance, services, and telepsychiatry.',
};

const emergencyAnswer = `${emergencyNotice.statement} For emergencies: ${emergencyNotice.instructions.join(' · ')}. ${emergencyNotice.note}`;

export const faqCategories = [
  {
    heading: 'General',
    items: [
      {
        question: 'How can I contact the practice?',
        answer: `You can reach Paramount Psychiatry by phone at ${site.phone} or by email at ${site.email}.`,
      },
      {
        question: 'What should I do in an emergency?',
        answer: emergencyAnswer,
      },
    ],
  },
  {
    heading: 'Appointments',
    items: [
      {
        question: 'How do I schedule an appointment?',
        answer: 'Appointments can be requested through Headway using the "Make an Appointment" button found throughout the site.',
      },
      {
        question: 'What does the first appointment involve?',
        answer:
          'The first appointment generally involves a comprehensive psychiatric evaluation — a thorough conversation about your history, current concerns, and goals — which is then used to develop an individualized treatment plan.',
      },
      {
        question: 'What should I bring to my first visit?',
        answer:
          'It can help to have a list of current medications, relevant medical or psychiatric history, questions you would like to discuss, and insurance information if applicable. See the New Patients resource page for more detail.',
      },
    ],
  },
  {
    heading: 'Insurance & Fees',
    items: [
      {
        question: 'Do you accept insurance?',
        answer:
          'Insurance acceptance depends on your specific plan. Appointments booked through Headway will show which plans are currently accepted. See the Insurance & Fees page for more detail.',
      },
      {
        question: 'Where can I find current fee information?',
        answer: 'For current self-pay fees or billing questions, please contact the practice directly.',
      },
    ],
  },
  {
    heading: 'Services',
    items: [
      {
        question: 'Do you provide medication management?',
        answer:
          'Yes. Medication management is one of the Core Clinical Services offered at Paramount Psychiatry, alongside evaluation, supportive psychotherapy, and ongoing follow-up care.',
      },
      {
        question: 'Do you provide psychiatric evaluations?',
        answer:
          'Yes. Evaluation Services include comprehensive psychiatric evaluations, diagnostic clarification, second opinions, and other focused consultations.',
      },
    ],
  },
  {
    heading: 'Telepsychiatry',
    items: [
      {
        question: 'Do you offer telepsychiatry?',
        answer:
          'Yes. Paramount Psychiatry offers in-person care in New Jersey, along with secure telepsychiatry, including telepsychiatry availability in New York where applicable.',
      },
      {
        question: 'What do I need for a telepsychiatry appointment?',
        answer:
          'A private, quiet environment, a reliable internet connection, and a device with a working camera and microphone. See the Telepsychiatry resource page for full details.',
      },
    ],
  },
];
