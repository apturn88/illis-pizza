import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const viewport: Viewport = {
  themeColor: '#fbf7f0',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://illis-pizza.vercel.app'
  ),
  title: "Illi's Pizza — Belmont, Calgary",
  description:
    "Wood-fired Neapolitan-style pizza in Belmont, Calgary. Dough made daily, local ingredients, mountain heart. Pizza Worth Coming Home For.",
  openGraph: {
    title: "Illi's Pizza — Belmont, Calgary",
    description: 'Pizza Worth Coming Home For.',
    type: 'website',
    images: ['/images/brand-tagline-square.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-crust-50 text-charcoal-900">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
