import { Reveal } from '../Reveal';
import {
  ShieldIcon,
  CheckIcon,
  ClockIcon,
  StarIcon,
  DeckIcon,
  PhoneIcon,
} from '../icons';

const features = [
  {
    icon: ShieldIcon,
    title: 'Licensed, Bonded & Insured',
    text: 'Full protection and peace of mind on every project, backed by our 100% satisfaction guarantee.',
  },
  {
    icon: StarIcon,
    title: '5-Star Reputation',
    text: 'Hundreds of happy New England homeowners and a perfect 5.0 Google rating earned the hard way.',
  },
  {
    icon: DeckIcon,
    title: 'Premium Materials',
    text: 'Top-tier siding, windows, doors and decking with leading manufacturer warranties.',
  },
  {
    icon: ClockIcon,
    title: 'On-Time, On-Budget',
    text: 'Clear schedules and transparent pricing — no surprises, no runaround, just results.',
  },
  {
    icon: CheckIcon,
    title: 'Craftsmanship First',
    text: 'Skilled, background-checked crews who treat your home like it’s their own, start to finish.',
  },
  {
    icon: PhoneIcon,
    title: 'Responsive Service',
    text: 'Real people who answer, show up and follow through — communication you can count on.',
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 lg:py-32">
      <div className="absolute -right-24 top-12 -z-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why FBS Construction</span>
          <h2 className="section-title mt-4">Built on Trust, Backed by Results</h2>
          <p className="mt-5 text-lg text-gray-600">
            We&apos;re not the cheapest — we&apos;re the team you call when you want it done right the
            first time.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              as="article"
              delay={i * 80}
              variant="scale"
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/12 text-gold-dark transition-colors duration-300 group-hover:bg-gold group-hover:text-charcoal">
                <f.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                {f.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-gray-600">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
