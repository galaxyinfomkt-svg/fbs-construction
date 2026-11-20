import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Geist } from 'next/font/google';
import { CheckCircleIcon, ArrowRightIcon } from '@phosphor-icons/react/ssr';
import { site } from '@/lib/site';
import { projects, getProject } from '@/lib/projects';
import { getService } from '@/lib/all-services';
import { HomeHero } from '@/components/home/HomeHero';
import { QuoteSection } from '@/components/home/QuoteSection';
import { Credentials } from '@/components/home/Credentials';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { WinterBand } from '@/components/home/WinterBand';
import { FinalCta } from '@/components/home/FinalCta';

const geist = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-geist' });

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: { absolute: `${project.title} | ${site.name}` },
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: 'article',
      url: `${site.url}/projects/${project.slug}`,
      siteName: site.name,
      title: project.title,
      description: project.summary,
      images: [{ url: project.photos[0].src, width: 1400, height: 1050, alt: project.photos[0].alt }],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const service = getService(project.service);
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const url = `${site.url}/projects/${project.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: project.title,
        description: project.summary,
        inLanguage: 'en-US',
        about: { '@id': `${site.url}/#business` },
        primaryImageOfPage: { '@type': 'ImageObject', url: `${site.url}${project.photos[0].src}` },
      },
      {
        '@type': 'Service',
        name: service?.title ?? project.category,
        provider: { '@id': `${site.url}/#business` },
        areaServed: { '@type': 'AdministrativeArea', name: project.area },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${site.url}/projects` },
          { '@type': 'ListItem', position: 3, name: project.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className={geist.variable}>
      <HomeHero
        eyebrow={`${project.category} · ${project.area}`}
        title={project.title}
        subtitle={project.summary}
        ariaLabel={project.title}
      />

      <QuoteSection
        title="Free quote on work like this"
        text={`This job ran ${project.duration.toLowerCase()}. Send the form or call and we will come look at yours.`}
        instance={`project-${project.slug}`}
      />

      {/* Spec strip */}
      <section className="bg-paper py-14 font-geist sm:py-16">
        <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {project.specs.map((s) => (
            <div key={s.label} className="border-l-2 border-gold pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">{s.label}</p>
              <p className="mt-2 text-[1.05rem] font-semibold leading-snug text-ink">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brief */}
      <section className="bg-white py-20 font-geist sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
              What they asked for
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-gray-700">{project.brief}</p>
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="bg-ink py-20 font-geist sm:py-24">
        <div className="container-x">
          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl">
            The job
          </h2>
          <div className={`mt-10 grid gap-6 ${project.photos.length > 1 ? 'sm:grid-cols-2' : ''}`}>
            {project.photos.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-card bg-white/5">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={project.photos.length > 1 ? '(max-width: 640px) 100vw, 50vw' : '100vw'}
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm leading-relaxed text-white/60">{photo.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Work done */}
      <section className="bg-white py-20 font-geist sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="max-w-[16ch] text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
              What we actually did
            </h2>
          </div>
          <ol className="space-y-5 lg:col-span-8">
            {project.work.map((step, i) => (
              <li key={i} className="flex gap-4">
                <CheckCircleIcon aria-hidden weight="fill" className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <p className="text-[1.05rem] leading-relaxed text-gray-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcome */}
      <section className="bg-paper py-20 font-geist sm:py-24">
        <div className="container-x">
          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
            How it came out
          </h2>
          <p className="mt-6 max-w-[70ch] text-xl leading-relaxed text-gray-700">{project.outcome}</p>
          {service && (
            <Link
              href={`/services/${service.slug}`}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-semibold text-white transition hover:bg-gold hover:text-ink"
            >
              More on {service.title.toLowerCase()}
              <ArrowRightIcon aria-hidden weight="bold" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </section>

      {/* More projects */}
      <section className="bg-white py-20 font-geist sm:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
              Other jobs
            </h2>
            <Link href="/projects" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
              See all projects
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group overflow-hidden rounded-card border border-gray-200 transition hover:border-gold"
              >
                <div className="relative aspect-[4/3] bg-ink">
                  <Image
                    src={p.photos[0].src}
                    alt={p.photos[0].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="px-5 py-5 font-semibold leading-snug text-ink">{p.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <Credentials />
      <WinterBand />
      <FinalCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
