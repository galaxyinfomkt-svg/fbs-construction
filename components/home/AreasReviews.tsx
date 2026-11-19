import Link from 'next/link';
import { MapPinIcon, GoogleLogoIcon, ArrowUpRightIcon } from '@phosphor-icons/react/ssr';
import { site } from '@/lib/site';
import { areas } from '@/lib/home';

/**
 * Service area + reviews. Reviews link out to the real Google profile instead
 * of showing testimonials on the page: the testimonials in lib/site.ts could
 * not be traced to real customers, so they are not used here or in schema.
 */
export function AreasReviews() {
  return (
    <section className="bg-white py-20 font-geist sm:py-28">
      <div className="container-x grid gap-6 lg:grid-cols-12">
        <div className="rounded-card bg-paper p-8 sm:p-12 lg:col-span-8">
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl">{areas.title}</h2>
          <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-ink-muted">{areas.text}</p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {site.localTowns.map((t) => (
              <li key={t}>
                <Link
                  href="/service-areas"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[0.95rem] font-medium text-ink ring-1 ring-line transition hover:ring-ink/40"
                >
                  <MapPinIcon aria-hidden className="h-4 w-4 text-gold-dark" weight="fill" />
                  {t}, MA
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="reviews" className="flex scroll-mt-28 flex-col justify-between rounded-card bg-ink p-8 text-white sm:p-12 lg:col-span-4">
          <GoogleLogoIcon aria-hidden className="h-9 w-9 text-gold" weight="bold" />
          <div className="mt-10">
            <h2 className="text-2xl font-semibold tracking-[-0.02em]">Read what homeowners say</h2>
            <p className="mt-3 leading-relaxed text-white/70">See reviews from FBS customers on our Google Business Profile.</p>
            <a
              href={site.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-gold"
            >
              Reviews on Google
              <ArrowUpRightIcon aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
