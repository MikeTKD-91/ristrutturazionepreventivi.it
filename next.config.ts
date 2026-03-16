import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // ⚠️ NOTA: con output:"export" i redirect qui NON vengono applicati.
  // I redirect 301 per /napoli/ e /caserta/ vanno gestiti nel file vercel.json
};

export default nextConfig;
