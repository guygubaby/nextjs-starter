/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins = [
      ...config.plugins,
      require('unplugin-icons/webpack')({
        compiler: 'jsx',
        jsx: 'react',
      }),
    ]

    return config
  },
}

module.exports = nextConfig
