// Curated Pexels stock photos for each chapter — chosen to reflect the
// spiritual theme of the chapter. All URLs are verified to return 200.
// Format: `?auto=compress&cs=tinysrgb&w=1600` gives high-quality, web-optimized images.

export interface ChapterImage {
  // Full URL for the hero/banner image (high quality)
  url: string;
  // Photographer credit (Pexels attribution)
  credit: string;
  // Pexels photo page URL
  creditUrl: string;
}

const px = (id: number, ext: 'jpeg' | 'png' = 'jpeg') =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&w=1600`;

export const chapterImages: Record<number, ChapterImage> = {
  1: {
    // Chapter 1 — Arjuna's Dilemma: battlefield, conflict, dawn
    url: px(38044216),
    credit: 'Pexels — Rishikesh & Ganges at sunrise',
    creditUrl: 'https://www.pexels.com/photo/38044216',
  },
  2: {
    // Chapter 2 — Yoga of Knowledge: eternal soul, wisdom, light
    url: px(33360798),
    credit: 'Pexels — Diya oil lamps glowing',
    creditUrl: 'https://www.pexels.com/photo/33360798',
  },
  3: {
    // Chapter 3 — Yoga of Action: selfless work, motion, duty
    url: px(4084699),
    credit: 'Pexels — Sunlit forest path',
    creditUrl: 'https://www.pexels.com/photo/4084699',
  },
  4: {
    // Chapter 4 — Yoga of Knowledge & Action: divine knowledge, ancient wisdom
    url: px(30696770),
    credit: 'Pexels — Open book with candlelight',
    creditUrl: 'https://www.pexels.com/photo/30696770',
  },
  5: {
    // Chapter 5 — Yoga of Renunciation: lotus leaf, detachment, peace
    url: px(9544355),
    credit: 'Pexels — Pink lotus flower on water',
    creditUrl: 'https://www.pexels.com/photo/9544355',
  },
  6: {
    // Chapter 6 — Yoga of Meditation: meditation, stillness, focus
    url: px(14189966),
    credit: 'Pexels — Silhouette meditating at sunrise',
    creditUrl: 'https://www.pexels.com/photo/14189966',
  },
  7: {
    // Chapter 7 — Yoga of Knowledge & Realization: divine source, all elements
    url: px(33705317),
    credit: 'Pexels — Milky Way starry night sky',
    creditUrl: 'https://www.pexels.com/photo/33705317',
  },
  8: {
    // Chapter 8 — Yoga of the Imperishable: paths of light and darkness
    url: px(34741292),
    credit: 'Pexels — Sunset over Ganges river with boats',
    creditUrl: 'https://www.pexels.com/photo/34741292',
  },
  9: {
    // Chapter 9 — Yoga of Royal Knowledge: all-pervading Divine, devotion
    url: px(37026449),
    credit: 'Pexels — Vibrant Radha Krishna shrine',
    creditUrl: 'https://www.pexels.com/photo/37026449',
  },
  10: {
    // Chapter 10 — Yoga of Divine Glories: greatest of all things, splendor
    url: px(35825625),
    credit: 'Pexels — Vibrant South Indian temple gopuram',
    creditUrl: 'https://www.pexels.com/photo/35825625',
  },
  11: {
    // Chapter 11 — Vision of the Universal Form: cosmic form, countless faces
    url: px(1205301),
    credit: 'Pexels — Milky Way galaxy over landscape',
    creditUrl: 'https://www.pexels.com/photo/1205301',
  },
  12: {
    // Chapter 12 — Yoga of Devotion: pure love, offering, surrender
    url: px(4094847),
    credit: 'Pexels — Woman lighting diya oil lamps',
    creditUrl: 'https://www.pexels.com/photo/4094847',
  },
  13: {
    // Chapter 13 — Field and the Knower: body and soul, inner light
    url: px(14871685),
    credit: 'Pexels — Incense stick burning with smoke',
    creditUrl: 'https://www.pexels.com/photo/14871685',
  },
  14: {
    // Chapter 14 — Three Qualities: sattva, rajas, tamas
    url: px(3222255),
    credit: 'Pexels — Milky Way over mountain silhouette',
    creditUrl: 'https://www.pexels.com/photo/3222255',
  },
  15: {
    // Chapter 15 — Supreme Person: cosmic tree, roots above
    url: px(36634125),
    credit: 'Pexels — Sunbeam through enchanted forest',
    creditUrl: 'https://www.pexels.com/photo/36634125',
  },
  16: {
    // Chapter 16 — Divine & Demoniac Natures: two paths, light vs dark
    url: px(14082700),
    credit: 'Pexels — Starry night sky with Milky Way',
    creditUrl: 'https://www.pexels.com/photo/14082700',
  },
  17: {
    // Chapter 17 — Threefold Faith: faith, food, worship
    url: px(34899896),
    credit: 'Pexels — Traditional Indian brass oil lamps',
    creditUrl: 'https://www.pexels.com/photo/34899896',
  },
  18: {
    // Chapter 18 — Liberation & Renunciation: surrender, final resolve
    url: px(37010564),
    credit: 'Pexels — Krishna and Arjuna sculpture in Rishikesh',
    creditUrl: 'https://www.pexels.com/photo/37010564',
  },
};

// Hero/landing page images — premium, immersive spiritual visuals
export const heroImages = {
  // Main hero background — Krishna & Arjuna chariot sculpture
  main: px(35895553),
  // Secondary hero — Radha Krishna shrine
  shrine: px(37026449),
  // Cosmic — Milky Way
  cosmic: px(33705317),
  // Devotion — Diya lamps
  devotion: px(33360798),
  // Meditation — Sunrise silhouette
  meditation: px(14189966),
  // Temple — Gopuram
  temple: px(35825625),
  // Lotus — peace
  lotus: px(9544355),
  // Ganges — sunrise
  ganges: px(38044216),
};

export function getChapterImage(chapterNumber: number): ChapterImage | undefined {
  return chapterImages[chapterNumber];
}
