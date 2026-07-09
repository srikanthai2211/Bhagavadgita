import { useState } from 'react';
import { getChapterImage } from '../data/chapterImages';

interface ChapterArtworkProps {
  chapterNumber: number;
  className?: string;
  variant?: 'banner' | 'card';
}

// Deterministic pseudo-random based on chapter number for consistent visuals
function seeded(n: number): number {
  const x = Math.sin(n * 9999) * 10000;
  return x - Math.floor(x);
}

const palettes = [
  { from: '#ffc314', mid: '#ff7d0a', to: '#c74700', glow: '#ff9a33' },
  { from: '#5eead4', mid: '#14b8a6', to: '#0f766e', glow: '#2dd4bf' },
  { from: '#a78bfa', mid: '#8b5cf6', to: '#6d28d9', glow: '#c4b5fd' },
  { from: '#f472b6', mid: '#ec4899', to: '#be185d', glow: '#f9a8d4' },
  { from: '#fbbf24', mid: '#f59e0b', to: '#b45309', glow: '#fcd34d' },
  { from: '#60a5fa', mid: '#3b82f6', to: '#1d4ed8', glow: '#93c5fd' },
];

function MandalaOverlay({ chapterNumber, palette }: { chapterNumber: number; palette: typeof palettes[number] }) {
  const r1 = seeded(chapterNumber);
  const r2 = seeded(chapterNumber + 100);

  const rays = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * Math.PI * 2;
    const len = 30 + r1 * 20;
    return {
      x1: 50 + Math.cos(angle) * 18,
      y1: 50 + Math.sin(angle) * 18,
      x2: 50 + Math.cos(angle) * (18 + len),
      y2: 50 + Math.sin(angle) * (18 + len),
    };
  });

  const lotusPetals = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    return {
      cx: 50 + Math.cos(angle) * 8,
      cy: 50 + Math.sin(angle) * 8,
      rotate: (angle * 180) / Math.PI,
    };
  });

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <radialGradient id={`glow-${chapterNumber}`} cx="50%" cy="50%" r="40%">
          <stop offset="0%" stopColor={palette.glow} stopOpacity="0.6" />
          <stop offset="100%" stopColor={palette.glow} stopOpacity="0" />
        </radialGradient>
        <filter id={`blur-${chapterNumber}`}>
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </defs>

      {/* Soft glow center */}
      <circle cx="50" cy="45" r="35" fill={`url(#glow-${chapterNumber})`} />

      {/* Rays */}
      <g opacity="0.25" stroke="#fff" strokeWidth="0.4">
        {rays.map((ray, i) => (
          <line key={i} x1={ray.x1} y1={ray.y1} x2={ray.x2} y2={ray.y2} />
        ))}
      </g>

      {/* Concentric circles */}
      <g fill="none" stroke="#fff" opacity="0.3">
        <circle cx="50" cy="50" r="40" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="30" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="20" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="12" strokeWidth="0.5" />
      </g>

      {/* Lotus petals */}
      <g opacity="0.85" filter={`url(#blur-${chapterNumber})`}>
        {lotusPetals.map((p, i) => (
          <ellipse
            key={i}
            cx={p.cx}
            cy={p.cy}
            rx="3"
            ry="6"
            fill="#fff"
            opacity="0.5"
            transform={`rotate(${p.rotate} ${p.cx} ${p.cy})`}
          />
        ))}
      </g>

      {/* Central bindu */}
      <circle cx="50" cy="50" r="3" fill="#fff" opacity="0.9" />
      <circle cx="50" cy="50" r="1.5" fill={palette.to} />

      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => {
        const px = 10 + seeded(chapterNumber + i * 7) * 80;
        const py = 10 + seeded(chapterNumber + i * 13) * 80;
        const pr = 0.4 + seeded(chapterNumber + i * 17) * 0.8;
        return <circle key={i} cx={px} cy={py} r={pr} fill="#fff" opacity={0.4 + r2 * 0.3} />;
      })}
    </svg>
  );
}

function GradientFallback({ chapterNumber, palette }: { chapterNumber: number; palette: typeof palettes[number] }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <radialGradient id={`bg-${chapterNumber}`} cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor={palette.from} stopOpacity="0.9" />
          <stop offset="50%" stopColor={palette.mid} stopOpacity="0.85" />
          <stop offset="100%" stopColor={palette.to} stopOpacity="0.95" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill={`url(#bg-${chapterNumber})`} />
    </svg>
  );
}

export function ChapterArtwork({ chapterNumber, className = '', variant = 'banner' }: ChapterArtworkProps) {
  const palette = palettes[(chapterNumber - 1) % palettes.length];
  const isBanner = variant === 'banner';
  const image = getChapterImage(chapterNumber);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const showImage = image && !imgError;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient fallback (always rendered as base layer) */}
      <GradientFallback chapterNumber={chapterNumber} palette={palette} />

      {/* Real photo (loads on top of gradient) */}
      {showImage && (
        <img
          src={image!.url}
          alt={image!.credit}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Mandala overlay (subtle, on top of image) */}
      <div className={`absolute inset-0 ${isBanner ? 'opacity-30' : 'opacity-40'}`}>
        <MandalaOverlay chapterNumber={chapterNumber} palette={palette} />
      </div>

      {/* Subtle overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 70%)`,
        }}
      />

      {/* Chapter number watermark */}
      {isBanner && (
        <div className="absolute bottom-3 right-4 font-display font-bold text-white/30 text-sm">
          {String(chapterNumber).padStart(2, '0')}
        </div>
      )}
    </div>
  );
}
