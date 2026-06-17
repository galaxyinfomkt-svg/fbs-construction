import Image from 'next/image';
import Link from 'next/link';
import { site, services } from '@/lib/site';
import { PhoneIcon, MailIcon, PinIcon } from '../icons';

const year = 2026;

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <span className="inline-flex rounded-lg bg-white/95 px-2 py-1">
            <Image
              src="/images/logo.webp"
              alt={`${site.name} logo`}
              width={150}
              height={100}
              className="h-12 w-auto"
            />
          </span>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Premium home exterior solutions — siding, windows, doors and custom decks — for
            Massachusetts &amp; New England homeowners since {site.founded}.
          </p>
          <div className="mt-5 flex gap-3">
            <Social href={site.social.facebook} label="Facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </Social>
            <Social href={site.social.instagram} label="Instagram">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
            </Social>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition-colors hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="transition-colors hover:text-gold">
                Exterior Renovations
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link href="/services" className="hover:text-gold">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-gold">Project Gallery</Link></li>
            <li><Link href="/#reviews" className="hover:text-gold">Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Free Estimate</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-2.5 hover:text-gold">
                <PhoneIcon className="h-4 w-4 text-gold" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 hover:text-gold">
                <MailIcon className="h-4 w-4 text-gold" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {site.address.city}, {site.address.region} · New England
            </li>
          </ul>
          <p className="mt-4 text-xs">{site.hoursLabel}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved. Licensed, bonded &amp; insured.
          </p>
          <p>Siding · Windows · Doors · Decks · Exterior Renovations in MA &amp; New England</p>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-charcoal"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        {children}
      </svg>
    </a>
  );
}
