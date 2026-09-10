import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: {
    // Speed up builds: run `npm run lint` separately
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Speed up builds: run `npm run typecheck` separately
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatar.vercel.sh" },
      { protocol: "https", hostname: "assets.1008.network" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/build",
        destination: "/studio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
