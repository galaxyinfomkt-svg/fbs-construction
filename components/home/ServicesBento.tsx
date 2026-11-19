import Image from 'next/image';
import { ArrowUpRightIcon } from '@phosphor-icons/react/ssr';
import { homeServices, servicesIntro } from '@/lib/home';
import { HomeIcon } from './HomeIcon';
import { Rise } from './Rise';

/**
 * Eight services, eight cells. Home Additions is the anchor tile (2x2, real
 * FBS framing photo); Interior Remodeling gets the brand gold; the rest are
 * text tiles on two neutral tints. No stock photography for services FBS has
 * not photographed yet (client rule).
 *
 * Desktop grid (4 cols):  [ Additions 2x2 ][ Interior 2x1 ]
 *                         [               ][ Kitchen ][ Bath ]
 *                         [ Basement ][ Sunroom ][ Porch ][ Deck roof ]
 * Mobile: single column, Additions first.
 * Service pages are scheduled (24/11 to 08/12); until then every tile opens
 * the estimate form instead of a 404.
 */
const cellClass: Record<string, string> = {
  'home-additions': 'sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[22rem] text-white',
  'interior-remodeling': 'sm:col-span-2 lg:col-span-2 bg-gold text-ink',
  'kitchen-remodeling': 'bg-white text-ink ring-1 ring-line',
  'bathroom-remodeling': 'bg-white text-ink ring-1 ring-line',
  'basement-finishing': 'bg-ink text-white',
  sunrooms: 'bg-white text-ink ring-1 ring-line',
  'screen-porches': 'bg-white text-ink ring-1 ring-line',
  'deck-roofs': 'bg-ink-soft text-white',
};

export function ServicesBento() {
  return (
    <section id="remodeling" className="scroll-mt-28 bg-paper py-20 font-geist sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-gold-dark">{servicesIntro.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
            {servicesIntro.title}
          </h2>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink-muted">{servicesIntro.text}</p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(13rem,auto)] lg:grid-cols-4">
          {homeServices.map((s, i) => {
            const feature = 'feature' in s && s.feature;
            return (
              <Rise as="li" key={s.slug} delay={i * 0.04} className={`relative isolate overflow-hidden rounded-card ${cellClass[s.slug]}`}>
                <a
                  href="#estimate"
                  aria-label={`Request a free estimate for ${s.title}`}
                  className="group flex h-full flex-col p-7 outline-none focus-visible:ring-4 focus-visible:ring-gold/50"
                >
                  {feature && (
                    <>
                      <Image
                        src="/images/project-board-batten.webp"
                        alt="Second-floor framing and new windows on an FBS Construction job"
                        fill
                        sizes="(min-width: 1024px) 600px, 100vw"
                        className="-z-10 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/5" />
                    </>
                  )}
                  <div className="flex items-start justify-between">
                    <HomeIcon name={s.icon} className={`h-8 w-8 ${feature ? 'text-gold' : ''}`} />
                    <ArrowUpRightIcon
                      aria-hidden
                      className="h-5 w-5 opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </div>
                  <div className="mt-auto pt-10">
                    <h3 className={`font-semibold tracking-[-0.02em] ${feature ? 'text-3xl sm:text-4xl' : 'text-xl'}`}>{s.title}</h3>
                    <p
                      className={`mt-2 leading-relaxed ${feature ? 'max-w-md text-base text-white/80' : 'text-[0.95rem] opacity-75'}`}
                    >
                      {s.text}
                    </p>
                  </div>
                </a>
              </Rise>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
