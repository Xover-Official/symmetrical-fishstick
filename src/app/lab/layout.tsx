import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laboratory | Surgical Restoration | Gill Mobile Technical Lab',
  description: 'Technical laboratory for surgical iPhone restoration. Board-level repair in ISO-5 cleanroom conditions. 97.3% success rate with 48-hour calibration protocols.',
  keywords: 'iPhone repair Lahore, surgical restoration, board-level repair, microsurgery iPhone, technical laboratory',
}

export default function LabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}