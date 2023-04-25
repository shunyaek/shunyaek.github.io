/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ["three"],
  reactStrictMode: true,
  experimental: {
    appDir: true,
    runtime: "edge",
  },
}

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA(nextConfig)
