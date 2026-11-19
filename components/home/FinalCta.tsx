import { PhoneIcon, EnvelopeSimpleIcon, ClockIcon } from '@phosphor-icons/react/ssr';
import { site } from '@/lib/site';
import { finalCta, hoursText } from '@/lib/home';

// Closing block: the phone number as the biggest element, the form one click away.
export function FinalCta() {
  return (
    <section className="bg-ink py-20 font-geist text-white sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.035em] sm:text-6xl">{finalCta.title}</h2>
          <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-white/70">{finalCta.text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-base font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <PhoneIcon aria-hidden weight="fill" className="h-5 w-5" />
              Call {site.phone}
            </a>
            <a
              href="#estimate"
              className="inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-medium ring-1 ring-white/25 transition hover:ring-white/60 active:scale-[0.98]"
            >
              Get a free estimate
            </a>
          </div>
        </div>
        <dl className="space-y-6 border-t border-white/10 pt-8 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <div className="flex gap-3">
            <EnvelopeSimpleIcon aria-hidden className="mt-0.5 h-5 w-5 text-gold" />
            <div>
              <dt className="text-sm text-white/55">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="font-medium hover:text-gold">
                  {site.email}
                </a>
              </dd>
            </div>
          </div>
          <div className="flex gap-3">
            <ClockIcon aria-hidden className="mt-0.5 h-5 w-5 text-gold" />
            <div>
              <dt className="text-sm text-white/55">Hours</dt>
              <dd className="font-medium">{hoursText}</dd>
            </div>
          </div>
          <div>
            <dt className="text-sm text-white/55">Massachusetts licenses</dt>
            <dd className="mt-1 font-medium">
              CSL {site.licenses.csl}, HIC {site.licenses.hic}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
