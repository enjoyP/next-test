import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'tailwindui.com'
      },
    ],
  },
};

export default nextConfig;
