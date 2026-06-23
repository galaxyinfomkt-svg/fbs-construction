import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Contact } from '@/components/sections/Contact';
import { Faq } from '@/components/sections/Faq';

export const metadata: Metadata = {
  title: 'Contact Us | Free Estimate in MA & New England',
  description:
    'Contact FBS Construction Inc for a free, no-obligation estimate on siding, windows, doors or decks. Call (774) 285-6562 or request a quote online.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Ready to transform your home? Request your free, no-obligation estimate today."
        image="/images/project-deck-white.webp"
        imageAlt="Contact FBS Construction for a free estimate"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />
      <Contact showForm={false} />
      <Faq />
    </>
  );
}
