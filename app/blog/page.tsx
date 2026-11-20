import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Geist } from 'next/font/google';
import { site } from '@/lib/site';
import { postsByDate } from '@/lib/blog';
import { HomeHero } from '@/components/home/HomeHero';
import { QuoteSection } from '@/components/home/QuoteSection';
import { Credentials } from '@/components/home/Credentials';
import { WinterBand } from '@/components/home/WinterBand';
import { FinalCta } from '@/components/home/FinalCta';

const geist = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-geist' });

export const metadata: Metadata = {
  title: { absolute: `Additions & Remodeling Advice for Massachusetts Homeowners | ${site.name}` },
  description:
    'Straight answers on additions, kitchens, baths, basements and permits in Massachusetts — what things cost, how long they take, and what to ask before you hire anyone.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    url: `${site.url}/blog`,
    siteName: site.name,
    title: `Advice for Massachusetts homeowners | ${site.name}`,
    description: 'Additions, remodeling and permits in Massachusetts, explained by a licensed builder.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: `${site.name} blog` }],
  },
};

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export default function BlogIndexPage() {
  const [lead, ...rest] = postsByDate;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${site.url}/blog#blog`,
        url: `${site.url}/blog`,
        name: `${site.name} — advice for Massachusetts homeowners`,
        inLanguage: 'en-US',
        publisher: { '@id': `${site.url}/#business` },
        blogPost: postsByDate.map((p) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          url: `${site.url}/blog/${p.slug}`,
          datePublished: p.date,
          description: p.excerpt,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` },
        ],
      },
    ],
  };

  return (
    <div className={geist.variable}>
      <HomeHero
        eyebrow="Licensed MA builder · plain answers"
        title="What we tell homeowners before they hire anyone"
        subtitle="Costs, schedules, permits and the questions worth asking — written for Massachusetts houses, by the people who work on them."
        ariaLabel="FBS Construction advice for Massachusetts homeowners"
      />

      <QuoteSection
        title="Rather just ask us?"
        text="Send the form or call. No sales pitch — we will tell you what your project involves."
        instance="blog"
      />

      {/* Lead post */}
      <section className="bg-white py-20 font-geist sm:py-24">
        <div className="container-x">
          <Link
            href={`/blog/${lead.slug}`}
            className="group grid gap-8 overflow-hidden rounded-card border border-gray-200 transition hover:border-gold lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] bg-ink lg:aspect-auto lg:min-h-[22rem]">
              <Image
                src={lead.heroImage}
                alt={lead.heroAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">{lead.category}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl">
                {lead.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">{lead.excerpt}</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink-muted">
                {formatDate(lead.date)} · {lead.readTime}
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* The rest */}
      <section className="bg-paper py-20 font-geist sm:py-24">
        <div className="container-x">
          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
            More reading
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-card border border-gray-200 bg-white transition hover:border-gold hover:shadow-[0_30px_80px_-50px_rgba(0,0,0,0.55)]"
              >
                <div className="relative aspect-[16/10] bg-ink">
                  <Image
                    src={p.heroImage}
                    alt={p.heroAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug text-ink">{p.title}</h3>
                  <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-gray-600">{p.excerpt}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-ink-muted">
                    {formatDate(p.date)} · {p.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Credentials />
      <WinterBand />
      <FinalCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
