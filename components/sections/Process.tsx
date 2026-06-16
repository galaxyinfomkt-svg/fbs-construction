import { Reveal } from '../Reveal';
import { site } from '@/lib/site';
import { PhoneIcon, ArrowRightIcon } from '../icons';

const steps = [
  {
    n: '01',
    title: 'Free Consultation',
    text: 'Call or request a quote online. We listen to your goals and schedule a visit at your convenience.',
  },
  {
    n: '02',
    title: 'Detailed Estimate',
    text: 'We assess your home and provide a clear, transparent, no-obligation estimate — no surprises.',
  },
  {
    n: '03',
    title: 'Expert Installation',
    text: 'Our skilled crew gets to work with premium materials, on schedule and respectful of your space.',
  },
  {
    n: '04',
    title: 'Final Walkthrough',
    text: 'We review everything together to make sure it’s flawless — guaranteed 100% satisfaction.',
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-white lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '34px 34px',
        }}
        aria-hidden
      />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-gold">How It Works</span>
          <h2 className="section-title mt-4 text-white">Your Project in 4 Simple Steps</h2>
          <p className="mt-5 text-lg text-white/70">
            A smooth, stress-free experience from first call to finished home.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 100}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.08]"
            >
              <span className="font-display text-5xl font-bold text-gold/30 transition-colors duration-300 group-hover:text-gold">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-white">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">{s.text}</p>
              {i < steps.length - 1 && (
                <ArrowRightIcon className="absolute -right-5 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-gold/40 lg:block" />
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" className="btn-primary shine text-base">
            Start Step 1 — Free Estimate
            <ArrowRightIcon className="h-5 w-5" />
          </a>
          <a href={`tel:${site.phoneRaw}`} className="btn-outline text-base">
            <PhoneIcon className="h-5 w-5" />
            {site.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
