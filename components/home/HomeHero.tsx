'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { PhoneIcon, ArrowDownRightIcon } from '@phosphor-icons/react';
import { site } from '@/lib/site';
import { hero } from '@/lib/home';
import { LeadForm } from '@/components/LeadForm';

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Hero with the job photo as the background, behind the headline, the copy and
 * the estimate form — the pattern used on Ofir, JL Masonry and YellowStone.
 *
 * The veil over the photo is two layers, not one flat fill: a light base wash
 * everywhere, plus a gradient that concentrates the darkness only where white
 * text actually sits. Opacities compose multiplicatively, so the numbers read
 * lighter than a single value would. The point is that the photo of the work
 * stays visible — on a contractor site the photo is the argument.
 */
export function HomeHero() {
  const reduce = useReducedMotion();

  const intro = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.06 * i, ease },
        };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[86dvh] items-center overflow-hidden bg-ink font-geist text-white"
    >
      {/* The photo of the real job, full bleed behind everything. */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-20 will-change-transform"
        {...(reduce
          ? {}
          : { initial: { scale: 1.06 }, animate: { scale: 1 }, transition: { duration: 1.8, ease } })}
      >
        {/* On a phone the hero is twice as tall as it is wide, so the photo
            lands as a narrow centre slice: mostly sky. A small zoom pushes the
            siding and the entrance into that slice instead. */}
        <div className="absolute inset-0 scale-[1.3] sm:scale-100">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_42%]"
          />
        </div>
      </motion.div>

      {/* Base wash: light enough that the siding, roof and garage still read. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/25" />
      {/* Stacked copy on phones reads over a bottom-up veil; from lg the copy
          sits on the left and the form on the right, so the veil runs sideways. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/55 via-65% to-ink/20 lg:bg-gradient-to-r lg:from-ink/85 lg:via-ink/55 lg:via-60% lg:to-ink/15"
      />

      <div className="container-x grid w-full gap-12 pb-20 pt-32 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-24 lg:pt-40">
        <div className="lg:col-span-7 lg:pr-6">
          <motion.p {...intro(0)} className="text-sm font-medium text-gold">
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...intro(1)}
            className="mt-5 text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.035em] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-[4.25rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            {...intro(2)}
            className="mt-6 max-w-[34rem] text-lg leading-relaxed text-white/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]"
          >
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
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink/30 px-6 py-4 text-base font-medium text-white ring-1 ring-white/40 backdrop-blur-sm transition hover:bg-ink/50 hover:ring-white/70 active:scale-[0.98]"
            >
              See our work
              <ArrowDownRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden />
            </a>
          </motion.div>
        </div>

        <motion.div
          {...(reduce
            ? {}
            : { initial: { opacity: 0, y: 36 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: 0.18, ease } })}
          id="estimate"
          className="scroll-mt-32 lg:col-span-5"
        >
          {/* No card: the heading and the form sit straight on the photo. */}
          <div className="text-white">
            <h2 className="text-2xl font-semibold tracking-tight [text-shadow:0_2px_18px_rgba(0,0,0,0.6)]">
              {hero.formTitle}
            </h2>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-white/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
              {hero.formNote}
            </p>
            <LeadForm className="mt-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
