/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'samuele-portfolio-images.s3.eu-central-1.amazonaws.com',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
