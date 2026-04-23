import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scientific Language Academy",
  description: "We teach the logic of language — not just English.",
};

/* 모바일: viewport 고정(반응형 베이스) */
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
    <html lang="en" className="scroll-smooth">
      {/* className: globals.css의 Pretendard + Tailwind font-sans 연동 */}
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
