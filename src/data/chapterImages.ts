// Chapter-specific AI-generated artwork — one bespoke illustration per
// chapter, generated from each chapter's hand-written `artworkPrompt` (see
// chapterMeta.ts) via OpenAI's image model, so every image actually depicts
// that chapter's specific scene/theme rather than a generic stock photo.
// Files live in public/chapter-art/ch-{n}.png.

export interface ChapterImage {
  url: string;
  credit: string;
  creditUrl: string;
}

const artPath = (n: number) => `/chapter-art/ch-${n}.jpg`;

const chapterArtCredit = 'AI-generated illustration for this chapter';

export const chapterImages: Record<number, ChapterImage> = Object.fromEntries(
  Array.from({ length: 18 }, (_, i) => i + 1).map((n) => [
    n,
    { url: artPath(n), credit: chapterArtCredit, creditUrl: '' },
  ])
) as Record<number, ChapterImage>;

// Hero/landing page images — premium, immersive spiritual visuals.
// These remain curated Pexels photography (real places/objects — sunrise
// over the Ganges, temple gopurams, diya lamps — rather than chapter scenes,
// so photography still fits well here).
const px = (id: number, ext: 'jpeg' | 'png' = 'jpeg') =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&w=1600`;

export const heroImages = {
  main: px(35895553),
  shrine: px(37026449),
  cosmic: px(33705317),
  devotion: px(33360798),
  meditation: px(14189966),
  temple: px(35825625),
  lotus: px(9544355),
  ganges: px(38044216),
};

export function getChapterImage(chapterNumber: number): ChapterImage | undefined {
  return chapterImages[chapterNumber];
}
