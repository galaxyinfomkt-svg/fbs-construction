import Link from 'next/link';
import { Reveal } from '../Reveal';
import { site } from '@/lib/site';
import {
  ShieldIcon,
  CheckIcon,
  ClockIcon,
  AdditionIcon,
  DeckIcon,
  PhoneIcon,
  ArrowRightIcon,
} from '../icons';

const features = [
  {
    icon: ShieldIcon,
    title: 'Licensed for Structural Work',
    text: 'MA Construction Supervisor License CS-117744 and HIC registration 179686, plus full insurance — the credentials an addition legally requires.',
  },
  {
    icon: AdditionIcon,
    title: 'Framing Done In-House',
    text: 'Load-bearing changes, second-story framing and roof tie-ins are built by our own crew, not handed to whoever happens to be free.',
  },
  {
    icon: ClockIcon,
    title: 'Permits Without the Runaround',
    text: 'We pull the building permit and schedule the inspections. You are not the one on hold with the town.',
  },
  {
    icon: CheckIcon,
    title: 'One Crew, One Contact',
    text: 'The people who price your project are the people who build it — through to the final walkthrough.',
  },
  {
    icon: DeckIcon,
    title: 'Exterior Experience Behind It',
    text: 'Fifteen years of siding, roofing and window work means your addition gets closed in weather-tight the first time.',
  },
  {
    icon: PhoneIcon,
    title: 'Straight Answers',
    text: 'Real people who pick up, show up when they said they would, and tell you what something actually costs.',
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 lg:py-32">
      <div className="absolute -right-24 top-12 -z-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why FBS Construction</span>
          <h2 className="section-title mt-4">The Part Most Contractors Get Wrong</h2>
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

        <Reveal className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary shine text-base">
            Get Your Free Estimate
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
          <a href={`tel:${site.phoneRaw}`} className="btn-dark text-base">
            <PhoneIcon className="h-5 w-5" />
            {site.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
