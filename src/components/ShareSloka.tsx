import { useState } from 'react';
import { Share2, Download, X, Copy, Check } from 'lucide-react';
import type { Verse } from '../data/types';

interface ShareSlokaProps {
  verse: Verse;
  chapterNumber: number;
}

export function ShareSloka({ verse, chapterNumber }: ShareSlokaProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareText = `✨ Bhagavad Gita ${chapterNumber}.${verse.verseNumber}\n\n${verse.sanskrit}\n\n"${verse.english}"\n\n💡 ${verse.takeaway}\n\n📖 bhagavad-gita-learni-28e1.bolt.host`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(shareText);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Bhagavad Gita ${chapterNumber}.${verse.verseNumber}`,
          text: shareText,
        });
      } catch { /* cancelled */ }
    } else {
      handleCopy();
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400 hover:text-saffron-600 dark:hover:text-saffron-400 px-2 py-1.5 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
      >
        <Share2 className="h-3.5 w-3.5" />
        Share Sloka
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-ink-900 rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-scale-in">
            {/* Card preview */}
            <div className="bg-gradient-to-br from-saffron-950 via-ink-900 to-marigold-950 p-6 border-b-4 border-marigold-500/40">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-saffron-300 uppercase tracking-widest">
                  Bhagavad Gita {chapterNumber}.{verse.verseNumber}
                </span>
                <span className="text-marigold-400 text-lg">🪷</span>
              </div>
              <p className="font-display text-sm text-white/90 leading-relaxed mb-3 whitespace-pre-line">
                {verse.sanskrit.split('\n')[0]}
              </p>
              <div className="border-t border-white/10 pt-3 mt-3">
                <p className="text-white/75 text-xs leading-relaxed italic">
                  "{verse.english.length > 120 ? verse.english.slice(0, 120) + '…' : verse.english}"
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-marigold-300 text-xs font-medium">
                  💡 {verse.takeaway.length > 80 ? verse.takeaway.slice(0, 80) + '…' : verse.takeaway}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="p-5">
              <p className="text-xs text-ink-500 dark:text-ink-400 mb-4 text-center">Share this verse with someone who needs it</p>
              <div className="space-y-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <span>📱</span> Share on WhatsApp
                </button>
                <button
                  onClick={handleNativeShare}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-marigold-400 to-saffron-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <Download className="h-4 w-4" /> Share / Save
                </button>
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200 font-medium text-sm hover:bg-ink-50 dark:hover:bg-ink-800 transition-colors"
                >
                  {copied ? <><Check className="h-4 w-4 text-peacock-500" /> Copied!</> : <><Copy className="h-4 w-4" /> Copy text</>}
                </button>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-full mt-3 flex items-center justify-center gap-2 text-xs text-ink-400 hover:text-ink-600 py-2 transition-colors"
              >
                <X className="h-3.5 w-3.5" /> Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
