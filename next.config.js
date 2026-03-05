/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'via.placeholder.com' },
    ],
  },
  async rewrites() {
    return [
      { source: '/api/tenant-config/:path*', destination: 'https://widgetfied.com/api/tenant-config/:path*' },
      { source: '/api/calendar/:path*', destination: 'https://widgetfied.com/api/calendar/:path*' },
      { source: '/api/payments/:path*', destination: 'https://widgetfied.com/api/payments/:path*' },
      { source: '/api/portal/:path*', destination: 'https://widgetfied.com/api/portal/:path*' },
      { source: '/api/email/:path*', destination: 'https://widgetfied.com/api/email/:path*' },
      { source: '/api/tenants/:path*', destination: 'https://widgetfied.com/api/tenants/:path*' },
    ]
  },
}

module.exports = nextConfig
