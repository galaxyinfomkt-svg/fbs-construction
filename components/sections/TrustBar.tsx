import { site } from '@/lib/site';
import { ShieldIcon, CheckIcon, StarIcon, ClockIcon } from '../icons';

const items = [
  { icon: ShieldIcon, label: `MA CSL ${site.licenses.csl}` },
  { icon: CheckIcon, label: `HIC Reg. ${site.licenses.hic}` },
  { icon: StarIcon, label: '5-Star Google Rating' },
  { icon: ClockIcon, label: 'Permits & Inspections Handled' },
];

export function TrustBar() {
  return (
    <section className="bg-charcoal" aria-label="Why choose FBS Construction">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-5 py-6 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
              <item.icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-white/90">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
