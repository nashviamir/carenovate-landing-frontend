import type { Metadata, Viewport } from 'next';
import { draftMode } from 'next/headers';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import LivePreviewListener from '@/components/LivePreviewListener';
import Tracking from '@/components/Tracking';
import { getGlobal } from '@/lib/payload';
import { siteJsonLd, siteMetadata } from '@/lib/seo';

// Content is read from Payload on every request: edits (in the admin or via
// `content:import`) show up immediately, and `next build` never needs a DB.
export const dynamic = 'force-dynamic';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  return siteMetadata(await getGlobal('seo-settings'));
}

export async function generateViewport(): Promise<Viewport> {
  const { defaults } = await getGlobal('seo-settings');
  return { themeColor: defaults.themeColor || undefined };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [header, footer, settings, seo, tracking, draft] = await Promise.all([
    getGlobal('header'),
    getGlobal('footer'),
    getGlobal('site-settings'),
    getGlobal('seo-settings'),
    getGlobal('tracking'),
    draftMode(),
  ]);
  // No analytics while previewing drafts or where disabled (e.g. local dev).
  const trackingEnabled = !draft.isEnabled && process.env.DISABLE_ANALYTICS !== 'true';

  return (
    <html lang="en" className={`${poppins.variable} font-sans scroll-smooth`}>
      <head>
        <JsonLd data={siteJsonLd(seo, settings.contact)} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header data={header} />
        <main className="flex-1">{children}</main>
        <Footer data={footer} contact={settings.contact} />
        {draft.isEnabled && <LivePreviewListener />}
        {trackingEnabled && <Tracking data={tracking} />}
      </body>
    </html>
  );
}
