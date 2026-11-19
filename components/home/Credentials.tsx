import { credentials } from '@/lib/home';
import { HomeIcon } from './HomeIcon';

// Proof strip directly under the hero: licenses and terms, not logos.
export function Credentials() {
  return (
    <section aria-label="Licenses and credentials" className="border-b border-line bg-white font-geist">
      <ul className="container-x grid grid-cols-2 gap-x-6 gap-y-7 py-9 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-line">
        {credentials.map((c) => (
          <li key={c.value} className="flex items-start gap-3 lg:px-6 lg:first:pl-0">
            <HomeIcon name={c.icon} className="mt-0.5 h-6 w-6 shrink-0 text-gold-dark" />
            <div>
              <p className="text-[0.95rem] font-semibold text-ink">{c.value}</p>
              <p className="mt-0.5 text-sm text-ink-muted">{c.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
