import React, { useState } from 'react';
import {
  X,
  Compass,
  Star,
  Lock,
  Anchor,
  Play,
  CheckCircle2,
  Ship,
  Sparkles,
  TreePine,
  Waves,
  Mountain,
  Award
} from 'lucide-react';
import { MathChallenge, UserProfile } from '../types';
import { audio } from '../utils/audio';

interface TreasureMapProps {
  challenges: MathChallenge[];
  currentLevel: number;
  completedLevels: number[];
  profile: UserProfile;
  onSelectLevel: (levelId: number) => void;
  onClose?: () => void;
}

export const TreasureMap: React.FC<TreasureMapProps> = ({
  challenges,
  currentLevel,
  completedLevels,
  profile,
  onSelectLevel,
  onClose
}) => {
  const [hoveredLevel, setHoveredLevel] = useState<MathChallenge | null>(
    challenges.find((c) => c.id === currentLevel) || challenges[0]
  );

  const getBiomeIcon = (biome: string) => {
    switch (biome) {
      case 'beach':
        return '🌴';
      case 'ocean':
        return '🌊';
      case 'shipwreck':
        return '⚓';
      case 'jungle':
        return '🌿';
      case 'crystal_cave':
        return '💎';
      case 'waterfall':
        return '💧';
      case 'skull_canyon':
        return '💀';
      case 'lagoon':
        return '🌙';
      case 'fortress':
        return '🏰';
      case 'treasure_island':
        return '👑';
      default:
        return '🏝️';
    }
  };

  return (
    <div className="relative w-full rounded-2xl bg-amber-950/40 p-3 sm:p-6 border-4 border-amber-800/70 shadow-2xl overflow-hidden">
      {/* Ancient Parchment Texture Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8d5b5] via-[#dfc49c] to-[#cca777] opacity-95 pointer-events-none rounded-xl" />
      
      {/* Vintage Map Watermarks */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#78350f_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute top-4 right-4 pointer-events-none opacity-20">
        <Compass className="w-36 h-36 text-amber-950" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-amber-900/30 pb-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-900/20 border-2 border-amber-900/50 flex items-center justify-center">
              <Compass className="w-6 h-6 text-amber-900 animate-spin-slow" />
            </div>
            <div>
              <h2 className="font-pirate text-2xl sm:text-3xl text-amber-950 font-bold tracking-wide">
                Peta Kuno Samudra Harta Karun
              </h2>
              <p className="text-xs sm:text-sm text-amber-900/80 font-medium">
                10 Jalur Pulau Misterius menuju Peti Emas 500 Koin & 100 Berlian
              </p>
            </div>
          </div>

          {onClose && (
            <button
              onClick={() => {
                audio.playButtonClick();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-amber-900/10 hover:bg-amber-900/20 text-amber-900 transition-colors"
              title="Tutup Peta"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Map Journey Track */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* Main Map Route Grid (10 Island Points) */}
          <div className="lg:col-span-8 bg-amber-900/10 rounded-xl p-3 sm:p-5 border-2 border-amber-900/20 backdrop-blur-xs">
            <div className="flex items-center justify-between mb-3 text-xs font-bold text-amber-900/80">
              <span>TITIK AWAL: DERMAGA PELAUT</span>
              <span>TUJUAN: ISLA DE ORO (PULAU EMAS)</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
              {challenges.map((challenge, idx) => {
                const isCompleted = completedLevels.includes(challenge.id);
                const isCurrent = challenge.id === currentLevel;
                const isLocked = challenge.id > currentLevel && !isCompleted;
                const isSelected = hoveredLevel?.id === challenge.id;

                return (
                  <button
                    key={challenge.id}
                    onClick={() => {
                      audio.playButtonClick();
                      setHoveredLevel(challenge);
                    }}
                    className={`relative text-left p-3 rounded-xl border-2 transition-all group flex flex-col justify-between min-h-[110px] ${
                      isSelected
                        ? 'border-amber-950 bg-amber-100/90 shadow-lg scale-[1.03] ring-2 ring-amber-500/50'
                        : isCurrent
                        ? 'border-red-600 bg-amber-50/80 shadow-md animate-pulse-gold'
                        : isCompleted
                        ? 'border-emerald-700/60 bg-emerald-100/40 hover:bg-emerald-100/70'
                        : 'border-amber-900/30 bg-amber-200/30 opacity-75 hover:opacity-100'
                    }`}
                  >
                    {/* Level Number & Biome Badge */}
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                          isCompleted
                            ? 'bg-emerald-700 text-white'
                            : isCurrent
                            ? 'bg-red-700 text-white'
                            : 'bg-amber-900/30 text-amber-950'
                        }`}
                      >
                        #{challenge.id}
                      </span>
                      <span className="text-xl">{getBiomeIcon(challenge.biome)}</span>
                    </div>

                    {/* Island Name */}
                    <div className="my-1">
                      <p className="text-[11px] font-bold text-amber-950 line-clamp-1 leading-tight">
                        {challenge.islandName}
                      </p>
                      <p className="text-[10px] text-amber-900/80 line-clamp-1">
                        {challenge.typeLabel.split(':')[1] || challenge.type}
                      </p>
                    </div>

                    {/* Status Badge Bottom */}
                    <div className="flex items-center justify-between pt-1 border-t border-amber-900/20 text-[10px]">
                      {isCompleted ? (
                        <span className="flex items-center gap-1 text-emerald-800 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Selesai
                        </span>
                      ) : isCurrent ? (
                        <span className="flex items-center gap-1 text-red-700 font-bold animate-bounce">
                          <Ship className="w-3.5 h-3.5" /> Berlabuh
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-amber-900/60">
                          <Lock className="w-3 h-3" /> Terkunci
                        </span>
                      )}

                      {challenge.id === 10 && (
                        <span className="text-amber-700 font-bold">👑 Peti</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Sea Route Note */}
            <div className="mt-4 p-2.5 rounded-lg bg-amber-950/10 border border-amber-900/20 flex items-center justify-between text-xs text-amber-950">
              <div className="flex items-center gap-2">
                <span className="text-base">🗺️</span>
                <span>
                  <strong>Aturan Pelayaran:</strong> Taklukkan 10 pulau secara berurutan. Kamu memiliki 3 kesempatan!
                </span>
              </div>
              <span className="font-bold text-amber-900">
                {completedLevels.length}/10 Selesai
              </span>
            </div>
          </div>

          {/* Selected Island Detail Parchment Card */}
          {hoveredLevel && (
            <div className="lg:col-span-4 bg-amber-100/90 rounded-xl p-4 sm:p-5 border-2 border-amber-900/40 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-900 text-amber-100">
                    Pulau {hoveredLevel.id} dari 10
                  </span>
                  <span className="text-2xl">{getBiomeIcon(hoveredLevel.biome)}</span>
                </div>

                <h3 className="font-pirate text-xl sm:text-2xl font-bold text-amber-950">
                  {hoveredLevel.islandName}
                </h3>
                <p className="text-xs font-semibold text-amber-800 mb-2">
                  {hoveredLevel.levelTitle} • {hoveredLevel.typeLabel} • 3 Pertanyaan
                </p>

                {/* Scenery Story */}
                <div className="p-3 rounded-lg bg-amber-900/10 border border-amber-900/20 mb-3 text-xs text-amber-950 leading-relaxed italic">
                  "{hoveredLevel.storyDescription}"
                </div>

                {/* Wildlife Encounter Preview */}
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-amber-200/50 border border-amber-900/20 mb-3">
                  <span className="text-2xl">{hoveredLevel.interactiveAnimal.avatar}</span>
                  <div>
                    <p className="text-xs font-bold text-amber-950">
                      Penghuni: {hoveredLevel.interactiveAnimal.name}
                    </p>
                    <p className="text-[11px] text-amber-900/80 line-clamp-1">
                      {hoveredLevel.interactiveAnimal.trivia}
                    </p>
                  </div>
                </div>

                {/* Map Piece & Artifact Reward */}
                <div className="space-y-1.5 text-xs text-amber-950">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                    <span>
                      <strong>Hadiah Koleksi:</strong> {hoveredLevel.mapPieceTitle}
                    </span>
                  </div>
                  {hoveredLevel.artifactReward && (
                    <div className="flex items-center gap-1.5 text-purple-900">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      <span>
                        <strong>Artefak:</strong> {hoveredLevel.artifactReward.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-3 border-t border-amber-900/20">
                {hoveredLevel.id <= currentLevel || completedLevels.includes(hoveredLevel.id) ? (
                  <button
                    onClick={() => {
                      audio.playButtonClick();
                      onSelectLevel(hoveredLevel.id);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-amber-100 font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Play className="w-4 h-4 fill-amber-100" />
                    Mulai 3 Soal Pulau #{hoveredLevel.id}
                  </button>
                ) : (
                  <div className="w-full py-2.5 px-4 rounded-xl bg-amber-900/20 text-amber-900/60 font-semibold text-xs text-center flex items-center justify-center gap-1.5 cursor-not-allowed">
                    <Lock className="w-3.5 h-3.5" /> Selesaikan pulau sebelumnya terlebih dahulu
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
