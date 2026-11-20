import { PhoneIcon, CheckCircleIcon } from '@phosphor-icons/react/ssr';
import { site } from '@/lib/site';
import { quote } from '@/lib/home';
import { LeadForm } from '@/components/LeadForm';

// The form, directly under the hero. The hero's main button scrolls here.
export function QuoteSection() {
  return (
    <section id="estimate" className="scroll-mt-28 bg-ink pb-20 font-geist text-white sm:pb-28">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5 lg:pt-6">
          <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.035em] sm:text-5xl">{quote.title}</h2>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-white/70">{quote.text}</p>
          <ol className="mt-9 space-y-4">
            {quote.steps.map((s) => (
              <li key={s} className="flex items-center gap-3 text-[1.05rem] text-white/90">
                <CheckCircleIcon aria-hidden weight="fill" className="h-6 w-6 shrink-0 text-gold" />
                {s}
              </li>
            ))}
          </ol>
          <a
            href={`tel:${site.phoneRaw}`}
            className="mt-10 inline-flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white transition hover:text-gold"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink">
              <PhoneIcon aria-hidden weight="fill" className="h-5 w-5" />
            </span>
            {site.phone}
          </a>
        </div>
        <div className="lg:col-span-7">
          <div className="mx-auto max-w-[36rem] rounded-card bg-white p-4 text-ink shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)] sm:p-6">
            <LeadForm instance="top" />
          </div>
        </div>
      </div>
    </section>
  );
}
