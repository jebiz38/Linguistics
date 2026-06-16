"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { CLASS_VIDEOS } from "@/app/content/britannica";
import { toEmbedUrl, toThumbnailUrl } from "@/app/lib/youtube";
import { VideoModal } from "./VideoModal";

export function ClassVideos() {
  const [activeEmbed, setActiveEmbed] = useState<string | null>(null);

  return (
    <section
      id="class-videos"
      className="scroll-mt-8 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="class-videos-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="class-videos-heading"
          className="text-balance text-center text-3xl font-bold text-navy sm:text-4xl"
        >
          {CLASS_VIDEOS.title}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-center text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          {CLASS_VIDEOS.intro}
        </p>

        <ul className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {CLASS_VIDEOS.videos.map((video) => {
            const thumbnailUrl = toThumbnailUrl(video.youtubeUrl);
            const embedUrl = toEmbedUrl(video.youtubeUrl);

            return (
              <li key={video.id}>
                <button
                  type="button"
                  disabled={!embedUrl || !thumbnailUrl}
                  onClick={() => embedUrl && setActiveEmbed(embedUrl)}
                  className="group w-full text-left disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label={`${video.title} 재생`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-md shadow-slate-900/5 transition group-hover:shadow-lg group-hover:shadow-slate-900/10 group-focus-visible:ring-2 group-focus-visible:ring-gold group-focus-visible:ring-offset-2">
                    {thumbnailUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={thumbnailUrl}
                        alt=""
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-slate-400">
                        썸네일 없음
                      </div>
                    )}
                    <span
                      className="absolute inset-0 bg-navy/20 transition group-hover:bg-navy/30"
                      aria-hidden
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/90 text-white shadow-lg transition group-hover:scale-105 group-hover:bg-navy">
                        <Play className="ml-1 h-6 w-6 fill-current" aria-hidden />
                      </span>
                    </span>
                  </div>
                  <p className="mt-3 text-pretty text-sm font-semibold text-navy sm:text-[15px]">
                    {video.title}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {activeEmbed && (
        <VideoModal embedUrl={activeEmbed} onClose={() => setActiveEmbed(null)} />
      )}
    </section>
  );
}
