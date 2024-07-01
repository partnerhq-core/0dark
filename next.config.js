/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'api.microlink.io', // Microlink Image Preview
    ],
  },
}

module.exports = nextConfig
