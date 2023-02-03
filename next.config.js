/** @type {import('next').NextConfig} */
const path = require("path");
const webpack = require("webpack");

const { parsed: myEnv } = require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  distDir: "build",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
  optimizeFonts: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
