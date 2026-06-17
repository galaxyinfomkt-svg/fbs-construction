import Link from 'next/link';
import { site } from '@/lib/site';
import { PhoneIcon, ArrowRightIcon } from '../icons';

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gold">
      <div className="container-x flex flex-col items-center gap-6 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-charcoal sm:text-4xl">
            Ready to Transform Your Home?
          </h2>
          <p className="mt-2 text-charcoal/80">
            Get your free estimate today — no pressure, no obligation.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${site.phoneRaw}`} className="btn-dark">
            <PhoneIcon className="h-5 w-5" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-charcoal transition-all duration-300 hover:bg-charcoal hover:text-white"
          >
            Free Estimate
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
