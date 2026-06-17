'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { site, services } from '@/lib/site';
import { PhoneIcon, MenuIcon, CloseIcon, ArrowRightIcon, PinIcon } from './icons';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', hasChildren: true },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 md:top-9 ${
        solid
          ? 'bg-white/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/85'
          : 'bg-charcoal/70 backdrop-blur'
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between lg:h-20">
        <Link href="/" className="flex items-center" aria-label={`${site.name} home`}>
          <span className={`flex items-center rounded-lg px-2 py-1 transition-colors ${solid ? '' : 'bg-white/95'}`}>
            <Image
              src="/images/logo.webp"
              alt={`${site.name} logo`}
              width={160}
              height={107}
              priority
              className="h-10 w-auto lg:h-12"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((l) =>
            l.hasChildren ? (
              <div
                key={l.href}
                className="group relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={l.href}
                  className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-gold ${
                    solid ? 'text-charcoal' : 'text-white'
                  }`}
                >
                  {l.label}
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <div
                  className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    servicesOpen ? 'visible opacity-100' : 'invisible opacity-0'
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-gold/10 hover:text-gold-dark"
                      >
                        {s.title}
                        <ArrowRightIcon className="h-4 w-4 opacity-40" />
                      </Link>
                    ))}
                    <div className="my-1 border-t border-gray-100" />
                    <Link
                      href="/service-areas"
                      className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-gold-dark transition-colors hover:bg-gold/10"
                    >
                      All Service Areas
                      <PinIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-gold ${
                  solid ? 'text-charcoal' : 'text-white'
                }`}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={`tel:${site.phoneRaw}`}
            className={`flex items-center gap-2 text-sm font-bold transition-colors hover:text-gold ${
              solid ? 'text-charcoal' : 'text-white'
            }`}
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phone}
          </a>
          <Link href="/contact" className="btn-primary !px-5 !py-2.5">
            Free Estimate
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open ? 'true' : 'false'}
          className={`lg:hidden ${solid ? 'text-charcoal' : 'text-white'}`}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[4.5rem] z-40 max-h-[calc(100vh-4.5rem)] origin-top overflow-y-auto bg-white shadow-xl transition-all duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <nav className="container-x flex flex-col py-3" aria-label="Mobile">
          {navLinks.map((l) => (
            <div key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-gray-100 py-3.5 text-base font-semibold uppercase tracking-wide text-charcoal"
              >
                {l.label}
              </Link>
              {l.hasChildren && (
                <div className="border-b border-gray-100 bg-gray-50 px-3 py-2">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm font-medium text-gray-600 hover:text-gold-dark"
                    >
                      → {s.title}
                    </Link>
                  ))}
                  <Link
                    href="/service-areas"
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm font-bold uppercase tracking-wide text-gold-dark"
                  >
                    📍 All Service Areas
                  </Link>
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-3 pb-2">
            <a href={`tel:${site.phoneRaw}`} className="btn-dark w-full" onClick={() => setOpen(false)}>
              <PhoneIcon className="h-4 w-4" />
              {site.phone}
            </a>
            <Link href="/contact" className="btn-primary w-full" onClick={() => setOpen(false)}>
              Get Free Estimate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
