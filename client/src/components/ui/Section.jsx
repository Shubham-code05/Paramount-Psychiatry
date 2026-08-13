import { cn } from '../../lib/cn';
import Container from './Container';

const backgrounds = {
  transparent: '',
  white: 'bg-white',
  warm: 'bg-white-warm',
  ivory: 'bg-ivory',
  'sage-soft': 'bg-sage-soft',
  'blue-soft': 'bg-blue-soft',
  'lavender-soft': 'bg-lavender-soft',
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
