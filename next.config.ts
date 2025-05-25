import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/shadcn',
  assetPrefix: '/shadcn',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
