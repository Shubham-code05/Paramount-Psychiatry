import { cn } from '../../lib/cn';
import Container from './Container';

// Light backgrounds carry a faint lavender dot-grain texture (see
// index.css `.bg-texture-lavender`) so it reads consistently across the
// site without touching every page individually. Dark/transparent
// backgrounds are left plain — the texture was tuned for light surfaces.
const backgrounds = {
  transparent: '',
  white: 'bg-white bg-texture-lavender',
  warm: 'bg-white-warm bg-texture-lavender',
  ivory: 'bg-ivory bg-texture-lavender',
  'sage-soft': 'bg-sage-soft bg-texture-lavender',
  'blue-soft': 'bg-blue-soft bg-texture-lavender',
  'lavender-soft': 'bg-lavender-soft bg-texture-lavender',
  navy: 'bg-navy-deep text-white',
};

const spacings = {
  sm: 'py-10 md:py-14',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-28',
  xl: 'py-24 md:py-32',
};

export default function Section({
  as: Tag = 'section',
  background = 'transparent',
  spacing = 'lg',
  container = true,
  className,
  containerClassName,
  children,
  ...props
}) {
  return (
    <Tag className={cn(backgrounds[background], spacings[spacing], className)} {...props}>
      {container ? <Container className={containerClassName}>{children}</Container> : children}
    </Tag>
  );
}
