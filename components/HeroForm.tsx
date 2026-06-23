import { LeadForm } from './LeadForm';
import { ShieldIcon } from './icons';

export function HeroForm() {
  return (
    <div className="relative">
      <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-gold/40 to-gold/0 blur-xl" aria-hidden />
      <div className="rounded-2xl border border-white/15 bg-white/95 p-5 shadow-2xl backdrop-blur-md sm:p-6">
        <div className="flex items-center gap-2 text-gold-dark">
          <span className="relative flex h-2.5 w-2.5">
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

        <div className="mt-3">
          <LeadForm />
        </div>

        <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-[11px] text-gray-400">
          <ShieldIcon className="h-3.5 w-3.5" />
          Licensed &amp; insured · Your info stays private
        </p>
      </div>
    </div>
  );
}
