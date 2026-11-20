'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { PhoneIcon, ArrowDownIcon } from '@phosphor-icons/react';
import { site } from '@/lib/site';
import { hero } from '@/lib/home';

const ease = [0.16, 1, 0.3, 1] as const;
const SLIDE_MS = 6500;

/**
 * Centered hero over a slideshow of real FBS jobs.
 *
 * Slides cross-fade while each one settles from a slow zoom (Ken Burns), so
 * the background is always moving a little without ever cutting. The bars at
 * the bottom show the timing and let people pick a photo. Under reduced
 * motion the photos still change, as a slow cross-fade with no zoom: a fade
 * is not the kind of movement that setting is meant to stop, and on many
 * Windows machines it is on by default, which would freeze the slideshow.
 *
 * The headline words rise into place; they are never hidden (no opacity 0,
 * no blur), so the H1 is readable in the server HTML and before hydration.
 */
type HomeHeroProps = {
  /** City and service pages reuse this hero with their own words. */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cta?: string;
  /** Set false on inner pages so the home page keeps the only H1 that matters. */
  ariaLabel?: string;
};

export function HomeHero({ eyebrow, title, subtitle, cta, ariaLabel }: HomeHeroProps = {}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const slides = hero.slides;
  const copy = {
    eyebrow: eyebrow ?? hero.eyebrow,
    title: title ?? hero.title,
    subtitle: subtitle ?? hero.subtitle,
    cta: cta ?? hero.cta,
  };

  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, slides.length]);

  const words = copy.title.split(' ');
  // Always the same props on server and client: a conditional on `reduce`
  // here left the server's starting style stuck on screen once hydration
  // decided not to animate. A short rise in place is fine for everyone; under
  // reduced motion it simply runs instantly.
  const rise = (delay: number) => ({
    initial: { y: 18 },
    animate: { y: 0 },
    transition: reduce ? { duration: 0 } : { duration: 0.9, delay, ease },
  });

  const slide = slides[index];

  return (
    <section
      id="home"
      aria-label={ariaLabel ?? 'FBS Construction home additions and remodeling'}
      className="relative isolate flex min-h-[100dvh] items-center justify-center overflow-hidden bg-ink font-geist text-white"
    >
      {/* Slideshow */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0 will-change-transform"
              initial={reduce ? false : { scale: 1.14 }}
              animate={{ scale: 1 }}
              transition={{ duration: (SLIDE_MS + 1600) / 1000, ease: 'linear' }}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: slide.focus }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Veil: darkest behind the centered copy, lighter at the edges so the
          houses still read, and fading to ink at the bottom into the next section. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(18,20,23,0.84)_0%,rgba(18,20,23,0.62)_55%,rgba(18,20,23,0.4)_100%)]"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink to-transparent" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-ink/70 to-transparent" />

      <div className="container-x relative flex flex-col items-center pb-32 pt-36 text-center sm:pt-40">
        <motion.p
          {...rise(0)}
          className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-gold ring-1 ring-white/15 backdrop-blur-md"
        >
          {copy.eyebrow}
        </motion.p>

        <h1 className="mt-7 max-w-[15ch] text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.04em] [text-shadow:0_2px_30px_rgba(0,0,0,0.35)] sm:max-w-[16ch] sm:text-7xl lg:text-[5.5rem]">
          {words.map((w, i) => (
            <motion.span key={`${w}-${i}`} {...rise(0.12 + i * 0.06)} className="inline-block whitespace-pre">
              {w}
              {i < words.length - 1 ? ' ' : ''}
            </motion.span>
          ))}
        </h1>

        <motion.p
          {...rise(0.12 + words.length * 0.06)}
          className="mt-7 max-w-[40rem] text-lg leading-relaxed text-white/85 [text-shadow:0_1px_16px_rgba(0,0,0,0.6)] sm:text-xl"
        >
          {copy.subtitle}
        </motion.p>

        <motion.div
          {...rise(0.25 + words.length * 0.06)}
          className="mt-11 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
        >
          <a
            href="#estimate"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-10 py-5 text-lg font-semibold text-ink shadow-[0_18px_50px_-18px_rgba(225,187,55,0.75)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold-light active:scale-[0.98] sm:w-auto"
          >
            {copy.cta}
            <ArrowDownIcon aria-hidden weight="bold" className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white/10 px-9 py-5 text-lg font-semibold text-white ring-1 ring-white/30 backdrop-blur-md transition hover:bg-white/20 hover:ring-white/60 active:scale-[0.98] sm:w-auto"
          >
            <PhoneIcon aria-hidden weight="fill" className="h-5 w-5 text-gold" />
            {site.phone}
          </a>
        </motion.div>
      </div>

      {/* Slide timing / picker */}
      {(
        <div className="absolute inset-x-0 bottom-9 flex justify-center gap-2.5">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}: ${s.alt}`}
              aria-current={i === index}
              className="group relative h-6 w-10 sm:w-14"
            >
              <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/25 transition group-hover:bg-white/40">
                {i === index && (
                  <motion.span
                    key={index}
                    className="absolute inset-y-0 left-0 rounded-full bg-gold"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
                  />
                )}
                {i < index && <span className="absolute inset-0 rounded-full bg-white/70" />}
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
