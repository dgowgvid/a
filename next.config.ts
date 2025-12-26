import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 编译器优化
  compiler: {
    // 移除 console 语句（生产环境）
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 图片优化配置
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // 优化包导入
  experimental: {
    optimizePackageImports: ['country-flag-icons'],
  },

  // 生产环境优化
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,

  // React 编译优化
  reactStrictMode: true,
};

export default nextConfig;
