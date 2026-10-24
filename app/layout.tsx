import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kestrel Contributors',
  description:
    'Curated open-source tickets, scored evidence and verifiable credentials for learners and staff.',
}

export const viewport: Viewport = {
  themeColor: '#f7f9f9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600&display=swap"
        />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
