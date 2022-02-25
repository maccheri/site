/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  pageExtensions: ['tsx'],
};

module.exports = nextConfig;
