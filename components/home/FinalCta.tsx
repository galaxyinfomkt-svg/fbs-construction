import { PhoneIcon, EnvelopeSimpleIcon, ClockIcon, CertificateIcon } from '@phosphor-icons/react/ssr';
import { site } from '@/lib/site';
import { finalCta, hoursText } from '@/lib/home';
import { LeadForm } from '@/components/LeadForm';

// Closing block: second form at the end of the page, phone and contact details beside it.
export function FinalCta() {
  return (
    <section id="quote-bottom" className="scroll-mt-28 bg-ink py-20 font-geist text-white sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.035em] sm:text-6xl">{finalCta.title}</h2>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-white/70">{finalCta.text}</p>
          <a
            href={`tel:${site.phoneRaw}`}
            className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-10 py-5 text-lg font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold-light active:scale-[0.98] sm:w-auto"
          >
            <PhoneIcon aria-hidden weight="fill" className="h-5 w-5" />
            Call {site.phone}
          </a>

          <dl className="mt-12 space-y-6 border-t border-white/10 pt-8">
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
            <div className="flex gap-3">
              <CertificateIcon aria-hidden className="mt-0.5 h-5 w-5 text-gold" />
              <div>
                <dt className="text-sm text-white/55">Massachusetts licenses</dt>
                <dd className="font-medium">
                  CSL {site.licenses.csl}, HIC {site.licenses.hic}
                </dd>
              </div>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-7">
          <div className="mx-auto max-w-[36rem]">
            <LeadForm instance="bottom" />
          </div>
        </div>
      </div>
    </section>
  );
}
