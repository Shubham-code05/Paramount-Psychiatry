import { useState } from 'react';
import FormField from './FormField';
import FormStatus from './FormStatus';
import Button from '../ui/Button';
import site from '../../data/site';

const contactMethodOptions = [
  { value: '', label: 'Select one…' },
  { value: 'Email', label: 'Email' },
  { value: 'Phone', label: 'Phone' },
  { value: 'Either', label: 'Either is fine' },
];

const reasonOptions = [
  { value: '', label: 'Select one…' },
  { value: 'New appointment request', label: 'New appointment request' },
  { value: 'General question', label: 'General question' },
  { value: 'Insurance or billing question', label: 'Insurance or billing question' },
  { value: 'Other', label: 'Other' },
];

const timingOptions = [
  { value: '', label: 'No preference' },
  { value: 'Weekday mornings', label: 'Weekday mornings' },
  { value: 'Weekday afternoons', label: 'Weekday afternoons' },
  { value: 'Weekday evenings', label: 'Weekday evenings' },
];

const emptyValues = {
  name: '',
  email: '',
  phone: '',
  contactMethod: '',
  reason: '',
  timing: '',
  message: '',
};

const MESSAGE_MAX = 800;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (values.phone.trim() && !/^[\d\s()+-]{7,}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.contactMethod) errors.contactMethod = 'Please select a preferred contact method.';
  if (!values.reason) errors.reason = 'Please let us know the reason for contacting the practice.';

  if (values.message.length > MESSAGE_MAX) errors.message = `Please keep your message under ${MESSAGE_MAX} characters.`;

  return errors;
}

function buildMailto(values) {
  const subject = `Appointment request — ${values.name.trim()}`;
  const lines = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    values.phone.trim() && `Phone: ${values.phone.trim()}`,
    `Preferred contact method: ${values.contactMethod}`,
    `Reason for contacting: ${values.reason}`,
    values.timing && `Preferred appointment timing: ${values.timing}`,
    '',
    'Message:',
    values.message.trim() || '(none provided)',
  ].filter(Boolean);

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

// A real appointment-request form. There is no backend/email service wired
// up yet (the project's Express API only exposes /api/health), so instead of
// faking a server submission, this composes the patient's request into a
// mailto: link addressed to the practice and hands off to their email
// client — a real, working mechanism, clearly labeled as such. The UI never
// claims the office has received anything; it only confirms the message was
// prepared and handed to the user's email app.
export default function AppointmentForm() {
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'submitting' | 'success' | 'error'

  function update(field) {
    return (e) => setValues((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    const fieldOrder = ['name', 'email', 'phone', 'contactMethod', 'reason', 'message'];
    const firstInvalid = fieldOrder.find((field) => validationErrors[field]);

    if (firstInvalid) {
      setStatus('error');
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus('submitting');
    // Hand off to the user's email client — this is the real submission
    // mechanism, not a simulated delay.
    window.location.href = buildMailto(values);
    window.setTimeout(() => setStatus('success'), 200);
  }

  const isSubmitting = status === 'submitting';

  if (status === 'success') {
    return (
      <FormStatus status="success">
        <p className="font-medium text-navy-deep">Your email app should now be open with your message ready to send.</p>
        <p className="mt-1">
          Please review it and hit send from there to reach us at {site.email}. If your email app didn’t open automatically,
          you can email us directly at{' '}
          <a href={`mailto:${site.email}`} className="underline underline-offset-2 hover:text-navy">
            {site.email}
          </a>{' '}
          or call {site.phone}.
        </p>
      </FormStatus>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      {status === 'error' && (
        <FormStatus status="error">Please correct the highlighted field{Object.keys(errors).length > 1 ? 's' : ''} below.</FormStatus>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField id="name" label="Name" required value={values.name} onChange={update('name')} error={errors.name} autoComplete="name" />
        <FormField
          id="email"
          label="Email"
          type="email"
          required
          value={values.email}
          onChange={update('email')}
          error={errors.email}
          autoComplete="email"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField id="phone" label="Phone" type="tel" value={values.phone} onChange={update('phone')} error={errors.phone} autoComplete="tel" />
        <FormField
          id="contactMethod"
          label="Preferred contact method"
          as="select"
          required
          value={values.contactMethod}
          onChange={update('contactMethod')}
          error={errors.contactMethod}
          options={contactMethodOptions}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField
          id="reason"
          label="Reason for contacting the practice"
          as="select"
          required
          value={values.reason}
          onChange={update('reason')}
          error={errors.reason}
          options={reasonOptions}
        />
        <FormField
          id="timing"
          label="Preferred appointment timing"
          as="select"
          value={values.timing}
          onChange={update('timing')}
          options={timingOptions}
        />
      </div>

      <FormField
        id="message"
        label="Message"
        as="textarea"
        value={values.message}
        onChange={update('message')}
        error={errors.message}
        hint={`Please avoid including sensitive medical details here. ${MESSAGE_MAX - values.message.length} characters remaining.`}
        maxLength={MESSAGE_MAX}
      />

      <p className="text-caption text-muted max-w-xl">
        This form is not for emergencies — see below for emergency information. Sending will open your email app with your
        message addressed to Paramount Psychiatry; nothing is transmitted directly through this website. We use the
        information you provide only to respond to your request.
      </p>

      <div>
        <Button type="submit" size="lg" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? 'Preparing your message…' : 'Send Request via Email'}
        </Button>
      </div>
    </form>
  );
}
