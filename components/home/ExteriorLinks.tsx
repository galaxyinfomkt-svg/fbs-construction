import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@phosphor-icons/react/ssr';
import { services } from '@/lib/site';
import { exteriorIntro } from '@/lib/home';

// Secondary services as a compact 2x2 link list into the existing pages (URLs unchanged).
export function ExteriorLinks() {
  return (
    <section id="services" className="scroll-mt-28 bg-paper py-20 font-geist sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl">{exteriorIntro.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{exteriorIntro.text}</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex items-center gap-4 rounded-card bg-white p-3 pr-5 ring-1 ring-line transition hover:ring-ink/30"
              >
                <span className="relative h-20 w-24 shrink-0 overflow-hidden rounded-[14px]">
                  <Image src={s.image} alt={s.imageAlt} fill sizes="96px" className="object-cover" />
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-semibold text-ink">{s.title}</span>
                  <span className="mt-0.5 block text-sm leading-snug text-ink-muted">{s.short}</span>
                </span>
                <ArrowRightIcon aria-hidden className="h-5 w-5 shrink-0 text-ink/40 transition group-hover:translate-x-1 group-hover:text-ink" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
