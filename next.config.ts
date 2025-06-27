import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withPWA(nextConfig);
