import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist } from 'next/font/google';
import { site } from '@/lib/site';
import { citiesByRegion, cities } from '@/lib/cities';
import { allServices } from '@/lib/all-services';
import { HomeHero } from '@/components/home/HomeHero';
import { QuoteSection } from '@/components/home/QuoteSection';
import { Credentials } from '@/components/home/Credentials';
import { WinterBand } from '@/components/home/WinterBand';
import { FinalCta } from '@/components/home/FinalCta';

const geist = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-geist' });

export const metadata: Metadata = {
  title: { absolute: `Service Areas — ${cities.length} Massachusetts Towns | ${site.name}` },
  description: `FBS Construction builds home additions, kitchens, baths and basements in ${cities.length} Massachusetts towns across Worcester County, MetroWest, Greater Boston and the North and South Shore. Find your town.`,
  alternates: { canonical: '/service-areas' },
};

export default function ServiceAreasPage() {
  const regions = citiesByRegion();

  return (
    <div className={geist.variable}>
      <HomeHero
        eyebrow={`Licensed MA builder · ${cities.length} towns`}
        title="Where FBS Construction builds"
        subtitle={`Additions, kitchens, baths, basements, sunrooms and porches across ${cities.length} Massachusetts towns. Find yours below — every town has its own page.`}
        ariaLabel="FBS Construction service areas in Massachusetts"
      />

      <QuoteSection
        title="Not sure if we cover your street?"
        text="Send the form or call. If your town is on this page, we are already working there."
        instance="areas"
      />

      {regions.map((group) => (
        <section key={group.region} className="bg-white py-16 font-geist even:bg-paper sm:py-20">
          <div className="container-x">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
                {group.region}
              </h2>
              <span className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                {group.cities.length} towns
              </span>
            </div>
            <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {group.cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/service-areas/${c.slug}`}
                  className="rounded-card border border-gray-200 bg-white px-5 py-3.5 text-[0.98rem] font-semibold text-ink transition hover:border-gold hover:bg-paper"
                >
                  {c.name}, MA
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink py-20 font-geist text-white sm:py-24">
        <div className="container-x">
          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-4xl">
            Every service, in every town
          </h2>
          <p className="mt-4 max-w-[62ch] text-lg text-white/70">
            {allServices.length} services across {cities.length} towns. Each combination has its own page, written
            for that town — its weather, its houses and its building department.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {allServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-card bg-white/5 px-6 py-4 font-semibold text-white ring-1 ring-white/10 transition hover:bg-gold hover:text-ink hover:ring-gold"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Credentials />
      <WinterBand />
      <FinalCta />
    </div>
  );
}
