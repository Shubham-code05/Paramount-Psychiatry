import Leaf from './Leaf';

// A small botanical sprig — 2-3 overlapping leaves echoing the logo's leaf
// cluster. Purely decorative; the caller positions the whole cluster via
// `className` on the outer wrapper (e.g. "absolute top-6 right-6 hidden
// lg:block") — kept separate from the inner `relative` box so the two
// `position` utilities never collide on one element.
export default function LeafCluster({ className, animate = 'float', flip = false }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="relative h-16 w-14">
        <Leaf
          color="sage"
          size={26}
          rotate={flip ? 12 : -12}
          opacity={0.5}
          animate={animate}
          flip={flip}
          className="absolute top-0 left-1"
        />
        <Leaf
          color="blue"
          size={20}
          rotate={flip ? -18 : 18}
          opacity={0.4}
          animate={animate}
          delay={1.4}
          flip={flip}
          className="absolute top-5 left-6"
        />
        <Leaf
          color="lavender"
          size={16}
          rotate={flip ? 30 : -30}
          opacity={0.38}
          animate={animate}
          delay={2.3}
          flip={flip}
          className="absolute top-8 left-0"
        />
      </div>
    </div>
  );
}
