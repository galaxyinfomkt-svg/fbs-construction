import Image from 'next/image';
import { site } from '@/lib/site';
import { PhoneIcon, ArrowRightIcon, StarIcon, ShieldIcon } from '../icons';

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src="/images/hero-front.webp"
        alt="Beautifully renovated home exterior with new siding by FBS Construction in Massachusetts"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/30" />

      <div className="container-x relative z-10 py-32 pt-40">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 animate-fadeUp">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold ring-1 ring-gold/30">
              <ShieldIcon className="h-4 w-4" /> Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-white/90">
              <span className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              5.0 Google Rating
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl animate-fadeUp">
            Premium Home
            <span className="block text-gold">Exterior Solutions</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 animate-fadeUp">
            Transform your home with expert <strong className="font-semibold text-white">siding</strong>,{' '}
            <strong className="font-semibold text-white">window</strong>,{' '}
            <strong className="font-semibold text-white">door</strong> and{' '}
            <strong className="font-semibold text-white">deck</strong> installation. Serving
            Massachusetts &amp; New England with {site.yearsExperience} years of trusted craftsmanship.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row animate-fadeUp">
            <a href="#contact" className="btn-primary text-base">
              Get Free Estimate
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a href={`tel:${site.phoneRaw}`} className="btn-outline text-base">
              <PhoneIcon className="h-5 w-5" />
              {site.phone}
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8 animate-fadeUp">
            {site.stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-gold sm:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-white/70">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
