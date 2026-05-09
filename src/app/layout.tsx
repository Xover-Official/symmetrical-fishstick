import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Gill Mobile Shop | iPhone Specialists - Abrar Market, Lahore',
  description: 'Premium iPhone repair & accessories in Abrar Market, Lahore. Best buyback rates in Pakistan. Same-day service. Contact: 0323-1459121',
  keywords: 'iPhone repair Lahore, mobile repair Abrar Market, iPhone specialist Pakistan, sell iPhone Lahore, mobile accessories Lahore',
  openGraph: {
    title: 'Gill Mobile Shop | iPhone Specialists - Lahore',
    description: 'Your iPhone. Perfected. Premium restoration services in Abrar Market, Lahore.',
    type: 'website',
    locale: 'ur_PK',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23d4c6b9" width="100" height="100" rx="20"/><text x="50" y="65" font-size="60" font-weight="bold" fill="%230a0a0a" text-anchor="middle">G</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-brand-bg text-brand-text font-body antialiased selection:bg-brand-text selection:text-brand-bg">
        {children}
      </body>
    </html>
  )
}
