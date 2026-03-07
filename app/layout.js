import './globals.css'
import LayoutShell from '@/components/LayoutShell'

export const metadata = {
  metadataBase: new URL('https://sarahthompsonrealty.com'),
  title: 'Sarah Thompson - Luxury Real Estate Agent | Your Dream Home Awaits',
  description: 'Southern California\'s premier luxury real estate agent. Find your perfect home with personalized service, exclusive listings, and expert market knowledge.',
  keywords: 'luxury real estate, realtor, homes for sale, property listings, buying homes, selling homes, Southern California real estate',
  authors: [{ name: 'Sarah Thompson' }],
  openGraph: {
    title: 'Sarah Thompson - Luxury Real Estate Agent',
    description: 'Find your perfect home with Sarah Thompson. Expert real estate services and exclusive luxury listings.',
    url: 'https://sarahthompsonrealty.com',
    siteName: 'Sarah Thompson Real Estate',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sarah Thompson Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarah Thompson - Luxury Real Estate Agent',
    description: 'Find your perfect home with Sarah Thompson, your luxury real estate expert.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="https://cdn.widgetfied.com/portal.js" as="script" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.widgetfied.com" />
        <link rel="dns-prefetch" href="https://www.widgetfied.com" />
      </head>
      <body className="antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}
