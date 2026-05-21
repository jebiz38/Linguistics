import Image from "next/image";
import Link from "next/link";

/* 히어로: 풀스크린 + 네이비 오버레이 + 중앙 정렬 CTA(디자인 스펙) */
const BOOKS_HERO =
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=80";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src={BOOKS_HERO}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-navy/85"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">
          Scientific Language Academy
        </p>
        <h1
          id="hero-heading"
          className="mt-4 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:mt-6 md:text-5xl lg:text-6xl"
        >
          <span className="block">We don&apos;t just teach English,</span>
          <span className="mt-1 block text-gold md:mt-2">
            we teach the logic of language.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-sm leading-relaxed text-white/90 sm:text-base md:mt-8">
          영어를 가르치지 않습니다. {"'"}언어의 설계도{"'"}를 가르칩니까.</p>
        
        <p className="mt-6 max-w-2xl text-balance text-sm leading-relaxed text-white/90 sm:text-base md:mt-8">
          영문학 전공자가 아닙니다. 미국 현지 8년, 진짜 언어학자(Linguist)의 격이 다른 지도.<br />
          동탄에 없던 전문성. 미국 언어학 학사, 석사가 설계한 모국어 습득 방식의 완성.<br />
          단순 강사가 아닌 언어학자가 가르칩니다. 우리 아이 영어의 근본이 바뀝니다.<br />
        </p>
        <Link
          href="#analysis"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-navy transition hover:bg-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:mt-10 sm:h-14 sm:px-10"
        >
          Get Your Analysis
        </Link>
        <div
          className="mt-16 flex flex-col items-center sm:mt-20 md:mt-24"
          aria-hidden
        >
          <span className="h-16 w-px bg-white/50 sm:h-20" />
        </div>
      </div>
    </section>
  );
}
