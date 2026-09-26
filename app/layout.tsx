import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const SITE_URL = 'https://carenovate.com';
const SITE_NAME = 'CareHub by CareNovate';
const TITLE = 'CareHub by CareNovate | Smart Medication & Task Management';
const DESCRIPTION =
  'Smart medication dispensing and digitized task management system for Assisted Living and RCFE operators. Zero med errors, audit-ready eMARs, and live shift tracking.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: '%s | CareHub',
  },
  description: DESCRIPTION,

  keywords: [
    'RCFE software',
    'Assisted Living eMAR',
    'smart medication dispenser',
    'senior care technology',
    'medication management',
    'nursing home software',
    'Title 22 compliance',
    'audit-ready eMAR',
    'CareNovate',
    'CareHub',
  ],

  authors: [{ name: 'CareNovate Inc.' }],
  creator: 'CareNovate Inc.',
  publisher: 'CareNovate Inc.',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/carenovate-landing-frontend/images/device.jpg',
        width: 1200,
        height: 630,
        alt: 'CareHub Smart Medication Dispenser',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/carenovate-landing-frontend/images/device.jpg'],
  },

  // Icons (اگر بعداً favicon اضافه کردی)
  icons: {
    icon: '/favicon.ico',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalOrganization',
      name: 'CareNovate Inc.',
      url: SITE_URL,
      logo: `${SITE_URL}/images/device.jpg`,
      sameAs: ['https://www.linkedin.com/company/carenovate'],
      description:
        'US-based healthcare innovator behind CareHub smart medication management system for senior living.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressRegion: 'California',
      },
    },
    {
      '@type': 'MedicalDevice',
      name: 'CareHub Smart Dispenser',
      manufacturer: 'CareNovate Inc.',
      recognizingAuthority: 'FDA Exempt Class I Data System',
      description:
        'Smart dispenser machines capable of storing and dispensing prescribed or OTC medications in various shapes with real-time dosing alerts and eMAR verification.',
      isRelatedTo:
        'Residential Care Facilities for the Elderly (RCFE) & Assisted Living',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'CareHub Cloud Platform',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web, iOS, Android',
      description:
        'Cloud-based portal used to monitor tasks, sync with dispenser hardware, generate inspection-ready reports, and manage RCFE operations.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Custom pricing based on facility size and bed count',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}