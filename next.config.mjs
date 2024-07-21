/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.pixabay.com",
      },
      {
        hostname: "s1.elespanol.com",
      },
      {
        hostname: "img.freepik.com",
      },
      {
        hostname: "res.cloudinary.com"
      }
    ],
  },
};

export default nextConfig;
