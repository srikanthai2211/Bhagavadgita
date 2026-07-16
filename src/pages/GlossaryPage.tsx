import { useState, useMemo } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { navigate } from '../hooks/useRouter';

const glossaryTerms = [
  { term: 'Atman', sanskrit: 'आत्मन्', meaning: 'The individual soul or self. The Gita teaches that the Atman is eternal, indestructible, and identical in essence to Brahman.', relatedVerses: ['2.19', '2.20', '2.23'], category: 'Soul & Self' },
  { term: 'Brahman', sanskrit: 'ब्रह्मन्', meaning: 'The supreme, infinite, unchanging reality. The ultimate ground of all existence. Krishna reveals himself as Brahman in Chapter 10.', relatedVerses: ['2.72', '5.19', '10.12'], category: 'Divine' },
  { term: 'Dharma', sanskrit: 'धर्म', meaning: 'Right duty, righteousness, cosmic order. Your svadharma is the duty that is specific to your nature and role in life.', relatedVerses: ['1.1', '3.35', '4.7'], category: 'Ethics & Duty' },
  { term: 'Karma', sanskrit: 'कर्म', meaning: 'Action and its consequences. Every action creates an impression that shapes future experiences. The Gita teaches karma yoga — acting without attachment to results.', relatedVerses: ['2.47', '3.9', '4.14'], category: 'Action' },
  { term: 'Yoga', sanskrit: 'योग', meaning: 'Union, discipline, or path. There are multiple yogas in the Gita: Karma Yoga (action), Jnana Yoga (knowledge), Bhakti Yoga (devotion), and Dhyana Yoga (meditation).', relatedVerses: ['2.48', '6.1', '12.1'], category: 'Practice' },
  { term: 'Moksha', sanskrit: 'मोक्ष', meaning: 'Liberation or spiritual freedom. Freedom from the cycle of birth, death, and rebirth (samsara). The ultimate goal of human life.', relatedVerses: ['2.72', '5.28', '18.66'], category: 'Liberation' },
  { term: 'Samsara', sanskrit: 'संसार', meaning: 'The cycle of birth, death, and rebirth. Driven by karma and attachment. The Gita teaches how to transcend this cycle.', relatedVerses: ['8.15', '9.21', '15.4'], category: 'Liberation' },
  { term: 'Gunas', sanskrit: 'गुण', meaning: 'The three qualities of material nature: Sattva (purity, clarity), Rajas (passion, activity), and Tamas (inertia, darkness). All of creation is made up of combinations of these three.', relatedVerses: ['14.5', '14.8', '14.18'], category: 'Nature' },
  { term: 'Sattva', sanskrit: 'सत्त्व', meaning: 'The quality of purity, clarity, and goodness. Sattva leads to wisdom, happiness, and spiritual growth. Foods, actions, and people influenced by sattva promote clarity.', relatedVerses: ['14.6', '14.11', '17.4'], category: 'Nature' },
  { term: 'Rajas', sanskrit: 'रजस्', meaning: 'The quality of passion, activity, and desire. Rajas creates attachment and restlessness. It can be positive (energy) or negative (greed, aggression).', relatedVerses: ['14.7', '14.12', '17.9'], category: 'Nature' },
  { term: 'Tamas', sanskrit: 'तमस्', meaning: 'The quality of inertia, darkness, and ignorance. Tamas leads to laziness, confusion, and delusion. It is the most dangerous guna for spiritual progress.', relatedVerses: ['14.8', '14.13', '17.10'], category: 'Nature' },
  { term: 'Nishkama Karma', sanskrit: 'निष्काम कर्म', meaning: 'Action without desire for its fruits. The central teaching of karma yoga — do your duty fully, but do not cling to the results.', relatedVerses: ['2.47', '3.19', '5.12'], category: 'Action' },
  { term: 'Jnana', sanskrit: 'ज्ञान', meaning: 'Knowledge or wisdom, especially spiritual knowledge. Jnana yoga is the path of wisdom — understanding the true nature of the Self and reality.', relatedVerses: ['4.33', '4.38', '5.16'], category: 'Knowledge' },
  { term: 'Bhakti', sanskrit: 'भक्ति', meaning: 'Devotion and love for the Divine. Bhakti yoga is the path of devotion — worshipping God with complete love, faith, and surrender.', relatedVerses: ['9.26', '12.2', '18.55'], category: 'Devotion' },
  { term: 'Ahimsa', sanskrit: 'अहिंसा', meaning: 'Non-violence or non-harm. One of the highest virtues. The Gita speaks of ahimsa as a quality of the wise and the divine.', relatedVerses: ['13.8', '16.1', '17.14'], category: 'Ethics & Duty' },
  { term: 'Prakriti', sanskrit: 'प्रकृति', meaning: 'Material nature. Everything in the physical world — including our body, senses, mind, and ego — is part of prakriti.', relatedVerses: ['7.4', '7.5', '13.19'], category: 'Nature' },
  { term: 'Purusha', sanskrit: 'पुरुष', meaning: 'The eternal spirit or consciousness. The divine witness within. Purusha and Prakriti together make up all of existence.', relatedVerses: ['13.19', '15.16', '15.17'], category: 'Soul & Self' },
  { term: 'Maya', sanskrit: 'माया', meaning: 'Divine illusion or the power that makes the material world seem ultimately real. It creates the sense of separation from the Divine.', relatedVerses: ['7.14', '7.25', '18.61'], category: 'Divine' },
  { term: 'Avatara', sanskrit: 'अवतार', meaning: 'Divine descent or incarnation. When the Divine takes human form to restore dharma and protect the good. Krishna is the 8th avatara of Vishnu.', relatedVerses: ['4.6', '4.7', '4.8'], category: 'Divine' },
  { term: 'Sthitaprajna', sanskrit: 'स्थितप्रज्ञ', meaning: 'One of steady wisdom. A person who is not disturbed by sorrow, not elated by happiness, free from fear and anger. Krishna describes this ideal in Chapter 2.', relatedVerses: ['2.55', '2.56', '2.57'], category: 'Soul & Self' },
  { term: 'Svadharma', sanskrit: 'स्वधर्म', meaning: 'One\'s own duty according to one\'s nature, role, and circumstances. The Gita says it is better to do your own dharma imperfectly than another\'s dharma perfectly.', relatedVerses: ['3.35', '18.41', '18.47'], category: 'Ethics & Duty' },
  { term: 'Yajna', sanskrit: 'यज्ञ', meaning: 'Sacrifice or offering. Not just fire rituals — any action done as an offering to the universe without attachment to its fruits is a yajna.', relatedVerses: ['3.9', '3.14', '4.24'], category: 'Action' },
  { term: 'Sannyasa', sanskrit: 'संन्यास', meaning: 'Renunciation. Not just giving up material things, but giving up the ego\'s ownership of actions and their results.', relatedVerses: ['5.1', '5.3', '18.2'], category: 'Practice' },
  { term: 'Shraddha', sanskrit: 'श्रद्धा', meaning: 'Faith and trust. Not blind belief, but deep confidence born of experience. Chapter 17 says that a person IS their shraddha — what you deeply believe shapes who you are.', relatedVerses: ['17.3', '17.17', '18.71'], category: 'Practice' },
  { term: 'Kshetra', sanskrit: 'क्षेत्र', meaning: 'The field — referring to the body and all material existence. The body is the field in which the soul (kshetrajna) experiences the world.', relatedVerses: ['13.1', '13.2', '13.33'], category: 'Soul & Self' },
  { term: 'Viveka', sanskrit: 'विवेक', meaning: 'Discrimination or discernment — the ability to distinguish between the real and the unreal, the eternal and the temporary. The foundation of wisdom.', relatedVerses: ['2.45', '4.18', '13.34'], category: 'Knowledge' },
];

