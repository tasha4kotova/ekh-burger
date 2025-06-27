import withPWA from "next-pwa";

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
