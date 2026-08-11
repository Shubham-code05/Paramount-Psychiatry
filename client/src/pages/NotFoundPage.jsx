import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <Section spacing="xl" background="warm">
      <div className="flex flex-col items-start gap-6">
        <SectionHeading as="h1" eyebrow="404" title="Page Not Found" description="The page you're looking for doesn't exist." />
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </Section>
  );
}
