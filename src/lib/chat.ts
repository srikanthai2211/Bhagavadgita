export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatContext {
  chapter?: number;
  verse?: number;
  language?: string;
  level?: string;
}

// Try the real API. Returns null if unavailable / unconfigured.
// The frontend always falls back to offlineReply when null is returned.
export async function tryApiChat(
  messages: ChatMessage[],
  context?: ChatContext
): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, context }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.offline) return null;
    return (data.reply as string) ?? null;
  } catch {
    return null;
  }
}

// ─── Smart offline engine ────────────────────────────────────────────────────
import { chapters, getChapter, getVerse } from '../data/gita';

// Theme definitions: each theme maps to curated verses and a hand-written
// response template. This is the primary matching layer — we check the
// user's question against these themes before falling back to search.
interface ThemeDef {
  keywords: string[];
  build: () => string;
}

const themeDefs: ThemeDef[] = [
  {
    keywords: ['karma', 'karma yoga', 'selfless action', 'action without attachment', 'nishkama'],
    build: () => {
      const v247 = getVerse(2, 47)!;
      const v319 = getVerse(3, 19)!;
      const v35 = getVerse(3, 5)!;
      return `🔄 Karma Yoga — The Path of Selfless Action\n\nThis is the heart of Chapter 3, with roots in Chapter 2. The most famous verse:\n\n"${v247.english}"\n— 2.47\n\n${v247.explanation}\n\n"${v319.english}"\n— 3.19\n\n"${v35.english}"\n— 3.5\n\nFor a student: Study hard every day. The effort is completely yours — the marks are not. That mental freedom is karma yoga in action.`;
    },
  },
  {
    keywords: ['fear', 'fearless', 'fearlessness', 'courage', 'brave', 'afraid', 'scared'],
    build: () => {
      const v161 = getVerse(16, 1)!;
      const v213 = getVerse(2, 13)!;
      const v214 = getVerse(2, 14)!;
      return `💪 Fear and Courage in the Bhagavad Gita\n\nThe very first divine quality Krishna lists is fearlessness:\n\n"${v161.english}"\n— 16.1\n\nThe reason we need not fear — the soul is eternal:\n\n"${v213.english}"\n— 2.13\n\nAnd about handling pain and pleasure calmly:\n\n"${v214.english}"\n— 2.14\n\n${v214.explanation}\n\nCourage in the Gita is not the absence of feeling — it is the steadiness that comes from knowing your true self.`;
    },
  },
  {
    keywords: ['meditat', 'dhyana', 'mind', 'focus', 'concentration', 'stillness', 'calm the mind'],
    build: () => {
      const v635 = getVerse(6, 35)!;
      const v65 = getVerse(6, 5)!;
      const v616 = getVerse(6, 16)!;
      return `🧘 Meditation — Chapter 6 (Dhyana Yoga)\n\nChapter 6 is entirely about training the mind. The famous challenge:\n\n"${v635.english}"\n— 6.35\n\n${v635.explanation}\n\nThe mind as friend or enemy:\n\n"${v65.english}"\n— 6.5\n\nPractical foundation:\n\n"${v616.english}"\n— 6.16\n\nFor young learners: Start with just 5 minutes of sitting quietly, watching your breath. Each time the mind wanders — gently bring it back. That simple act, done daily, is the meditation Krishna teaches.`;
    },
  },
  {
    keywords: ['devotion', 'bhakti', 'love for god', 'worship', 'offer', 'offering'],
    build: () => {
      const v926 = getVerse(9, 26)!;
      const v1213 = getVerse(12, 13)!;
      const v922 = getVerse(9, 22)!;
      return `❤️ Bhakti Yoga — The Path of Devotion\n\nKrishna's most beautiful promise:\n\n"${v926.english}"\n— 9.26\n\n${v926.explanation}\n\nKrishna's care for devoted learners:\n\n"${v922.english}"\n— 9.22\n\nThe qualities of a true devotee:\n\n"${v1213.english}"\n— 12.13\n\nDevotion is not about grand rituals. It is a constant turning of the heart toward what is good, true, and highest — every single day.`;
    },
  },
  {
    keywords: ['soul', 'atma', 'atman', 'spirit', 'eternal', 'self', 'reincarnation', 'rebirth'],
    build: () => {
      const v222 = getVerse(2, 22)!;
      const v213 = getVerse(2, 13)!;
      const v157 = getVerse(15, 7)!;
      return `✨ The Soul (Atman) — Chapter 2 & 15\n\nThe most famous verse on the soul:\n\n"${v222.english}"\n— 2.22\n\n${v222.explanation}\n\n"${v213.english}"\n— 2.13\n\nThe soul as a spark of the Divine:\n\n"${v157.english}"\n— 15.7\n\nUnderstanding the soul takes away the fear of change, loss, and endings — because the real "you" never disappears. This is the most liberating teaching in the entire Gita.`;
    },
  },
  {
    keywords: ['duty', 'dharma', 'responsib', 'right action', 'obligation', 'swadharma'],
    build: () => {
      const v335 = getVerse(3, 35)!;
      const v247 = getVerse(2, 47)!;
      const v48 = getVerse(2, 48)!;
      return `⚖️ Duty (Dharma) in the Bhagavad Gita\n\nOn being true to your own path:\n\n"${v335.english}"\n— 3.35\n\n${v335.explanation}\n\nOn doing duty without being attached to results:\n\n"${v247.english}"\n— 2.47\n\nOn what yoga really means:\n\n"${v48.english}"\n— 2.48\n\nDharma is not just rules. It is your deepest nature — what you are meant to do, done with full heart, without ego.`;
    },
  },
  {
    keywords: ['surrender', 'sharanagati', 'trust in god', 'let go', 'give up to', '18.66', 'sarva dharman'],
    build: () => {
      const v1866 = getVerse(18, 66)!;
      const v1865 = getVerse(18, 65)!;
      return `🙏 Surrender — The Final Teaching (Chapter 18)\n\nThe most important verse in the entire Bhagavad Gita:\n\n"${v1866.english}"\n— 18.66\n\n${v1866.explanation}\n\nKrishna's personal promise just before:\n\n"${v1865.english}"\n— 18.65\n\nSurrender is not giving up. It is releasing the burden of trying to control everything — and trusting that when we do our best with love, we are fully supported.`;
    },
  },
  {
    keywords: ['disciplin', 'habit', 'self-control', 'self control', 'control the mind', 'tapas', 'austerity'],
    build: () => {
      const v262 = getVerse(2, 62)!;
      const v616 = getVerse(6, 16)!;
      const v1621 = getVerse(16, 21)!;
      return `🎯 Discipline and Self-Control\n\nHow habits form — the chain to watch:\n\n"${v262.english}"\n— 2.62\n\n${v262.explanation}\n\nThe foundation of all practice:\n\n"${v616.english}"\n— 6.16\n\nThe three things that destroy discipline:\n\n"${v1621.english}"\n— 16.21\n\nFor young people: your habits shape your mind, your mind shapes your actions, your actions shape your life. The Gita says — guard what you repeatedly think about.`;
    },
  },
  {
    keywords: ['peace', 'stress', 'calm', 'anxiety', 'worry', 'happy', 'happiness', 'contentment', 'shanti'],
    build: () => {
      const v266 = getVerse(2, 66)!;
      const v214 = getVerse(2, 14)!;
      const v256 = getVerse(2, 56)!;
      return `🌸 Peace — What the Gita Teaches\n\nThe chain from balance to happiness:\n\n"${v266.english}"\n— 2.66\n\n${v266.explanation}\n\nOn enduring changing circumstances:\n\n"${v214.english}"\n— 2.14\n\nThe description of a truly peaceful person:\n\n"${v256.english}"\n— 2.56\n\nPeace is not found by avoiding difficulty. It grows inside a mind trained to be steady — in both good times and hard ones.`;
    },
  },
  {
    keywords: ['knowledge', 'wisdom', 'jnana', 'learn', 'education', 'teach', 'teacher', 'guru'],
    build: () => {
      const v438 = getVerse(4, 38)!;
      const v434 = getVerse(4, 34)!;
      return `💡 Knowledge and Wisdom — Chapter 4\n\n"${v438.english}"\n— 4.38\n\n${v438.explanation}\n\nHow to receive real knowledge:\n\n"${v434.english}"\n— 4.34\n\n${v434.explanation}\n\nWisdom in the Gita is not just information. It is understanding that changes how you live. The Gita says this kind of knowledge — earned through sincere practice — purifies the heart more than any ritual.`;
    },
  },
  {
    keywords: ['guna', 'gunas', 'sattva', 'rajas', 'tamas', 'three qualities', 'qualities of nature'],
    build: () => {
      const v145 = getVerse(14, 5)!;
      return `⚗️ The Three Gunas — Chapter 14\n\n"${v145.english}"\n— 14.5\n\n${v145.explanation}\n\nThe three qualities:\n• Sattva (purity) — clarity, calmness, wisdom\n• Rajas (passion) — energy, ambition, restlessness\n• Tamas (inertia) — dullness, laziness, confusion\n\nAll three exist in every person — what varies is which dominates. The goal is to cultivate sattva, use rajas wisely, and reduce tamas. Chapter 14 describes how to rise beyond all three.`;
    },
  },
  {
    keywords: ['yoga', 'yogi', 'union', 'path', 'spiritual path'],
    build: () => {
      const v48 = getVerse(2, 48)!;
      const v65 = getVerse(6, 5)!;
      const v23 = getVerse(2, 3)!;
      return `🧩 Yoga in the Bhagavad Gita\n\n"Yoga" in the Gita does not mean stretching exercises. It means union — aligning your mind, action, and heart with what is highest.\n\nOn what yoga really means:\n\n"${v48.english}"\n— 2.48\n\nThe mind as friend or enemy:\n\n"${v65.english}"\n— 6.5\n\nKrishna's first call to Arjuna:\n\n"${v23.english}"\n— 2.3\n\nThe Gita describes four main paths:\n• Karma Yoga — action without attachment (Ch 3)\n• Jnana Yoga — the path of knowledge (Ch 4)\n• Bhakti Yoga — the path of devotion (Ch 12)\n• Dhyana Yoga — meditation (Ch 6)\n\nAll four lead to the same goal: a steady, free, and loving mind.`;
    },
  },
  {
    keywords: ['arjuna', 'who is arjuna', 'arjuna doubt', 'arjuna confusion'],
    build: () => {
      const v147 = getVerse(1, 47)!;
      const v207 = getVerse(2, 7)!;
      return `🏹 Arjuna — The Hero of the Gita\n\nArjuna is a great warrior prince, the third of the five Pandava brothers. On the battlefield of Kurukshetra, he faces a terrible crisis — he must fight his own cousins, teachers, and elders.\n\nHis breakdown:\n\n"${v147.english}"\n— 1.47\n\nHis surrender to Krishna:\n\n"${v207.english}"\n— 2.7\n\nArjuna represents each one of us — facing difficult choices, confused about what is right. The Gita is Krishna's answer to Arjuna's confusion, and through Arjuna, to all of us.`;
    },
  },
  {
    keywords: ['krishna', 'who is krishna', 'lord krishna', 'supreme'],
    build: () => {
      const v1011 = getVerse(10, 11)!;
      const v934 = getVerse(9, 34)!;
      return `🦚 Krishna — The Divine Teacher\n\nIn the Bhagavad Gita, Krishna is both Arjuna's charioteer friend and the Supreme Divine speaking the eternal wisdom. He is the guide who helps Arjuna see clearly.\n\nKrishna's love for his devotees:\n\n"${v1011.english}"\n— 10.11\n\nThe essence of all teaching:\n\n"${v934.english}"\n— 9.34\n\nKrishna is not a distant God — he is the friend who is always with you, guiding you from within, especially when you feel lost.`;
    },
  },
  {
    keywords: ['detachment', 'detach', 'letting go', 'non-attachment', 'vairagya'],
    build: () => {
      const v247 = getVerse(2, 47)!;
      const v262 = getVerse(2, 62)!;
      const v157 = getVerse(15, 7)!;
      return `🔗 Detachment (Vairagya) in the Gita\n\nDetachment does not mean not caring. It means doing your best without being enslaved by the results.\n\nThe key verse:\n\n"${v247.english}"\n— 2.47\n\nHow attachment grows:\n\n"${v262.english}"\n— 2.62\n\n${v262.explanation}\n\nThe root of attachment:\n\n"${v157.english}"\n— 15.7\n\nDetachment is freedom — you act fully, love fully, but do not collapse when things change.`;
    },
  },
  {
    keywords: ['compassion', 'kindness', 'mercy', 'daya', 'kind'],
    build: () => {
      const v1213 = getVerse(12, 13)!;
      const v161 = getVerse(16, 1)!;
      return `🤝 Compassion and Kindness\n\nThe Gita lists compassion as a key divine quality:\n\n"${v1213.english}"\n— 12.13\n\n${v1213.explanation}\n\nFearlessness and compassion go together:\n\n"${v161.english}"\n— 16.1\n\nTrue compassion comes from seeing the same divine in all beings. It is not pity — it is respect and care.`;
    },
  },
  {
    keywords: ['truth', 'satya', 'honesty', 'honest'],
    build: () => {
      const v1014 = getVerse(10, 4)!;
      return `⚖️ Truth in the Bhagavad Gita\n\nTruth (Satya) is one of the most important divine qualities. The Gita teaches that truth is not just speaking facts — it is living in alignment with what is real and right.\n\nOn the power of truth:\n\n"${v1014.english}"\n— 10.4\n\n${v1014.explanation}\n\nTruth that is pleasant and beneficial is the highest truth. The Gita encourages us to speak truth with kindness — never truth that hurts.`;
    },
  },
  {
    keywords: ['faith', 'shraddha', 'belief', 'trust'],
    build: () => {
      const v439 = getVerse(4, 39)!;
      const v440 = getVerse(4, 40)!;
      return `🌟 Faith (Shraddha) in the Gita\n\nFaith is the foundation of all spiritual growth:\n\n"${v439.english}"\n— 4.39\n\n${v439.explanation}\n\nThe danger of doubt:\n\n"${v440.english}"\n— 4.40\n\nFaith in the Gita is not blind belief — it is the openness of heart that lets wisdom enter. Without faith, even the brightest knowledge cannot take root.`;
    },
  },
  {
    keywords: ['anger', 'anger management', 'rage', 'krodha', 'frustration'],
    build: () => {
      const v262 = getVerse(2, 62)!;
      const v263 = getVerse(2, 63)!;
      return `😤 Anger — What the Gita Says\n\nThe Gita gives a clear chain of how anger destroys wisdom:\n\n"${v262.english}"\n— 2.62\n\n${v262.explanation}\n\nThe full chain:\n\n"${v263.english}"\n— 2.63\n\nThe Gita's advice: notice anger when it is small — as a tiny irritation — before it grows. A steady mind sees anger arising and chooses not to act from it.`;
    },
  },
  {
    keywords: ['death', 'dying', 'after death', 'what happens after death', 'mortality'],
    build: () => {
      const v222 = getVerse(2, 22)!;
      const v223 = getVerse(2, 23)!;
      const v224 = getVerse(2, 24)!;
      return `🕊️ Death and the Eternal Soul\n\nThe Gita's most comforting teaching — the soul never dies:\n\n"${v222.english}"\n— 2.22\n\n${v222.explanation}\n\n"${v223.english}"\n— 2.23\n\n"${v224.english}"\n— 2.24\n\nFor young people: the body changes, but the real "you" — the conscious self — is eternal. Understanding this removes the deepest fear.`;
    },
  },
  {
    keywords: ['equanimity', 'sameness', 'balance', 'samatva', 'steady mind', 'even-minded'],
    build: () => {
      const v248 = getVerse(2, 48)!;
      const v256 = getVerse(2, 56)!;
      const v215 = getVerse(2, 15)!;
      return `⚖️ Equanimity (Samatva) — The Steady Mind\n\nEquanimity is one of the Gita's key teachings — a mind that stays steady in joy and sorrow, success and failure.\n\nThe definition of yoga:\n\n"${v248.english}"\n— 2.48\n\n${v248.explanation}\n\nThe one who is truly steady:\n\n"${v256.english}"\n— 2.56\n\nOn enduring the pairs of opposites:\n\n"${v215.english}"\n— 2.15\n\nEquanimity is not numbness — it is strength. It is the ability to feel fully without being swept away.`;
    },
  },
  {
    keywords: ['sacrifice', 'yajna', 'offering', 'service', 'seva'],
    build: () => {
      const v312 = getVerse(3, 12)!;
      const v325 = getVerse(3, 25)!;
      return `🔥 Sacrifice (Yajna) — The Spirit of Giving\n\nThe Gita teaches that life works in a cycle of giving and receiving:\n\n"${v312.english}"\n— 3.12\n\n${v312.explanation}\n\nOn the duty of selfless action:\n\n"${v325.english}"\n— 3.25\n\nYajna in the Gita is not just fire rituals — it is the spirit of offering your work, your knowledge, your care to the world without expecting return.`;
    },
  },
  {
    keywords: ['types of faith', 'three kinds of faith', 'sattvic faith', 'rajasic faith', 'tamasic faith'],
    build: () => {
      const v173 = getVerse(17, 3)!;
      return `🌟 Three Kinds of Faith — Chapter 17\n\nThe Gita teaches that faith varies according to one's nature:\n\n"${v173.english}"\n— 17.3\n\n${v173.explanation}\n\n• Sattvic faith — faith in purity, truth, and the divine\n• Rajasic faith — faith driven by desire and ambition\n• Tamasic faith — faith in fear, darkness, or destruction\n\nThe Gita says: your faith shapes your life. Cultivate sattvic faith — faith in what is good, true, and highest.`;
    },
  },
  {
    keywords: ['food', 'eating', 'diet', 'ahara', 'sattvic food'],
    build: () => {
      const v178 = getVerse(17, 8)!;
      const v1710 = getVerse(17, 10)!;
      return `🍽️ Food in the Bhagavad Gita — Chapter 17\n\nThe Gita classifies food into three types:\n\nSattvic (promotes life, clarity, strength):\n\n"${v178.english}"\n— 17.8\n\nTamasic (dulls the mind):\n\n"${v1710.english}"\n— 17.10\n\nThe Gita teaches that what we eat affects our mind. Fresh, wholesome, moderately prepared food supports clarity and meditation.`;
    },
  },
  {
    keywords: ['gift', 'charity', 'dana', 'giving', 'donation', 'tapas'],
    build: () => {
      const v1720 = getVerse(17, 20)!;
      const v1722 = getVerse(17, 22)!;
      return `🎁 Charity (Dana) — The Right Way to Give\n\nThe Gita describes the right way to give:\n\n"${v1720.english}"\n— 17.20\n\n${v1720.explanation}\n\nThe wrong way:\n\n"${v1722.english}"\n— 17.22\n\nThe best giving is: given at the right time, to the right person, with respect, and without expecting anything in return.`;
    },
  },
  {
    keywords: ['who am i', 'real self', 'true nature', 'identity', 'who are we'],
    build: () => {
      const v222 = getVerse(2, 22)!;
      const v224 = getVerse(2, 24)!;
      const v157 = getVerse(15, 7)!;
      return `🪔 Who Are You? — The Gita's Answer\n\nYou are not the body. You are not the mind. You are the eternal soul (Atman).\n\n"${v222.english}"\n— 2.22\n\n${v222.explanation}\n\n"${v224.english}"\n— 2.24\n\nThe soul as a spark of the Divine:\n\n"${v157.english}"\n— 15.7\n\nWhen you know "I am the soul" — not the body, not the thoughts, not the roles — you become free. Nothing in the world can shake you.`;
    },
  },
  {
    keywords: ['purpose of life', 'goal of life', 'meaning of life', 'why am i here', 'life purpose'],
    build: () => {
      const v247 = getVerse(2, 47)!;
      const v934 = getVerse(9, 34)!;
      const v1866 = getVerse(18, 66)!;
      return `🎯 The Purpose of Life — According to the Gita\n\nThe Gita teaches that life's purpose is to discover your true self and act in alignment with it.\n\nDo your duty with full heart, without attachment:\n\n"${v247.english}"\n— 2.47\n\nLove the Divine fully:\n\n"${v934.english}"\n— 9.34\n\nAnd ultimately, surrender all to the Divine:\n\n"${v1866.english}"\n— 18.66\n\nThe purpose is not to achieve something — it is to BECOME something: a person of steady wisdom, compassion, and freedom.`;
    },
  },
  {
    keywords: ['relationship', 'family', 'attachment to family', 'love for family'],
    build: () => {
      const v128 = getVerse(1, 28)!;
      const v224 = getVerse(2, 24)!;
      return `👨‍👩‍👧‍👦 Family and Relationships in the Gita\n\nArjuna's crisis begins with family attachment:\n\n"${v128.english}"\n— 1.28\n\n${v128.explanation}\n\nThe Gita does not say to stop loving family — it says to love with wisdom, knowing the true self is eternal:\n\n"${v224.english}"\n— 2.24\n\nLove fully, but remember: the real person in your loved one is the soul — eternal, unchanging. This understanding deepens love while freeing you from fear.`;
    },
  },
  {
    keywords: ['work', 'job', 'career', 'profession', 'studies', 'exam', 'school'],
    build: () => {
      const v247 = getVerse(2, 47)!;
      const v335 = getVerse(3, 35)!;
      const v319 = getVerse(3, 19)!;
      return `💼 Work and Studies — The Gita's Guidance\n\nThe Gita's teaching on work applies directly to studies and career:\n\nDo your best, without attachment to results:\n\n"${v247.english}"\n— 2.47\n\n${v247.explanation}\n\nFollow your own path, not someone else's:\n\n"${v335.english}"\n— 3.35\n\nAct, because action is unavoidable:\n\n"${v319.english}"\n— 3.19\n\nFor students: Study with full effort. The effort is yours — the result is not. This freedom from anxiety about marks actually helps you perform better.`;
    },
  },
  {
    keywords: ['depression', 'sad', 'sadness', 'hopeless', 'despair', 'grief', 'sorrow', 'mourning'],
    build: () => {
      const v262 = getVerse(2, 62)!;
      const v263 = getVerse(2, 63)!;
      const v266 = getVerse(2, 66)!;
      return `💙 Overcoming Sadness — The Gita's Comfort\n\nThe Gita acknowledges sorrow but offers a path through it:\n\nThe chain that leads to suffering:\n\n"${v262.english}"\n— 2.62\n\n"${v263.english}"\n— 2.63\n\nThe key — a steady mind finds happiness:\n\n"${v266.english}"\n— 2.66\n\n${v266.explanation}\n\nFor anyone feeling low: the Gita says you are not your feelings. Feelings come and go like clouds. The real you — the soul — is always steady, always whole. Reach out to someone you trust, and take small steps. Even Krishna started by simply listening to Arjuna.`;
    },
  },
  {
    keywords: ['comparison', 'jealousy', 'envy', 'compare'],
    build: () => {
      const v335 = getVerse(3, 35)!;
      const v1612 = getVerse(16, 12)!;
      return `🔄 Comparison and Jealousy — The Gita's View\n\nComparison is the thief of joy. The Gita addresses this:\n\nOn being true to your own path:\n\n"${v335.english}"\n— 3.35\n\n${v335.explanation}\n\nOn the trap of endless desire:\n\n"${v1612.english}"\n— 16.12\n\nThe Gita says: your path is unique. Comparing yourself to others is like comparing a fish's ability to climb a tree. Focus on being the best version of YOU — not a copy of someone else.`;
    },
  },
  {
    keywords: ['forgiveness', 'forgive', 'kshama', 'letting go of hurt'],
    build: () => {
      const v1613 = getVerse(16, 3)!;
      const v1213 = getVerse(12, 13)!;
      return `🤲 Forgiveness in the Bhagavad Gita\n\nForgiveness (Kshama) is a key divine quality:\n\n"${v1613.english}"\n— 16.3\n\n${v1613.explanation}\n\nThe qualities of a true devotee:\n\n"${v1213.english}"\n— 12.13\n\nForgiveness in the Gita is not weakness — it is strength. It is the choice to release the burden of resentment and free yourself to live fully.`;
    },
  },
  {
    keywords: ['cosmic form', 'vishwaroopa', 'universal form', 'vishwa rupa', '11.5', '11.7', '11.9'],
    build: () => {
      const v115 = getVerse(11, 5)!;
      const v117 = getVerse(11, 7)!;
      return `🌌 The Cosmic Form (Vishwaroopa) — Chapter 11\n\nIn Chapter 11, Krishna shows Arjuna his universal form:\n\n"${v115.english}"\n— 11.5\n\n${v115.explanation}\n\n"${v117.english}"\n— 11.7\n\nThis vision shows that the Divine is not just a person — it is the entire universe, all forms, all times, all beings. It is overwhelming and awe-inspiring. Arjuna sees that Krishna is not just his friend — he is the source of everything.`;
    },
  },
  {
    keywords: ['sannyasa', 'renunciation', 'monk', 'renounce', 'sannyasi'],
    build: () => {
      const v51 = getVerse(5, 1)!;
      const v52 = getVerse(5, 2)!;
      const v1866 = getVerse(18, 66)!;
      return `🏔️ Renunciation (Sannyasa) in the Gita\n\nThe Gita discusses two paths:\n\n"${v51.english}"\n— 5.1\n\n${v51.explanation}\n\n"${v52.english}"\n— 5.2\n\nThe Gita's conclusion: you do not need to run away from life to grow spiritually. True renunciation is inner — letting go of attachment while living fully in the world. The highest teaching:\n\n"${v1866.english}"\n— 18.66`;
    },
  },
  {
    keywords: ['three types of action', 'three kinds of action', 'sattvic action', 'rajasic action', 'tamasic action'],
    build: () => {
      const v1723 = getVerse(17, 23)!;
      const v1725 = getVerse(17, 25)!;
      return `⚡ Three Types of Action — Chapter 17\n\nThe Gita classifies action by the guna (quality) behind it:\n\nThe key to all action:\n\n"${v1723.english}"\n— 17.23\n\nSattvic action — done without attachment, without love or hate:\n\n"${v1725.english}"\n— 17.25\n\nThe Gita teaches that the same action can be done in three different spirits. What matters is not just what you do, but the consciousness behind it.`;
    },
  },
  {
    keywords: ['desire', 'lust', 'kama', 'craving', 'wanting'],
    build: () => {
      const v262 = getVerse(2, 62)!;
      const v263 = getVerse(2, 63)!;
      const v370 = getVerse(3, 70)!;
      return `🔥 Desire — The Gita's Teaching\n\nThe Gita traces the chain of how desire destroys wisdom:\n\n"${v262.english}"\n— 2.62\n\n${v262.explanation}\n\n"${v263.english}"\n— 2.63\n\nThe one who is truly steady:\n\n"${v370.english}"\n— 3.70\n\nThe Gita does not say to suppress desire — it says to understand it. Desire is endless; fulfilling one creates ten more. The path is to redirect desire toward the highest — the Divine — and let lesser desires fall away naturally.`;
    },
  },
  {
    keywords: ['ego', 'ahankara', 'pride', 'arrogance', 'i-ness'],
    build: () => {
      const v1671 = getVerse(16, 1)!;
      const v1621 = getVerse(16, 21)!;
      return `🎭 Ego (Ahankara) — The Gita's View\n\nEgo is the false sense of "I am the doer." The Gita lists it among the qualities to overcome:\n\n"${v1671.english}"\n— 16.1\n\n${v1671.explanation}\n\nThe three gates to darkness:\n\n"${v1621.english}"\n— 16.21\n\nThe Gita teaches: you are not the doer — the Divine acts through you. When you act with this understanding, ego dissolves and humility grows. Humility is not thinking less of yourself — it is thinking of yourself less.`;
    },
  },
  {
    keywords: ['war', 'battle', 'kurukshetra', 'fight', 'mahabharata'],
    build: () => {
      const v11 = getVerse(1, 1)!;
      const v121 = getVerse(1, 21)!;
      const v147 = getVerse(1, 47)!;
      return `⚔️ The Battlefield of Kurukshetra\n\nThe Gita is set on a battlefield, but it is not really about war — it is about the inner battle we all face.\n\nThe opening:\n\n"${v11.english}"\n— 1.1\n\nArjuna asks to see the armies:\n\n"${v121.english}"\n— 1.21\n\nHis crisis:\n\n"${v147.english}"\n— 1.47\n\nKurukshetra is the field of dharma — the field of choosing right over wrong. Every person faces their own Kurukshetra: the moment when doing the right thing is hard. The Gita is Krishna's guide for that moment.`;
    },
  },
  {
    keywords: ['love', 'pure love', 'divine love', 'prema'],
    build: () => {
      const v926 = getVerse(9, 26)!;
      const v934 = getVerse(9, 34)!;
      const v1011 = getVerse(10, 11)!;
      return `❤️ Love in the Bhagavad Gita\n\nThe Gita's teaching on love is beautiful and simple:\n\n"${v926.english}"\n— 9.26\n\n${v926.explanation}\n\nThe essence of all teaching:\n\n"${v934.english}"\n— 9.34\n\nKrishna's love for his devotees:\n\n"${v1011.english}"\n— 10.11\n\nLove in the Gita is not emotion — it is the steady turning of the heart toward the Divine, expressed through every action. It is the highest path.`;
    },
  },
  {
    keywords: ['surrender to god', 'surrender to divine', 'god surrender', 'take refuge'],
    build: () => {
      const v1866 = getVerse(18, 66)!;
      const v1865 = getVerse(18, 65)!;
      const v207 = getVerse(2, 7)!;
      return `🙏 Surrender to the Divine\n\nThe most important verse in the entire Gita:\n\n"${v1866.english}"\n— 18.66\n\n${v1866.explanation}\n\nKrishna's personal promise:\n\n"${v1865.english}"\n— 18.65\n\nArjuna's surrender that began the teaching:\n\n"${v207.english}"\n— 2.7\n\nSurrender (Sharanagati) is not giving up. It is releasing the burden of trying to control everything — and trusting that when we do our best with love, we are fully supported.`;
    },
  },
  {
    keywords: ['types of devotee', 'four types of devotees', 'who worships god', 'caturvidha'],
    build: () => {
      const v916 = getVerse(9, 16)!;
      return `👥 Four Types of Devotees — Chapter 9\n\nThe Gita describes four kinds of people who turn to the Divine:\n\n"${v916.english}"\n— 9.16\n\n${v916.explanation}\n\nThe four types:\n• The distressed (arta) — who seek relief from suffering\n• The seeker of knowledge (jnani) — who wants to understand truth\n• The seeker of wealth (artharthi) — who prays for success\n• The wise (jnani) — who loves the Divine for the Divine's sake\n\nThe Gita says all four are noble, but the wise devotee is dearest — because they love without wanting anything in return.`;
    },
  },
  {
    keywords: ['creation', 'how was the world created', 'origin of the universe', 'cosmic tree'],
    build: () => {
      const v151 = getVerse(15, 1)!;
      const v157 = getVerse(15, 7)!;
      return `🌳 The Cosmic Tree and Creation — Chapter 15\n\nThe Gita describes creation as an upside-down tree:\n\n"${v151.english}"\n— 15.1\n\n${v151.explanation}\n\nThe soul in the body:\n\n"${v157.english}"\n— 15.7\n\nThe Gita teaches that the visible world is like a vast tree with roots above (in the Divine) and branches below (in the material world). To find freedom, one must cut through this tree with the axe of detachment.`;
    },
  },
  {
    keywords: ['impermanence', 'change', 'everything changes', 'transient'],
    build: () => {
      const v214 = getVerse(2, 14)!;
      const v215 = getVerse(2, 15)!;
      const v216 = getVerse(2, 16)!;
      return `🌊 Impermanence — The Gita's Teaching\n\nThe Gita teaches us to accept the changing nature of life:\n\n"${v214.english}"\n— 2.14\n\n${v214.explanation}\n\n"${v215.english}"\n— 2.15\n\n"${v216.english}"\n— 2.16\n\nFor young people: everything changes — feelings, friendships, seasons, even your own body. The Gita says: do not fear change. The real you — the soul — never changes. Everything else is like clouds passing in the sky.`;
    },
  },
  {
    keywords: ['stressed', 'stress', 'overwhelmed', 'pressure', 'burnout'],
    build: () => {
      const v266 = getVerse(2, 66)!;
      const v616 = getVerse(6, 16)!;
      const v617 = getVerse(6, 17)!;
      return `🌿 When You Feel Stressed — The Gita's Advice\n\nThe Gita offers practical wisdom for stress:\n\n"${v266.english}"\n— 2.66\n\n${v266.explanation}\n\nThe foundation of balance:\n\n"${v616.english}"\n— 6.16\n\n"${v617.english}"\n— 6.17\n\nThe Gita's formula: moderate sleep, moderate eating, moderate work, moderate play. Extremes burn you out. Balance sustains you. And when stress comes — remember: this too will pass. The soul is always steady.`;
    },
  },
  {
    keywords: ['decision', 'choice', 'right decision', 'confused', 'confusion', 'dilemma'],
    build: () => {
      const v207 = getVerse(2, 7)!;
      const v247 = getVerse(2, 47)!;
      const v335 = getVerse(3, 35)!;
      return `🤔 Making Difficult Decisions — The Gita's Guidance\n\nArjuna faced the ultimate dilemma. His path:\n\n"${v207.english}"\n— 2.7\n\n${v207.explanation}\n\nDo your best, release the result:\n\n"${v247.english}"\n— 2.47\n\nFollow your own dharma, not someone else's:\n\n"${v335.english}"\n— 3.35\n\n${v335.explanation}\n\nWhen confused: 1) Pause and breathe. 2) Ask for guidance (like Arjuna did). 3) Listen to your deepest values, not your fears. 4) Act with full heart, and let go of the outcome.`;
    },
  },
  {
    keywords: ['gratitude', 'thankful', 'grateful'],
    build: () => {
      const v926 = getVerse(9, 26)!;
      const v927 = getVerse(9, 27)!;
      return `🙏 Gratitude in the Bhagavad Gita\n\nThe Gita teaches that everything we receive is a gift:\n\n"${v926.english}"\n— 9.26\n\n${v926.explanation}\n\nWhatever you do, offer it as a gift:\n\n"${v927.english}"\n— 9.27\n\nGratitude in the Gita is not just saying "thank you" — it is the understanding that every breath, every ability, every moment is given. When you live with this awareness, even small actions become sacred.`;
    },
  },
  {
    keywords: ['patience', 'waiting', 'tolerance', 'titiksha'],
    build: () => {
      const v214 = getVerse(2, 14)!;
      const v215 = getVerse(2, 15)!;
      return `⏳ Patience — The Gita's Teaching\n\nThe Gita calls patience "titiksha" — the capacity to endure without complaint:\n\n"${v214.english}"\n— 2.14\n\n${v214.explanation}\n\n"${v215.english}"\n— 2.15\n\nPatience in the Gita is not passive waiting — it is active steadiness. It is the strength to stay calm and clear while things unfold. The Gita says: endure heat and cold, pleasure and pain — they come and go. The one who is steady through them all is truly wise.`;
    },
  },
  {
    keywords: ['humility', 'humble', 'modesty', 'vinamra'],
    build: () => {
      const v434 = getVerse(4, 34)!;
      const v439 = getVerse(4, 39)!;
      return `🙇 Humility in the Bhagavad Gita\n\nHumility is the doorway to all wisdom:\n\n"${v434.english}"\n— 4.34\n\n${v434.explanation}\n\n"${v439.english}"\n— 4.39\n\n${v439.explanation}\n\nHumility in the Gita is not thinking less of yourself — it is thinking of yourself less. It is the openness that says "I do not know — teach me." Arjuna's humility at the start of Chapter 2 is what made the entire Gita possible.`;
    },
  },
  {
    keywords: ['service', 'seva', 'helping others', 'selfless service'],
    build: () => {
      const v325 = getVerse(3, 25)!;
      const v312 = getVerse(3, 12)!;
      return `🤲 Service (Seva) — The Gita's Teaching\n\nThe Gita teaches that selfless service is a path to the Divine:\n\n"${v325.english}"\n— 3.25\n\n${v325.explanation}\n\nThe cycle of giving:\n\n"${v312.english}"\n— 3.12\n\nService in the Gita is not just helping — it is helping without expecting anything in return. When you serve this way, you are freed from ego and you discover the joy of giving itself.`;
    },
  },
  {
    keywords: ['meditation practice', 'how to meditate', 'meditation steps', 'dhyana yoga practice'],
    build: () => {
      const v611 = getVerse(6, 11)!;
      const v612 = getVerse(6, 12)!;
      const v616 = getVerse(6, 16)!;
      const v635 = getVerse(6, 35)!;
      return `🧘 How to Meditate — The Gita's Instructions (Chapter 6)\n\nKrishna gives Arjuna a practical guide:\n\nFind a clean, quiet place:\n\n"${v611.english}"\n— 6.11\n\nSit and focus the mind:\n\n"${v612.english}"\n— 6.12\n\n${v612.explanation}\n\nModeration is key:\n\n"${v616.english}"\n— 6.16\n\nWhen the mind wanders (and it will):\n\n"${v635.english}"\n— 6.35\n\n${v635.explanation}\n\nFor beginners: Start with 5 minutes. Sit comfortably, back straight. Watch your breath. When the mind wanders — gently bring it back. That gentle returning IS the practice.`;
    },
  },
  {
    keywords: ['wisdom', 'wise person', 'sthitaprajna', 'person of steady wisdom', 'stable mind'],
    build: () => {
      const v255 = getVerse(2, 55)!;
      const v256 = getVerse(2, 56)!;
      const v257 = getVerse(2, 57)!;
      return `🪔 The Person of Steady Wisdom (Sthitaprajna)\n\nThe Gita describes the ideal person — one of steady wisdom:\n\n"${v255.english}"\n— 2.55\n\n${v255.explanation}\n\n"${v256.english}"\n— 2.56\n\n"${v257.english}"\n— 2.57\n\n${v257.explanation}\n\nThis is the Gita's portrait of a mature person: not someone who feels nothing, but someone who feels everything and remains steady. Their joy does not depend on circumstances — it comes from within.`;
    },
  },
  {
    keywords: ['types of knowledge', 'what is knowledge', 'vidya', 'avidya'],
    build: () => {
      const v438 = getVerse(4, 38)!;
      const v434 = getVerse(4, 34)!;
      const v433 = getVerse(4, 33)!;
      return `📚 Knowledge (Vidya) in the Gita\n\nThe Gita distinguishes between ordinary knowledge and wisdom:\n\n"${v433.english}"\n— 4.33\n\n${v433.explanation}\n\n"${v438.english}"\n— 4.38\n\n${v438.explanation}\n\nHow to receive knowledge:\n\n"${v434.english}"\n— 4.34\n\nThe Gita says: there is nothing as purifying as knowledge. But knowledge must be lived — not just collected. Wisdom is knowledge that has become part of you.`;
    },
  },
  {
    keywords: ['satsang', 'company of the wise', 'spiritual community', 'sangha'],
    build: () => {
      const v1014 = getVerse(10, 4)!;
      const v434 = getVerse(4, 34)!;
      return `👥 Spiritual Company (Satsang)\n\nThe Gita values the company of the wise:\n\n"${v434.english}"\n— 4.34\n\n${v434.explanation}\n\nOn the qualities that support wisdom:\n\n"${v1014.english}"\n— 10.4\n\nSatsang — being in the company of truth — is one of the most powerful supports for spiritual growth. When you are with people who value wisdom, kindness, and truth, those qualities grow in you naturally.`;
    },
  },
  {
    keywords: ['mantra', 'chanting', 'japa', 'om', 'aum', 'name of god'],
    build: () => {
      const v914 = getVerse(9, 14)!;
      const v934 = getVerse(9, 34)!;
      return `📿 Chanting and Mantra in the Gita\n\nThe Gita mentions the power of repeating the divine name:\n\n"${v914.english}"\n— 9.14\n\n${v914.explanation}\n\nThe essence of all practice:\n\n"${v934.english}"\n— 9.34\n\nChanting (japa) is a simple, powerful practice. Repeat a divine name or phrase that is meaningful to you. It calms the mind and opens the heart. The Gita says: whatever you do, whatever you offer, let it be filled with remembrance of the Divine.`;
    },
  },
  {
    keywords: ['nature of god', 'who is god', 'what is god', 'divine nature', 'supreme being'],
    build: () => {
      const v1011 = getVerse(10, 11)!;
      const v1012 = getVerse(10, 12)!;
      const v934 = getVerse(9, 34)!;
      return `🌌 Who Is God? — The Gita's Answer\n\nThe Gita describes the Divine as the source of all:\n\n"${v1012.english}"\n— 10.12\n\n${v1012.explanation}\n\nKrishna's love for all beings:\n\n"${v1011.english}"\n— 10.11\n\nThe essence of worship:\n\n"${v934.english}"\n— 9.34\n\nThe Gita teaches that God is not a distant figure — God is the source of everything, the innermost self of all beings, and the goal of all paths. You can reach the Divine through knowledge, action, devotion, or meditation — all paths lead to the same One.`;
    },
  },
  {
    keywords: ['suffering', 'pain', 'why do we suffer', 'dukha', 'hardship'],
    build: () => {
      const v214 = getVerse(2, 14)!;
      const v215 = getVerse(2, 15)!;
      const v266 = getVerse(2, 66)!;
      return `💔 Suffering — The Gita's Understanding\n\nThe Gita acknowledges suffering but offers a path through it:\n\n"${v214.english}"\n— 2.14\n\n${v214.explanation}\n\n"${v215.english}"\n— 2.15\n\nThe root of suffering:\n\n"${v266.english}"\n— 2.66\n\n${v266.explanation}\n\nThe Gita says: suffering comes from attachment — wanting things to be different than they are. The path is not to avoid pain (impossible) but to develop a steady mind that can hold pain without being broken by it.`;
    },
  },
  {
    keywords: ['goal', 'moksha', 'liberation', 'freedom', 'mukti', 'enlightenment'],
    build: () => {
      const v251 = getVerse(2, 51)!;
      const v259 = getVerse(2, 59)!;
      const v1866 = getVerse(18, 66)!;
      return `🕊️ Liberation (Moksha) — The Gita's Goal\n\nThe Gita's ultimate goal is liberation — freedom from suffering and the cycle of birth and death:\n\n"${v251.english}"\n— 2.51\n\n${v251.explanation}\n\n"${v259.english}"\n— 2.59\n\nThe final key:\n\n"${v1866.english}"\n— 18.66\n\nLiberation in the Gita is not escaping the world — it is being free IN the world. Free from attachment, free from ego, free from fear. It is living fully, loving fully, acting fully — with a mind that is steady and a heart that is at peace.`;
    },
  },
  {
    keywords: ['prayer', 'how to pray', 'talking to god'],
    build: () => {
      const v926 = getVerse(9, 26)!;
      const v934 = getVerse(9, 34)!;
      const v1011 = getVerse(10, 11)!;
      return `🙏 Prayer in the Bhagavad Gita\n\nThe Gita's teaching on prayer is simple and beautiful:\n\n"${v926.english}"\n— 9.26\n\n${v926.explanation}\n\nThe essence of prayer:\n\n"${v934.english}"\n— 9.34\n\nKrishna's response to sincere prayer:\n\n"${v1011.english}"\n— 10.11\n\nPrayer in the Gita is not about asking for things — it is about offering yourself. "Whatever I do, whatever I am, I offer to you." This kind of prayer transforms the heart and brings peace.`;
    },
  },
  {
    keywords: ['good and evil', 'divine and demonic', 'daivi and asuri', 'virtue and vice'],
    build: () => {
      const v161 = getVerse(16, 1)!;
      const v164 = getVerse(16, 4)!;
      const v1621 = getVerse(16, 21)!;
      return `⚖️ Good and Evil — Chapter 16\n\nThe Gita describes two natures — divine and demonic:\n\nDivine qualities:\n\n"${v161.english}"\n— 16.1\n\n${v161.explanation}\n\nDemonic qualities:\n\n"${v164.english}"\n— 16.4\n\nThe three gates to darkness:\n\n"${v1621.english}"\n— 16.21\n\nThe Gita says: these are not two types of people — they are two tendencies within every person. The path is to cultivate the divine and let go of the demonic, step by step.`;
    },
  },
  {
    keywords: ['types of renunciation', 'five factors', 'samkhya', 'what is renunciation'],
    build: () => {
      const v182 = getVerse(18, 2)!;
      const v185 = getVerse(18, 5)!;
      return `📖 Renunciation — The Gita's Nuanced View\n\nThe Gita distinguishes between two kinds:\n\n"${v182.english}"\n— 18.2\n\n${v182.explanation}\n\nThe three actions never to give up:\n\n"${v185.english}"\n— 18.5\n\nThe Gita's conclusion: true renunciation is not giving up action — it is giving up attachment to the fruits of action. You act, you serve, you give — but you do not cling to the results.`;
    },
  },
  {
    keywords: ['five factors of action', 'how action happens', 'adhibhuta', 'adhidaiva'],
    build: () => {
      const v1814 = getVerse(18, 14)!;
      return `⚙️ The Five Factors of Action\n\nThe Gita explains that every action involves five factors:\n\n"${v1814.english}"\n— 18.14\n\n${v1814.explanation}\n\nThe five: the place of action, the doer, the instruments, the effort, and the Divine. The Gita says: understanding this frees you from ego. You are not the sole doer — you are one part of a vast process. Do your part fully, and let the rest unfold.`;
    },
  },
  {
    keywords: ['varna', 'four varnas', 'caste', 'four orders of society', 'caturvarnya'],
    build: () => {
      const v413 = getVerse(4, 13)!;
      return `👥 The Four Varnas — The Gita's Teaching\n\nThe Gita describes four natural types of people based on qualities and work:\n\n"${v413.english}"\n— 4.13\n\n${v413.explanation}\n\nThe four types:\n• Brahmins — teachers, knowledge-seekers (sattvic)\n• Kshatriyas — leaders, protectors (rajasic-sattvic)\n• Vaishyas — producers, traders (rajasic)\n• Shudras — workers, service (tamasic-rajasic)\n\nThe Gita teaches that these are natural tendencies, not birth-based castes. What matters is your nature and your work — not the family you were born into. The Gita's vision is of a society where each person does the work that fits their nature.`;
    },
  },
  {
    keywords: ['devotional path', 'path of love', 'bhakti marga', 'how to love god'],
    build: () => {
      const v926 = getVerse(9, 26)!;
      const v934 = getVerse(9, 34)!;
      const v1213 = getVerse(12, 13)!;
      const v1220 = getVerse(12, 20)!;
      return `❤️ The Devotional Path (Bhakti Marga)\n\nThe Gita describes the path of devotion:\n\n"${v926.english}"\n— 9.26\n\n${v926.explanation}\n\nThe essence:\n\n"${v934.english}"\n— 9.34\n\nThe qualities of a true devotee:\n\n"${v1213.english}"\n— 12.13\n\n${v1213.explanation}\n\n"${v1220.english}"\n— 12.20\n\nBhakti is the simplest and most direct path. You do not need to be a scholar or a monk. Simply turn your heart to the Divine in everything — and the Divine takes care of the rest.`;
    },
  },
  {
    keywords: ['jnana yoga', 'path of knowledge', 'how to gain wisdom', 'knowledge path'],
    build: () => {
      const v434 = getVerse(4, 34)!;
      const v438 = getVerse(4, 38)!;
      const v439 = getVerse(4, 39)!;
      return `💡 Jnana Yoga — The Path of Knowledge\n\nThe Gita describes the path of knowledge:\n\n"${v434.english}"\n— 4.34\n\n${v434.explanation}\n\n"${v438.english}"\n— 4.38\n\n${v438.explanation}\n\n"${v439.english}"\n— 4.39\n\nJnana Yoga is the path of inquiry — asking "Who am I? What is real? What is eternal?" It is not about collecting information but about seeing through illusion. The path requires humility, a teacher, and sincere practice.`;
    },
  },
  {
    keywords: ['karma yoga path', 'path of action', 'how to work spiritually', 'work as worship'],
    build: () => {
      const v247 = getVerse(2, 47)!;
      const v319 = getVerse(3, 19)!;
      const v335 = getVerse(3, 35)!;
      const v325 = getVerse(3, 25)!;
      return `🔄 Karma Yoga — The Path of Action\n\nKarma Yoga is doing your duty without attachment to results:\n\n"${v247.english}"\n— 2.47\n\n${v247.explanation}\n\n"${v319.english}"\n— 3.19\n\nFollow your own path:\n\n"${v335.english}"\n— 3.35\n\n${v335.explanation}\n\nAct as a service:\n\n"${v325.english}"\n— 3.25\n\nKarma Yoga is the most practical path for people living in the world. You do not need to leave your life — you transform HOW you live it. Every action becomes an offering.`;
    },
  },
  {
    keywords: ['three gunas summary', 'how gunas bind', 'guna bondage', 'triguna'],
    build: () => {
      const v145 = getVerse(14, 5)!;
      const v146 = getVerse(14, 6)!;
      const v147 = getVerse(14, 7)!;
      return `⚗️ The Three Gunas — How They Bind Us\n\nThe Gita explains how the three qualities bind the soul:\n\n"${v145.english}"\n— 14.5\n\n${v145.explanation}\n\nSattva binds through attachment to happiness and knowledge:\n\n"${v146.english}"\n— 14.6\n\nRajas binds through action and desire:\n\n"${v147.english}"\n— 14.7\n\nThe Gita says: all three — even sattva — are binders. The goal is to rise beyond all three, to a state of pure awareness, free from the gunas. This is the highest teaching of Chapter 14.`;
    },
  },
  {
    keywords: ['how to be free', 'freedom from bondage', 'moksha how', 'liberation path'],
    build: () => {
      const v251 = getVerse(2, 51)!;
      const v145 = getVerse(14, 5)!;
      const v1866 = getVerse(18, 66)!;
      return `🕊️ How to Be Free — The Gita's Path\n\nFreedom comes from non-attachment:\n\n"${v251.english}"\n— 2.51\n\n${v251.explanation}\n\nUnderstand the gunas that bind:\n\n"${v145.english}"\n— 14.5\n\nThe ultimate key:\n\n"${v1866.english}"\n— 18.66\n\n${v1866.explanation}\n\nFreedom in the Gita is not escaping the world — it is being free IN the world. Free from the grip of desire, ego, and attachment. You act, you love, you serve — but you are not bound by the results.`;
    },
  },
  {
    keywords: ['types of surrender', 'saranagati how', 'how to surrender', 'prapatti'],
    build: () => {
      const v1866 = getVerse(18, 66)!;
      const v1862 = getVerse(18, 62)!;
      const v207 = getVerse(2, 7)!;
      return `🙏 How to Surrender — The Gita's Teaching\n\nThe final instruction:\n\n"${v1866.english}"\n— 18.66\n\n${v1866.explanation}\n\nThe call to surrender:\n\n"${v1862.english}"\n— 18.62\n\nArjuna's surrender that began the teaching:\n\n"${v207.english}"\n— 2.7\n\nSurrender (Prapatti) in the Gita is not passivity. It is the active choice to let go of the burden of "I am the doer" and trust the Divine. You do your best — and you trust that the Divine takes care of the rest. This trust is the highest freedom.`;
    },
  },
  {
    keywords: ['krishna says', 'what does krishna say', 'krishna teaching', 'krishna wisdom'],
    build: () => {
      const v247 = getVerse(2, 47)!;
      const v934 = getVerse(9, 34)!;
      const v1866 = getVerse(18, 66)!;
      return `🦚 Krishna's Core Teachings\n\nKrishna's most important teachings in the Gita:\n\nOn action:\n\n"${v247.english}"\n— 2.47\n\n${v247.explanation}\n\nOn devotion:\n\n"${v934.english}"\n— 9.34\n\nOn surrender:\n\n"${v1866.english}"\n— 18.66\n\n${v1866.explanation}\n\nThese three verses capture the essence of the Gita: act without attachment, love the Divine fully, and surrender all to the Divine. This is the path to peace, freedom, and joy.`;
    },
  },
  {
    keywords: ['gita summary', 'summarize gita', 'gita essence', 'core teaching'],
    build: () => {
      const v247 = getVerse(2, 47)!;
      const v934 = getVerse(9, 34)!;
      const v1866 = getVerse(18, 66)!;
      return `📖 The Essence of the Bhagavad Gita\n\nThe Gita is a dialogue between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra. Arjuna is confused and afraid — he does not know whether to fight his own family. Krishna's answers become one of history's greatest spiritual teachings.\n\n18 chapters · 700 verses · Timeless wisdom\n\nThe three core teachings:\n\n1. Act without attachment to results:\n"${v247.english}"\n— 2.47\n\n2. Love the Divine fully:\n"${v934.english}"\n— 9.34\n\n3. Surrender completely:\n"${v1866.english}"\n— 18.66\n\nThe Gita's message: you are the eternal soul. Do your duty with love. Surrender the results to the Divine. This is the path to peace and freedom.`;
    },
  },
  {
    keywords: ['what is the gita', 'about gita', 'introduction to gita', 'tell me about gita', 'what is bhagavad gita'],
    build: () => {
      const v247 = getVerse(2, 47)!;
      return `📖 The Bhagavad Gita\n\nThe Gita is a dialogue between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra. Arjuna is confused and afraid — he does not know whether to fight his own family. Krishna's answers become one of history's greatest spiritual teachings.\n\n18 chapters · 700 verses · Timeless wisdom\n\nKey teachings:\n• The soul is eternal — don't fear change (2.22)\n• Do your duty without attachment to results (2.47)\n• Train the mind — it is your best friend (6.5)\n• Offer everything with love — even a leaf (9.26)\n• Surrender completely — be free (18.66)\n\nThe most famous verse:\n"${v247.english}"\n\nWhich chapter or theme would you like to explore?`;
    },
  },
];

