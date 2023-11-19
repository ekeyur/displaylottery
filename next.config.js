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
        hostname: 'www.sceducationlottery.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'cdn.saucey.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'ulmrzigailrqrumrvhky.supabase.co',
        port: ''
      },
    ],
  },
}

module.exports = nextConfig
