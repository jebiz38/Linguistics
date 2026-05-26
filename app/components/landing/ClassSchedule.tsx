import { CalendarDays, Clock } from "lucide-react";
import { SCHEDULE } from "@/app/content/britannica";

export function ClassSchedule() {
  return (
    <section
      id="schedule"
      className="scroll-mt-8 bg-navy px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="schedule-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <CalendarDays className="mx-auto h-8 w-8 text-gold" aria-hidden />
          <h2
            id="schedule-heading"
            className="mt-4 text-3xl font-bold text-balance sm:text-4xl"
          >
            {SCHEDULE.title}
          </h2>
          <p className="mt-2 text-gold font-medium">{SCHEDULE.weekdayNote}</p>
        </div>
        <ol className="mt-10 space-y-4">
          {SCHEDULE.rows.map((row) => (
            <li
              key={row.time}
              className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center sm:gap-6"
            >
              <p className="inline-flex shrink-0 items-center gap-2 font-semibold text-gold sm:w-36">
                <Clock className="h-4 w-4" aria-hidden />
                {row.time}
              </p>
              <p className="text-pretty text-sm leading-relaxed text-white/90 sm:text-base">
                {row.label}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-8 rounded-xl border border-gold/30 bg-gold/10 px-5 py-4 text-center text-sm font-medium text-gold sm:text-base">
          {SCHEDULE.weekendNote}
        </p>
      </div>
    </section>
  );
}