// Stop-words excluded from keyword search so common words don't produce false matches.
const stopWords = new Set([
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'what', 'who', 'whom', 'whose', 'which', 'why', 'when', 'where', 'how',
  'do', 'does', 'did', 'doing', 'done', 'have', 'has', 'had', 'having',
  'can', 'could', 'should', 'would', 'will', 'shall', 'may', 'might',
  'this', 'that', 'these', 'those', 'there', 'their', 'they', 'them',
  'you', 'your', 'yours', 'i', 'me', 'my', 'mine', 'we', 'us', 'our',
  'and', 'or', 'but', 'not', 'no', 'nor', 'so', 'if', 'then', 'than',
  'of', 'in', 'on', 'at', 'to', 'for', 'with', 'from', 'by', 'about',
  'as', 'into', 'like', 'through', 'after', 'over', 'between', 'out',
  'up', 'down', 'off', 'again', 'further', 'here', 'now', 'also',
  'just', 'only', 'very', 'much', 'more', 'most', 'some', 'any', 'all',
  'tell', 'me', 'explain', 'give', 'show', 'want', 'know', 'think',
  'please', 'help', 'need', 'make', 'get', 'got', 'say', 'said',
  'according', 'gita', 'bhagavad', 'krishna', 'arjuna', 'verse', 'chapter',
]);

