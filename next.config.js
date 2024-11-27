/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@/*': ['*'],
      '@/components/*': ['components/*'],
    },
  },
}

module.exports = nextConfig
