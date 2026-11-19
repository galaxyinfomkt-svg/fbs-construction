'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { PhoneIcon, ArrowDownRightIcon } from '@phosphor-icons/react';
import { site } from '@/lib/site';
import { hero } from '@/lib/home';
import { LeadForm } from '@/components/LeadForm';

const ease = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const reduce = useReducedMotion();
  const panoRef = useRef<HTMLDivElement>(null);
  // The panorama settles from a slight zoom to full frame as it scrolls into
  // view: it tells the eye "this is the real work" right after the pitch.
  const { scrollYProgress } = useScroll({ target: panoRef, offset: ['start end', 'center center'] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.08, 1]);

  const intro = (i: number) =>
    reduce
      ? {}
      : {
          initial: { y: 22 },
          animate: { y: 0 },
          transition: { duration: 0.8, delay: 0.06 * i, ease },
        };

  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink font-geist text-white">
      {/* Soft gold light behind the form: tinted, no hard glow. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-[38rem] w-[38rem] rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="container-x grid gap-12 pb-16 pt-32 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-20 lg:pt-40">
        <div className="lg:col-span-7 lg:pr-6">
          <motion.p {...intro(0)} className="text-sm font-medium text-gold">
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...intro(1)}
            className="mt-5 text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p {...intro(2)} className="mt-6 max-w-[34rem] text-lg leading-relaxed text-white/70">
            {hero.subtitle}
          </motion.p>

          <motion.div {...intro(3)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-base font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold-light active:scale-[0.98]"
            >
              <PhoneIcon className="h-5 w-5" weight="fill" aria-hidden />
              Call {site.phone}
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-medium text-white ring-1 ring-white/25 transition hover:ring-white/60 active:scale-[0.98]"
            >
              See our work
              <ArrowDownRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden />
            </a>
          </motion.div>
        </div>

        <motion.div
          {...(reduce
            ? {}
            : { initial: { y: 36 }, animate: { y: 0 }, transition: { duration: 0.9, delay: 0.18, ease } })}
          id="estimate"
          className="scroll-mt-32 lg:col-span-5"
        >
          <div className="rounded-card bg-white p-5 text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-7">
            <h2 className="text-2xl font-semibold tracking-tight">{hero.formTitle}</h2>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-muted">{hero.formNote}</p>
            <LeadForm className="mt-4" />
          </div>
        </motion.div>
      </div>

      {/* Panorama of a real FBS job, full width under the pitch. */}
      <div ref={panoRef} className="container-x pb-6 lg:pb-10">
        <div className="relative aspect-[4/3] overflow-hidden rounded-card sm:aspect-[16/9] lg:aspect-[21/8]">
          <motion.div style={{ scale }} className="absolute inset-0 will-change-transform">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover object-[50%_38%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
