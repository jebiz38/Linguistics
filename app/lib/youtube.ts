/** YouTube watch / youtu.be / embed URL에서 video ID 추출 */
export function extractYouTubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1).split("/")[0] || null;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const fromQuery = parsed.searchParams.get("v");
      if (fromQuery) return fromQuery;

      const embedMatch = parsed.pathname.match(/^\/embed\/([^/?]+)/);
      if (embedMatch?.[1]) return embedMatch[1];
    }
  } catch {
    return null;
  }

  return null;
}

export function toEmbedUrl(watchUrl: string): string | null {
  const videoId = extractYouTubeVideoId(watchUrl);
  if (!videoId) return null;

  const url = new URL(watchUrl);
  const listId = url.searchParams.get("list");
  let embed = `https://www.youtube.com/embed/${videoId}`;
  if (listId) embed += `?list=${listId}`;
  return embed;
}

export function toThumbnailUrl(
  watchUrl: string,
  quality: "hqdefault" | "maxresdefault" = "hqdefault"
): string | null {
  const videoId = extractYouTubeVideoId(watchUrl);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}
