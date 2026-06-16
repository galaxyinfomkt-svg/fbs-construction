import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Gallery } from '@/components/sections/Gallery';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Reviews } from '@/components/sections/Reviews';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { MobileCta } from '@/components/MobileCta';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-12 lg:pb-0">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Gallery />
        <CtaBanner />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
