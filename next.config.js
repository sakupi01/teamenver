const million = require('million/compiler')
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ejkzhsvxsplsaljuquds.supabase.co'],
  },
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ]
  },
}

module.exports = million.next(nextConfig, { auto: true })
