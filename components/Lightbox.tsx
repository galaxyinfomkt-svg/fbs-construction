'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Reveal } from './Reveal';
import { CloseIcon, ArrowRightIcon } from './icons';

export type LightboxImage = { src: string; alt: string; category?: string };

export function Lightbox({
  images,
  columns = 3,
  showCategory = false,
}: {
  images: LightboxImage[];
  columns?: 2 | 3 | 4;
  showCategory?: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
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

  const colClass =
    columns === 4
      ? 'sm:grid-cols-3 lg:grid-cols-4'
      : columns === 2
        ? 'sm:grid-cols-2'
        : 'sm:grid-cols-3';

  return (
    <>
      <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${colClass}`}>
        {images.map((item, i) => (
          <Reveal
            key={item.src + i}
            as="figure"
            variant="scale"
            delay={(i % 6) * 60}
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 shadow-card"
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="absolute inset-0 z-10 cursor-zoom-in"
              aria-label={`View larger: ${item.alt}`}
            />
            <Image
              src={item.src}
              alt={item.alt}
              width={700}
              height={525}
              sizes="(max-width: 640px) 50vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {showCategory && item.category ? (
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-charcoal">
                  {item.category}
                </span>
              ) : (
                <span className="text-xs font-bold uppercase tracking-wide text-white/90">
                  Click to enlarge
                </span>
              )}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal">
                <ArrowRightIcon className="h-4 w-4 -rotate-45" />
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      {active !== null && images[active] && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm"
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
            aria-label="Previous image"
          >
            <ArrowRightIcon className="h-6 w-6 rotate-180" />
          </button>
          <figure className="relative max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[active].src}
              alt={images[active].alt}
              width={1400}
              height={1050}
              className="mx-auto max-h-[85vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {images[active].category && (
                <span className="font-bold text-gold">{images[active].category} · </span>
              )}
              {images[active].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-charcoal sm:right-6"
            aria-label="Next image"
          >
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
