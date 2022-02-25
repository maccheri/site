/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewitres() {
    return [
      {
        source: '',
        destination: '/home',
      },
    ];
  },
  reactStrictMode: true,
  pageExtensions: ['tsx'],
};

module.exports = nextConfig;
