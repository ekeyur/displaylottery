/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.galottery.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        port: ''
      },
    ],
  },
}

module.exports = nextConfig
