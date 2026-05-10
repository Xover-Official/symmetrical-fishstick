import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { TechnicalDecor } from '@/components/TechnicalDecor'
import { MagneticCursor } from '@/components/MagneticCursor'
import { FloatingActions } from '@/components/FloatingActions'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://gillmobile.shop/#business',
  name: 'Gill Mobile Technical Lab',
  alternateName: 'Gill Mobile Boutique',
  description: 'Premium iPhone repair, restoration, and technical laboratory services. Surgical-grade repairs in Lahore, Pakistan.',
  url: 'https://gillmobile.shop',
  telephone: '+92-323-1459121',
  email: 'contact@gillmobile.shop',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop #24, 2nd Floor, Abrar Market',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    postalCode: '54000',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.5204,
    longitude: 74.3587,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '11:00',
      closes: '21:00',
    },
  ],
  priceRange: '₨₨',
  image: 'https://gillmobile.shop/og-image.jpg',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'iPhone Repair Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Screen Restoration',
          description: 'Surgical screen replacement using OEM-quality components',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Battery Replacement',
          description: 'Genuine battery replacement with health calibration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Board-Level Repair',
          description: 'Micron-precision IC repair and solder work',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '247',
  },
  sameAs: [
    'https://www.instagram.com/gillmobile',
    'https://www.facebook.com/gillmobile',
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'GILL_MOBILE_BOUTIQUE | Advanced Technical Laboratory',
    template: '%s | GILL_MOBILE_BOUTIQUE',
  },
  description: 'High-fidelity iPhone restoration, technical hardware auditing, and strategic component acquisition. Located in NODE_LAHORE, Abrar Market.',
  keywords: [
    'iPhone repair Lahore',
    'iPhone restoration',
    'technical lab Lahore',
    'hardware auditing',
    'Apple repair Abrar Market',
    'Mall Road phone repair',
    'board-level repair Pakistan',
    'iPhone specialist Lahore',
    'mobile repair shop Lahore',
    'iPhone screen replacement',
    'battery replacement Lahore',
    'motherboard repair',
    'water damage repair iPhone',
    'technical boutique Pakistan',
  ],
  authors: [{ name: 'Gill Mobile Technical Lab' }],
  creator: 'Gill Mobile Technical Lab',
  publisher: 'Gill Mobile Technical Lab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'GILL_MOBILE_BOUTIQUE | Technical Laboratory',
    description: 'Bespoke iPhone restoration and technical auditing. Operating in NODE_LAHORE.',
    type: 'website',
    locale: 'en_PK',
    url: 'https://gillmobile.shop',
    siteName: 'Gill Mobile Boutique',
    images: [
      {
        url: 'https://gillmobile.shop/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gill Mobile Technical Lab - Premium iPhone Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GILL_MOBILE_BOUTIQUE | Technical Laboratory',
    description: 'Bespoke iPhone restoration and technical auditing.',
    images: ['https://gillmobile.shop/og-image.jpg'],
  },
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
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23FF6B35" width="100" height="100" rx="20"/><text x="50" y="65" font-size="60" font-weight="bold" fill="%23050505" text-anchor="middle">G</text></svg>',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://gillmobile.shop',
    languages: {
      'en-PK': 'https://gillmobile.shop',
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="bg-brand-bg text-brand-text font-body antialiased selection:bg-brand-text selection:text-brand-bg">
        <TechnicalDecor />
        <MagneticCursor />
        <FloatingActions />
        {children}
      </body>
    </html>
  )
}