/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn2.downdetector.com"],
  },
};

module.exports = nextConfig;
