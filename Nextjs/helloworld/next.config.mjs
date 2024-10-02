/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a2.espncdn.com",
      },
      {
        protocol: "https",
        hostname: "compote.slate.com",
      },
      {
        protocol: "https",
        hostname: "www.usmagazine.com",
      },
      
    ],
  },
};

export default nextConfig;
