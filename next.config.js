/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for static site generation
  basePath: '',      // Empty if using custom domain
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 