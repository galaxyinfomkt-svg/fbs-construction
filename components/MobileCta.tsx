import Link from 'next/link';
import { site } from '@/lib/site';
import { PhoneIcon, ArrowRightIcon } from './icons';

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px bg-charcoal/10 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] lg:hidden">
      <a
        href={`tel:${site.phoneRaw}`}
        className="flex items-center justify-center gap-2 bg-charcoal py-3.5 text-sm font-bold uppercase tracking-wide text-white"
      >
        <PhoneIcon className="h-4 w-4" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-gold py-3.5 text-sm font-bold uppercase tracking-wide text-charcoal"
      >
        Free Estimate
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
