import { Reveal } from '../Reveal';
import { Counter } from '../Counter';

const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 1000, suffix: '+', label: 'Projects Completed' },
  { value: 6, suffix: '', label: 'New England States Served' },
  { value: 100, suffix: '%', label: 'Satisfaction Guarantee' },
];

export function StatsBand() {
  return (
    <section className="bg-gold">
      <div className="container-x grid grid-cols-2 gap-8 py-14 text-center lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} variant="scale">
            <p className="font-display text-4xl font-bold leading-none text-charcoal sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wide text-charcoal/70 sm:text-sm">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
