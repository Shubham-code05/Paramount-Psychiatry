import { motion, useReducedMotion } from 'framer-motion';
import Leaf from './Leaf';
import { cn } from '../../lib/cn';

// A family of calm, hand-drawn nature sketches for the empty right-side
// space on inner-page hero sections. Every variant shares the same line
// quality, softness, and navy / sage / blue / gold palette (with a single
// lavender dot each, the only sanctioned lavender use) so the pages feel
// like one cohesive set — only the subject changes per page theme:
//
//  - bloom:        ring + gold accent dot, echoing the logo directly (About)
//  - growingLeaf:  a stem of leaves unfurling upward (Conditions, Services)
//  - branch:       a single diagonal botanical branch (condition/service detail pages)
//  - mountain:     layered peaks under a soft sun (Practice Policies)
//  - sunrisePath:  a rising sun over a gentle path (Appointment)
//  - openSky:      soft clouds over an open book (Resources, Learning Center,
//                   FAQs, Insurance & Fees, Contact — the informational pages)
//
// Never used on the Home hero (which has its own illustration) or the Dr.
// Tandon hero (which already shows her photo). Purely decorative, always
// aria-hidden.

function BloomScene({ leafProps }) {
  return (
    <>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <circle cx="100" cy="100" r="76" fill="none" stroke="var(--color-navy)" strokeOpacity="0.16" strokeWidth="1.5" />
        <path
          d="M100 24 A76 76 0 0 1 152 47"
          fill="none"
          stroke="var(--color-gold)"
          strokeOpacity="0.75"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="152" cy="47" r="4" fill="var(--color-gold)" />
        <circle cx="46" cy="150" r="3" fill="var(--color-lavender-accent)" opacity="0.75" />
      </svg>
      <div className="absolute inset-0">
        <Leaf color="sage" size={34} rotate={-14} className="absolute bottom-10 left-[38%]" {...leafProps(0)} />
        <Leaf color="blue" size={26} rotate={16} className="absolute bottom-16 left-[52%]" {...leafProps(1.2)} />
        <Leaf color="gold" size={20} rotate={-6} className="absolute bottom-6 left-[58%]" {...leafProps(2.1)} />
      </div>
    </>
  );
}

function GrowingLeafScene({ leafProps }) {
  return (
    <>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <path
          d="M100 178C98 130 104 80 96 30"
          fill="none"
          stroke="var(--color-sage-deep)"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M96 30 A18 18 0 0 1 128 26"
          fill="none"
          stroke="var(--color-gold)"
          strokeOpacity="0.7"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="128" cy="26" r="3.5" fill="var(--color-gold)" />
        <circle cx="150" cy="128" r="3" fill="var(--color-lavender-accent)" opacity="0.75" />
      </svg>
      <div className="absolute inset-0">
        <Leaf color="sage" size={22} rotate={-40} flip className="absolute bottom-[62%] left-[38%]" {...leafProps(0)} />
        <Leaf color="blue" size={24} rotate={35} className="absolute bottom-[46%] left-[54%]" {...leafProps(0.9)} />
        <Leaf color="sage" size={28} rotate={-30} flip className="absolute bottom-[26%] left-[34%]" {...leafProps(1.8)} />
        <Leaf color="gold" size={20} rotate={28} className="absolute bottom-[14%] left-[52%]" {...leafProps(2.6)} />
      </div>
    </>
  );
}

function BranchScene({ leafProps }) {
  return (
    <>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <path
          d="M28 40C70 62 130 96 176 156"
          fill="none"
          stroke="var(--color-sage-deep)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="176" cy="156" r="3" fill="var(--color-gold)" />
        <circle cx="44" cy="150" r="3" fill="var(--color-lavender-accent)" opacity="0.75" />
      </svg>
      <div className="absolute inset-0">
        <Leaf color="sage" size={24} rotate={20} className="absolute top-[18%] left-[10%]" {...leafProps(0)} />
        <Leaf color="blue" size={20} rotate={-10} className="absolute top-[34%] left-[32%]" {...leafProps(0.8)} />
        <Leaf color="sage" size={26} rotate={22} flip className="absolute top-[50%] left-[52%]" {...leafProps(1.6)} />
        <Leaf color="gold" size={18} rotate={-8} className="absolute top-[64%] left-[70%]" {...leafProps(2.4)} />
      </div>
    </>
  );
}

function MountainScene({ leafProps }) {
  return (
    <>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <circle cx="140" cy="56" r="16" fill="var(--color-gold)" opacity="0.18" />
        <circle cx="140" cy="56" r="16" fill="none" stroke="var(--color-gold)" strokeOpacity="0.6" strokeWidth="1.5" />
        <path
          d="M18 150 L64 84 L92 118 L124 60 L182 150 Z"
          fill="var(--color-blue-soft)"
          fillOpacity="0.5"
          stroke="var(--color-navy)"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M18 150 L58 100 L86 132 L124 76 L182 150"
          fill="none"
          stroke="var(--color-sage-deep)"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M18 152H182" stroke="var(--color-navy)" strokeOpacity="0.15" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="34" cy="164" r="3" fill="var(--color-lavender-accent)" opacity="0.75" />
      </svg>
      <div className="absolute inset-0">
        <Leaf color="sage" size={22} rotate={-16} className="absolute bottom-6 left-[12%]" {...leafProps(0)} />
        <Leaf color="gold" size={18} rotate={12} className="absolute bottom-8 left-[20%]" {...leafProps(1)} />
      </div>
    </>
  );
}

