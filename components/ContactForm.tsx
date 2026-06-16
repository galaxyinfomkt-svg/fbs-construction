'use client';

import { useState } from 'react';
import { services } from '@/lib/site';
import { ArrowRightIcon, CheckIcon } from './icons';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
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
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-card ring-1 ring-gray-100">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold uppercase text-charcoal">
          Thank You!
        </h3>
        <p className="mt-3 text-gray-600">
          Your request has been received. A member of the FBS Construction team will reach out
          shortly to schedule your free estimate.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-bold uppercase tracking-wide text-gold-dark hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-gray-100 sm:p-8"
    >
      <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-charcoal">
        Request Your Free Estimate
      </h3>
      <p className="mt-2 text-sm text-gray-500">
        Fill out the form and we&apos;ll get back to you within one business day.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
      </div>
      <div className="mt-4">
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-charcoal">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Exterior Renovation">Exterior Renovation / Other</option>
          </select>
        </div>
        <Field label="Town / City" name="town" autoComplete="address-level2" />
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-charcoal">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          placeholder="Tell us about your project…"
        />
      </div>

      {/* Honeypot anti-spam field */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary mt-6 w-full text-base disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending…' : 'Get My Free Estimate'}
        {status !== 'submitting' && <ArrowRightIcon className="h-5 w-5" />}
      </button>

      {status === 'error' && (
        <p className="mt-4 text-center text-sm font-medium text-red-600">
          Something went wrong. Please call us at (774) 285-6562 or try again.
        </p>
      )}
      <p className="mt-4 text-center text-xs text-gray-400">
        By submitting, you agree to be contacted about your project. No spam, ever.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-charcoal">
        {label} {required && <span className="text-gold-dark">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}
