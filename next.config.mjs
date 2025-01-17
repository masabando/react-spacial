/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  reactStrictMode: false,
  optimizeFonts: false,
  images: {
    unoptimized: true,
  },
  assetPrefix: "/react-spacial",
  basePath: "/react-spacial",
  trailingSlash: true,
};

export default nextConfig;
