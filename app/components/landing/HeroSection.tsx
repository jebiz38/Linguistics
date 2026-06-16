import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { BRAND, HERO } from "@/app/content/britannica";

const BOOKS_HERO =
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=80";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src={BOOKS_HERO}
        alt=""
        fill
        priority
        className="object-cover brightness-[0.35] saturate-[0.85]"
        sizes="100vw"
      />
      {/* 배경 이미지 위 대비: 단색 + 중앙 집중 그라데이션 */}
      <div className="absolute inset-0 bg-navy/80" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/90 to-navy/95"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <div className="w-full rounded-3xl border border-white/10 bg-navy/55 px-6 py-10 shadow-[0_24px_64px_rgba(0,0,0,0.45)] backdrop-blur-md sm:px-10 sm:py-12">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold sm:text-xs drop-shadow-sm">
          {BRAND.tagline}
        </p>
        <h1
          id="hero-heading"
          className="mt-3 text-balance text-4xl font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-5xl md:mt-4 md:text-6xl"
        >
          <span className="block tracking-tight">{BRAND.name}</span>
          <span className="mt-2 block text-2xl font-semibold text-gold sm:text-3xl md:mt-3">
            {HERO.headline}
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-white sm:text-lg md:mt-8">
          {HERO.subline}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/90">
          {HERO.note}
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
          <a
            href={BRAND.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-gold/90"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {BRAND.phone}
          </a>
          <p className="inline-flex max-w-xs items-center justify-center gap-2 text-center text-sm text-white sm:max-w-none">
            <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden />
            {BRAND.location}
          </p>
        </div>
        </div>

        <Link
          href="#class-videos"
          className="mt-10 block text-base font-semibold text-gold underline-offset-4 hover:underline sm:mt-12 sm:text-lg"
        >
          수업 영상 보기
        </Link>
        <div className="mt-10 flex flex-col items-center sm:mt-12" aria-hidden>
          <span className="h-12 w-px bg-white/50 sm:h-16" />
        </div>
      </div>
    </section>
  );
}
