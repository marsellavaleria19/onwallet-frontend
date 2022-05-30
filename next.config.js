/** @type {import('next').NextConfig} */
const {NEXT_PUBLIC_APP_URL} = process.env;
const nextConfig = {
   reactStrictMode: true,
   images: {
      domains: ['res.cloudinary.com'],
   },
   env: {
      NEXT_PUBLIC_APP_URL: NEXT_PUBLIC_APP_URL
   }
};

module.exports = nextConfig;
