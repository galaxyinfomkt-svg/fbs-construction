import Image from 'next/image';
import { gallery } from '@/lib/site';

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title mt-4">Recent Projects &amp; Transformations</h2>
          <p className="mt-5 text-lg text-gray-600">
            Real homes across Massachusetts and New England — siding, windows, doors and custom decks
            built to last and designed to impress.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((item, i) => {
            // First and sixth items span two columns/rows for a dynamic mosaic on larger screens.
            const featured = i === 0 || i === 5;
            return (
              <figure
                key={item.src}
                className={`group relative overflow-hidden rounded-xl bg-gray-100 shadow-card ${
                  featured ? 'col-span-2 lg:row-span-2' : ''
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={featured ? 1400 : 700}
                  height={featured ? 1050 : 525}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    featured ? 'aspect-square lg:h-full' : 'aspect-[4/3]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute bottom-3 left-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-charcoal">
                    {item.category}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
