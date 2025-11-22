import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AquaFlow Pro ? Industrial Water Pump',
  description:
    'High-efficiency industrial water pump with smart monitoring, corrosion-resistant build, and 5-year warranty.',
  keywords: [
    'water pump',
    'industrial pump',
    'centrifugal pump',
    'smart pump',
    'AquaFlow Pro'
  ],
  openGraph: {
    title: 'AquaFlow Pro ? Industrial Water Pump',
    description:
      'Reduce energy costs up to 30% with our high-efficiency, smart-controlled water pump.',
    url: 'https://agentic-bfed3b79.vercel.app',
    siteName: 'AquaFlow Pro',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
        width: 1600,
        height: 900,
        alt: 'Industrial water pump'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  metadataBase: new URL('https://agentic-bfed3b79.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased [--brand:#06b6d4]">
        {children}
      </body>
    </html>
  )
}
