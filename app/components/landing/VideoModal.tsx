"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

export function VideoModal({ embedUrl, onClose }: { embedUrl: string; onClose: () => void }) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white"
          aria-label="닫기"
        >
          <X className="h-5 w-5" />
          닫기
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
          <iframe
            src={embedUrl}
            title="말하기 수업"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
