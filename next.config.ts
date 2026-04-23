import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // 이 줄을 추가하세요!
  images: {
    unoptimized: true, // 정적 배포 시 이미지 최적화 오류 방지
  },
};

export default nextConfig;
