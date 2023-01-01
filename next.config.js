const Unocss = require('@unocss/webpack').default

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    dev && (config.cache = false)

    config.plugins = [
      ...config.plugins,
      Unocss(),
    ]

    return config
  },
}

module.exports = nextConfig
