import { BookOpen, Globe2, Mic2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { INTRODUCTION } from "@/app/content/britannica";

const ROADMAP_ICONS: LucideIcon[] = [BookOpen, Globe2, Mic2];

export function AcademyIntroduction() {
  return (
    <section
      id="about"
      className="scroll-mt-8 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-bold leading-snug text-gold sm:text-lg md:text-xl">
            {INTRODUCTION.eyebrow}
          </p>
          <h2
            id="about-heading"
            className="sr-only"
          >
            Britannica English 소개
          </h2>
          <div className="mt-6 space-y-4">
            {INTRODUCTION.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-[15px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-14 sm:mt-16">
          <h3 className="text-balance text-center text-2xl font-bold text-navy sm:text-3xl">
            {INTRODUCTION.roadmapTitle}
          </h3>
          <ol className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {INTRODUCTION.roadmapSteps.map((roadmapStep, i) => {
              const { step, title, points } = roadmapStep;
              const grades = "grades" in roadmapStep ? roadmapStep.grades : undefined;
              const Icon = ROADMAP_ICONS[i] ?? BookOpen;
              return (
                <li
                  key={step}
                  className="relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-900/5 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                      {step}
                    </span>
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.75} aria-hidden />
                    </div>
                  </div>
                  <div className="mt-5">
                    <h4 className="text-lg font-bold text-navy sm:text-xl">{title}</h4>
                    {grades && (
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">
                        {grades}
                      </p>
                    )}
                  </div>
                  <ul className="mt-5 flex flex-1 flex-col gap-3">
                    {points.map((point) => (
                      <li
                        key={point.slice(0, 28)}
                        className="flex gap-2 text-pretty text-sm leading-relaxed text-slate-600 sm:text-[15px]"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </div>

        <article className="mt-14 rounded-2xl border border-navy/10 bg-navy px-6 py-8 text-white shadow-lg sm:mt-16 sm:px-10 sm:py-10">
          <h3 className="text-balance text-xl font-bold text-gold sm:text-2xl">
            {INTRODUCTION.britannicaTitle}
          </h3>
          <div className="mt-6 space-y-4">
            {INTRODUCTION.britannicaParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-pretty text-sm leading-relaxed text-white/90 sm:text-[15px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
