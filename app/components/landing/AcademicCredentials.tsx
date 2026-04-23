/* 학력 섹션: 2열 그리드(모바일 1열), 우측 MA 카드(디자인의 다크 스퀘어) */
export function AcademicCredentials() {
  return (
    <section
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="academic-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Academic Rigor
          </p>
          <h2
            id="academic-heading"
            className="mt-3 text-balance text-3xl font-bold leading-tight text-navy sm:text-4xl"
          >
            <span className="block">Master&apos;s Degree in Linguistics</span>
            <span className="mt-1 block text-gold sm:mt-2">from a U.S. University</span>
          </h2>
          <div className="mt-6 space-y-4 text-pretty text-[15px] leading-relaxed text-slate-600 sm:text-base">
            <p>
              Instruction is grounded in formal linguistics: phonology, syntax,
              semantics, and psycholinguistics. Lessons follow evidence-based
              frameworks, not fads, so you understand why English behaves the
              way it does.
            </p>
            <p>
              Whether you are preparing for research, high-stakes exams, or
              professional communication, you will work with a structured plan
              aligned to your goals and your current level.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm md:mx-0 md:ml-auto">
          <div
            className="min-h-[280px] rounded-2xl bg-navy p-8 text-center shadow-lg shadow-slate-900/15 sm:p-10"
          >
            <p
              className="font-serif text-6xl font-bold leading-none text-gold sm:text-7xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              MA
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold/95">
              Linguistics
            </p>
            <p className="mt-6 border-t border-white/10 pt-6 text-sm text-white/70">
              <span className="block">University of Example</span>
              <span className="mt-1 block text-white/50">(Placeholder)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
