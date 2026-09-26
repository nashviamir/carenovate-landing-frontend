/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/carenovate-landing-frontend',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;