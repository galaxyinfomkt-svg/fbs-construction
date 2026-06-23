import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { About } from '@/components/sections/About';
import { WhyUs } from '@/components/sections/WhyUs';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Gallery } from '@/components/sections/Gallery';
import { StatsBand } from '@/components/sections/StatsBand';
import { Reviews } from '@/components/sections/Reviews';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { CtaBanner } from '@/components/sections/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <WhyUs />
      <Services />
      <Process />
      <Gallery />
      <StatsBand />
      <Reviews />
      <Faq />
      <Contact showForm={false} />
      <CtaBanner />
    </>
  );
}
