import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy, ShoppingBag, ArrowRight, Award, Crown, Check } from 'lucide-react';
import { audio } from '../utils/audio';

interface TreasureChestModalProps {
  isOpen: boolean;
  onClaimReward: () => void;
  onOpenShop: () => void;
  onOpenLeaderboard: () => void;
}

export const TreasureChestModal: React.FC<TreasureChestModalProps> = ({
  isOpen,
  onClaimReward,
  onOpenShop,
  onOpenLeaderboard
}) => {
  const [chestOpened, setChestOpened] = useState(false);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setChestOpened(false);
      setClaimed(false);
      // Play seagull and ocean fanfare
      audio.playSeagull();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOpenChest = () => {
    setChestOpened(true);
    audio.playGrandChestOpening();

    // Fire golden and diamond confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#fbbf24', '#38bdf8', '#ef4444', '#10b981']
      });
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.5 },
          colors: ['#ffd700', '#00ffff', '#ffffff']
        });
      }, 400);
    } catch {
      // Ignored
    }

    setClaimed(true);
    onClaimReward();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-amber-950 via-slate-900 to-black border-4 border-amber-500 shadow-2xl p-6 sm:p-8 text-center text-amber-100 overflow-hidden">
        {/* Glow halo behind chest */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Title */}
        <div className="relative z-10 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider mb-2">
            <Crown className="w-4 h-4 text-amber-400" />
            Selamat! 10 Tantangan Berhasil Ditaklukkan!
          </div>

          <h2 className="font-pirate text-3xl sm:text-4xl text-amber-300 font-bold tracking-wide drop-shadow-md">
            Peti Harta Karun Isla de Oro
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/80 mt-1">
            Sebagai bukti kehebatan ilmu matematika dan keberanian sang kapten sejati!
          </p>
        </div>

        {/* Animated Treasure Chest SVG */}
        <div className="relative z-10 my-6 flex flex-col items-center justify-center">
          <div
            className={`cursor-pointer transition-transform duration-500 ${
              chestOpened ? 'scale-110' : 'hover:scale-105 animate-pulse-gold'
            }`}
            onClick={!chestOpened ? handleOpenChest : undefined}
          >
            <svg
              viewBox="0 0 200 160"
              className="w-48 h-40 sm:w-56 sm:h-48 drop-shadow-2xl overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Gold glow beam when open */}
              {chestOpened && (
                <g className="animate-pulse">
                  <polygon points="100,60 20,0 180,0" fill="rgba(251, 191, 36, 0.3)" />
                  <polygon points="100,60 0,60 200,60" fill="rgba(56, 189, 248, 0.25)" />
                </g>
              )}

              {/* Chest Body Base */}
              <rect x="30" y="70" width="140" height="75" rx="10" fill="#78350f" stroke="#451a03" strokeWidth="4" />
              {/* Wooden planks lines */}
              <line x1="30" y1="95" x2="170" y2="95" stroke="#451a03" strokeWidth="2.5" />
              <line x1="30" y1="120" x2="170" y2="120" stroke="#451a03" strokeWidth="2.5" />
              {/* Iron / Gold reinforcement brackets */}
              <rect x="42" y="70" width="14" height="75" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
              <rect x="144" y="70" width="14" height="75" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
              {/* Corner rivets */}
              <circle cx="49" cy="78" r="2.5" fill="#451a03" />
              <circle cx="49" cy="107" r="2.5" fill="#451a03" />
              <circle cx="49" cy="136" r="2.5" fill="#451a03" />
              <circle cx="151" cy="78" r="2.5" fill="#451a03" />
              <circle cx="151" cy="107" r="2.5" fill="#451a03" />
              <circle cx="151" cy="136" r="2.5" fill="#451a03" />

              {/* Treasures pouring out if opened */}
              {chestOpened && (
                <g>
                  {/* Glowing coins heap */}
                  <ellipse cx="100" cy="74" rx="55" ry="18" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
                  <circle cx="75" cy="68" r="7" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />
                  <circle cx="92" cy="64" r="8" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                  <circle cx="110" cy="67" r="8" fill="#fde047" stroke="#b45309" strokeWidth="1.5" />
                  <circle cx="125" cy="70" r="7" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
                  {/* Sparkling Diamonds */}
                  <polygon points="85,58 92,50 99,58 92,66" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
                  <polygon points="105,56 112,48 119,56 112,64" fill="#a5f3fc" stroke="#0891b2" strokeWidth="1.5" />
                </g>
              )}

              {/* Chest Lid */}
              {!chestOpened ? (
                // Closed Lid
                <g>
                  <path
                    d="M 26 70 C 26 40 50 30 100 30 C 150 30 174 40 174 70 Z"
                    fill="#92400e"
                    stroke="#451a03"
                    strokeWidth="4"
                  />
                  {/* Metal Bands on lid */}
                  <path d="M 42 70 C 42 45 60 33 100 33" stroke="#f59e0b" strokeWidth="14" fill="none" />
                  <path d="M 158 70 C 158 45 140 33 100 33" stroke="#f59e0b" strokeWidth="14" fill="none" />
                  {/* Giant Golden Keyhole Lock */}
                  <rect x="88" y="62" width="24" height="28" rx="4" fill="#fbbf24" stroke="#78350f" strokeWidth="2.5" />
                  <circle cx="100" cy="72" r="3.5" fill="#451a03" />
                  <polygon points="98,72 102,72 101,82 99,82" fill="#451a03" />
                </g>
              ) : (
                // Open Lid tilted back
                <g>
                  <path
                    d="M 26 50 C 26 18 50 8 100 8 C 150 8 174 18 174 50 Z"
                    fill="#78350f"
                    stroke="#451a03"
                    strokeWidth="4"
                    transform="rotate(-20 100 50)"
                  />
                  <rect x="90" y="64" width="20" height="10" rx="2" fill="#fbbf24" stroke="#451a03" strokeWidth="2" />
                </g>
              )}
            </svg>
          </div>

          {/* Prompt to open if closed */}
          {!chestOpened ? (
            <button
              onClick={handleOpenChest}
              className="mt-4 py-3 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/30 flex items-center gap-2 transform transition hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              Buka Peti Emas Sekarang!
            </button>
          ) : (
            <div className="mt-3 text-xs font-bold text-amber-400 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" /> Peti Terbuka! Harta karun telah ditambahkan ke kantongmu!
            </div>
          )}
        </div>

        {/* Content Box (500 Coins + 100 Diamonds) */}
        <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4 p-4 rounded-2xl bg-slate-950/80 border-2 border-amber-500/40 mb-6">
          <div className="flex flex-col items-center p-3 rounded-xl bg-amber-950/40 border border-amber-500/30">
            <span className="text-3xl sm:text-4xl mb-1">🪙</span>
            <span className="font-pirate text-2xl sm:text-3xl font-bold text-amber-300">
              +500
            </span>
            <span className="text-xs font-bold text-amber-200/90 uppercase tracking-wide">
              Keping Koin Emas
            </span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
            <span className="text-3xl sm:text-4xl mb-1">💎</span>
            <span className="font-pirate text-2xl sm:text-3xl font-bold text-cyan-300">
              +100
            </span>
            <span className="text-xs font-bold text-cyan-200/90 uppercase tracking-wide">
              Butir Berlian Samudra
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              audio.playButtonClick();
              onOpenShop();
            }}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShoppingBag className="w-4 h-4" />
            Tukar ke Fashion Hero di Toko Mode
          </button>

          <button
            onClick={() => {
              audio.playButtonClick();
              onOpenLeaderboard();
            }}
            className="py-3 px-4 rounded-xl bg-amber-900/60 hover:bg-amber-800/80 border border-amber-500/50 text-amber-200 font-bold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            Papan Peringkat
          </button>
        </div>
      </div>
    </div>
  );
};
