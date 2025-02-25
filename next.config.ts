import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "spaze.com" },
      { protocol: "https", hostname: "eskil.qodeinteractive.com" },
      { protocol: "https", hostname: "mononova.com" },
      { protocol: "https", hostname: "ikea.com" },
    ],
  },
};

export default nextConfig;