function SunrisePathScene({ leafProps }) {
  return (
    <>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <path d="M18 120H182" stroke="var(--color-navy)" strokeOpacity="0.14" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M100 120A46 46 0 0 1 146 120" fill="var(--color-gold)" fillOpacity="0.16" stroke="none" />
        <path
          d="M100 120A46 46 0 0 1 146 120"
          fill="none"
          stroke="var(--color-gold)"
          strokeOpacity="0.75"
          strokeWidth="2"
        />
        <path d="M100 66V78M63 83L72 91M183 83L174 91" stroke="var(--color-gold)" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M22 172C58 150 84 168 118 146C142 130 158 138 178 124"
          fill="none"
          stroke="var(--color-sage-deep)"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="46" cy="158" r="3" fill="var(--color-lavender-accent)" opacity="0.75" />
      </svg>
      <div className="absolute inset-0">
        <Leaf color="sage" size={20} rotate={-18} className="absolute bottom-8 left-[16%]" {...leafProps(0)} />
        <Leaf color="blue" size={18} rotate={14} className="absolute bottom-4 left-[70%]" {...leafProps(1.1)} />
      </div>
    </>
  );
}

function OpenSkyScene({ leafProps }) {
  return (
    <>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <circle cx="146" cy="52" r="13" fill="var(--color-gold)" opacity="0.16" />
        <path
          d="M28 66C24 58 30 50 40 51C42 42 56 40 62 48C70 44 82 50 80 60C90 60 92 72 82 76H32C22 76 20 66 28 66Z"
          fill="var(--color-blue-soft)"
          fillOpacity="0.55"
          stroke="var(--color-navy)"
          strokeOpacity="0.18"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M110 96C107 90 112 84 120 85C122 78 133 76 138 82C146 79 155 85 152 92C160 92 162 101 154 104H114C106 104 104 96 110 96Z"
          fill="var(--color-sage-soft)"
          fillOpacity="0.55"
          stroke="var(--color-navy)"
          strokeOpacity="0.14"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M52 156C52 150 58 146 90 146C122 146 128 150 128 156C128 162 122 166 90 166C58 166 52 162 52 156Z"
          fill="none"
          stroke="var(--color-navy)"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />
        <path d="M90 146V166M52 156C64 152 78 152 90 156M128 156C116 152 102 152 90 156" fill="none" stroke="var(--color-navy)" strokeOpacity="0.25" strokeWidth="1.2" />
        <circle cx="150" cy="140" r="3" fill="var(--color-lavender-accent)" opacity="0.75" />
      </svg>
      <div className="absolute inset-0">
        <Leaf color="gold" size={18} rotate={-12} className="absolute bottom-6 left-[68%]" {...leafProps(0)} />
        <Leaf color="sage" size={20} rotate={14} className="absolute bottom-8 left-[14%]" {...leafProps(1)} />
      </div>
    </>
  );
}

const scenes = {
  bloom: { Scene: BloomScene, washes: ['bg-sage-soft', 'bg-blue-soft'] },
  growingLeaf: { Scene: GrowingLeafScene, washes: ['bg-sage-soft', 'bg-blue-soft'] },
  branch: { Scene: BranchScene, washes: ['bg-sage-soft', 'bg-blue-soft'] },
  mountain: { Scene: MountainScene, washes: ['bg-blue-soft', 'bg-sage-soft'] },
  sunrisePath: { Scene: SunrisePathScene, washes: ['bg-gold/10', 'bg-sage-soft'] },
  openSky: { Scene: OpenSkyScene, washes: ['bg-blue-soft', 'bg-sage-soft'] },
};

export default function HeroBloom({ variant = 'bloom', className }) {
  const shouldReduceMotion = useReducedMotion();
  const { Scene, washes } = scenes[variant] ?? scenes.bloom;

  function leafProps(delay) {
    return {
      opacity: 0.5,
      delay,
      animate: shouldReduceMotion ? 'none' : 'float',
    };
  }

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn('relative aspect-square w-full max-w-sm', className)}
      aria-hidden="true"
    >
      <div className={cn('absolute inset-6 rounded-[58%_42%_36%_64%/60%_38%_62%_40%] opacity-60', washes[0])} />
      <div className={cn('absolute inset-14 rounded-[42%_58%_60%_40%/38%_62%_38%_62%] opacity-60', washes[1])} />
      <Scene leafProps={leafProps} />
    </motion.div>
  );
}
