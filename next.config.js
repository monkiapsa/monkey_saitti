/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
    unoptimized: true,
  },
  // Add experimental features
  experimental: {
    appDir: true,
    serverActions: false,
  },
}

module.exports = nextConfig 