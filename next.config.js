const path = require('path');
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com', 'cdn.ipregistry.co', 'img.ltwebstatic.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "shared/_mixins.scss"; @import "shared/_variables.scss"; @import "shared/_functions.scss";`,
  },
  exportPathMap: () => ({
    '/signin': { page: '/sign-in' },
  }),
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
