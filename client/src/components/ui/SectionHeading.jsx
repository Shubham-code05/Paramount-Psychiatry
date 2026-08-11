import { cn } from '../../lib/cn';

const alignments = {
  left: 'items-start text-left',
  center: 'items-center text-center mx-auto',
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
  className,
  maxWidth = 'max-w-2xl',
}) {
  return (
    <div className={cn('flex flex-col gap-3', alignments[align], align === 'center' && maxWidth, className)}>
      {eyebrow && <span className="text-eyebrow uppercase text-sage-deep font-semibold">{eyebrow}</span>}
      {title && <Tag className="text-h2">{title}</Tag>}
      {description && <p className="text-body-lg text-muted">{description}</p>}
    </div>
  );
}
