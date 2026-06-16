import { reviews, site } from '@/lib/site';
import { StarIcon, ArrowRightIcon } from '../icons';
import { Reveal } from '../Reveal';

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden
      />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-gold">Customer Reviews</span>
          <h2 className="section-title mt-4 text-white">Homeowners Love Working With Us</h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-6 w-6" />
              ))}
            </span>
            <span className="text-lg font-semibold text-white">
              {site.rating.value} · {site.rating.count}+ reviews
            </span>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              as="figure"
              delay={(i % 3) * 90}
              variant="scale"
              className="flex flex-col rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.08] hover:ring-gold/30"
            >
              <span className="flex text-gold">
                {[...Array(r.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </span>
              <blockquote className="mt-4 flex-1 leading-relaxed text-white/85">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-bold text-white">{r.name}</p>
                <p className="text-sm text-white/60">
                  {r.location} · {r.service}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base"
          >
            <StarIcon className="h-5 w-5" />
            Read More on Google
          </a>
          <a href="#contact" className="btn-primary shine text-base">
            Join Our Happy Customers
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
