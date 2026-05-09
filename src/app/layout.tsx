import type { Metadata } from 'next'
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { TechnicalDecor } from '@/components/TechnicalDecor'
import { MagneticCursor } from '@/components/MagneticCursor'

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

export const metadata: Metadata = {
  title: 'GILL_MOBILE_BOUTIQUE | Advanced Technical Laboratory',
  description: 'High-fidelity iPhone restoration, technical hardware auditing, and strategic component acquisition. Located in NODE_LAHORE, Abrar Market.',
  keywords: 'iPhone repair Lahore, technical lab, hardware restoration, iPhone specialists, Abrar Market, high-fidelity mobile services, Pakistan tech boutique',
  openGraph: {
    title: 'GILL_MOBILE_BOUTIQUE | Technical Laboratory',
    description: 'Bespoke iPhone restoration and technical auditing. Operating in NODE_LAHORE.',
    type: 'website',
    locale: 'en_PK',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23FF6B35" width="100" height="100" rx="20"/><text x="50" y="65" font-size="60" font-weight="bold" fill="%23050505" text-anchor="middle">G</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${mono.variable}`}>
      <body className="bg-brand-bg text-brand-text font-body antialiased selection:bg-brand-text selection:text-brand-bg">
        <TechnicalDecor />
        <MagneticCursor />
        {children}
      </body>
    </html>
  )
}