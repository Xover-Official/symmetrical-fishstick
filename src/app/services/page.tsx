import type { Metadata } from 'next'
import ServicesHub from '@/components/ServicesHub'

export const metadata: Metadata = {
  title: 'Services | Technical Restoration Hub',
  description: 'Comprehensive iPhone repair and restoration services. From screen replacement to board-level microsurgery. Surgical precision repairs in Abrar Market, Lahore.',
  keywords: 'iPhone repair services Lahore, screen replacement, battery replacement, motherboard repair, water damage recovery, board-level repair, iPhone restoration',
}

export default function ServicesPage() {
  return <ServicesHub />
}