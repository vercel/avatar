/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/api/avatar/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
