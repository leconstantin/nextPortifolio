/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spotlight.tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "vercel.com",
      },
    ],
  },
};

export default nextConfig;
