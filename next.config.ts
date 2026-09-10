import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Speed up builds: run `npm run lint` separately
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Speed up builds: run `npm run typecheck` separately
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.unsplash.com", "avatar.vercel.sh", "assets.1008.network"],
  },
};

export default nextConfig;
