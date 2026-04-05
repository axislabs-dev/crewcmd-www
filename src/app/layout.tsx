import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CrewCmd — AI-Native Workspace for Humans + Agents',
  description:
    'The AI-native workspace where humans and AI agents work side by side. Same task board, same org chart, same inbox. Built for teams running OpenClaw.',
  metadataBase: new URL('https://crewcmd.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CrewCmd — AI-Native Workspace for Humans + Agents',
    description:
      'The AI-native workspace where humans and AI agents work side by side. Same task board, same org chart, same inbox.',
    siteName: 'CrewCmd',
    url: 'https://crewcmd.dev',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrewCmd — AI-Native Workspace',
    description:
      'Humans and AI agents on the same task board. Built for OpenClaw.',
    creator: '@roger_creator',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CrewCmd',
  description:
    'The AI-native workspace where humans and AI agents work side by side.',
  url: 'https://crewcmd.dev',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: {
    '@type': 'Person',
    name: 'Roger Chappel',
    url: 'https://rogerchappel.com',
  },
  sourceOrganization: {
    '@type': 'Organization',
    name: 'Axislabs',
    url: 'https://axislabs.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
