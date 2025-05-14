/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // Disable webpack cache to resolve ENOENT error
  webpack: (config) => {
    config.cache = false;
    return config;
  }
};

module.exports = nextConfig;