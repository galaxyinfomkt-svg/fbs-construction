import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { PhoneIcon, ArrowRightIcon, ShieldIcon } from './icons';
import { LeadForm } from './LeadForm';

type Crumb = { label: string; href?: string };

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  crumbs,
  showCtas = true,
  showForm = true,
}: {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  crumbs: Crumb[];
  showCtas?: boolean;
  showForm?: boolean;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <Image
        src={image}
        alt={imageAlt || title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />

      <div
        className={`container-x relative z-10 grid items-center gap-10 ${
          showForm ? 'lg:grid-cols-[1fr_27rem]' : ''
        }`}
      >
        <div>
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
              {showForm ? (
                <a href="#get-estimate" className="btn-primary shine">
                  Get Free Estimate
                  <ArrowRightIcon className="h-5 w-5" />
                </a>
              ) : (
                <Link href="/contact" className="btn-primary shine">
                  Get Free Estimate
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              )}
              <a href={`tel:${site.phoneRaw}`} className="btn-outline">
                <PhoneIcon className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
          )}
        </div>

        {showForm && (
          <div
            id="get-estimate"
            className="animate-fadeUp scroll-mt-32"
            style={{ animationDelay: '200ms' }}
          >
            <div className="relative">
              <div
                className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-gold/40 to-gold/0 blur-xl"
                aria-hidden
              />
              <div className="rounded-2xl border border-white/15 bg-white/95 p-5 shadow-2xl backdrop-blur-md sm:p-6">
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                  Get Your Free Estimate
                </h2>
                <div className="mt-3">
                  <LeadForm />
                </div>
                <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-[11px] text-gray-400">
                  <ShieldIcon className="h-3.5 w-3.5" />
                  Licensed &amp; insured · Your info stays private
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
