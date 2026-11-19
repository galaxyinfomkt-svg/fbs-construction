import type { Metadata, Viewport } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/sections/Footer';
import { FloatingPhone } from '@/components/FloatingPhone';
import { MobileCta } from '@/components/MobileCta';

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
    default: 'Home Additions & Remodeling | Whitinsville, MA | FBS',
    template: '%s | FBS Construction Inc',
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'home additions Massachusetts',
    'second story addition Worcester County',
    'in-law suite addition MA',
    'interior remodeling Whitinsville MA',
    'kitchen remodeling Worcester County',
    'bathroom remodeling Massachusetts',
    'basement finishing MA',
    'sunroom contractor Massachusetts',
    'screen porch builder MA',
    'deck roof contractor Massachusetts',
    'licensed addition contractor Whitinsville',
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
    title: 'FBS Construction Inc | Home Additions & Remodeling in MA',
    description: site.description,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FBS Construction Inc — Home Additions & Remodeling, Whitinsville MA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FBS Construction Inc | Home Additions & Remodeling in MA',
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
        <TopBar />
        <Header />
        <main className="pb-14 lg:pb-0">{children}</main>
        <Footer />
        <FloatingPhone />
        <MobileCta />
        <JsonLd />
      </body>
    </html>
  );
}
