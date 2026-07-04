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
  title: 'Snabell — White-Label Marketing Software',
  description:
    'Launch your own branded CRM, funnels, and marketing platform starting at $97/month. Three simple plans, real GoHighLevel power, your brand.',
  metadataBase: new URL('https://snabell.com'),
  openGraph: {
    title: 'Snabell — White-Label Marketing Software',
    description: 'Your own branded CRM, funnels, and marketing platform from $97/month.',
    url: 'https://snabell.com',
    siteName: 'Snabell',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snabell — White-Label Marketing Software',
    description: 'Your own branded marketing platform from $97/month.',
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
