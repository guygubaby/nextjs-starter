const Unocss = require('@unocss/webpack').default
const AutoImport = require('unplugin-auto-import/webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    dev && (config.cache = false)

    config.plugins = [
      ...config.plugins,
      Unocss(),
      AutoImport({
        dts: true,
        imports: [
          'react',
          'jotai',
        ],
      }),
    ]

    return config
  },
}

module.exports = nextConfig
