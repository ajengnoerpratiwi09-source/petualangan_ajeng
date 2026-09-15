import React, { useState } from 'react';
import {
  X,
  Briefcase,
  Map as MapIcon,
  Compass,
  Sparkles,
  Award,
  BookOpen,
  Anchor,
  Key,
  Hourglass,
  Gem,
  Crown,
  Scroll
} from 'lucide-react';
import { UserProfile } from '../types';
import { MATH_CHALLENGES } from '../data/challenges';
import { audio } from '../utils/audio';

interface InventoryModalProps {
  isOpen: boolean;
  profile: UserProfile;
  onClose: () => void;
}

export const InventoryModal: React.FC<InventoryModalProps> = ({
  isOpen,
  profile,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'map_pieces' | 'artifacts'>('map_pieces');
  const [selectedArtifact, setSelectedArtifact] = useState<any | null>(null);

  if (!isOpen) return null;

  const allArtifacts = MATH_CHALLENGES.filter((c) => c.artifactReward).map(
    (c) => ({
      ...c.artifactReward!,
      levelOrigin: c.id,
      islandOrigin: c.islandName
    })
  );

  const getArtifactIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-8 h-8 text-amber-400" />;
      case 'Binoculars':
        return <span className="text-3xl">🔭</span>;
      case 'Anchor':
        return <Anchor className="w-8 h-8 text-cyan-400" />;
      case 'Scroll':
        return <Scroll className="w-8 h-8 text-amber-300" />;
      case 'Key':
        return <Key className="w-8 h-8 text-yellow-400" />;
      case 'Gem':
        return <Gem className="w-8 h-8 text-purple-400" />;
      case 'Hourglass':
        return <Hourglass className="w-8 h-8 text-amber-300" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-blue-400" />;
      case 'Sword':
        return <span className="text-3xl">🗡️</span>;
      case 'Crown':
        return <Crown className="w-8 h-8 text-amber-400" />;
      default:
        return <Sparkles className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-slate-950 border-3 border-emerald-600/70 shadow-2xl text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border-b border-emerald-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border-2 border-emerald-400/50 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h2 className="font-pirate text-2xl sm:text-3xl text-emerald-300 font-bold tracking-wide">
                Inventaris & Galeri Koleksi Bajak Laut
              </h2>
              <p className="text-xs text-emerald-200/70">
                Koleksi potongan peta kuno & artefak langka peninggalan samudra
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              audio.playButtonClick();
              onClose();
            }}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 p-3 bg-slate-900 border-b border-slate-800">
          <button
            onClick={() => {
              audio.playButtonClick();
              setActiveTab('map_pieces');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'map_pieces'
                ? 'bg-emerald-600 text-white shadow'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <MapIcon className="w-4 h-4" />
            <span>Peta Harta Karun ({profile.collectedMapPieces.length}/10 Bagian)</span>
          </button>

          <button
            onClick={() => {
              audio.playButtonClick();
              setActiveTab('artifacts');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'artifacts'
                ? 'bg-emerald-600 text-white shadow'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Artefak Antik ({profile.collectedArtifacts.length}/10 Ditemukan)</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* TAB 1: Peta Harta Karun */}
          {activeTab === 'map_pieces' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#edd9bc] border-2 border-amber-900/60 text-amber-950 shadow-inner">
                <div className="flex items-center justify-between mb-3 border-b border-amber-900/20 pb-2">
                  <h3 className="font-pirate text-xl font-bold">
                    Rekonstruksi Peta Samudra Kuno
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-900 text-amber-100">
                    {profile.collectedMapPieces.length === 10
                      ? '🎉 Peta Utuh Terbuka Sempurna!'
                      : `${profile.collectedMapPieces.length} dari 10 Bagian Terkumpul`}
                  </span>
                </div>

                {/* 10 Map Pieces Puzzle Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {MATH_CHALLENGES.map((challenge) => {
                    const isCollected = profile.collectedMapPieces.includes(challenge.id);
                    return (
                      <div
                        key={challenge.id}
                        className={`relative p-3 rounded-xl border-2 flex flex-col justify-between min-h-[90px] transition-all ${
                          isCollected
                            ? 'bg-amber-100/90 border-amber-800/60 shadow'
                            : 'bg-amber-950/20 border-dashed border-amber-900/40 opacity-50'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px] font-bold">
                          <span>Bagian #{challenge.id}</span>
                          <span>{isCollected ? '🗺️' : '❓'}</span>
                        </div>

                        <p className="text-[10px] font-semibold text-amber-900 line-clamp-2 mt-1">
                          {isCollected ? challenge.mapPieceTitle : 'Belum Ditemukan'}
                        </p>

                        <div className="text-[9px] text-amber-800/80 pt-1 border-t border-amber-900/10 mt-auto">
                          {isCollected ? challenge.islandName : `Tantangan #${challenge.id}`}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="text-xs text-slate-400 italic text-center">
                *Selesaikan setiap tantangan matematika di pulau untuk mengoleksi potongan peta berikutnya!
              </p>
            </div>
          )}

          {/* TAB 2: Artefak Antik */}
          {activeTab === 'artifacts' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {allArtifacts.map((art) => {
                  const isFound = profile.collectedArtifacts.includes(art.id);
                  return (
                    <button
                      key={art.id}
                      onClick={() => {
                        if (isFound) {
                          audio.playButtonClick();
                          setSelectedArtifact(art);
                        }
                      }}
                      disabled={!isFound}
                      className={`p-3.5 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                        isFound
                          ? 'bg-slate-900/90 border-emerald-500/60 hover:border-emerald-400 hover:scale-105 cursor-pointer shadow-lg'
                          : 'bg-slate-900/30 border-slate-800 opacity-40 cursor-not-allowed'
                      }`}
                    >
                      <div className="w-14 h-14 rounded-xl bg-slate-800/80 flex items-center justify-center mb-2">
                        {isFound ? getArtifactIcon(art.iconName) : '🔒'}
                      </div>
                      <span className="text-xs font-bold text-amber-200 line-clamp-1">
                        {isFound ? art.name : 'Artefak Terkunci'}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5">
                        {isFound ? art.islandOrigin : `Pulau #${art.levelOrigin}`}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Artifact Inspection Card */}
              {selectedArtifact && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-amber-950/80 border-2 border-emerald-500/60 shadow-xl flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-slate-800/80 border-2 border-emerald-400/40 flex items-center justify-center shrink-0">
                    {getArtifactIcon(selectedArtifact.iconName)}
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      <h4 className="font-pirate text-xl text-amber-300 font-bold">
                        {selectedArtifact.name}
                      </h4>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-500/40">
                        {selectedArtifact.rarity}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-2">
                      {selectedArtifact.lore}
                    </p>
                    <p className="text-[11px] text-amber-400/90 font-semibold">
                      Ditemukan di: {selectedArtifact.islandOrigin} (Tantangan #{selectedArtifact.levelOrigin})
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
