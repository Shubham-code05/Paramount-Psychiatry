import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import AppointmentButton from '../shared/AppointmentButton';
import { hero } from '../../data/home';
import { fadeUp } from '../../lib/motion';
import LeafCluster from '../decor/LeafCluster';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="xl" background="warm" className="overflow-hidden max-md:py-14!">
      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          className="flex flex-col gap-6"
        >
          <h1 className="text-display text-navy-deep">{hero.headline}</h1>
          <p className="text-body-lg text-muted max-w-xl">{hero.subcopy}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <AppointmentButton size="lg">{hero.primaryCta}</AppointmentButton>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex aspect-[2/1] w-full max-w-56 items-center justify-center sm:max-w-64 lg:aspect-square lg:max-w-md"
        >
          <div className="absolute -bottom-3 -left-3 h-14 w-14 rounded-[42%_58%_60%_40%/38%_62%_38%_62%] bg-navy-deep/10 lg:-bottom-4 lg:-left-4 lg:h-20 lg:w-20" aria-hidden="true" />
          <LeafCluster className="hidden sm:block absolute -top-4 -right-2 lg:-top-6 lg:right-0" />
          <div className="absolute inset-3 lg:inset-6 rounded-[60%_40%_32%_68%/62%_36%_64%_38%] bg-sage-soft" aria-hidden="true" />
          <div className="absolute inset-0 rounded-[38%_62%_64%_36%/42%_68%_32%_58%] bg-blue-soft opacity-80" aria-hidden="true" />
          <div className="absolute inset-6 lg:inset-12 rounded-4xl bg-white-warm shadow-elevated" aria-hidden="true" />
          <div className="absolute inset-8 lg:inset-16 rounded-[42%_58%_38%_62%/58%_42%_58%_42%] bg-linear-to-br from-white to-ivory" aria-hidden="true" />
          <img
            src="/images/logo.png"
            alt="Paramount Psychiatry"
            className="relative h-auto w-[55%] max-w-40 object-contain drop-shadow-sm lg:max-w-56"
          />
        </motion.div>
      </div>
    </Section>
  );
}
