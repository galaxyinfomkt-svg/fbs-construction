import { ClipboardTextIcon, RulerIcon, StampIcon, KeyIcon } from '@phosphor-icons/react/ssr';
import { process } from '@/lib/home';
import { Rise } from './Rise';

const icons = [RulerIcon, ClipboardTextIcon, StampIcon, KeyIcon];

// Horizontal timeline on desktop, vertical rail on mobile. The step verb is the label.
export function ProcessTimeline() {
  return (
    <section className="border-y border-line bg-paper py-20 font-geist sm:py-24">
      <div className="container-x">
        <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">{process.title}</h2>

        <ol className="relative mt-14 grid gap-10 border-l border-line pl-8 md:grid-cols-4 md:gap-8 md:border-l-0 md:border-t md:pl-0 md:pt-0">
          {process.steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <Rise as="li" key={s.title} delay={i * 0.08} className="relative md:pt-10">
                <span className="absolute -left-[3.05rem] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-ink text-gold md:-top-[1.15rem] md:left-0">
                  <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink">{s.title}</h3>
                <p className="mt-2 max-w-[30ch] leading-relaxed text-ink-muted">{s.text}</p>
              </Rise>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
