import Image from 'next/image';
import { site } from '@/lib/site';
import { HeroForm } from '../HeroForm';
import { PhoneIcon, ArrowRightIcon, StarIcon, ShieldIcon, CheckIcon } from '../icons';

const badges = ['Siding', 'Windows', 'Doors', 'Decks'];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-front.webp"
          alt="Beautifully renovated home exterior with new siding by FBS Construction in Massachusetts"
          fill
          priority
          sizes="100vw"
          className="animate-slowZoom object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />

      <div className="container-x relative z-10 grid items-center gap-12 py-28 pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:py-32 lg:pt-40">
        {/* Left: copy + CTAs */}
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 animate-fadeUp">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold ring-1 ring-gold/30">
              <ShieldIcon className="h-4 w-4" /> Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90">
              <span className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              5.0 · {site.rating.count}+ reviews
            </span>
          </div>

          <h1
            className="font-display text-5xl font-bold uppercase leading-[1.04] tracking-tight text-white animate-fadeUp sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            Premium Home
            <span className="mt-1 block bg-gradient-to-r from-gold via-gold-light to-gold-dark bg-clip-text text-transparent">
              Exterior Solutions
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 animate-fadeUp"
            style={{ animationDelay: '160ms' }}
          >
            Expert <strong className="font-semibold text-white">siding</strong>,{' '}
            <strong className="font-semibold text-white">window</strong>,{' '}
            <strong className="font-semibold text-white">door</strong> &amp;{' '}
            <strong className="font-semibold text-white">deck</strong> installation across
            Massachusetts &amp; New England — backed by {site.yearsExperience} years of craftsmanship
            and a 100% satisfaction guarantee.
          </p>

          {/* Service pills */}
          <div
            className="mt-6 flex flex-wrap gap-2.5 animate-fadeUp"
            style={{ animationDelay: '220ms' }}
          >
            {badges.map((b) => (
              <a
                key={b}
                href="#services"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur transition-all hover:border-gold/60 hover:bg-gold/10 hover:text-white"
              >
                <CheckIcon className="h-3.5 w-3.5 text-gold" />
                {b}
              </a>
            ))}
          </div>

          <div
            className="mt-9 flex flex-col gap-4 sm:flex-row animate-fadeUp"
            style={{ animationDelay: '300ms' }}
          >
            <a href="#contact" className="btn-primary shine text-base">
              Get Free Estimate
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a href={`tel:${site.phoneRaw}`} className="btn-outline text-base">
              <PhoneIcon className="h-5 w-5" />
              {site.phone}
            </a>
          </div>

          <dl
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8 animate-fadeUp"
            style={{ animationDelay: '380ms' }}
          >
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

        {/* Right: estimate form */}
        <div className="animate-fadeUp lg:pl-4" style={{ animationDelay: '240ms' }}>
          <HeroForm />
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/60 transition-colors hover:text-gold lg:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border-2 border-current pt-1.5">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-current" />
        </span>
      </a>
    </section>
  );
}
