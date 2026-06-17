import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Gallery } from '@/components/sections/Gallery';
import { StatsBand } from '@/components/sections/StatsBand';
import { CtaBanner } from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Project Gallery | Siding, Window, Door & Deck Projects',
  description:
    'Browse real siding, window, door and custom deck projects completed by FBS Construction across Massachusetts and New England.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Project Gallery"
        subtitle="Real transformations from real New England homes. See the FBS Construction difference."
        image="/images/hero-front.webp"
        imageAlt="Completed home exterior renovation by FBS Construction"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
      />
      <Gallery />
      <StatsBand />
      <CtaBanner />
    </>
  );
}
