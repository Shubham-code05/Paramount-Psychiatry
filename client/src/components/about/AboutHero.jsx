import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Breadcrumbs from '../shared/Breadcrumbs';
import Leaf from '../decor/Leaf';
import { aboutHero } from '../../data/aboutPage';
import { fadeUp } from '../../lib/motion';

// A single naturalistic fir-tree silhouette, jagged rather than stacked
// triangles, so it reads as editorial linework instead of a stock "pine"
// glyph. `dim` controls scale/opacity to suggest atmospheric depth.
function Pine({ x, y, scale = 1, dim = false }) {
  return (
    <g
      transform={`translate(${x},${y}) scale(${scale})`}
      stroke="var(--color-sage-deep)"
      strokeOpacity={dim ? 0.55 : 0.75}
      strokeWidth="1"
      strokeLinejoin="round"
    >
      <line x1="0" y1="0" x2="0" y2="9" strokeWidth="1.3" strokeOpacity={dim ? 0.4 : 0.55} />
      <path
        d="M0,-54 L4,-42 L1,-42 L9,-30 L4,-30 L13,-16 L6,-16 L18,0 L-18,0 L-6,-16 L-13,-16 L-4,-30 L-9,-30 L-1,-42 L-4,-42 Z"
        fill="var(--color-sage)"
        fillOpacity={dim ? 0.2 : 0.32}
      />
    </g>
  );
}

// Hand-drawn mountain-and-cabin landscape, in the same ink-sketch language
// as <HeroBloom /> — layered ridgelines for depth, a single naturally
// grounded cabin, and a couple of floating <Leaf /> sprigs composited the
// same way HeroBloom layers its accents, so the piece reads as part of the
// same illustration family rather than a one-off asset. Thin navy linework
// throughout, muted sage/blue/gold fills only — no backdrop fill, so the
// section's own ivory background shows through.
function MountainCabinScene({ className }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={className}>
      <svg viewBox="0 0 340 260" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {/* Sun */}
        <circle cx="266" cy="38" r="13" fill="var(--color-gold)" fillOpacity="0.06" stroke="var(--color-gold)" strokeOpacity="0.5" strokeWidth="1" />

        {/* Two distant birds */}
        <path d="M152,52 q5,-7 10,0 q5,-7 10,0" fill="none" stroke="var(--color-navy)" strokeOpacity="0.3" strokeWidth="1" strokeLinecap="round" />
        <path d="M172,42 q4,-6 8,0 q4,-6 8,0" fill="none" stroke="var(--color-navy)" strokeOpacity="0.25" strokeWidth="0.9" strokeLinecap="round" />

        {/* Farthest ridgeline */}
        <path
          d="M0,120 L40,70 L78,102 L120,54 L162,96 L206,60 L248,100 L292,66 L340,98 L340,260 L0,260 Z"
          fill="var(--color-blue-soft)"
          fillOpacity="0.4"
          stroke="var(--color-navy)"
          strokeOpacity="0.1"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Mid ridgeline, with a touch of contour hatching for texture */}
        <path
          d="M0,160 L46,96 L88,138 L136,82 L182,142 L230,90 L276,146 L340,110 L340,260 L0,260 Z"
          fill="var(--color-sage-soft)"
          fillOpacity="0.55"
          stroke="var(--color-navy)"
          strokeOpacity="0.14"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path
          d="M126,96 L138,110 M132,104 L144,118 M138,112 L150,126"
          stroke="var(--color-navy)"
          strokeOpacity="0.1"
          strokeWidth="0.7"
          strokeLinecap="round"
        />

        {/* Soft valley mist between the ridgeline and the foreground hill */}
        <path
          d="M14,176 C80,168 140,178 210,172 C262,168 300,174 326,170"
          fill="none"
          stroke="var(--color-blue-soft)"
          strokeOpacity="0.55"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {/* Foreground hill — its top edge doubles as the ground line */}
        <path
          d="M0,196 C60,176 110,190 170,182 C230,174 280,192 340,182 L340,260 L0,260 Z"
          fill="var(--color-sage-soft)"
          fillOpacity="0.35"
          stroke="var(--color-navy)"
          strokeOpacity="0.16"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />

        <Pine x={150} y={206} scale={1} />
        <Pine x={192} y={212} scale={0.68} dim />

        {/* Cabin, nestled into the foreground hill */}
        <polygon points="72,188 96,158 120,188" fill="var(--color-gold)" fillOpacity="0.1" stroke="var(--color-navy)" strokeOpacity="0.68" strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M81,177 L111,177" stroke="var(--color-navy)" strokeOpacity="0.15" strokeWidth="0.6" />
        <rect x="78" y="188" width="36" height="26" fill="none" stroke="var(--color-navy)" strokeOpacity="0.68" strokeWidth="1.1" />
        <rect x="93" y="203" width="9" height="11" fill="var(--color-navy)" fillOpacity="0.08" stroke="var(--color-navy)" strokeOpacity="0.55" strokeWidth="0.9" />
        <rect x="104" y="164" width="5" height="12" fill="none" stroke="var(--color-navy)" strokeOpacity="0.6" strokeWidth="0.9" />
        <path d="M106,162 C110,155 103,150 108,142" fill="none" stroke="var(--color-navy)" strokeOpacity="0.22" strokeWidth="0.9" strokeLinecap="round" />
      </svg>

      <div className="absolute inset-0">
        <Leaf
          color="sage"
          size={16}
          rotate={-10}
          opacity={0.4}
          className="absolute bottom-[6%] left-[10%]"
          animate={shouldReduceMotion ? 'none' : 'float'}
          delay={0}
        />
        <Leaf
          color="gold"
          size={14}
          rotate={12}
          opacity={0.35}
          className="absolute bottom-[4%] right-[16%]"
          animate={shouldReduceMotion ? 'none' : 'float'}
          delay={1.4}
        />
      </div>
    </div>
  );
}

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="xl" background="ivory" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-[58%_42%_36%_64%/60%_38%_62%_40%] bg-sage-soft opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 top-32 h-64 w-64 rounded-[42%_58%_60%_40%/38%_62%_38%_62%] bg-blue-soft opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-6 bottom-6 h-16 w-16 rounded-[38%_62%_58%_42%/62%_38%_58%_42%] bg-navy-deep/10"
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          className="flex max-w-2xl flex-col gap-6 lg:col-span-7"
        >
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'About' }]} />
          <span className="h-1 w-14 rounded-full bg-gold" aria-hidden="true" />
          <h1 className="text-display text-navy-deep">{aboutHero.headline}</h1>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden w-full max-w-sm lg:col-span-5 lg:block"
        >
          <MountainCabinScene className="relative aspect-[17/13] w-full" />
        </motion.div>
      </div>
    </Section>
  );
}
