'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gallery } from '@/lib/site';
import { Reveal } from '../Reveal';
import { CloseIcon, ArrowRightIcon } from '../icons';

const categories = ['All', ...Array.from(new Set(gallery.map((g) => g.category)))];

export function Gallery() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState<number | null>(null);

  const items = gallery.filter((g) => filter === 'All' || g.category === filter);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, next, prev]);

  return (
    <section id="gallery" className="bg-gray-50 py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title mt-4">Recent Projects &amp; Transformations</h2>
          <p className="mt-5 text-lg text-gray-600">
            Real homes across Massachusetts and New England. Tap any photo to take a closer look.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
                filter === c
                  ? 'bg-charcoal text-white shadow-md'
                  : 'bg-white text-charcoal ring-1 ring-gray-200 hover:bg-gold/10 hover:ring-gold/40'
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.src}
              as="figure"
              variant="scale"
              delay={(i % 6) * 60}
              className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 shadow-card"
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="absolute inset-0 z-10"
                aria-label={`View ${item.alt}`}
              />
              <Image
                src={item.src}
                alt={item.alt}
                width={700}
                height={525}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-charcoal">
                  {item.category}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal">
                  <ArrowRightIcon className="h-4 w-4 -rotate-45" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/contact" className="btn-dark text-base">
            Get a Look Like This — Free Estimate
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>

      {/* Lightbox */}
      {active !== null && items[active] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-charcoal sm:left-6"
            aria-label="Previous"
          >
            <ArrowRightIcon className="h-6 w-6 rotate-180" />
          </button>
          <figure className="relative max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={items[active].src}
              alt={items[active].alt}
              width={1400}
              height={1050}
              className="mx-auto max-h-[85vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              <span className="font-bold text-gold">{items[active].category}</span> ·{' '}
              {items[active].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-charcoal sm:right-6"
            aria-label="Next"
          >
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