const categories = ['All', 'Soul & Self', 'Divine', 'Ethics & Duty', 'Action', 'Knowledge', 'Devotion', 'Liberation', 'Nature', 'Practice'];

export function GlossaryPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    return glossaryTerms.filter((t) => {
      const matchSearch = search === '' ||
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.meaning.toLowerCase().includes(search.toLowerCase());
      const matchCat = activeCategory === 'All' || t.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [search, activeCategory]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-50 dark:bg-saffron-950/40 border border-saffron-200 dark:border-saffron-800 mb-4">
          <BookOpen className="h-3.5 w-3.5 text-saffron-600" />
          <span className="text-xs font-semibold text-saffron-700 dark:text-saffron-300">Sacred Vocabulary</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink-900 dark:text-ink-50 mb-3">
          Gita Glossary
        </h1>
        <p className="text-ink-500 dark:text-ink-400 max-w-xl mx-auto">
          Key Sanskrit terms from the Bhagavad Gita explained simply, with links to relevant verses.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search terms..."
          className="w-full pl-11 pr-4 py-3 rounded-2xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-ink-800 dark:text-ink-100 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-saffron-400 text-sm"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-marigold-400 to-saffron-500 text-white shadow-sm'
                : 'bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 hover:bg-ink-200 dark:hover:bg-ink-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Terms grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-ink-400">
          <p>No terms found for "{search}"</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((term) => (
            <div
              key={term.term}
              className="rounded-2xl border border-ink-200/60 dark:border-ink-800 bg-white dark:bg-ink-900 p-5 sm:p-6 shadow-sm hover:shadow-premium transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="font-display text-xl font-bold text-ink-900 dark:text-ink-50">
                      {term.term}
                    </h2>
                    <span className="font-display text-base text-saffron-600 dark:text-saffron-400">
                      {term.sanskrit}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-peacock-600 dark:text-peacock-400 mt-1 block">
                    {term.category}
                  </span>
                </div>
              </div>
              <p className="text-sm text-ink-700 dark:text-ink-200 leading-relaxed mb-4">
                {term.meaning}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-ink-400 dark:text-ink-500 mr-1">See verses:</span>
                {term.relatedVerses.map((v) => {
                  const [ch] = v.split('.');
                  return (
                    <button
                      key={v}
                      onClick={() => navigate(`/chapter/${ch}`)}
                      className="text-xs px-2 py-0.5 rounded-full bg-saffron-50 dark:bg-saffron-950/40 border border-saffron-200 dark:border-saffron-800 text-saffron-700 dark:text-saffron-300 hover:bg-saffron-100 dark:hover:bg-saffron-900/40 transition-colors font-medium"
                    >
                      {v}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
