import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/blog/the-ultimate-guide-to-full-body-workouts",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/blog/the-ultimate-guide-to-full-body-workouts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
