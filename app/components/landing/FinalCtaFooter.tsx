import { BRAND } from "@/app/content/britannica";

export function FinalCtaFooter() {
  return (
    <footer id="contact" className="scroll-mt-8 bg-navy-deep text-white">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">
          <span className="block">상담 및 수강 문의</span>
          <span className="mt-1 block text-gold sm:mt-2">{BRAND.name}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-sm leading-relaxed text-white/80 sm:text-base">
          소그룹 맞춤 배치 · 레벨 진단 후 수업을 안내합니다.
          <br />
          전화 또는 문자로 편하게 문의해 주세요.
        </p>
        <a
          href={BRAND.phoneHref}
          className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-gold px-10 text-base font-semibold text-navy transition hover:bg-gold/90"
        >
          {BRAND.phone}
        </a>
      </div>
      <p className="border-t border-white/10 py-6 text-center text-xs text-slate-500 sm:py-8 sm:text-sm">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </p>
    </footer>
  );
}
