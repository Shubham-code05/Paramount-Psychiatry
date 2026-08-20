import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/cn';

// A single stylized leaf blade, colored from the logo's botanical palette.
// Purely decorative — always aria-hidden, never carries content.
const fills = {
  sage: 'var(--color-sage)',
  blue: 'var(--color-blue-accent)',
  lavender: 'var(--color-lavender-accent)',
  gold: 'var(--color-gold)',
};

// animate: 'float' = slow continuous drift (ambient, always-on decoration),
// 'reveal' = one-time gentle fade/scale/rotate-in when scrolled into view,
// 'none' = static.
export default function Leaf({
  color = 'sage',
  size = 28,
  rotate = 0,
  flip = false,
  opacity = 0.5,
  animate = 'float',
  delay = 0,
  className,
}) {
  const shouldReduceMotion = useReducedMotion();
  const fill = fills[color] ?? color;
  const skipMotion = shouldReduceMotion || animate === 'none';

  const motionProps = skipMotion
    ? {}
    : animate === 'reveal'
      ? {
          initial: { opacity: 0, scale: 0.85, rotate: rotate - 6 },
          whileInView: { opacity, scale: 1, rotate },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
        }
      : {
          animate: { y: [0, -8, 0], rotate: [rotate, rotate + 4, rotate] },
          transition: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay },
        };

  return (
    <motion.svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 32 48"
      width={size}
      height={size * 1.5}
      style={{
        opacity: !skipMotion && animate === 'reveal' ? undefined : opacity,
        transform: flip ? 'scaleX(-1)' : undefined,
        rotate: skipMotion ? `${rotate}deg` : undefined,
      }}
      className={cn('pointer-events-none', className)}
      {...motionProps}
    >
      <path d="M16 2C25 13 29 24 16 46C3 24 7 13 16 2Z" fill={fill} />
      <path d="M16 9V39" stroke="white" strokeOpacity="0.35" strokeWidth="1" strokeLinecap="round" />
    </motion.svg>
  );
}
