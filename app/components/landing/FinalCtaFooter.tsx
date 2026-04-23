import Link from "next/link";

/* 최종 CTA(골드 버튼) + 3열 연락처 + 저작권(디자인: 네이비 풀폭) */
const CONTACT = {
  email: { label: "EMAIL", value: "hello@scilang.academy" },
  phone: { label: "PHONE", value: "+1 (555) 000-0000" },
  location: { label: "LOCATION", value: "Seoul / Online (KST + Online)" },
} as const;

export function FinalCtaFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">
          <span className="block">Ready to unlock the</span>
          <span className="mt-1 block text-gold sm:mt-2">science of language?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-sm leading-relaxed text-white/80 sm:mt-8 sm:text-base">
          Book a short call to share your goals, discuss placement, and receive a
          personalized plan — without generic templates or one-size-fits-all drills.
        </p>
        <Link
          href="mailto:hello@scilang.academy?subject=Consultation"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-navy transition hover:bg-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:mt-10 sm:h-14 sm:px-10"
        >
          Schedule Consultation
        </Link>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 md:gap-8 md:py-16 lg:px-8">
          {(Object.values(CONTACT) as { label: string; value: string }[]).map(
            (item) => (
              <div key={item.label} className="text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {item.label}
                </p>
                <p className="mt-2 break-words text-sm text-white sm:text-base">
                  {item.value}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
      <p className="border-t border-white/5 py-6 text-center text-xs text-slate-500 sm:py-8 sm:text-sm">
        © 2024 Scientific Language Academy. All rights reserved.
      </p>
    </footer>
  );
}
