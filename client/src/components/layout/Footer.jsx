import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Info } from 'lucide-react';
import Logo from '../shared/Logo';
import AppointmentButton from '../shared/AppointmentButton';
import Container from '../ui/Container';
import site from '../../data/site';
import { emergencyNotice } from '../../data/home';

const columns = [
  {
    heading: 'About',
    links: [
      { label: 'About Paramount Psychiatry', path: '/about' },
      { label: 'Dr. Pooja Tandon', path: '/about/dr-pooja-tandon' },
    ],
  },
  {
    heading: 'Care',
    links: [
      { label: 'Conditions', path: '/conditions' },
      { label: 'Clinical Services', path: '/services/clinical-services' },
      { label: 'Evaluation Services', path: '/services/evaluation-services' },
    ],
  },
  {
    heading: 'Information',
    links: [
      { label: 'Insurance & Fees', path: '/insurance-fees' },
      { label: 'Practice Policies', path: '/patient-resources/practice-policies' },
      { label: 'FAQs', path: '/faqs' },
      { label: 'Patient Resources', path: '/patient-resources' },
      { label: 'Appointment Requests', path: '/appointment' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      {/* Emergency notice — calm, informational, not alarming */}
      <div className="border-b border-white/10 bg-white/5">
        <Container className="py-3">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-caption text-white/70">
            <Info size={14} className="shrink-0 text-white/50" aria-hidden="true" />
            <span>
              {emergencyNotice.statement} For emergencies: {emergencyNotice.instructions.join(' · ')}.{' '}
              {emergencyNotice.note}
            </span>
          </p>
        </Container>
      </div>

      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo dark />
            <p className="text-body-sm text-white/70 max-w-xs">{site.tagline}</p>
            <AppointmentButton variant="secondary" size="sm" className="w-fit mt-2" />
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading} className="flex flex-col gap-2">
              <span className="text-eyebrow uppercase text-white/50 font-semibold mb-1">{column.heading}</span>
              {column.links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-body-sm text-white/80 hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}

          <div className="flex flex-col gap-3">
            <span className="text-eyebrow uppercase text-white/50 font-semibold">Contact</span>
            <ul className="flex flex-col gap-3 text-body-sm text-white/80">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="hover:text-white transition-colors">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors break-all">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption text-white/60">
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/patient-resources/practice-policies#privacy" className="text-caption text-white/60 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/patient-resources/practice-policies" className="text-caption text-white/60 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
