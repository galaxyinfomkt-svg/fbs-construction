import Link from 'next/link';
import { remodelingServices, site } from '@/lib/site';
import { remodelingIconMap, CheckIcon, ArrowRightIcon, PhoneIcon } from '../icons';
import { Reveal } from '../Reveal';

export function Remodeling() {
  return (
    <section id="remodeling" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Additions &amp; Remodeling</span>
          <h2 className="section-title mt-4">More Space. Same Address.</h2>
          <p className="mt-5 text-lg text-gray-600">
            Instead of outgrowing your home, we build onto it and rework what is already there — from
            a full second-story addition down to the bathroom you have been putting off.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {remodelingServices.map((s, i) => {
            const Icon = remodelingIconMap[s.icon];
            const featured = i === 0;
            return (
              <Reveal
                key={s.slug}
                as="article"
                delay={(i % 4) * 90}
                variant="scale"
                className={`group relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  featured ? 'ring-2 ring-gold' : 'ring-1 ring-gray-100 hover:ring-gold/40'
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal shadow-gold">
                    Most Requested
                  </span>
                )}
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${
                    featured
                      ? 'bg-gold text-charcoal'
                      : 'bg-gold/12 text-gold-dark group-hover:bg-gold group-hover:text-charcoal'
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </span>

                <h3 className="mt-5 font-display text-xl font-bold uppercase leading-tight tracking-tight text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-600">{s.short}</p>

                <ul className="mt-5 grid flex-1 content-start gap-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${s.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-charcoal transition-colors hover:text-gold-dark"
                  aria-label={`${s.title} — see what the work involves`}
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-100 sm:p-10">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-charcoal">
                Not sure what your project needs?
              </h3>
              <p className="mt-2 text-gray-600">
                Tell us what is not working about your house. We will walk the space, tell you
                honestly what is possible, and put a real number in writing — no charge, no pressure.
              </p>
              <p className="mt-3 text-sm font-semibold text-gray-500">
                {site.licenses.combined} · Fully insured
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/contact" className="btn-primary shine">
                Get Free Estimate
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-dark">
                <PhoneIcon className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
