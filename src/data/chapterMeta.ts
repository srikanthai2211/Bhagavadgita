export interface ChapterMeta {
  id: number;
  chapterNumber: number;
  sanskritTitle: string;
  englishTitle: string;
  teluguTitle: string;
  verseCount: number;
  summary: string;
  mainTheme: string;
  artworkPrompt: string;
  gradient: string;
  accent: string;
}

export const chapterMeta: ChapterMeta[] = [
  {
    id: 1,
    chapterNumber: 1,
    sanskritTitle: 'अर्जुनविषादयोग',
    englishTitle: 'Arjuna\'s Dilemma',
    teluguTitle: 'అర్జున విషాద యోగం',
    verseCount: 47,
    summary:
      'On the battlefield of Kurukshetra, Arjuna stands between two armies ready to fight. Seeing his own teachers, cousins, and elders on the opposing side, he is overcome with grief and confusion. He drops his bow, unable to act, and turns to Krishna for guidance.',
    mainTheme: 'Inner conflict and the beginning of wisdom',
    artworkPrompt:
      'A vast golden battlefield at dawn, two armies facing each other, a lone warrior dropping his bow under a soft glowing sky, tension and emotional conflict, cinematic spiritual illustration',
    gradient: 'from-saffron-400 via-saffron-500 to-saffron-700',
    accent: 'saffron',
  },
  {
    id: 2,
    chapterNumber: 2,
    sanskritTitle: 'सांख्ययोग',
    englishTitle: 'The Yoga of Knowledge',
    teluguTitle: 'సాంఖ్య యోగం',
    verseCount: 72,
    summary:
      'Krishna begins teaching Arjuna. He explains that the soul is eternal and never dies, that the body is temporary, and that one must do their duty without fear. This chapter introduces the path of knowledge, selfless action, and steady wisdom.',
    mainTheme: 'The eternal soul and the wisdom of steady mind',
    artworkPrompt:
      'Krishna gently teaching Arjuna under a radiant golden light, a glowing lotus blooming between them, awakening wisdom and clarity, cosmic sky, serene and divine',
    gradient: 'from-marigold-400 via-saffron-500 to-saffron-700',
    accent: 'marigold',
  },
  {
    id: 3,
    chapterNumber: 3,
    sanskritTitle: 'कर्मयोग',
    englishTitle: 'The Yoga of Action',
    teluguTitle: 'కర్మ యోగం',
    verseCount: 43,
    summary:
      'Krishna explains karma yoga — the path of selfless action. He teaches that no one can remain without action even for a moment, and that one should perform their duties without attachment to the results. He speaks of yajna (sacrifice) and the cycle of giving.',
    mainTheme: 'Selfless action and duty without attachment',
    artworkPrompt:
      'A figure moving with purposeful action, flowing energy lines, hands offering and working, golden wheels of motion, sense of duty and movement, dynamic spiritual illustration',
    gradient: 'from-peacock-400 via-peacock-500 to-peacock-700',
    accent: 'peacock',
  },
  {
    id: 4,
    chapterNumber: 4,
    sanskritTitle: 'ज्ञानकर्मसंन्यासयोग',
    englishTitle: 'The Yoga of Knowledge and Action',
    teluguTitle: 'జ్ఞాన కర్మ సన్యాస యోగం',
    verseCount: 42,
    summary:
      'Krishna reveals the ancient lineage of this knowledge and explains divine incarnation (avatar). He describes how the wise see action in inaction and inaction in action, and how knowledge is the greatest purifier of all.',
    mainTheme: 'Divine knowledge and the secret of action',
    artworkPrompt:
      'A cosmic revelation scene, sacred knowledge descending as light, multiple divine forms emerging from a single radiant source, cosmic teaching, glowing sacred geometry',
    gradient: 'from-cosmic-400 via-cosmic-500 to-cosmic-700',
    accent: 'cosmic',
  },
  {
    id: 5,
    chapterNumber: 5,
    sanskritTitle: 'कर्मसंन्यासयोग',
    englishTitle: 'The Yoga of Renunciation',
    teluguTitle: 'కర్మ సన్యాస యోగం',
    verseCount: 29,
    summary:
      'Arjuna asks which is better — renunciation of action or action with devotion. Krishna explains that both lead to the same goal, but the path of selfless action is easier. The wise act without attachment and remain peaceful within.',
    mainTheme: 'Peace through detachment and balanced action',
    artworkPrompt:
      'A calm serene figure standing still amid flowing water and soft light, lotus leaves floating, deep peace and detachment, soft pastel cosmic atmosphere',
    gradient: 'from-peacock-300 via-peacock-400 to-peacock-600',
    accent: 'peacock',
  },
  {
    id: 6,
    chapterNumber: 6,
    sanskritTitle: 'आत्मसंयमयोग',
    englishTitle: 'The Yoga of Meditation',
    teluguTitle: 'ఆత్మ సంయమ యోగం',
    verseCount: 47,
    summary:
      'Krishna teaches the practice of meditation (dhyana yoga). He describes how to sit, focus the mind, and control thoughts. He explains that the mind can be both friend and enemy, and that through steady practice one attains inner peace.',
    mainTheme: 'Meditation, inner focus, and mastering the mind',
    artworkPrompt:
      'A meditating figure in stillness, a single glowing point of light at the heart, soft ripples of calm energy, inner focus and stillness, deep blue cosmic night',
    gradient: 'from-cosmic-500 via-cosmic-600 to-cosmic-800',
    accent: 'cosmic',
  },
  {
    id: 7,
    chapterNumber: 7,
    sanskritTitle: 'ज्ञानविज्ञानयोग',
    englishTitle: 'The Yoga of Knowledge and Realization',
    teluguTitle: 'జ్ఞాన విజ్ఞాన యోగం',
    verseCount: 30,
    summary:
      'Krishna reveals his divine nature — the source of all that exists. He explains the two aspects of his being: the lower material nature and the higher spiritual nature. He describes the four kinds of devotees who seek him.',
    mainTheme: 'Knowing the Divine in all things',
    artworkPrompt:
      'The divine as the source of all creation, elements flowing from a central radiant being, earth water fire air ether, cosmic origin, glowing spiritual illustration',
    gradient: 'from-saffron-500 via-lotus-500 to-lotus-700',
    accent: 'lotus',
  },
  {
    id: 8,
    chapterNumber: 8,
    sanskritTitle: 'अक्षरब्रह्मयोग',
    englishTitle: 'The Yoga of the Imperishable',
    teluguTitle: 'అక్షర బ్రహ్మ యోగం',
    verseCount: 28,
    summary:
      'Krishna explains the imperishable Brahman, the soul, karma, and the supreme abode. He describes the paths of light and darkness — the path of light leads to liberation, the path of darkness leads to rebirth. He teaches the power of remembering the Divine at the moment of death.',
    mainTheme: 'The eternal and the paths after death',
    artworkPrompt:
      'Two paths of light — one bright ascending into golden radiance, one dim descending into soft shadow, a soul journeying, cosmic pathways, ethereal and divine',
    gradient: 'from-cosmic-400 via-cosmic-500 to-saffron-600',
    accent: 'cosmic',
  },
  {
    id: 9,
    chapterNumber: 9,
    sanskritTitle: 'राजविद्याराजगुह्ययोग',
    englishTitle: 'The Yoga of Royal Knowledge',
    teluguTitle: 'రాజవిద్య రాజగుహ్య యోగం',
    verseCount: 34,
    summary:
      'Krishna calls this the most confidential knowledge. He explains that the entire universe is sustained by him, yet he remains beyond it. He welcomes all — even those considered lowly — to approach him with devotion and be freed from sin.',
    mainTheme: 'The all-pervading Divine and devotion for all',
    artworkPrompt:
      'The divine holding and pervading the whole universe like a glowing sphere, all beings within, radiant embrace, royal sacred knowledge, golden cosmic light',
    gradient: 'from-marigold-400 via-saffron-500 to-lotus-600',
    accent: 'marigold',
  },
  {
    id: 10,
    chapterNumber: 10,
    sanskritTitle: 'विभूतियोग',
    englishTitle: 'The Yoga of Divine Glories',
    teluguTitle: 'విభూతి యోగం',
    verseCount: 42,
    summary:
      'Krishna describes his divine manifestations (vibhuti) throughout the universe — the greatest of every category. He is the sun among lights, the Himalaya among mountains, the Ganga among rivers. He reveals that he is the essence of all that is glorious.',
    mainTheme: 'Seeing the Divine in the greatest of all things',
    artworkPrompt:
      'Glorious manifestations — sun, mountains, rivers, ocean, eagle, all glowing with divine essence, a radiant figure at the center, cosmic splendor, golden light',
    gradient: 'from-saffron-400 via-marigold-500 to-saffron-700',
    accent: 'saffron',
  },
  {
    id: 11,
    chapterNumber: 11,
    sanskritTitle: 'विश्वरूपदर्शनयोग',
    englishTitle: 'The Vision of the Universal Form',
    teluguTitle: 'విశ్వరూప దర్శన యోగం',
    verseCount: 55,
    summary:
      'Arjuna asks to see Krishna\'s divine cosmic form. Krishna grants him divine vision and reveals his universal form — with countless faces, eyes, and weapons, containing all beings, all time, and all creation. Arjuna is overwhelmed with awe and fear, then asks Krishna to return to his gentle form.',
    mainTheme: 'The cosmic vision of the Divine in all forms',
    artworkPrompt:
      'A vast cosmic form with countless faces and eyes, the whole universe contained within, blazing divine light, overwhelming awe and wonder, supreme cosmic revelation',
    gradient: 'from-cosmic-500 via-lotus-600 to-saffron-600',
    accent: 'cosmic',
  },
  {
    id: 12,
    chapterNumber: 12,
    sanskritTitle: 'भक्तियोग',
    englishTitle: 'The Yoga of Devotion',
    teluguTitle: 'భక్తి యోగం',
    verseCount: 20,
    summary:
      'Arjuna asks which devotees are greatest — those who worship the formless or those who worship with form. Krishna explains that both reach him, but those who worship with form find it easier. He describes the qualities of a true devotee.',
    mainTheme: 'Devotion and the qualities of a dear devotee',
    artworkPrompt:
      'A devotee offering a flower with pure love, soft warm light, gentle divine presence, devotion and surrender, peaceful and tender spiritual illustration',
    gradient: 'from-lotus-400 via-lotus-500 to-lotus-700',
    accent: 'lotus',
  },
  {
    id: 13,
    chapterNumber: 13,
    sanskritTitle: 'क्षेत्रक्षेत्रज्ञविभागयोग',
    englishTitle: 'The Yoga of the Field and the Knower',
    teluguTitle: 'క్షేత్ర క్షేత్రజ్ఞ విభాగ యోగం',
    verseCount: 35,
    summary:
      'Krishna explains the difference between the body (the field) and the soul (the knower of the field). He describes the field, the knower, knowledge, and the knowable. He explains how the soul dwells in all bodies and how to realize it.',
    mainTheme: 'The body, the soul, and true knowledge',
    artworkPrompt:
      'A glowing figure within a body outline, the field and the knower, light within form, sacred distinction between matter and spirit, contemplative spiritual illustration',
    gradient: 'from-peacock-400 via-cosmic-500 to-cosmic-700',
    accent: 'peacock',
  },
  {
    id: 14,
    chapterNumber: 14,
    sanskritTitle: 'गुणत्रयविभागयोग',
    englishTitle: 'The Yoga of the Three Qualities',
    teluguTitle: 'గుణత్రయ విభాగ యోగం',
    verseCount: 27,
    summary:
      'Krishna explains the three gunas (qualities of nature) — sattva (purity), rajas (passion), and tamas (ignorance). He describes how they bind the soul and how one can rise beyond all three to attain the supreme state.',
    mainTheme: 'The three qualities of nature and rising beyond them',
    artworkPrompt:
      'Three flowing energies — golden purity, fiery passion, dark stillness — intertwining around a luminous soul rising above them, symbolic and elegant',
    gradient: 'from-saffron-400 via-lotus-500 to-cosmic-700',
    accent: 'saffron',
  },
  {
    id: 15,
    chapterNumber: 15,
    sanskritTitle: 'पुरुषोत्तमयोग',
    englishTitle: 'The Yoga of the Supreme Person',
    teluguTitle: 'పురుషోత్తమ యోగం',
    verseCount: 20,
    summary:
      'Krishna describes the cosmic tree with roots above and branches below, and explains how to cut it with the axe of detachment. He reveals himself as the Supreme Person (Purushottama) beyond both the perishable and the imperishable.',
    mainTheme: 'The cosmic tree and the Supreme Person',
    artworkPrompt:
      'An inverted cosmic tree with roots in the heavens and branches reaching down, a luminous figure beyond it, detachment as a glowing axe, sacred and mystical',
    gradient: 'from-cosmic-500 via-cosmic-600 to-saffron-700',
    accent: 'cosmic',
  },
  {
    id: 16,
    chapterNumber: 16,
    sanskritTitle: 'दैवासुरसम्पद्विभागयोग',
    englishTitle: 'The Yoga of Divine and Demoniac Natures',
    teluguTitle: 'దైవాసుర సంపద్విభాగ యోగం',
    verseCount: 24,
    summary:
      'Krishna describes the divine qualities that lead to liberation and the demoniac qualities that lead to bondage. He lists virtues like fearlessness, purity, and non-violence, and warns against greed, anger, and lust as the three gates of darkness.',
    mainTheme: 'Divine and demoniac qualities within us',
    artworkPrompt:
      'Two paths — one of light with virtues glowing as stars, one of shadow with three dark gates, a soul choosing, moral clarity, symbolic and powerful',
    gradient: 'from-saffron-500 via-lotus-600 to-cosmic-800',
    accent: 'lotus',
  },
  {
    id: 17,
    chapterNumber: 17,
    sanskritTitle: 'श्रद्धात्रयविभागयोग',
    englishTitle: 'The Yoga of the Threefold Faith',
    teluguTitle: 'శ్రద్ధాత్రయ విభాగ యోగం',
    verseCount: 28,
    summary:
      'Arjuna asks about those who worship with faith but without following the scriptures. Krishna explains the three kinds of faith — sattvic, rajasic, and tamasic — and how food, sacrifice, austerity, and charity differ according to these qualities.',
    mainTheme: 'Faith, food, and worship according to one\'s nature',
    artworkPrompt:
      'Three forms of offering — pure, passionate, and dull — shown as three flames of different colors, faith as a glowing heart, symbolic and refined',
    gradient: 'from-marigold-400 via-saffron-500 to-lotus-600',
    accent: 'marigold',
  },
  {
    id: 18,
    chapterNumber: 18,
    sanskritTitle: 'मोक्षसंन्यासयोग',
    englishTitle: 'The Yoga of Liberation and Renunciation',
    teluguTitle: 'మోక్ష సన్యాస యోగం',
    verseCount: 78,
    summary:
      'The final chapter summarizes the entire Gita. Krishna explains the true meaning of renunciation and surrender, the five factors of action, the three kinds of knowledge and action, and finally calls Arjuna to surrender completely to him. Arjuna, his doubts gone, rises to act.',
    mainTheme: 'Complete surrender and the path to liberation',
    artworkPrompt:
      'Arjuna rising with renewed resolve, Krishna beside him glowing with divine light, a battlefield transformed into a path of light, surrender and liberation, triumphant and serene',
    gradient: 'from-saffron-400 via-marigold-500 to-lotus-600',
    accent: 'saffron',
  },
];

export const totalVerseCount = chapterMeta.reduce((sum, c) => sum + c.verseCount, 0);
