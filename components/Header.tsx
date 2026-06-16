'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { site } from '@/lib/site';
import { PhoneIcon, MenuIcon, CloseIcon } from './icons';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/80'
          : 'bg-charcoal/80 backdrop-blur'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between lg:h-24">
        <a href="#home" className="flex items-center" aria-label={`${site.name} home`}>
          <span
            className={`flex items-center rounded-lg px-2 py-1 transition-colors ${
              scrolled ? '' : 'bg-white/95'
            }`}
          >
            <Image
              src="/images/logo.webp"
              alt={`${site.name} logo`}
              width={160}
              height={107}
              priority
              className="h-11 w-auto lg:h-14"
            />
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-gold ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phoneRaw}`}
            className={`flex items-center gap-2 text-sm font-bold transition-colors hover:text-gold ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phone}
          </a>
          <a href="#contact" className="btn-primary !px-5 !py-2.5">
            Free Estimate
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`lg:hidden ${scrolled || open ? 'text-charcoal' : 'text-white'}`}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-20 z-40 origin-top bg-white shadow-xl transition-all duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <nav className="container-x flex flex-col py-4" aria-label="Mobile">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 py-4 text-base font-semibold uppercase tracking-wide text-charcoal"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${site.phoneRaw}`}
              className="btn-dark w-full"
              onClick={() => setOpen(false)}
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phone}
            </a>
            <a href="#contact" className="btn-primary w-full" onClick={() => setOpen(false)}>
              Get Free Estimate
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
