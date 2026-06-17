import { site } from '@/lib/site';
import { PhoneIcon, MailIcon, ClockIcon } from './icons';

export function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] hidden h-9 bg-charcoal text-white md:block">
      <div className="container-x flex h-full items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <a
            href={`tel:${site.phoneRaw}`}
            className="flex items-center gap-1.5 font-semibold transition-colors hover:text-gold"
          >
            <PhoneIcon className="h-3.5 w-3.5 text-gold" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-gold"
          >
            <MailIcon className="h-3.5 w-3.5 text-gold" />
            {site.email}
          </a>
        </div>
        <div className="flex items-center gap-2 text-white/75">
          <ClockIcon className="h-3.5 w-3.5 text-gold" />
          <span>{site.hoursLabel}</span>
        </div>
      </div>
    </div>
  );
}
