import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Enable React strict mode for better performance
  reactStrictMode: true,
  // Optimize CSS
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
