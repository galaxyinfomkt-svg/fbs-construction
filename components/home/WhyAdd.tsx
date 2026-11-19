import Image from 'next/image';
import { whyAdd } from '@/lib/home';
import { HomeIcon } from './HomeIcon';
import { Rise } from './Rise';

// Split: real photo of a new wing on the left, the three reasons on the right.
export function WhyAdd() {
  return (
    <section className="bg-white py-20 font-geist sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Rise className="relative aspect-[4/5] overflow-hidden rounded-card lg:col-span-5">
          <Image
            src={whyAdd.image.src}
            alt={whyAdd.image.alt}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </Rise>

        <div className="lg:col-span-7">
          <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
            {whyAdd.title}
          </h2>
          <ul className="mt-12 space-y-10">
            {whyAdd.points.map((p, i) => (
              <Rise as="li" key={p.title} delay={i * 0.06} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paper text-gold-dark">
                  <HomeIcon name={p.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink">{p.title}</h3>
                  <p className="mt-2 max-w-[56ch] leading-relaxed text-ink-muted">{p.text}</p>
                </div>
              </Rise>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
