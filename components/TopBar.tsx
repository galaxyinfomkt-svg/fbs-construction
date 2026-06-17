import { site } from '@/lib/site';
import { PhoneIcon, MailIcon, ClockIcon } from './icons';

export function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-9 bg-charcoal text-white">
      <div className="container-x flex h-full items-center justify-between gap-3 text-[11px] sm:text-xs">
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          <a
            href={`tel:${site.phoneRaw}`}
            className="flex items-center gap-1.5 font-semibold transition-colors hover:text-gold"
          >
            <PhoneIcon className="h-3.5 w-3.5 shrink-0 text-gold" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hidden min-w-0 items-center gap-1.5 font-medium transition-colors hover:text-gold sm:flex"
          >
            <MailIcon className="h-3.5 w-3.5 shrink-0 text-gold" />
            <span className="truncate">{site.email}</span>
          </a>
        </div>
        <div className="hidden shrink-0 items-center gap-2 text-white/75 lg:flex">
          <ClockIcon className="h-3.5 w-3.5 text-gold" />
          <span>{site.hoursLabel}</span>
        </div>
      </div>
    </div>
  );
}
