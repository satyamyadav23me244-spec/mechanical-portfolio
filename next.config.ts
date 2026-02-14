import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // We need this because your site is at /mechanical-portfolio
  basePath: "/mechanical-portfolio",
};

export default nextConfig;
