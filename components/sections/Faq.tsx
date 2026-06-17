import { faqs, site } from '@/lib/site';
import { Reveal } from '../Reveal';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${site.url}/#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="bg-gray-50 py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <Reveal variant="left">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title mt-4">Frequently Asked Questions</h2>
          <p className="mt-5 text-lg text-gray-600">
            Everything you need to know about working with FBS Construction. Still have questions?{' '}
            <a href="#contact" className="font-semibold text-gold-dark underline-offset-4 hover:underline">
              Get in touch →
            </a>
          </p>
        </Reveal>

        <Reveal variant="right" className="divide-y divide-gray-200 rounded-2xl bg-white px-6 shadow-card ring-1 ring-gray-100 sm:px-8">
          {faqs.map((f) => (
            <details key={f.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-charcoal marker:hidden">
                <span>{f.question}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-lg font-bold text-gold-dark transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-gray-600">{f.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
