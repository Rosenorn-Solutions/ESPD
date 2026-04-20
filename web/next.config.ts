import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        // TODO: Download pyramid image locally and remove this entry
        protocol: "https",
        hostname: "everydaysexismproject.dk",
      },
    ],
  },
}

export default nextConfig;
