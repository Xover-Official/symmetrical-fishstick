import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collection | Curated Acquisition | Gill Mobile Technical Lab',
  description: 'Curated collection of verified iPhones with Grade A+ Architectural certification. Each device undergoes 47-point technical validation. Browse our inventory of restored Apple devices.',
  keywords: 'iPhone collection, curated iPhones, Grade A+ iPhone, verified iPhone Lahore, premium used iPhones, iPhone restoration',
}

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}