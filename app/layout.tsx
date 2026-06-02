import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BRAND } from "./content/britannica";

export const metadata: Metadata = {
  title: `${BRAND.name} | ${BRAND.tagline}`,
  description:
    "이편한세상동탄 단지 내 영어 소그룹 수업. 미국 언어학 학·석사 기반 초등·프렙·입시 영어.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1221",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
