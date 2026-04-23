/* 러닝 경로: 미니멀 테이블 + 하단 박스 노트(디스클레이머) */
const ROWS = [
  { level: "Foundational", focus: "Pronunciation clarity & core syntax patterns", duration: "8–10 weeks" },
  { level: "Intermediate", focus: "Fluency strategies & discourse structure", duration: "10–12 weeks" },
  { level: "Advanced", focus: "Nuanced meaning, register, and academic style", duration: "12+ weeks" },
  { level: "Specialized", focus: "Exam / research / professional focus areas", duration: "Custom" },
] as const;

export function LearningPathways() {
  return (
    <section
      id="analysis"
      className="scroll-mt-8 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="pathways-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="pathways-heading"
          className="text-balance text-center text-3xl font-bold text-navy sm:text-4xl"
        >
          <span className="block">Structured Learning</span>
          <span className="mt-1 block text-gold sm:mt-2">Pathways</span>
        </h2>
        <div className="mt-10 overflow-x-auto sm:mt-12">
          <table className="w-full min-w-[320px] border-collapse text-left text-sm sm:text-base">
            <caption className="sr-only">Learning levels, focus, and duration</caption>
            <thead>
              <tr className="border-b border-slate-200 text-sm sm:text-base">
                <th scope="col" className="pb-4 pr-4 font-bold text-navy sm:pr-6">
                  Level
                </th>
                <th scope="col" className="pb-4 pr-4 font-normal text-slate-600 sm:pr-6">
                  Focus Area
                </th>
                <th scope="col" className="pb-4 font-normal text-slate-400">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.level} className="border-b border-slate-100 last:border-0">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 pr-4 font-bold text-navy sm:pr-6"
                  >
                    {r.level}
                  </th>
                  <td className="py-4 pr-4 text-slate-600 sm:pr-6">
                    {r.focus}
                  </td>
                  <td className="whitespace-nowrap py-4 text-slate-400">
                    {r.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 rounded-2xl bg-slate-50 p-4 text-pretty text-sm leading-relaxed text-slate-500 sm:p-5 sm:text-[15px]">
          Durations are estimates. Placement and pacing depend on your baseline, goals, and
          available study time. We will adjust the schedule after a short diagnostic
          session.
        </p>
      </div>
    </section>
  );
}