export function offlineReply(userText: string, _context?: ChatContext): string {
  const lower = userText.toLowerCase();

  // ── Greetings ──
  if (/^(hello|hi|namaste|hey|hare|jai)\b/i.test(lower)) {
    return `Namaste! 🙏 I am Ask Gita AI, your friendly Bhagavad Gita guide.\n\nYou can ask me:\n• "Explain verse 2.47"\n• "Summarize Chapter 6 for kids"\n• "What does Krishna say about karma?"\n• "Tell me about fear and courage"\n• "Explain in Telugu"\n• "What is the Bhagavad Gita?"\n\nWhat would you like to explore?`;
  }

  // ── Verse reference e.g. "2.47" or "chapter 2 verse 47" ──
  const directVerse = userText.match(/\b(\d{1,2})[.:]\s*(\d{1,3})\b/);
  const longVerse   = lower.match(/chapter\s+(\d{1,2})[,\s]+verse\s+(\d{1,3})/);
  const vRef = longVerse ?? directVerse;
  if (vRef) {
    const ch = parseInt(vRef[1], 10);
    const vn = parseInt(vRef[2], 10);
    const verse = getVerse(ch, vn);
    if (verse) {
      const chapter = getChapter(ch)!;
      return `📖 Bhagavad Gita ${ch}.${vn} — ${chapter.englishTitle}\n\nSanskrit:\n${verse.sanskrit}\n\nEnglish:\n${verse.english}\n\nతెలుగు:\n${verse.telugu}\n\nSimple Explanation:\n${verse.explanation}\n\nTakeaway: ✨ ${verse.takeaway}`;
    }
  }

  // ── Chapter summary ──
  const chMatch = lower.match(/chapter\s*(\d{1,2})/);
  if (chMatch) {
    const num = parseInt(chMatch[1], 10);
    const ch = getChapter(num);
    if (ch) {
      const highlight = ch.verses.find(v => v.tags.includes('wisdom') || v.tags.includes('action')) ?? ch.verses[Math.floor(ch.verses.length / 2)];
      return `📚 Chapter ${ch.chapterNumber}: ${ch.englishTitle}\n${ch.teluguTitle} · ${ch.sanskritTitle}\n\n${ch.summary}\n\nMain theme: ${ch.mainTheme}\nVerses: ${ch.verseCount}\n\nA highlight verse (${ch.chapterNumber}.${highlight.verseNumber}):\n"${highlight.english}"\n\nTakeaway: ${highlight.takeaway}\n\nWould you like me to explain any specific verse from this chapter?`;
    }
  }

  // ── Telugu request ──
  if (lower.includes('telugu') || lower.includes('తెలుగు') || lower.includes('in telugu')) {
    if (vRef) {
      const ch = parseInt(vRef[1], 10); const vn = parseInt(vRef[2], 10);
      const verse = getVerse(ch, vn);
      if (verse) return `Bhagavad Gita ${ch}.${vn} — తెలుగు వివరణ:\n\nతెలుగు అనువాదం:\n${verse.telugu}\n\nవివరణ:\n${verse.explanation}\n\nముఖ్యమైన విషయం: ${verse.takeaway}`;
    }
    if (chMatch) {
      const ch = getChapter(parseInt(chMatch[1], 10));
      if (ch) return `అధ్యాయం ${ch.chapterNumber}: ${ch.teluguTitle}\n\n${ch.summary}\n\nముఖ్య విషయం: ${ch.mainTheme}`;
    }
    const v247 = getVerse(2, 47)!;
    return `తెలుగులో భగవద్గీత వివరణ:\n\nఉదాహరణగా, 2.47వ శ్లోకం:\n\n${v247.telugu}\n\nవివరణ: ${v247.explanation}\n\nముఖ్యమైన విషయం: ${v247.takeaway}\n\nమీరు ఏ అధ్యాయం లేదా శ్లోకం తెలుసుకోవాలనుకుంటున్నారు?`;
  }

  // ── Chapter title / theme matching ──
  // Match queries like "tell me about the yoga of knowledge" or "what is sankhya yoga"
  // against chapter titles and main themes.
  for (const ch of chapters) {
    const titleLower = ch.englishTitle.toLowerCase();
    const themeLower = ch.mainTheme.toLowerCase();
    // Match multi-word chapter titles (e.g. "sankhya yoga", "karma yoga")
    if (titleLower.length > 6 && lower.includes(titleLower)) {
      const highlight = ch.verses.find(v => v.tags.includes('wisdom') || v.tags.includes('action')) ?? ch.verses[Math.floor(ch.verses.length / 2)];
      return `📚 Chapter ${ch.chapterNumber}: ${ch.englishTitle}\n${ch.teluguTitle}\n\n${ch.summary}\n\nMain theme: ${ch.mainTheme}\n\nA key verse (${ch.chapterNumber}.${highlight.verseNumber}):\n"${highlight.english}"\n\nTakeaway: ${highlight.takeaway}\n\nWould you like me to explain any specific verse from this chapter?`;
    }
    if (themeLower.length > 6 && lower.includes(themeLower) && !chMatch) {
      return `📚 Chapter ${ch.chapterNumber}: ${ch.englishTitle} — Theme: ${ch.mainTheme}\n\n${ch.summary}\n\nWould you like to explore the verses from this chapter?`;
    }
  }

  // ── Theme matching (scored) ──
  // Score each theme by how many of its keywords appear in the user's question.
  // Pick the highest-scoring theme. This avoids first-match-wins false positives
  // (e.g. "how do I love my family" should match "family", not "love").
  let bestTheme: ThemeDef | null = null;
  let bestScore = 0;
  for (const theme of themeDefs) {
    let score = 0;
    for (const kw of theme.keywords) {
      if (kw.includes(' ')) {
        // Multi-word keyword: substring match is fine
        if (lower.includes(kw)) score += 2;
      } else if (kw.length <= 4) {
        // Short keyword: require word boundary to avoid false hits (e.g. "kind" in "mankind")
        if (new RegExp(`\\b${kw}\\b`, 'i').test(userText)) score += 1;
      } else {
        // Longer keyword: substring match is acceptable
        if (lower.includes(kw)) score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestTheme = theme;
    }
  }
  if (bestTheme && bestScore > 0) {
    return bestTheme.build();
  }

  // ── Keyword search across verse dataset (fallback) ──
  // Only trigger when the question has meaningful spiritual keywords.
  const words = lower
    .replace(/[^\w\s\u0C00-\u0C7F]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 3 && !stopWords.has(w))
    .map((w) => w.replace(/(ing|ed|tion|s)$/, '')); // light stemming

  if (words.length > 0) {
    // Score each verse by how many query words it contains.
    const minMatches = words.length === 1 ? 1 : 2;
    const scored: { ch: number; vn: number; eng: string; take: string; score: number }[] = [];
    for (const ch of chapters) {
      // Include chapter title and theme in the haystack for broader matching
      const chHay = `${ch.englishTitle} ${ch.mainTheme} ${ch.summary}`.toLowerCase();
      for (const v of ch.verses) {
        const hay = `${v.english} ${v.telugu} ${v.takeaway} ${v.tags.join(' ')} ${v.explanation} ${chHay}`.toLowerCase();
        let score = 0;
        for (const w of words) {
          if (hay.includes(w)) score++;
        }
        if (score >= minMatches) {
          scored.push({ ch: ch.chapterNumber, vn: v.verseNumber, eng: v.english, take: v.takeaway, score });
        }
      }
    }
    if (scored.length > 0) {
      scored.sort((a, b) => b.score - a.score);
      const top = scored.slice(0, 3);
      const list = top.map((f) => `${f.ch}.${f.vn}: "${f.eng}"\n✨ ${f.take}`).join('\n\n');
      return `Here are verses related to your question:\n\n${list}\n\nWould you like a deeper explanation of any of these?`;
    }
  }

  return `I'm here to help with the Bhagavad Gita! Try asking:\n\n• "Explain verse 2.47"\n• "Summarize Chapter 3 for kids"\n• "What does Krishna say about karma?"\n• "Explain karma yoga in Telugu"\n• "How do I find peace according to the Gita?"\n• "What are the three gunas?"\n• "Tell me about surrender"\n\nWhat would you like to explore?`;
}
