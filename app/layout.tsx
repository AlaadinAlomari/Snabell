import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Snabell — Landing Pages, Done Fast',
  description:
    'Launch a custom landing page starting at $97. Three simple packages, fast delivery, no bloated retainers.',
  metadataBase: new URL('https://snabell.com'),
  openGraph: {
    title: 'Snabell — Landing Pages, Done Fast',
    description: 'Custom landing pages from $97. Fast, simple, no guesswork.',
    url: 'https://snabell.com',
    siteName: 'Snabell',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snabell — Landing Pages, Done Fast',
    description: 'Custom landing pages from $97.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-bg font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
