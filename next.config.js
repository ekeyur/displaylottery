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
      {
        protocol: 'https',
        hostname: 'www.eatthis.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'tobacco-img.stanford.edu',
        port: ''
      },
    ],
  },
}

module.exports = nextConfig
