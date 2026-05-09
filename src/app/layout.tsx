import type { Metadata } from 'next'
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

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
  title: 'Gill Mobile Boutique & Technical Lab | iPhone Specialists',
  description: 'High-end iPhone restoration, curated acquisition, and strategic buy-back in Abrar Market, Lahore.',
  keywords: 'iPhone repair Lahore, mobile repair Abrar Market, iPhone specialist Pakistan, sell iPhone Lahore, mobile accessories Lahore',
  openGraph: {
    title: 'Gill Mobile Boutique & Technical Lab | iPhone Specialists',
    description: 'Bespoke iPhone services. Technical restoration and curated acquisition in Abrar Market, Lahore.',
    type: 'website',
    locale: 'ur_PK',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23E3C5A0" width="100" height="100" rx="20"/><text x="50" y="65" font-size="60" font-weight="bold" fill="%23121212" text-anchor="middle">G</text></svg>',
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
        {children}
      </body>
    </html>
  )
}
