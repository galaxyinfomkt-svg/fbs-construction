import Image from 'next/image';
import { site } from '@/lib/site';
import { CheckIcon, ArrowRightIcon } from '../icons';
import { Reveal } from '../Reveal';

const points = [
  'Premium materials with manufacturer warranties',
  'Professional, background-checked installation teams',
  'Clear communication and on-time delivery',
  'Energy efficiency & lasting property value',
];

export function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left" className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <Image
              src="/images/about-deck-white.webp"
              alt="FBS Construction completed deck and exterior renovation on a New England home"
              width={1400}
              height={1050}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
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
            New England&apos;s Trusted Exterior Renovation Experts
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            With over 15 years of experience, FBS Construction Inc has been the premier choice for
            home exterior renovations across Massachusetts and New England. We combine exceptional
            craftsmanship with outstanding customer service on every project — big or small.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            As a licensed, bonded and fully insured contractor, we stand behind our work with a 100%
            satisfaction guarantee. From your free estimate to the final walkthrough, you&apos;ll
            work with a team that treats your home like its own.
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
            <a href="#contact" className="btn-dark">
              Start Your Project
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
