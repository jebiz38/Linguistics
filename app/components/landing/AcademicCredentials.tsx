import { Award, GraduationCap } from "lucide-react";
import { TEACHER } from "@/app/content/britannica";

export function AcademicCredentials() {
  return (
    <section
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="teacher-heading"
      id="instructor"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start md:gap-16">
        <div>
          <h2
            id="teacher-heading"
            className="text-balance text-3xl font-bold uppercase tracking-wide text-navy sm:text-4xl"
          >
            Instructor
          </h2>
          <p className="mt-3 text-lg font-semibold text-gold sm:text-xl">{TEACHER.title}</p>
          <p className="mt-1 text-sm text-slate-500 sm:text-base">{TEACHER.subtitle}</p>
          <ul className="mt-8 space-y-3">
            {TEACHER.credentials.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-pretty text-[15px] leading-relaxed text-slate-600 sm:text-base"
              >
                <GraduationCap
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  aria-hidden
                />
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          {TEACHER.highlights.map((text) => (
            <article
              key={text}
              className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5 shadow-sm sm:p-6"
            >
              <Award className="h-6 w-6 text-gold" aria-hidden />
              <p className="mt-3 text-pretty text-[15px] leading-relaxed text-navy sm:text-base">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
