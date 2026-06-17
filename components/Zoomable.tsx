'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CloseIcon } from './icons';

type ZoomableProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

export function Zoomable({
  src,
  alt,
  width = 1400,
  height = 1050,
  sizes,
  className = '',
  imgClassName = '',
  priority,
}: ZoomableProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative block w-full cursor-zoom-in overflow-hidden ${className}`}
        aria-label={`View larger: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className={`transition-transform duration-500 group-hover:scale-105 ${imgClassName}`}
        />
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/70 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
          <figure className="relative max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="mx-auto max-h-[85vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">{alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
