import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CrewCmd — AI-Native Workspace for Humans + Agents',
  description:
    'The AI-native workspace where humans and AI agents work side by side. Same task board, same org chart, same inbox. Your team of 3 operates like a team of 30.',
  openGraph: {
    title: 'CrewCmd — AI-Native Workspace',
    description:
      'Your team of 3 operates like a team of 30. Humans and AI agents on the same task board.',
    siteName: 'CrewCmd',
    type: 'website',
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
