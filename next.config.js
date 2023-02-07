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
  env: {
    API_KEY: process.env.BASE_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    CONTACTS_MAIL_ADDRESS_FROM: process.env.CONTACTS_MAIL_ADDRESS_FROM,
    CONTACTS_MAIL_ADDRESS_TO: process.env.CONTACTS_MAIL_ADDRESS_TO,
    JOIN_US_MAIL_ADDRESS_FROM: process.env.JOIN_US_MAIL_ADDRESS_FROM,
    JOIN_US_MAIL_ADDRESS_TO: process.env.JOIN_US_MAIL_ADDRESS_TO,
  },
  optimizeFonts: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
