"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

/* 이 페이지: 공개 접속 가능한 URL을 QR로 보여주기 위함(로컬호스트만으로는 타인이 접속 불가). */
function useShareUrl() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    // 기본값: 지금 열고 있는 사이트의 origin(같은 PC/같은 WiFi에서 IP로 접속했다면 그 주소가 들어감)
    setUrl((prev) => (prev.length > 0 ? prev : window.location.origin + "/"));
  }, []);

  return { url, setUrl };
}

function isValidHttpUrl(s: string) {
  try {
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export default function ShareQrPage() {
  const { url, setUrl } = useShareUrl();
  const valid = useMemo(() => isValidHttpUrl(url.trim()), [url]);
  const valueForQr = valid ? url.trim() : "https://example.com/";

  return (
    <main className="min-h-[100dvh] bg-navy px-4 py-12 text-white sm:px-6">
      <div className="mx-auto w-full max-w-lg">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Share
        </p>
        <h1 className="mt-2 text-center text-2xl font-semibold text-balance sm:text-3xl">
          페이지 링크 QR
        </h1>
        <p className="mt-3 text-center text-sm leading-relaxed text-white/80">
          <strong className="text-white">http://localhost</strong> 는 본인 기기에서만
          열립니다. 다른 사람이 스캔하려면 같은 Wi-Fi의 IP 주소(예:{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-gold">http://192.168.x.x:3000/</code>
          )나 ngrok, 배포(예: Vercel) URL을 넣으세요.
        </p>

        <label
          className="mt-8 block text-left text-sm font-medium text-white/90"
          htmlFor="share-url"
        >
          QR에 담을 주소
        </label>
        <input
          id="share-url"
          type="url"
          inputMode="url"
          autoComplete="url"
          placeholder="https://…… 또는 http://192.168.……:3000/"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none ring-gold/40 focus:border-gold/50 focus:ring-2"
        />

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              if (typeof window === "undefined") {
                return;
              }
              setUrl(window.location.origin + "/");
            }}
            className="rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/15"
          >
            지금 사이트 주소로 맞추기
          </button>
          <button
            type="button"
            onClick={async () => {
              if (!valid) {
                return;
              }
              try {
                await navigator.clipboard.writeText(url.trim());
                alert("주소를 복사했습니다.");
              } catch {
                /* 클립보드 실패 시 조용히 무시 */
              }
            }}
            disabled={!valid}
            className="rounded-lg border border-gold/50 bg-gold/10 px-3 py-2 text-xs font-medium text-gold transition hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-40"
          >
            주소 복사
          </button>
        </div>

        {!valid && url.trim().length > 0 && (
          <p className="mt-3 text-sm text-amber-200/90">
            http 또는 https로 시작하는 전체 주소를 입력해 주세요.
          </p>
        )}

        <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white p-6 shadow-lg">
          <p className="w-full break-all text-center text-sm text-navy/80">
            {valid ? url.trim() : "올바른 URL을 입력하면 QR이 갱신됩니다."}
          </p>
          {valid && (
            <div className="rounded-lg bg-white p-2" role="img" aria-label="페이지 링크 QR">
              <QRCodeSVG
                value={valueForQr}
                size={240}
                level="M"
                includeMargin
                fgColor="#0B1221"
                bgColor="#ffffff"
              />
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-white/55">
          터널 예:{" "}
          <code className="rounded bg-white/10 px-1 py-0.5">npx ngrok http 3000</code> — 발급된
          <code className="mx-1 rounded bg-white/10 px-1">https</code> 주소를 위에 붙여 넣으면 됩니다.
        </p>

        <p className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-gold underline-offset-4 hover:underline"
          >
            ← 메인으로
          </Link>
        </p>
      </div>
    </main>
  );
}
