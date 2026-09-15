import React from 'react';
import { HeroCustomization } from '../types';

interface PirateAvatarProps {
  hero: HeroCustomization;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export const PirateAvatar: React.FC<PirateAvatarProps> = ({
  hero,
  size = 'md',
  animated = true
}) => {
  const sizeMap = {
    sm: 'w-14 h-14',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    xl: 'w-48 h-48'
  };

  // Skin tones
  const skinColors = {
    fair: '#fed7aa',
    warm: '#fcd34d',
    tan: '#f59e0b',
    deep: '#b45309'
  };

  const skin = skinColors[hero.skinTone] || skinColors.warm;
  const isGirl = hero.gender === 'captain_girl';

  return (
    <div
      className={`relative inline-block ${sizeMap[size]} ${animated ? 'animate-float-gentle' : ''}`}
    >
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full drop-shadow-md overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow halo behind head */}
        <circle cx="60" cy="60" r="54" fill="rgba(251, 191, 36, 0.12)" />

        {/* Back Hair */}
        {isGirl ? (
          <path
            d="M 32 46 C 26 65 22 92 34 100 C 38 78 40 60 40 50 Z M 88 46 C 94 65 98 92 86 100 C 82 78 80 60 80 50 Z"
            fill="#5a2d0c"
          />
        ) : (
          <path
            d="M 36 50 C 34 68 36 82 42 88 C 38 74 38 60 40 50 Z M 84 50 C 86 68 84 82 78 88 C 82 74 82 60 80 50 Z"
            fill="#451a03"
          />
        )}

        {/* Body / Shoulders */}
        <path
          d="M 36 94 C 36 80 50 78 60 78 C 70 78 84 80 84 94 L 88 116 L 32 116 Z"
          fill={
            hero.coat === 'royal_corsair'
              ? '#1d4ed8'
              : hero.coat === 'midnight_rogue'
              ? '#18181b'
              : hero.coat === 'golden_captain'
              ? '#d97706'
              : hero.coat === 'emerald_voyager'
              ? '#059669'
              : '#b45309'
          }
        />

        {/* Coat Trim / Shirt stripes */}
        {hero.coat === 'classic_stripes' ? (
          <>
            <path d="M 48 84 L 72 84 L 70 114 L 50 114 Z" fill="#f8fafc" />
            <path d="M 49 90 L 71 90 L 71 94 L 49 94 Z" fill="#dc2626" />
            <path d="M 50 100 L 70 100 L 70 104 L 50 104 Z" fill="#dc2626" />
            <path d="M 50 108 L 70 108 L 70 112 L 50 112 Z" fill="#dc2626" />
          </>
        ) : (
          <path
            d="M 54 80 L 66 80 L 63 116 L 57 116 Z"
            fill={hero.coat === 'golden_captain' ? '#fef08a' : '#f59e0b'}
          />
        )}

        {/* Golden Buttons / Sash */}
        <circle cx="56" cy="88" r="2" fill="#fbbf24" />
        <circle cx="56" cy="98" r="2" fill="#fbbf24" />
        <circle cx="64" cy="88" r="2" fill="#fbbf24" />
        <circle cx="64" cy="98" r="2" fill="#fbbf24" />

        {/* Head / Face */}
        <ellipse cx="60" cy="54" rx="24" ry="24" fill={skin} />

        {/* Cheeks blush */}
        <circle cx="44" cy="62" r="5" fill="#f87171" opacity="0.4" />
        <circle cx="76" cy="62" r="5" fill="#f87171" opacity="0.4" />

        {/* Front Hair */}
        {isGirl ? (
          <path
            d="M 37 45 C 44 32 76 32 83 45 C 80 40 70 38 60 40 C 50 42 42 40 37 45 Z"
            fill="#78350f"
          />
        ) : (
          <path
            d="M 37 46 C 45 35 75 35 83 46 C 76 42 66 40 60 42 C 54 44 44 42 37 46 Z"
            fill="#5b21b6"
          />
        )}

        {/* Eyes & Eyebrows */}
        {/* Left Eye */}
        {hero.accessory === 'eye_patch' ? (
          <g>
            <circle cx="48" cy="54" r="7" fill="#18181b" />
            <line x1="36" y1="46" x2="62" y2="60" stroke="#27272a" strokeWidth="2.5" />
            <circle cx="48" cy="54" r="2.5" fill="#fbbf24" />
          </g>
        ) : hero.expression === 'wink' ? (
          <path d="M 44 54 Q 48 50 52 54" stroke="#1f2937" strokeWidth="3" fill="none" strokeLinecap="round" />
        ) : (
          <g>
            <circle cx="48" cy="54" r="4.5" fill="#1f2937" />
            <circle cx="46.5" cy="52" r="1.8" fill="#ffffff" />
          </g>
        )}

        {/* Right Eye */}
        <g>
          <circle cx="72" cy="54" r="4.5" fill="#1f2937" />
          <circle cx="70.5" cy="52" r="1.8" fill="#ffffff" />
        </g>

        {/* Eyebrows */}
        {hero.expression === 'fierce' ? (
          <>
            <line x1="43" y1="46" x2="52" y2="49" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="68" y1="49" x2="77" y2="46" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
          </>
        ) : (
          <>
            <path d="M 44 46 Q 48 44 52 47" stroke="#374151" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 68 47 Q 72 44 76 46" stroke="#374151" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </>
        )}

        {/* Nose */}
        <circle cx="60" cy="58" r="1.8" fill="#d97706" opacity="0.6" />

        {/* Mouth */}
        {hero.expression === 'confident' ? (
          <path d="M 54 65 Q 60 70 66 64" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        ) : hero.expression === 'fierce' ? (
          <line x1="55" y1="67" x2="65" y2="67" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
        ) : (
          <path d="M 53 64 Q 60 71 67 64" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        )}

        {/* Gold Earring */}
        {hero.accessory === 'gold_earring' && (
          <circle cx="34" cy="56" r="3.5" stroke="#fbbf24" strokeWidth="2" fill="none" />
        )}

        {/* Pirate Hook (Right Hand) */}
        {hero.accessory === 'pirate_hook' && (
          <g transform="translate(86, 92)">
            <rect x="0" y="0" width="8" height="12" rx="2" fill="#71717a" />
            <path d="M 4 12 C 4 20 14 18 10 12" stroke="#e2e8f0" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        )}

        {/* Ruby Cutlass */}
        {hero.accessory === 'ruby_cutlass' && (
          <g transform="translate(84, 76) rotate(-25)">
            <rect x="0" y="0" width="5" height="18" rx="2" fill="#fbbf24" />
            <circle cx="2.5" cy="16" r="3.5" fill="#dc2626" />
            <path d="M 2.5 0 Q 3 20 12 36 Q 4 34 0 24 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          </g>
        )}

        {/* Compass Necklace */}
        {hero.accessory === 'compass_necklace' && (
          <g>
            <path d="M 52 76 Q 60 84 68 76" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
            <circle cx="60" cy="83" r="4.5" fill="#0d9488" stroke="#fbbf24" strokeWidth="1.5" />
            <polygon points="60,80 61.5,83 60,86 58.5,83" fill="#f8fafc" />
          </g>
        )}

        {/* HATS */}
        {hero.hat === 'tricorn_classic' && (
          <g>
            {/* Tricorn curves */}
            <path
              d="M 24 38 C 42 12 78 12 96 38 C 84 32 60 30 24 38 Z"
              fill="#451a03"
              stroke="#b45309"
              strokeWidth="2"
            />
            <path
              d="M 30 38 Q 60 22 90 38 Q 60 34 30 38 Z"
              fill="#291102"
            />
            {/* Golden skull and bones or gold anchor badge on hat */}
            <circle cx="60" cy="27" r="4" fill="#fbbf24" />
            <circle cx="58.5" cy="26" r="1" fill="#451a03" />
            <circle cx="61.5" cy="26" r="1" fill="#451a03" />
          </g>
        )}

        {hero.hat === 'skull_bandana' && (
          <g>
            {/* Red pirate bandana */}
            <path
              d="M 34 40 C 44 26 76 26 86 40 C 76 36 44 36 34 40 Z"
              fill="#dc2626"
            />
            <path
              d="M 32 40 L 88 40 L 88 44 L 32 44 Z"
              fill="#b91c1c"
            />
            {/* Bandana tie on side */}
            <path d="M 85 41 Q 96 46 94 56 Q 88 52 86 45 Z" fill="#dc2626" />
            {/* Tiny skull motif */}
            <circle cx="60" cy="35" r="3.5" fill="#ffffff" />
            <circle cx="58.5" cy="34.5" r="0.8" fill="#18181b" />
            <circle cx="61.5" cy="34.5" r="0.8" fill="#18181b" />
            <rect x="59" y="38" width="2" height="1.5" fill="#ffffff" />
          </g>
        )}

        {hero.hat === 'admiral_cap' && (
          <g>
            {/* High naval officer cap */}
            <path
              d="M 32 38 L 40 18 L 80 18 L 88 38 Z"
              fill="#1e3a8a"
              stroke="#fbbf24"
              strokeWidth="1.5"
            />
            <rect x="30" y="36" width="60" height="6" rx="2" fill="#172554" />
            {/* Gold braid */}
            <line x1="34" y1="39" x2="86" y2="39" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="3,2" />
            {/* Golden anchor badge */}
            <circle cx="60" cy="27" r="4.5" fill="#fbbf24" />
            <path d="M 60 25 L 60 29 M 58 28 Q 60 30 62 28" stroke="#1e3a8a" strokeWidth="1.2" fill="none" />
          </g>
        )}

        {hero.hat === 'feathered_pirate' && (
          <g>
            {/* Purple velvet pirate hat with majestic feather */}
            <path
              d="M 26 36 C 42 14 78 14 94 36 C 80 30 60 28 26 36 Z"
              fill="#581c87"
              stroke="#9333ea"
              strokeWidth="1.5"
            />
            {/* Purple trim */}
            <path d="M 32 35 Q 60 28 88 35" stroke="#f472b6" strokeWidth="2" fill="none" />
            {/* Exotic feather */}
            <path
              d="M 76 28 C 88 10 98 6 106 4 C 98 12 90 22 78 28 Z"
              fill="#06b6d4"
            />
            <path
              d="M 80 26 C 90 12 98 8 102 6 C 96 14 90 20 82 26 Z"
              fill="#a855f7"
            />
          </g>
        )}

        {hero.hat === 'golden_crown' && (
          <g>
            {/* Grand Golden Crown */}
            <polygon
              points="32,36 36,18 48,28 60,12 72,28 84,18 88,36"
              fill="#fbbf24"
              stroke="#d97706"
              strokeWidth="2"
            />
            <rect x="32" y="34" width="56" height="5" rx="1.5" fill="#f59e0b" />
            {/* Gems */}
            <circle cx="60" cy="18" r="2.8" fill="#ef4444" />
            <circle cx="48" cy="27" r="2.2" fill="#3b82f6" />
            <circle cx="72" cy="27" r="2.2" fill="#10b981" />
          </g>
        )}
      </svg>
    </div>
  );
};
