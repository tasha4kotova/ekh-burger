import withPWA from "next-pwa";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default withPWA({
  ...nextConfig,
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
