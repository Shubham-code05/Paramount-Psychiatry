import { useParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Section from '../components/ui/Section';
import PageHero from '../components/shared/PageHero';
import Button from '../components/ui/Button';
import FinalCta from '../components/shared/FinalCta';
import NotFoundPage from './NotFoundPage';
import { usePageMeta } from '../hooks/usePageMeta';
import { learningCenterCategories } from '../data/learningCenter';

// Single reusable template driving every /learning-center/:slug page, mirroring
// the ConditionDetailPage pattern. Categories are structural placeholders until
// the practice supplies and approves real article content — this component
// never fabricates clinical content, it only renders the "coming soon" state.
export default function LearningCenterCategoryPage() {
  const { slug } = useParams();
  const category = learningCenterCategories.find((item) => item.slug === slug && !item.path);

  usePageMeta(
    category
      ? {
          title: `${category.title} | Mental Health Learning Center | Paramount Psychiatry`,
          description: category.description,
        }
      : {},
  );

  if (!category) return <NotFoundPage />;

  return (
    <>
      <PageHero
        eyebrow="Mental Health Learning Center"
        title={category.title}
        intro={category.description}
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Mental Health Learning Center', path: '/learning-center' },
          { label: category.title },
        ]}
      />

      <Section spacing="lg" background="white">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-(--radius-card) border border-border bg-white-warm p-10 text-center shadow-soft">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lavender-soft text-lavender-deep">
            <BookOpen size={22} aria-hidden="true" />
          </span>
          <h2 className="text-h4 text-navy-deep">Content coming soon</h2>
          <p className="text-body-sm text-muted">
            Articles for this section are being developed and will be published here once reviewed and approved.
            In the meantime, please contact the practice directly with any questions.
          </p>
          <Button to="/contact" variant="outline" size="sm">
            Contact Us
          </Button>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
