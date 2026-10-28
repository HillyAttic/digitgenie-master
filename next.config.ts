import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Removed invalid turbopack configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'digitgenie.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'digitgenie.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
    ],
  },
}

export default nextConfig