import type { Metadata, Viewport } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'FBS Construction Inc | Siding, Windows, Doors & Decks in MA',
    template: '%s | FBS Construction Inc',
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'siding installation Massachusetts',
    'window replacement MA',
    'door installation',
    'custom deck construction',
    'exterior contractor New England',
    'Whitinsville contractor',
    'home renovation Massachusetts',
    'vinyl siding contractor',
    'fiber cement siding',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: '/',
  },
  category: 'Home Improvement',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: 'FBS Construction Inc | Premium Home Exterior Solutions',
    description: site.description,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FBS Construction Inc — Premium Home Exterior Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FBS Construction Inc | Premium Home Exterior Solutions',
    description: site.description,
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
