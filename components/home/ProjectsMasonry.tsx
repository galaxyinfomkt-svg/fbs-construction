import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@phosphor-icons/react/ssr';
import { projects } from '@/lib/home';
import { Rise } from './Rise';

const aspect: Record<string, string> = {
  tall: 'aspect-[3/4]',
  wide: 'aspect-[4/3]',
  square: 'aspect-square',
};

// Masonry of real FBS job-site photos. No captions on the photos.
export function ProjectsMasonry() {
  return (
    <section id="projects" className="scroll-mt-28 bg-white py-20 font-geist sm:py-28">
      <div className="container-x">
        <p className="text-sm font-medium text-gold-dark">{projects.eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">{projects.title}</h2>
        <p className="mt-4 text-lg text-ink-muted">{projects.text}</p>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {projects.images.map((img, i) => (
            <Rise
              as="figure"
              key={img.src}
              delay={(i % 3) * 0.06}
              className={`relative mb-4 break-inside-avoid overflow-hidden rounded-card bg-paper ${aspect[img.shape]}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </Rise>
          ))}
        </div>

        <Link
          href="/gallery"
          className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-ink underline decoration-gold decoration-2 underline-offset-[6px] hover:decoration-ink"
        >
          View the full gallery
          <ArrowRightIcon aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
