/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spotlight.tailwindui.com",
      },
    ],
  },
};

export default nextConfig;
