/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const { config } = require('dotenv');

const getEnv = () => {
  const { parsed } = config(
    process.env.NODE_ENV === 'development' ? { path: './env/.env.development' } : { path: './env/.env.production' },
  );
  return parsed;
};

const nextConfig = withPWA({
  env: getEnv(),
  reactStrictMode: process.env.NODE_ENV !== 'development',
  images: {
    domains: ['res.cloudinary.com', 'via.placeholder.com'],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    // Currently false change afterwards
    appDir: false,
  },
});

module.exports = nextConfig;
