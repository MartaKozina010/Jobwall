/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],
  experimental: {
    optimizePackageImports: ["@kozina/components"],
  },
}

module.exports = nextConfig
