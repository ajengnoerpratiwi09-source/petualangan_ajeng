import React from 'react';
import {
  Volume2,
  VolumeX,
  Sparkles,
  ShoppingBag,
  Briefcase,
  Trophy,
  User,
  Heart,
  Map as MapIcon,
  Compass
} from 'lucide-react';
import { UserProfile } from '../types';
import { audio } from '../utils/audio';

interface NavbarProps {
  profile: UserProfile;
  lives: number;
  maxLives: number;
  currentLevel: number;
  totalLevels: number;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
  onOpenMap: () => void;
  onOpenShop: () => void;
  onOpenInventory: () => void;
  onOpenLeaderboard: () => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  lives,
  maxLives,
  currentLevel,
  totalLevels,
  isAudioMuted,
  onToggleAudio,
  onOpenMap,
  onOpenShop,
  onOpenInventory,
  onOpenLeaderboard,
  onOpenProfile
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b-2 border-amber-900/60 shadow-lg px-3 py-2.5 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Brand & Level Badge */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              audio.playButtonClick();
              onOpenMap();
            }}
            className="flex items-center gap-2 text-left group focus:outline-none"
            title="Buka Peta Petualangan"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 border-2 border-amber-300 flex items-center justify-center shadow-md shadow-amber-900/40 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-slate-950 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-pirate text-lg sm:text-xl font-bold tracking-wide text-amber-400 group-hover:text-amber-300 transition-colors">
                  Bajak Laut Matematika
                </span>
              </div>
              <p className="text-xs text-amber-200/70 hidden sm:block">
                Pulau ke-{currentLevel} dari {totalLevels} • {profile.title}
              </p>
            </div>
          </button>
        </div>

        {/* Status Indicators: Hearts & Currency */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Hearts / Lives */}
          <div
            className="flex items-center gap-1 bg-slate-900/80 px-2.5 py-1.5 rounded-full border border-red-900/60 shadow-inner"
            title={`${lives} kesempatan tersisa dari 3 kesempatan`}
          >
            <span className="text-xs text-red-300 font-bold mr-1 hidden xs:inline">Kesempatan:</span>
            {Array.from({ length: maxLives }).map((_, idx) => (
              <Heart
                key={idx}
                className={`w-5 h-5 transition-all duration-300 ${
                  idx < lives
                    ? 'text-red-500 fill-red-500 scale-100 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]'
                    : 'text-slate-600 fill-slate-800/60 scale-90 opacity-40'
                }`}
              />
            ))}
          </div>

          {/* Gold Coins */}
          <div
            className="flex items-center gap-1.5 bg-amber-950/70 border border-amber-500/50 px-2.5 py-1 rounded-full shadow-inner"
            title="Koin Emas"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-300 to-yellow-600 flex items-center justify-center shadow-sm text-[11px] font-bold text-slate-950">
              🪙
            </div>
            <span className="text-sm font-bold text-amber-300 tracking-wide">
              {profile.goldCoins.toLocaleString()}
            </span>
          </div>

          {/* Diamonds */}
          <div
            className="flex items-center gap-1.5 bg-cyan-950/70 border border-cyan-500/50 px-2.5 py-1 rounded-full shadow-inner"
            title="Berlian Samudra"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-300 to-blue-600 flex items-center justify-center shadow-sm text-[11px]">
              💎
            </div>
            <span className="text-sm font-bold text-cyan-300 tracking-wide">
              {profile.diamonds.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Navigation Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Peta Tombol */}
          <button
            onClick={() => {
              audio.playButtonClick();
              onOpenMap();
            }}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-amber-900/40 hover:bg-amber-800/60 text-amber-200 border border-amber-700/50 flex items-center gap-1.5 text-xs font-semibold transition-all hover:scale-105 active:scale-95"
            title="Buka Peta"
          >
            <MapIcon className="w-4 h-4 text-amber-400" />
            <span className="hidden md:inline">Peta</span>
          </button>

          {/* Toko Fashion Hero */}
          <button
            onClick={() => {
              audio.playButtonClick();
              onOpenShop();
            }}
            className="relative p-2 sm:px-3 sm:py-1.5 rounded-lg bg-purple-950/50 hover:bg-purple-900/60 text-purple-200 border border-purple-700/50 flex items-center gap-1.5 text-xs font-semibold transition-all hover:scale-105 active:scale-95"
            title="Toko Mode & Kustomisasi Hero"
          >
            <ShoppingBag className="w-4 h-4 text-purple-400" />
            <span className="hidden md:inline">Toko Mode</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
          </button>

          {/* Inventaris */}
          <button
            onClick={() => {
              audio.playButtonClick();
              onOpenInventory();
            }}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-200 border border-emerald-700/50 flex items-center gap-1.5 text-xs font-semibold transition-all hover:scale-105 active:scale-95"
            title="Inventaris & Artefak Antik"
          >
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span className="hidden md:inline">Inventaris</span>
            <span className="text-[10px] bg-emerald-700 px-1 rounded-full text-emerald-100 font-mono">
              {profile.collectedArtifacts.length}
            </span>
          </button>

          {/* Papan Peringkat */}
          <button
            onClick={() => {
              audio.playButtonClick();
              onOpenLeaderboard();
            }}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-amber-950/50 hover:bg-amber-900/60 text-amber-200 border border-amber-600/50 flex items-center gap-1.5 text-xs font-semibold transition-all hover:scale-105 active:scale-95"
            title="Papan Peringkat Global"
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="hidden md:inline">Peringkat</span>
          </button>

          {/* Profil Kapten */}
          <button
            onClick={() => {
              audio.playButtonClick();
              onOpenProfile();
            }}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600/60 flex items-center gap-1.5 text-xs font-semibold transition-all hover:scale-105 active:scale-95"
            title="Profil & Kustomisasi Karakter"
          >
            <User className="w-4 h-4 text-sky-400" />
            <span className="hidden lg:inline">{profile.name}</span>
          </button>

          {/* Audio Mute/Unmute */}
          <button
            onClick={onToggleAudio}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600/60 transition-all hover:scale-105 active:scale-95"
            title={isAudioMuted ? 'Nyalakan Suara Laut' : 'Matikan Suara Laut'}
          >
            {isAudioMuted ? (
              <VolumeX className="w-4 h-4 text-slate-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
