import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Geist } from 'next/font/google';
import { ArrowRightIcon } from '@phosphor-icons/react/ssr';
import { site } from '@/lib/site';
import { blogPosts, postsByDate, getPost } from '@/lib/blog';
import { getService } from '@/lib/all-services';
import { coreCities } from '@/lib/cities';
import { HomeHero } from '@/components/home/HomeHero';
import { QuoteSection } from '@/components/home/QuoteSection';
import { Credentials } from '@/components/home/Credentials';
import { WinterBand } from '@/components/home/WinterBand';
import { FinalCta } from '@/components/home/FinalCta';
import { Prose } from '@/components/Prose';

const geist = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-geist' });

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: { absolute: `${post.title} | ${site.name}` },
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      url: `${site.url}/blog/${post.slug}`,
      siteName: site.name,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: post.heroImage, width: 1400, height: 1050, alt: post.heroAlt }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const service = getService(post.relatedService);
  const more = postsByDate.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `${site.url}/blog/${post.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#post`,
        url,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'en-US',
        image: `${site.url}${post.heroImage}`,
        author: { '@id': `${site.url}/#business` },
        publisher: { '@id': `${site.url}/#business` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${url}#webpage` },
        articleSection: post.category,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className={geist.variable}>
      <HomeHero
        eyebrow={`${post.category} · ${post.readTime}`}
        title={post.title}
        subtitle={post.excerpt}
        ariaLabel={post.title}
      />

      <QuoteSection
        title="Thinking about it for your house?"
        text="Send the form or call. We will look at the house and tell you what it actually involves."
        instance={`post-${post.slug}`}
      />

      {/* Hero image */}
      <section className="bg-white pt-16 font-geist sm:pt-20">
        <div className="container-x">
          <figure className="overflow-hidden rounded-card bg-ink">
            <div className="relative aspect-[16/9]">
              <Image src={post.heroImage} alt={post.heroAlt} fill sizes="100vw" className="object-cover" priority />
            </div>
          </figure>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-ink-muted">
            {formatDate(post.date)} · {post.readTime} · {site.name}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-14 font-geist sm:py-16">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <Prose blocks={post.content} />
          </article>

          <aside className="space-y-8 lg:col-span-4">
            {service && (
              <div className="rounded-card bg-ink p-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">The service</p>
                <h2 className="mt-3 text-xl font-semibold leading-snug">{service.title}</h2>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-white/70">{service.short}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="group mt-6 inline-flex items-center gap-2 font-semibold text-gold"
                >
                  See the page
                  <ArrowRightIcon aria-hidden weight="bold" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}

            <div className="rounded-card border border-gray-200 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Where we work</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {coreCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${c.slug}`}
                    className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-ink transition hover:border-gold hover:bg-paper"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/service-areas"
                className="mt-5 inline-block font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4"
              >
                All service areas
              </Link>
            </div>

            <div className="rounded-card border border-gray-200 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Licensed in MA</p>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-gray-600">
                Construction Supervisor Licence CS-117744 · Home Improvement Contractor 179686. Both are public
                records — look them up.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* More posts */}
      <section className="bg-paper py-20 font-geist sm:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
              More reading
            </h2>
            <Link href="/blog" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
              All articles
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group overflow-hidden rounded-card border border-gray-200 bg-white transition hover:border-gold"
              >
                <div className="relative aspect-[16/10] bg-ink">
                  <Image
                    src={p.heroImage}
                    alt={p.heroAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">{p.category}</p>
                  <p className="mt-2 font-semibold leading-snug text-ink">{p.title}</p>
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
