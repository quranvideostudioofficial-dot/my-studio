/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // یہ لائن Vercel پر سرور خرچہ 0 کر دیتی ہے
  distDir: 'out',
  images: {
    unoptimized: true, // Static export کے لیے ضروری
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // FFmpeg.wasm کے لیے headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;