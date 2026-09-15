import React from 'react';
import { AnimalCompanion } from '../types';

interface CompanionAvatarProps {
  companion: AnimalCompanion;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const CompanionAvatar: React.FC<CompanionAvatarProps> = ({
  companion,
  size = 'md',
  animated = true
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  return (
    <div
      className={`relative inline-block ${sizeMap[size]} ${animated ? 'animate-wave-slow' : ''}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* PARROT */}
        {companion.type === 'parrot' && (
          <g>
            {/* Tail feathers */}
            <path d="M 30 70 Q 15 95 10 100 Q 25 90 35 75 Z" fill="#3b82f6" />
            <path d="M 35 70 Q 25 95 20 100 Q 30 90 40 75 Z" fill="#ef4444" />
            {/* Body */}
            <ellipse cx="52" cy="62" rx="20" ry="24" fill="#ef4444" />
            {/* Yellow belly */}
            <path d="M 44 54 Q 66 54 62 82 Q 44 82 44 54 Z" fill="#facc15" />
            {/* Wing */}
            <path d="M 36 50 Q 24 64 36 78 Q 48 64 36 50 Z" fill="#10b981" />
            {/* Head */}
            <circle cx="56" cy="38" r="16" fill="#ef4444" />
            {/* Face White Patch */}
            <ellipse cx="62" cy="36" rx="9" ry="8" fill="#ffffff" />
            {/* Eye */}
            <circle cx="63" cy="35" r="3.2" fill="#18181b" />
            <circle cx="62" cy="33.5" r="1.2" fill="#ffffff" />
            {/* Beak */}
            <path d="M 68 34 Q 84 37 74 50 Q 68 45 68 34 Z" fill="#f59e0b" />
            <path d="M 69 42 Q 74 44 71 47 Z" fill="#18181b" />
            {/* Feet / Perch */}
            <circle cx="46" cy="85" r="3" fill="#f59e0b" />
            <circle cx="58" cy="85" r="3" fill="#f59e0b" />
          </g>
        )}

        {/* MONKEY */}
        {companion.type === 'monkey' && (
          <g>
            {/* Curly Tail */}
            <path d="M 34 76 Q 10 70 12 50 Q 16 42 22 46 Q 16 56 32 68 Z" fill="#78350f" />
            {/* Body */}
            <ellipse cx="50" cy="66" rx="20" ry="22" fill="#78350f" />
            <ellipse cx="50" cy="68" rx="13" ry="15" fill="#fcd34d" />
            {/* Ears */}
            <circle cx="28" cy="40" r="9" fill="#78350f" />
            <circle cx="28" cy="40" r="5" fill="#fcd34d" />
            <circle cx="72" cy="40" r="9" fill="#78350f" />
            <circle cx="72" cy="40" r="5" fill="#fcd34d" />
            {/* Head */}
            <circle cx="50" cy="42" r="18" fill="#78350f" />
            {/* Face mask */}
            <ellipse cx="44" cy="40" rx="9" ry="9" fill="#fcd34d" />
            <ellipse cx="56" cy="40" rx="9" ry="9" fill="#fcd34d" />
            <ellipse cx="50" cy="48" rx="12" ry="9" fill="#fcd34d" />
            {/* Eyes */}
            <circle cx="43" cy="38" r="3" fill="#18181b" />
            <circle cx="42" cy="36.5" r="1" fill="#ffffff" />
            <circle cx="57" cy="38" r="3" fill="#18181b" />
            <circle cx="56" cy="36.5" r="1" fill="#ffffff" />
            {/* Nose & Mouth */}
            <ellipse cx="50" cy="45" rx="2.5" ry="1.8" fill="#78350f" />
            <path d="M 44 49 Q 50 54 56 49" stroke="#78350f" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Paws */}
            <circle cx="34" cy="70" r="5" fill="#fcd34d" />
            <circle cx="66" cy="70" r="5" fill="#fcd34d" />
          </g>
        )}

        {/* TURTLE */}
        {companion.type === 'turtle' && (
          <g>
            {/* Flippers */}
            <ellipse cx="28" cy="48" rx="10" ry="5" fill="#10b981" transform="rotate(-30 28 48)" />
            <ellipse cx="72" cy="48" rx="10" ry="5" fill="#10b981" transform="rotate(30 72 48)" />
            <ellipse cx="32" cy="74" rx="8" ry="4" fill="#059669" transform="rotate(-20 32 74)" />
            <ellipse cx="68" cy="74" rx="8" ry="4" fill="#059669" transform="rotate(20 68 74)" />
            {/* Tiny Tail */}
            <polygon points="50,82 46,76 54,76" fill="#10b981" />
            {/* Shell */}
            <ellipse cx="50" cy="62" rx="24" ry="20" fill="#047857" stroke="#065f46" strokeWidth="2" />
            {/* Shell plates */}
            <circle cx="50" cy="62" r="8" fill="#059669" />
            <circle cx="38" cy="56" r="4.5" fill="#10b981" />
            <circle cx="62" cy="56" r="4.5" fill="#10b981" />
            <circle cx="38" cy="68" r="4.5" fill="#10b981" />
            <circle cx="62" cy="68" r="4.5" fill="#10b981" />
            {/* Head */}
            <ellipse cx="50" cy="34" rx="13" ry="14" fill="#34d399" />
            <circle cx="43" cy="31" r="2.8" fill="#18181b" />
            <circle cx="42" cy="30" r="1" fill="#ffffff" />
            <circle cx="57" cy="31" r="2.8" fill="#18181b" />
            <circle cx="56" cy="30" r="1" fill="#ffffff" />
            <path d="M 46 39 Q 50 43 54 39" stroke="#065f46" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </g>
        )}

        {/* DOLPHIN */}
        {companion.type === 'dolphin' && (
          <g>
            {/* Water Splash */}
            <path d="M 20 84 Q 30 78 40 86 Q 50 76 60 84 Q 70 78 80 84" stroke="#38bdf8" strokeWidth="3" fill="none" />
            <circle cx="35" cy="76" r="2" fill="#bae6fd" />
            <circle cx="65" cy="75" r="2.5" fill="#bae6fd" />
            {/* Fluke Tail */}
            <path d="M 24 74 Q 14 62 10 56 Q 16 68 28 66 Z" fill="#0284c7" />
            <path d="M 24 74 Q 16 84 10 88 Q 18 78 28 72 Z" fill="#0284c7" />
            {/* Body */}
            <path d="M 24 70 C 35 55 50 40 76 44 C 84 46 88 50 82 54 C 65 58 45 74 24 70 Z" fill="#0284c7" />
            {/* Dorsal Fin */}
            <path d="M 50 42 Q 58 32 64 36 Q 58 42 54 44 Z" fill="#0369a1" />
            {/* White belly */}
            <path d="M 38 66 C 50 55 64 52 74 54 C 60 62 48 68 38 66 Z" fill="#e0f2fe" />
            {/* Flipper */}
            <path d="M 54 58 Q 62 70 68 64 Q 60 56 54 58 Z" fill="#0369a1" />
            {/* Head & Snout */}
            <circle cx="70" cy="46" r="2.5" fill="#18181b" />
            <circle cx="69" cy="45" r="0.8" fill="#ffffff" />
            <path d="M 72 50 Q 78 52 75 54" stroke="#0c4a6e" strokeWidth="1.5" fill="none" />
          </g>
        )}

        {/* ACCESSORIES */}
        {/* Mini Pirate Bandana */}
        {companion.accessory === 'mini_bandana' && (
          <g>
            <path d="M 36 28 Q 50 20 64 28 L 62 33 Q 50 26 38 33 Z" fill="#dc2626" />
            <path d="M 63 30 Q 72 32 70 38 Q 64 36 62 33 Z" fill="#b91c1c" />
            <circle cx="50" cy="27" r="1.5" fill="#ffffff" />
          </g>
        )}

        {/* Mini Tricorn Hat */}
        {companion.accessory === 'mini_hat' && (
          <g>
            <path d="M 34 26 C 44 10 56 10 66 26 C 58 22 42 22 34 26 Z" fill="#451a03" stroke="#b45309" strokeWidth="1" />
            <circle cx="50" cy="20" r="2" fill="#fbbf24" />
          </g>
        )}

        {/* Gold Chain */}
        {companion.accessory === 'gold_chain' && (
          <g>
            <path d="M 40 56 Q 50 64 60 56" stroke="#fbbf24" strokeWidth="3" fill="none" strokeDasharray="3,2" />
            <circle cx="50" cy="62" r="3" fill="#f59e0b" stroke="#fbbf24" strokeWidth="1" />
          </g>
        )}

        {/* Cool Sunglasses */}
        {companion.accessory === 'sunglasses' && (
          <g>
            <rect x="36" y="32" width="12" height="8" rx="2" fill="#0f172a" />
            <rect x="52" y="32" width="12" height="8" rx="2" fill="#0f172a" />
            <line x1="48" y1="36" x2="52" y2="36" stroke="#0f172a" strokeWidth="2" />
            <line x1="38" y1="34" x2="46" y2="38" stroke="#38bdf8" strokeWidth="1.2" opacity="0.8" />
            <line x1="54" y1="34" x2="62" y2="38" stroke="#38bdf8" strokeWidth="1.2" opacity="0.8" />
          </g>
        )}
      </svg>
    </div>
  );
};
