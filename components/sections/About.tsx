import Link from 'next/link';
import { site } from '@/lib/site';
import { CheckIcon, ArrowRightIcon } from '../icons';
import { Reveal } from '../Reveal';
import { Zoomable } from '../Zoomable';

const points = [
  'Licensed Construction Supervisor on every build',
  'Permits pulled and inspections scheduled by us',
  'One crew, one point of contact, start to finish',
  'Interior work that keeps going all winter',
];

export function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left" className="relative">
          <Zoomable
            src="/images/about-deck-white.webp"
            alt="FBS Construction completed deck and exterior renovation on a New England home"
            width={1400}
            height={1050}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-2xl shadow-card"
            imgClassName="h-full w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gold px-8 py-6 shadow-gold sm:block lg:-right-6">
            <p className="font-display text-5xl font-bold leading-none text-charcoal">
              {site.yearsExperience}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-charcoal/80">
              Years of Experience
            </p>
          </div>
        </Reveal>

        <Reveal variant="right">
          <span className="eyebrow">About FBS Construction</span>
          <h2 className="section-title mt-4">
            A Worcester County Builder, Not a Sales Office
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            FBS Construction Inc has been building and renovating homes out of Whitinsville,
            Massachusetts for over {site.yearsExperience.replace('+', '')} years. What started as
            exterior work has grown into what we are known for now: additions that add real square
            footage, and interior renovations that make a house work for the family living in it.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            We hold Massachusetts Construction Supervisor License{' '}
            <strong className="font-semibold text-charcoal">{site.licenses.csl}</strong> and Home
            Improvement Contractor registration{' '}
            <strong className="font-semibold text-charcoal">{site.licenses.hic}</strong>, and we are
            fully insured. That matters on an addition: the CSL is what Massachusetts requires to
            supervise structural work, and the HIC registration is what protects you on the
            contract.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-gray-700">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link href="/contact" className="btn-dark">
              Start Your Project
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
