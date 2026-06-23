import { LeadForm } from './LeadForm';

export function ContactForm() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-gray-100 sm:p-6">
      <h3 className="px-2 pt-2 font-display text-2xl font-bold uppercase tracking-tight text-charcoal">
        Request Your Free Estimate
      </h3>
      <p className="mb-4 px-2 text-sm text-gray-500">
        Fill out the form and we&apos;ll get back to you within one business day.
      </p>
      <LeadForm />
    </div>
  );
}
