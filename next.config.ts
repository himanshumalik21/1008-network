import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "avatar.vercel.sh", "assets.1008.network"],
  },
};

export default nextConfig;
