import { Binary, Brain, Languages } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* 세 가지 기둥: 3열 카드 + 루시드 아이콘(골드 on 네이비 박스) */
const PILLARS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Languages,
    title: "Phonology",
    text: "Hear the sound system: stress, intonation, and connected speech patterns that drive intelligibility in real communication.",
  },
  {
    icon: Binary,
    title: "Syntax",
    text: "Build with rules: how clauses combine, what native speakers do automatically, and how to notice what textbooks skip.",
  },
  {
    icon: Brain,
    title: "Cognition",
    text: "Connect language to the mind: memory, pattern recognition, and the mental models that make advanced fluency possible.",
  },
];

export function ThreePillars() {
  return (
    <section
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="pillars-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="pillars-heading"
          className="text-balance text-center text-3xl font-bold text-navy sm:text-4xl"
        >
          <span className="block">Three Pillars of Scientific</span>
          <span className="mt-1 block text-gold sm:mt-2">Language Education</span>
        </h2>
        <ul className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <article className="h-full rounded-2xl border border-slate-100/80 bg-white p-6 shadow-sm shadow-slate-900/5 sm:p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  {text}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
