import Link from 'next/link';
import { site } from '@/lib/site';
import { ContactForm } from '../ContactForm';
import { PhoneIcon, MailIcon, PinIcon, ClockIcon, ArrowRightIcon } from '../icons';
import { Reveal } from '../Reveal';

export function Contact({ showForm = true }: { showForm?: boolean }) {
  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div
        className={`container-x grid gap-12 lg:gap-16 ${showForm ? 'lg:grid-cols-2' : 'lg:grid-cols-1'}`}
      >
        <Reveal variant="left">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-title mt-4">Let&apos;s Build Something Great</h2>
          <p className="mt-5 text-lg text-gray-600">
            Ready to transform your home? Request a free, no-obligation estimate today. Call us or
            fill out the form and we&apos;ll get right back to you.
          </p>

          <div className="mt-10 space-y-6">
            <ContactRow icon={PhoneIcon} label="Call Us" value={site.phone} href={`tel:${site.phoneRaw}`} />
            <ContactRow icon={MailIcon} label="Email Us" value={site.email} href={`mailto:${site.email}`} />
            <ContactRow
              icon={PinIcon}
              label="Service Area"
              value={`${site.address.city}, ${site.address.region} — serving all of New England`}
            />
            <ContactRow icon={ClockIcon} label="Business Hours" value={site.hoursLabel} />
          </div>

          <div className="mt-10 rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100">
            <p className="text-sm font-bold uppercase tracking-wide text-gold-dark">
              Proudly Serving
            </p>
            <p className="mt-2 text-sm text-gray-600">{site.localTowns.join(' · ')} and surrounding towns across Massachusetts, Rhode Island, Connecticut, New Hampshire, Vermont &amp; Maine.</p>
          </div>

          {!showForm && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#home" className="btn-primary shine">
                Get Your Free Estimate
                <ArrowRightIcon className="h-5 w-5" />
              </a>
              <Link href="/contact" className="btn-dark">
                Contact Page
              </Link>
            </div>
          )}
        </Reveal>

        {showForm && (
          <Reveal variant="right">
            <ContactForm />
          </Reveal>
        )}
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof PhoneIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
        <Icon className="h-6 w-6" />
      </span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-wide text-gray-400">
          {label}
        </span>
        <span className="mt-0.5 block font-semibold text-charcoal">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-center gap-4 transition-colors hover:text-gold-dark">
        {content}
      </a>
    );
  }
  return <div className="flex items-center gap-4">{content}</div>;
}
