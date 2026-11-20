import { SnowflakeIcon } from '@phosphor-icons/react/ssr';
import { winter } from '@/lib/home';

// Full-width gold band: the year-round message the client asked to lead with.
export function WinterBand() {
  return (
    <section className="bg-white pb-20 font-geist sm:pb-28">
      <div className="container-x">
        <div className="relative isolate overflow-hidden rounded-card bg-gold px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
          <SnowflakeIcon aria-hidden className="absolute -right-10 -top-10 -z-10 h-72 w-72 text-ink/[0.07]" />
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.75rem]">
                {winter.title}
              </h2>
              <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-ink/75">{winter.text}</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="#estimate"
                className="inline-flex items-center justify-center rounded-full bg-ink px-10 py-5 text-lg font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Get a free quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
