/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ["three"],
  experimental: {
    appDir: true,
  },
}

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA(nextConfig)
