import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Required for static site generation
  images: {
    unoptimized: true, // Required for Next.js Image component on static hosting
  },
  // If your repository name is not your username.github.io, you might need a basePath
  // basePath: "/mechanical-portfolio", 
};

export default nextConfig;
