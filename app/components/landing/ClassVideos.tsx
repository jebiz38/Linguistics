"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { CLASS_VIDEOS } from "@/app/content/britannica";
import { toEmbedUrl, toThumbnailUrl } from "@/app/lib/youtube";
import { VideoModal } from "./VideoModal";

function VideoThumbnail({
  label,
  youtubeUrl,
  onPlay,
}: {
  label: string;
  youtubeUrl: string;
  onPlay: (embedUrl: string) => void;
}) {
  const thumbnailUrl = toThumbnailUrl(youtubeUrl);
  const embedUrl = toEmbedUrl(youtubeUrl);

  return (
    <li>
      <button
        type="button"
        disabled={!embedUrl || !thumbnailUrl}
        onClick={() => embedUrl && onPlay(embedUrl)}
        className="group w-full text-left disabled:cursor-not-allowed disabled:opacity-50"
        aria-label={`${label} 재생`}
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
          {label}
        </p>
      </button>
    </li>
  );
}

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
        <div className="mx-auto mt-6 max-w-3xl space-y-3 rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-center text-sm leading-relaxed text-slate-700 sm:text-[15px]">
          <p className="text-pretty">{CLASS_VIDEOS.philosophy.lead}</p>
          <p className="text-pretty">{CLASS_VIDEOS.philosophy.warning}</p>
          <p className="text-pretty">
            <strong className="font-bold text-navy">{CLASS_VIDEOS.philosophy.emphasis}</strong>
          </p>
        </div>
        <p className="mx-auto mt-5 max-w-3xl text-pretty text-center text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          {CLASS_VIDEOS.intro}
        </p>

        <div className="mt-12 space-y-12 sm:mt-14 sm:space-y-14">
          {CLASS_VIDEOS.groups.map((group) => (
            <div key={group.id}>
              <h3 className="text-xl font-bold text-navy sm:text-2xl">{group.title}</h3>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.videos.map((video, index) => (
                  <VideoThumbnail
                    key={video.id}
                    label={`${group.title} ${index + 1}`}
                    youtubeUrl={video.youtubeUrl}
                    onPlay={setActiveEmbed}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {activeEmbed && (
        <VideoModal embedUrl={activeEmbed} onClose={() => setActiveEmbed(null)} />
      )}
    </section>
  );
}
