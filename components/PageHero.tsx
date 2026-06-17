import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { PhoneIcon, ArrowRightIcon } from './icons';

type Crumb = { label: string; href?: string };

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  crumbs,
  showCtas = true,
}: {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  crumbs: Crumb[];
  showCtas?: boolean;
}) {
  return (
    <section className="relative flex min-h-[46vh] items-center overflow-hidden pt-28 md:min-h-[52vh] md:pt-36">
      <Image
        src={image}
        alt={imageAlt || title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />

      <div className="container-x relative z-10 pb-12">
        <nav aria-label="Breadcrumb" className="mb-4 animate-fadeUp">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-gold">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="text-white/30">/</span>}
              </li>
            ))}
          </ol>
        </nav>
        <h1
          className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white animate-fadeUp sm:text-5xl lg:text-6xl"
          style={{ animationDelay: '80ms' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-4 max-w-2xl text-lg text-white/85 animate-fadeUp"
            style={{ animationDelay: '160ms' }}
          >
            {subtitle}
          </p>
        )}
        {showCtas && (
          <div
            className="mt-7 flex flex-col gap-3 sm:flex-row animate-fadeUp"
            style={{ animationDelay: '240ms' }}
          >
            <Link href="/contact" className="btn-primary shine">
              Get Free Estimate
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <a href={`tel:${site.phoneRaw}`} className="btn-outline">
              <PhoneIcon className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
