import React, { useState } from 'react';
import {
  Compass,
  Play,
  Map as MapIcon,
  ShoppingBag,
  Package,
  Trophy,
  User,
  Volume2,
  VolumeX,
  Sparkles,
  Ship,
  BookOpen,
  Award,
  HelpCircle,
  Check,
  Flame,
  Star,
  ChevronRight
} from 'lucide-react';
import { UserProfile, MathChallenge, SubjectCategory } from '../types';
import { SUBJECTS } from '../data/subjects';
import { PirateAvatar } from './PirateAvatar';
import { CompanionAvatar } from './CompanionAvatar';
import { audio } from '../utils/audio';

interface LobbyProps {
  profile: UserProfile;
  currentLevel: number;
  completedLevels: number[];
  challenges: MathChallenge[];
  currentSubject: SubjectCategory;
  isAudioMuted: boolean;
  onStartGame: () => void;
  onSelectSubject: (subject: SubjectCategory) => void;
  onOpenMap: () => void;
  onOpenShop: () => void;
  onOpenInventory: () => void;
  onOpenLeaderboard: () => void;
  onOpenProfile: () => void;
  onToggleAudio: () => void;
}

export const Lobby: React.FC<LobbyProps> = ({
  profile,
  currentLevel,
  completedLevels,
  challenges,
  currentSubject,
  isAudioMuted,
  onStartGame,
  onSelectSubject,
  onOpenMap,
  onOpenShop,
  onOpenInventory,
  onOpenLeaderboard,
  onOpenProfile,
  onToggleAudio
}) => {
  const [showHowToPlay, setShowHowToPlay] = useState<boolean>(false);

  const currentChallenge =
    challenges.find((c) => c.id === currentLevel) || challenges[0];
  const activeSubjectInfo =
    SUBJECTS.find((s) => s.id === currentSubject) || SUBJECTS[0];

  const companionQuotes: Record<string, string> = {
    parrot: 'Ayo berlayar Kapten! Keping peta dan peti emas 10 pulau menanti kita!',
    monkey: 'Uu-aa! Kemudi siap diputar, layar siap terkembang!',
    turtle: 'Cermat dan teliti, Kapten! Ombak samudra kita taklukkan bersama!',
    dolphin: 'Lumba-lumba memandu arah pelayaran paling aman dan penuh berkah!'
  };
  const companionQuote = companionQuotes[profile.companion.type] || 'Ayo berlayar Kapten!';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-[#0d1c2d] to-slate-950 text-slate-100 flex flex-col relative overflow-hidden">
      {/* Background Decorative Nautical Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Sun / Moon Nautical Ray Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      {/* Top Bar / Quick Control */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-3 flex items-center justify-between border-b border-amber-900/40 bg-slate-950/40 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏴‍☠️</span>
          <span className="font-pirate text-amber-400 text-lg sm:text-xl font-bold tracking-wider">
            Bajak Laut Penjelajah
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 hidden sm:inline font-bold">
            Samudra Nusantara
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Audio Control */}
          <button
            onClick={() => {
              audio.playButtonClick();
              onToggleAudio();
            }}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-amber-900/60 text-amber-300 transition-all cursor-pointer shadow-xs"
            title={isAudioMuted ? 'Nyalakan Musik & Suara' : 'Bisukan Suara'}
          >
            {isAudioMuted ? (
              <VolumeX className="w-4 h-4 text-slate-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
            )}
          </button>

          {/* Quick Panduan Button */}
          <button
            onClick={() => {
              audio.playButtonClick();
              setShowHowToPlay(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/60 hover:bg-amber-900/80 border border-amber-600/40 text-amber-200 text-xs font-semibold transition-all cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Panduan Bermain</span>
          </button>
        </div>
      </div>

      {/* Main Lobby Container */}
      <div className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:py-8 flex flex-col justify-between gap-6">
        {/* Header Hero Branding */}
        <div className="text-center space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/50 shadow-md">
            <Compass className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
              Markas Besar Pelaut Nusantara
            </span>
          </div>

          <h1 className="font-pirate text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-yellow-600 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            BAJAK LAUT PENJELAJAH
          </h1>

          <p className="text-sm sm:text-base text-amber-100/80 max-w-2xl mx-auto font-medium leading-relaxed px-2">
            Mengarungi 10 pulau samudra nusantara, menaklukkan teka-teki pengetahuan kurikulum, mengoleksi koin emas, dan membuka Peti Harta Karun Legendaris!
          </p>
        </div>

        {/* Center Grid: Captain Identity Card + Big Launch Button + Subject Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Captain & Companion Profile Card (Col 4) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-slate-900/90 to-amber-950/40 rounded-3xl border-2 border-amber-600/40 p-5 shadow-2xl flex flex-col justify-between backdrop-blur-md">
            <div>
              {/* Profile Header */}
              <div className="flex items-center justify-between pb-3 border-b border-amber-900/50">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Profil Kapten Kapal
                  </span>
                </div>
                <button
                  onClick={() => {
                    audio.playButtonClick();
                    onOpenProfile();
                  }}
                  className="text-xs text-amber-300 hover:text-amber-100 flex items-center gap-1 font-semibold underline underline-offset-2 cursor-pointer"
                >
                  <User className="w-3.5 h-3.5" />
                  Ubah
                </button>
              </div>

              {/* Avatar & Captain Name */}
              <div className="mt-4 flex items-center gap-3.5">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-950 via-slate-900 to-amber-900 border-2 border-amber-400 p-1 flex items-center justify-center shadow-lg overflow-hidden">
                    <PirateAvatar hero={profile.hero} size="sm" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px] flex items-center justify-center border-2 border-slate-950 shadow">
                    P{currentLevel}
                  </div>
                </div>

                <div>
                  <h3 className="font-pirate text-xl font-bold text-amber-300">
                    Kapten {profile.name}
                  </h3>
                  <div className="inline-block px-2 py-0.5 rounded-md bg-amber-900/60 text-amber-200 text-xs font-semibold border border-amber-700/50">
                    {profile.title}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Pulau Tertinggi: {profile.highestLevelReached} • {profile.gamesPlayed}x Main
                  </p>
                </div>
              </div>

              {/* Companion Pet Speech Bubble */}
              <div className="mt-4 p-3 rounded-2xl bg-slate-950/70 border border-amber-500/30 flex items-center gap-3">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center">
                  <CompanionAvatar companion={profile.companion} size="sm" />
                </div>
                <div className="text-xs flex-1">
                  <p className="font-bold text-amber-300">
                    {profile.companion.name} ({profile.companion.type === 'parrot' ? 'Burung Beo' : profile.companion.type === 'monkey' ? 'Kera Cerdik' : profile.companion.type === 'turtle' ? 'Penyu Samudra' : 'Lumba-lumba'})
                  </p>
                  <p className="text-slate-300 italic mt-0.5 leading-snug">
                    "{companionQuote}"
                  </p>
                </div>
              </div>

              {/* Wealth & Progress Stats */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-600/40 flex items-center gap-2">
                  <div className="text-lg">🪙</div>
                  <div>
                    <div className="text-[10px] text-amber-300 font-semibold">Koin Emas</div>
                    <div className="font-bold text-amber-200 text-sm">
                      {profile.goldCoins.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-600/40 flex items-center gap-2">
                  <div className="text-lg">💎</div>
                  <div>
                    <div className="text-[10px] text-cyan-300 font-semibold">Berlian</div>
                    <div className="font-bold text-cyan-200 text-sm">
                      {profile.diamonds.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-600/40 flex items-center gap-2">
                  <div className="text-lg">🏝️</div>
                  <div>
                    <div className="text-[10px] text-emerald-300 font-semibold">Pulau Selesai</div>
                    <div className="font-bold text-emerald-200 text-sm">
                      {completedLevels.length} / {challenges.length}
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-600/40 flex items-center gap-2">
                  <div className="text-lg">🏆</div>
                  <div>
                    <div className="text-[10px] text-purple-300 font-semibold">Total Skor</div>
                    <div className="font-bold text-purple-200 text-sm">{profile.totalScore.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Navigation in Card */}
            <div className="mt-4 pt-3 border-t border-amber-900/40 grid grid-cols-3 gap-1.5 text-center">
              <button
                onClick={() => {
                  audio.playButtonClick();
                  onOpenShop();
                }}
                className="p-2 rounded-xl bg-amber-900/40 hover:bg-amber-800/60 border border-amber-700/40 text-amber-200 text-[11px] font-bold flex flex-col items-center gap-1 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span>Toko</span>
              </button>

              <button
                onClick={() => {
                  audio.playButtonClick();
                  onOpenInventory();
                }}
                className="p-2 rounded-xl bg-amber-900/40 hover:bg-amber-800/60 border border-amber-700/40 text-amber-200 text-[11px] font-bold flex flex-col items-center gap-1 transition-all cursor-pointer"
              >
                <Package className="w-4 h-4 text-amber-400" />
                <span>Artefak</span>
              </button>

              <button
                onClick={() => {
                  audio.playButtonClick();
                  onOpenLeaderboard();
                }}
                className="p-2 rounded-xl bg-amber-900/40 hover:bg-amber-800/60 border border-amber-700/40 text-amber-200 text-[11px] font-bold flex flex-col items-center gap-1 transition-all cursor-pointer"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Peringkat</span>
              </button>
            </div>
          </div>

          {/* Center Column: Big "Mulai Berlayar" + Subject Selector (Col 8) */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-5">
            {/* Grand Launch Banner (Mulai Berlayar) */}
            <div className="relative rounded-3xl bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border-3 border-amber-500/70 p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 group">
              {/* Background Glow & Ship Silhouette */}
              <div className="absolute -right-10 -bottom-10 w-52 h-52 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="space-y-2 text-center sm:text-left z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Rute Pelayaran Siap Dilayari!
                </div>

                <h2 className="font-pirate text-2xl sm:text-3xl text-amber-200 font-bold">
                  Tujuan: {currentChallenge.islandName}
                </h2>

                <p className="text-xs sm:text-sm text-amber-100/70 max-w-md">
                  Pulau ke-{currentLevel} dari 10 • Selesaikan 3 pertanyaan pengetahuan maritim dengan 3 kesempatan hidup!
                </p>

                <div className="flex items-center gap-2 text-xs text-amber-300 font-medium flex-wrap">
                  <span className="px-2 py-0.5 rounded-md bg-amber-900/60 border border-amber-600/40">
                    Pelajaran: {activeSubjectInfo.shortName}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-900/60 border border-amber-600/40">
                    Hadiah: +35 Koin Emas (+5 💎)
                  </span>
                  {currentChallenge.artifactReward && (
                    <span className="px-2 py-0.5 rounded-md bg-purple-900/60 border border-purple-500/40 text-purple-200">
                      🎁 {currentChallenge.artifactReward.name}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons: Mulai Berlayar & Lihat Peta */}
              <div className="flex flex-col gap-2.5 w-full sm:w-auto z-10">
                <button
                  onClick={() => {
                    audio.playLevelStart();
                    onStartGame();
                  }}
                  className="relative px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-pirate text-2xl sm:text-3xl font-bold tracking-wider shadow-lg shadow-amber-500/40 hover:shadow-amber-400/60 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <Play className="w-6 h-6 fill-slate-950 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
                  <span>MULAI BERLAYAR</span>
                </button>

                <button
                  onClick={() => {
                    audio.playButtonClick();
                    onOpenMap();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-amber-500/40 text-amber-200 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-amber-400"
                >
                  <MapIcon className="w-4 h-4 text-amber-400" />
                  <span>Lihat Peta 10 Pulau Samudra</span>
                </button>
              </div>
            </div>

            {/* Subject Selector Hub in Lobby */}
            <div className="bg-slate-950/80 rounded-3xl border-2 border-amber-900/60 p-5 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <h3 className="font-pirate text-lg sm:text-xl text-amber-300 font-bold">
                    Pilih Mata Pelajaran Ekspedisi
                  </h3>
                </div>
                <span className="text-xs text-amber-200/70">
                  Topik aktif: <strong className="text-amber-300">{activeSubjectInfo.shortName}</strong>
                </span>
              </div>

              {/* Subject Grid in Lobby */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {SUBJECTS.map((sub) => {
                  const isSelected = currentSubject === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => {
                        audio.playButtonClick();
                        onSelectSubject(sub.id);
                      }}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between group cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-br from-amber-900 to-amber-950 border-amber-400 ring-2 ring-amber-400/60 text-amber-100 shadow-md scale-[1.02]'
                          : 'bg-slate-900/70 hover:bg-slate-800/90 border-amber-900/40 text-slate-200 hover:border-amber-600/50'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="text-2xl">{sub.icon}</span>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-[11px] font-bold">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>

                      <div>
                        <div className="font-bold text-xs sm:text-sm leading-tight text-amber-200">
                          {sub.shortName}
                        </div>
                        <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                          {sub.id === 'all' ? 'Campuran Semua Soal' : 'Kurikulum Terpadu'}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards (10 Pulau, Peti Harta Karun, Toko & Petualangan) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-amber-900/50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xl shrink-0">
              🏝️
            </div>
            <div className="text-xs">
              <h4 className="font-bold text-amber-300">10 Pulau Menanti</h4>
              <p className="text-slate-400">
                Dari Pulau Pasir Putih hingga Pulau Naga Api di ujung samudra nusantara.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-amber-900/50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-xl shrink-0">
              💎
            </div>
            <div className="text-xs">
              <h4 className="font-bold text-cyan-300">Peti Harta Karun Utama</h4>
              <p className="text-slate-400">
                Taklukkan seluruh 10 pulau untuk mengklaim 500 Koin Emas & 100 Berlian murni!
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-amber-900/50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xl shrink-0">
              ❤️
            </div>
            <div className="text-xs">
              <h4 className="font-bold text-emerald-300">Aturan 3 Kesempatan</h4>
              <p className="text-slate-400">
                Tiap soal memberi 3 kesempatan hidup sebelum kunci jawaban & pembahasan dibuka.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 py-3 text-center border-t border-amber-900/40 bg-slate-950 text-xs text-amber-200/50">
        ⚓ Bajak Laut Penjelajah • Samudra Pengetahuan Nusantara
      </div>

      {/* Panduan Bermain Modal */}
      {showHowToPlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-gradient-to-b from-[#f7ebd4] to-[#ebd4b0] rounded-2xl border-4 border-amber-900 shadow-2xl p-5 text-slate-900 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b-2 border-amber-900/30">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-800" />
                <h3 className="font-pirate text-2xl font-bold text-amber-950">
                  Panduan Bajak Laut Penjelajah
                </h3>
              </div>
              <button
                onClick={() => {
                  audio.playButtonClick();
                  setShowHowToPlay(false);
                }}
                className="p-1 rounded-lg bg-amber-900/20 hover:bg-amber-900/40 text-amber-950 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs leading-relaxed text-slate-800">
              <div className="p-3 rounded-xl bg-white/60 border border-amber-900/20">
                <strong className="text-amber-950 block text-sm mb-1">1. Menaklukkan Pulau</strong>
                Setiap pulau memiliki 3 pertanyaan berurutan. Pilih jawaban yang paling tepat (A, B, atau C) untuk berlayar maju ke pertanyaan selanjutnya.
              </div>

              <div className="p-3 rounded-xl bg-white/60 border border-amber-900/20">
                <strong className="text-amber-950 block text-sm mb-1">2. Aturan 3 Kesempatan (❤️)</strong>
                Setiap soal memberikan 3 kesempatan hidup. Jika jawabanmu salah, kesempatan berkurang namun kunci jawaban tidak akan dibocorkan! Gunakan tombol <em>"Coba Kembali Soal Ini"</em> untuk berpikir ulang.
              </div>

              <div className="p-3 rounded-xl bg-white/60 border border-amber-900/20">
                <strong className="text-amber-950 block text-sm mb-1">3. Pilihan Mata Pelajaran</strong>
                Kamu dapat memilih kurikulum mata pelajaran yang ingin dipelajari kapan pun: Matematika, Bahasa Indonesia, Sejarah Bahari, PPKn, Bahasa Inggris, IPS, Berita Terkini, atau mode Semua Pelajaran campuran!
              </div>

              <div className="p-3 rounded-xl bg-white/60 border border-amber-900/20">
                <strong className="text-amber-950 block text-sm mb-1">4. Harta Karun & Kustomisasi</strong>
                Dapatkan koin emas dan berlian setelah menyelesaikan pulau. Belanjakan di Toko Bajak Laut untuk mendandani kapal, topi bajak laut, dan memanjakan hewan pendampingmu!
              </div>
            </div>

            <button
              onClick={() => {
                audio.playButtonClick();
                setShowHowToPlay(false);
              }}
              className="mt-5 w-full py-2.5 rounded-xl bg-amber-900 hover:bg-amber-800 text-amber-100 font-bold transition-colors cursor-pointer"
            >
              Siap Menjelajah!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
