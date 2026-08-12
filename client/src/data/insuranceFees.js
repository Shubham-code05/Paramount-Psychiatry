// Insurance & Fees — content data (Phase 6).
// No invented insurer names, fees, reimbursement amounts, or legal claims.
// Where exact figures aren't supplied, copy points patients to contact the
// practice directly rather than guessing.

import site from './site';

export const insuranceFeesSeo = {
  title: 'Insurance & Fees | Paramount Psychiatry',
  description:
    'Clear information about insurance, out-of-network benefits, self-pay fees, and the Good Faith Estimate at Paramount Psychiatry.',
};

export const insuranceFeesHero = {
  eyebrow: 'Insurance & Fees',
  title: 'Clear information about coverage and costs.',
  intro:
    'Understanding your coverage and costs is an important part of preparing for care. This page explains, in plain terms, how insurance, self-pay, and out-of-network benefits generally work at Paramount Psychiatry.',
};

export const insuranceSection = {
  heading: 'Insurance',
  paragraphs: [
    'Insurance coverage for psychiatric care varies by plan, employer, and individual policy. Paramount Psychiatry works with Headway to help make insurance-based appointments more straightforward — when you request an appointment through Headway, you can see which plans are currently accepted before booking.',
    'Because coverage details differ from plan to plan, we recommend confirming your specific benefits — including copays, deductibles, and any authorization requirements — directly with your insurance carrier before your visit.',
  ],
};

export const feesSection = {
  heading: 'Fees & Self-Pay',
  paragraphs: [
    'Patients who prefer to pay directly, or whose plan is not in network, are welcome to be seen on a self-pay basis. Current self-pay fees are available by contacting the practice directly.',
  ],
  cta: { label: 'Contact Us for Current Fee Information', to: '/contact' },
};

export const outOfNetworkSection = {
  heading: 'Out-of-Network Information',
  paragraphs: [
    'Depending on your plan, you may have out-of-network benefits that can help offset the cost of care. Reimbursement, if any, depends entirely on your individual policy.',
    'We recommend contacting your insurer directly to verify out-of-network eligibility, reimbursement rates, deductibles, copays or coinsurance, and any documentation your plan requires (such as a superbill) before your visit. Paramount Psychiatry cannot guarantee reimbursement, as this is determined solely by your insurance carrier.',
  ],
};

export const goodFaithEstimateSection = {
  heading: 'Good Faith Estimate',
  paragraphs: [
    'Under federal law, health care providers must give patients who are not using insurance an estimate of expected charges for services, known as a Good Faith Estimate.',
    'This page provides general information only and is not a substitute for your personalized estimate. Please contact the practice directly to request a Good Faith Estimate or to ask questions about this process.',
  ],
};

export const paymentFaqs = {
  heading: 'Payment Questions',
  items: [
    {
      question: 'Do you accept insurance?',
      answer:
        'Insurance acceptance depends on your specific plan. Appointments booked through Headway will show which plans are currently accepted.',
    },
    {
      question: 'How can I find out whether my plan is accepted?',
      answer:
        'The clearest way is to check available plans when requesting an appointment through Headway, or to contact the practice directly with your insurance details.',
    },
    {
      question: 'What if I have out-of-network benefits?',
      answer:
        'You may be able to use out-of-network benefits depending on your plan. We recommend verifying eligibility, reimbursement, and any required documentation with your insurer before your visit.',
    },
    {
      question: 'How do self-pay appointments work?',
      answer: 'Self-pay is available for patients who prefer to pay directly. Contact the practice for current fee information.',
    },
    {
      question: 'Who should I contact about billing questions?',
      answer: `For billing questions, please contact the practice directly at ${site.phone} or ${site.email}.`,
    },
  ],
};
