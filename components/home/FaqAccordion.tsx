import { PlusIcon } from '@phosphor-icons/react/ssr';
import { faqIntro, homeFaqs } from '@/lib/home';

// Native <details> accordion: works without JS, every answer is in the HTML for crawlers.
export function FaqAccordion() {
  return (
    <section id="faq" className="scroll-mt-28 bg-paper py-20 font-geist sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-sm font-medium text-gold-dark">{faqIntro.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">{faqIntro.title}</h2>
        </div>
        <div className="space-y-3 lg:col-span-8">
          {homeFaqs.map((f, i) => (
            <details key={f.question} className="group rounded-card bg-white ring-1 ring-line open:ring-ink/20" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <h3>{f.question}</h3>
                <PlusIcon aria-hidden className="h-5 w-5 shrink-0 text-gold-dark transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="max-w-[65ch] px-6 pb-6 leading-relaxed text-ink-muted">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
