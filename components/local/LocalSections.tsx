import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon, MapPinIcon } from '@phosphor-icons/react/ssr';
import type { City } from '@/lib/cities';
import type { LocalService } from '@/lib/all-services';
import type { LocalPage } from '@/lib/local-copy';

/**
 * The blocks a city or city + service page is built from. They take the copy
 * the local engine produced, so the same component renders different words on
 * every page. Styling follows the home: ink background, gold accents, Geist.
 */

export function LocalIntro({ page }: { page: LocalPage }) {
  return (
    <section className="bg-white py-20 font-geist sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
            {page.heroTitle}
          </h2>
        </div>
        <div className="space-y-6 lg:col-span-8">
          {page.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-gray-700">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalWhy({ page }: { page: LocalPage }) {
  return (
    <section className="bg-paper py-20 font-geist sm:py-24">
      <div className="container-x">
        <h2 className="max-w-[22ch] text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
          {page.whyTitle}
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {page.why.map((w) => (
            <div key={w.title} className="rounded-card bg-white p-7 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.5)]">
              <CheckCircleIcon aria-hidden weight="fill" className="h-7 w-7 text-gold" />
              <h3 className="mt-5 text-lg font-semibold text-ink">{w.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-gray-600">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalServices({
  city,
  services,
  title,
  currentSlug,
}: {
  city: City;
  services: LocalService[];
  title: string;
  currentSlug?: string;
}) {
  const list = services.filter((s) => s.slug !== currentSlug);
  return (
    <section className="bg-white py-20 font-geist sm:py-24">
      <div className="container-x">
        <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-[60ch] text-lg text-gray-600">
          Everything below is work we do in {city.name}, {city.county} County — each one has its own page for this town.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => (
            <Link
              key={s.slug}
              href={`/service-areas/${city.slug}/${s.slug}`}
              className="group flex items-center justify-between gap-4 rounded-card border border-gray-200 bg-white px-6 py-5 transition hover:border-gold hover:bg-paper"
            >
              <span className="font-semibold text-ink">
                {s.title} in {city.name}
              </span>
              <ArrowRightIcon
                aria-hidden
                weight="bold"
                className="h-5 w-5 shrink-0 text-gold transition-transform group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalFaq({ page }: { page: LocalPage }) {
  return (
    <section className="bg-paper py-20 font-geist sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="max-w-[14ch] text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
            {page.faqTitle}
          </h2>
        </div>
        <div className="space-y-4 lg:col-span-8">
          {page.faq.map((f) => (
            <details
              key={f.question}
              className="group rounded-card bg-white px-6 py-5 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.5)]"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-ink marker:hidden">
                {f.question}
              </summary>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-gray-600">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NearbyTowns({
  page,
  serviceSlug,
}: {
  page: LocalPage;
  /** When set, link to the same service in the neighbouring town. */
  serviceSlug?: string;
}) {
  if (page.nearby.length === 0) return null;
  return (
    <section className="bg-white py-20 font-geist sm:py-24">
      <div className="container-x">
        <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
          {page.nearbyTitle}
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {page.nearby.map((c) => (
            <Link
              key={c.slug}
              href={serviceSlug ? `/service-areas/${c.slug}/${serviceSlug}` : `/service-areas/${c.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-gold hover:bg-paper"
            >
              <MapPinIcon aria-hidden weight="fill" className="h-4 w-4 text-gold" />
              {c.name}, MA
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
