import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // If I am not enable unoptimized in Image component then below image configuration must be needed. Otherwise No need it.
  images: {
    remotePatterns: [
      {
      protocol: "https",
      hostname: "**",
    },
      // {
      //   protocol: "https",
      //   hostname: "example.com",
      //   port: "",
      //   pathname: "/account123/**",
      //   search: "",
      // },
      // {
      //   protocol: "https",
      //   hostname: "encrypted-tbn0.gstatic.com",
      //   // port: "",
      //   // pathname: "/account123/**",
      //   // search: "",
      // },
      // {
      //   protocol: "https",
      //   hostname: "img.magnific.com",
      //   // port: "",
      //   // pathname: "/account123/**",
      //   // search: "",
      // },
      // {
      //   protocol: "https",
      //   hostname: "static.vecteezy.com",
      //   // port: "",
      //   // pathname: "/account123/**",
      //   // search: "",
      // },
      // {
      //   protocol: "https",
      //   hostname: "ats.org",
      //   // port: "",
      //   // pathname: "/account123/**",
      //   // search: "",
      // },
    ],
  },
};

export default nextConfig;
