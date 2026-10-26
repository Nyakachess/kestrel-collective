import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // A static site for Cloudflare Pages: `next build` writes out/, nothing runs on a server.
  // The Nest feed is read at build time; a deploy hook rebuilds when Nest changes.
  output: 'export',
  images: { unoptimized: true },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
}

export default nextConfig
