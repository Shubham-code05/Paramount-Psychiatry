import { Phone, Mail, MapPin } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import AppointmentButton from '../components/shared/AppointmentButton';
import { usePageMeta } from '../hooks/usePageMeta';
import site from '../data/site';

const seo = {
  title: 'Contact Us | Paramount Psychiatry',
  description: 'Contact Paramount Psychiatry by phone or email, or make an appointment directly through Headway.',
};

export default function ContactPage() {
  usePageMeta(seo);

  return (
    <Section spacing="xl" background="warm">
      <div className="flex flex-col items-start gap-8">
        <SectionHeading
          as="h1"
          eyebrow="Contact Us"
          title="Get in Touch"
          description="Reach out by phone or email, or make an appointment directly through Headway."
        />
        <ul className="flex flex-col gap-4 text-body text-charcoal">
          <li className="flex items-center gap-3">
            <Phone size={20} className="text-sage-deep" aria-hidden="true" />
            <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="hover:text-navy transition-colors">
              {site.phone}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={20} className="text-sage-deep" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="hover:text-navy transition-colors">
              {site.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={20} className="text-sage-deep" aria-hidden="true" />
            <span>
              {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
            </span>
          </li>
        </ul>
        <AppointmentButton />
      </div>
    </Section>
  );
}
