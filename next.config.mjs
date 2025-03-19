//next.config.mjs

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '6ptotvmi5753.edge.naverncp.com',
        pathname: '/KBO_IMAGE/person/middle/**', // 중간 경로까지 허용
      },
    ],
    // domains: ['via.placeholder.com'], // 허용할 도메인 추가
  },

  webpack: config => {
    // SVG 파일 처리 설정
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default withVanillaExtract(nextConfig);
