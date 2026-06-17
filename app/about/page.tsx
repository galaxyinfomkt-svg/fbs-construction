import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { About } from '@/components/sections/About';
import { WhyUs } from '@/components/sections/WhyUs';
import { StatsBand } from '@/components/sections/StatsBand';
import { Process } from '@/components/sections/Process';
import { Reviews } from '@/components/sections/Reviews';
import { CtaBanner } from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'About Us | Trusted Exterior Contractor in MA',
  description:
    'Learn about FBS Construction Inc — a licensed, bonded and insured home exterior contractor with 15+ years of experience serving Massachusetts and New England.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About FBS Construction"
        subtitle="New England's trusted home exterior experts — 15+ years of craftsmanship, thousands of happy homeowners."
        image="/images/about-deck-white.webp"
        imageAlt="FBS Construction completed home exterior project in New England"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />
      <About />
      <WhyUs />
      <StatsBand />
      <Process />
      <Reviews />
      <CtaBanner />
    </>
  );
}
