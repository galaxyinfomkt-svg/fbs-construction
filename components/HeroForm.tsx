'use client';

import { useState } from 'react';
import { services } from '@/lib/site';
import { ArrowRightIcon, CheckIcon, ShieldIcon } from './icons';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function HeroForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'hero' }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="relative">
      <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-gold/40 to-gold/0 blur-xl" aria-hidden />
      <div className="rounded-2xl border border-white/15 bg-white/95 p-6 shadow-2xl backdrop-blur-md sm:p-7">
        {status === 'success' ? (
          <div className="flex flex-col items-center py-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
              <CheckIcon className="h-8 w-8" />
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold uppercase text-charcoal">
              Request Sent!
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              We&apos;ll call you within one business day to schedule your free estimate.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm font-bold uppercase tracking-wide text-gold-dark hover:underline"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="flex items-center gap-2 text-gold-dark">
              <span className="flex h-2.5 w-2.5">
                <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-gold-dark/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold-dark" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.18em]">
                Free Estimate · No Obligation
              </span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-charcoal">
              Get Your Free Quote
            </h3>

            <div className="mt-5 space-y-3">
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="Full name"
                className="input-field"
                aria-label="Full name"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Phone"
                  className="input-field"
                  aria-label="Phone"
                />
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                  className="input-field"
                  aria-label="Email"
                />
              </div>
              <select
                name="service"
                defaultValue=""
                className="input-field text-gray-500"
                aria-label="Service needed"
              >
                <option value="" disabled>
                  Which service do you need?
                </option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title} className="text-charcoal">
                    {s.title}
                  </option>
                ))}
                <option value="Exterior Renovation" className="text-charcoal">
                  Exterior Renovation / Other
                </option>
              </select>
              {/* Honeypot */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary shine mt-4 w-full text-base disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'submitting' ? 'Sending…' : 'Get My Free Estimate'}
              {status !== 'submitting' && <ArrowRightIcon className="h-5 w-5" />}
            </button>

            {status === 'error' && (
              <p className="mt-3 text-center text-xs font-medium text-red-600">
                Something went wrong — please call (774) 285-6562.
              </p>
            )}

            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-gray-400">
              <ShieldIcon className="h-3.5 w-3.5" />
              Licensed &amp; insured · Your info stays private
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
