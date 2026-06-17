import { site } from '@/lib/site';
import { PhoneIcon } from './icons';

export function FloatingPhone() {
  return (
    <a
      href={`tel:${site.phoneRaw}`}
      aria-label={`Call ${site.name} at ${site.phone}`}
      className="group fixed bottom-20 right-4 z-50 flex items-center gap-2 lg:bottom-6 lg:right-6"
    >
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-charcoal px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 lg:block">
        Call {site.phone}
      </span>
      <span className="flex h-14 w-14 animate-pulseRing items-center justify-center rounded-full bg-gold text-charcoal shadow-gold transition-transform duration-300 group-hover:scale-110 lg:h-16 lg:w-16">
        <PhoneIcon className="h-6 w-6 lg:h-7 lg:w-7" />
      </span>
    </a>
  );
}
