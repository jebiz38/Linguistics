import type { ReactNode } from "react";
import { BookOpen, Headphones, PenLine, SpellCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ELEMENTARY, PROGRAMS, PROGRAMS_INTRO } from "@/app/content/britannica";

const AREA_ICONS: LucideIcon[] = [SpellCheck, Headphones, PenLine, BookOpen];

function ProgramCard({
  grades,
  title,
  children,
}: {
  grades: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-900/5 sm:p-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gold">{grades}</p>
        <h3 className="mt-2 text-xl font-bold text-navy sm:text-2xl">{title}</h3>
      </div>
      <div className="mt-5">{children}</div>
    </article>
  );
}

export function LearningPathways() {
  return (
    <section
      id="programs"
      className="scroll-mt-8 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="programs-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="programs-heading"
          className="text-balance text-center text-3xl font-bold text-navy sm:text-4xl"
        >
          수업 프로그램
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-center text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          {PROGRAMS_INTRO}
        </p>

        <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
          {/* 초1 ~ 초6 */}
          <ProgramCard grades={ELEMENTARY.grades} title={ELEMENTARY.title}>
            <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              {ELEMENTARY.intro}
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {ELEMENTARY.areas.map(({ title, text }, i) => {
                const Icon = AREA_ICONS[i] ?? BookOpen;
                return (
                  <li
                    key={title}
                    className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4"
                  >
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy">{title}</h4>
                      <p className="mt-1 text-pretty text-sm leading-relaxed text-slate-600">
                        {text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </ProgramCard>

          {/* 초4~6, 초5~6, 중1~고3 */}
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.id} grades={program.grades} title={program.title}>
              <ul className="flex flex-col gap-3">
                {program.points.map((point) => (
                  <li
                    key={point.slice(0, 24)}
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
            </ProgramCard>
          ))}
        </div>
      </div>
    </section>
  );
}
