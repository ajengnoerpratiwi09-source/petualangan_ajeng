import React, { useState, useEffect } from 'react';
import {
  X,
  Trophy,
  Medal,
  Users,
  Flame,
  Search,
  Filter,
  Clock,
  CheckCircle2,
  Sparkles,
  School
} from 'lucide-react';
import { LeaderboardEntry, UserProfile } from '../types';
import { audio } from '../utils/audio';

interface LeaderboardModalProps {
  isOpen: boolean;
  profile: UserProfile;
  onClose: () => void;
}

// Initial realistic competition data for school students
const DEFAULT_LEADERBOARD: LeaderboardEntry[] = [
  {
    id: 'lead_1',
    rank: 1,
    playerName: 'Siti Nurhaliza',
    title: 'Pakar Aljabar Samudra',
    score: 9850,
    levelsCompleted: 10,
    timeSeconds: 142,
    companionType: 'parrot',
    heroHat: 'golden_crown',
    schoolOrClass: 'Kelas 5A - SDN Cendikia',
    timestamp: '2 menit yang lalu'
  },
  {
    id: 'lead_2',
    rank: 2,
    playerName: 'Rian Pratama',
    title: 'Kapten Badai Kilat',
    score: 9420,
    levelsCompleted: 10,
    timeSeconds: 168,
    companionType: 'monkey',
    heroHat: 'admiral_cap',
    schoolOrClass: 'Kelas 5B - SD Nusantara',
    timestamp: '5 menit yang lalu'
  },
  {
    id: 'lead_3',
    rank: 3,
    playerName: 'Aisyah Putri',
    title: 'Penjelajah 7 Samudra',
    score: 9100,
    levelsCompleted: 10,
    timeSeconds: 185,
    companionType: 'turtle',
    heroHat: 'feathered_pirate',
    schoolOrClass: 'Kelas 5A - SDN Cendikia',
    timestamp: '12 menit yang lalu'
  },
  {
    id: 'lead_4',
    rank: 4,
    playerName: 'Budi Santoso',
    title: 'Penakluk Karang Hitam',
    score: 8750,
    levelsCompleted: 9,
    timeSeconds: 210,
    companionType: 'dolphin',
    heroHat: 'tricorn_classic',
    schoolOrClass: 'Kelas 5C - SD Harapan',
    timestamp: '25 menit yang lalu'
  },
  {
    id: 'lead_5',
    rank: 5,
    playerName: 'Dimas Wicaksono',
    title: 'Korsir Cerdik',
    score: 8200,
    levelsCompleted: 9,
    timeSeconds: 235,
    companionType: 'parrot',
    heroHat: 'skull_bandana',
    schoolOrClass: 'Kelas 5B - SD Nusantara',
    timestamp: '40 menit yang lalu'
  },
  {
    id: 'lead_6',
    rank: 6,
    playerName: 'Fanya Ramadhani',
    title: 'Navigasi Bintang Samudra',
    score: 7900,
    levelsCompleted: 8,
    timeSeconds: 245,
    companionType: 'turtle',
    heroHat: 'admiral_cap',
    schoolOrClass: 'Kelas 5A - SDN Cendikia',
    timestamp: '1 jam yang lalu'
  },
  {
    id: 'lead_7',
    rank: 7,
    playerName: 'Kiki Ramadhan',
    title: 'Pelaut Pantang Mundur',
    score: 7400,
    levelsCompleted: 8,
    timeSeconds: 280,
    companionType: 'monkey',
    heroHat: 'tricorn_classic',
    schoolOrClass: 'Kelas 5C - SD Harapan',
    timestamp: '1 jam yang lalu'
  }
];

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  profile,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'global' | 'classroom' | 'today'>('global');
  const [classFilter, setClassFilter] = useState('');
  const [tickerIndex, setTickerIndex] = useState(0);

  // Real-time live notifications ticker
  const liveTickerUpdates = [
    `⚡ ${profile.name} sedang berlayar di Tantangan #${profile.highestLevelReached}!`,
    '⚡ Siti Nurhaliza baru saja mempertahankan Peringkat 1 dengan waktu 142 detik!',
    '⚡ Rian Pratama berhasil membuka Peti Emas 500 Koin & 100 Berlian!',
    '⚡ Kelas 5A SDN Cendikia memimpin skor rata-rata mingguan!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % liveTickerUpdates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  // Insert or update current user in list
  const userEntry: LeaderboardEntry = {
    id: 'current_user',
    playerName: profile.name,
    title: profile.title,
    score: profile.totalScore > 0 ? profile.totalScore : 1200 * profile.highestLevelReached,
    levelsCompleted: profile.highestLevelReached,
    timeSeconds: profile.totalTimeSeconds > 0 ? profile.totalTimeSeconds : 190,
    companionType: profile.companion.type,
    heroHat: profile.hero.hat,
    schoolOrClass: classFilter ? classFilter : 'Kelas 5A - Bajak Laut Sejati',
    timestamp: 'Baru saja',
    isCurrentUser: true
  };

  const allEntries = [...DEFAULT_LEADERBOARD, userEntry].sort((a, b) => b.score - a.score);

  // Assign ranks
  const rankedEntries = allEntries.map((e, idx) => ({
    ...e,
    rank: idx + 1
  }));

  const filteredEntries = rankedEntries.filter((entry) => {
    if (activeTab === 'classroom' && classFilter) {
      return entry.schoolOrClass?.toLowerCase().includes(classFilter.toLowerCase());
    }
    return true;
  });

  const getRankBadge = (rank?: number) => {
    if (rank === 1) {
      return (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-yellow-600 flex items-center justify-center font-bold text-slate-950 text-sm shadow-md border-2 border-yellow-200">
          🥇
        </div>
      );
    }
    if (rank === 2) {
      return (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center font-bold text-slate-950 text-sm shadow-md border-2 border-slate-100">
          🥈
        </div>
      );
    }
    if (rank === 3) {
      return (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center font-bold text-white text-sm shadow-md border-2 border-amber-500">
          🥉
        </div>
      );
    }
    return (
      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-300 text-xs border border-slate-700">
        #{rank}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-3xl bg-slate-950 border-3 border-amber-500/70 shadow-2xl text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-amber-950 via-slate-900 to-slate-950 border-b border-amber-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border-2 border-amber-400/50 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="font-pirate text-2xl sm:text-3xl text-amber-300 font-bold tracking-wide">
                Papan Peringkat Pelaut Matematika
              </h2>
              <p className="text-xs text-amber-200/70">
                Kompetisi siswa samudra real-time antar teman sekelas & sekolah
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

        {/* Real-Time Live Activity Ticker */}
        <div className="px-4 py-2 bg-amber-950/40 border-b border-amber-900/30 flex items-center gap-2 text-xs text-amber-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold text-emerald-400 uppercase text-[10px] tracking-wider">
            Live Feed:
          </span>
          <span className="truncate transition-opacity duration-300">
            {liveTickerUpdates[tickerIndex]}
          </span>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-3 sm:px-5 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-1.5">
            {[
              { key: 'global', label: 'Top Global 🌍' },
              { key: 'classroom', label: 'Teman Sekelas 🏫' },
              { key: 'today', label: 'Rekor Hari Ini 🔥' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  audio.playButtonClick();
                  setActiveTab(tab.key as any);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.key
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'classroom' && (
            <div className="flex items-center gap-2">
              <School className="w-4 h-4 text-amber-400" />
              <input
                type="text"
                placeholder="Cari kelas / sekolah..."
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>
          )}
        </div>

        {/* Leaderboard Table List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-2.5">
          {filteredEntries.map((entry) => {
            const isUser = entry.isCurrentUser;

            return (
              <div
                key={entry.id}
                className={`flex items-center justify-between p-3 sm:p-4 rounded-2xl border-2 transition-all ${
                  isUser
                    ? 'bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-950/50 ring-2 ring-amber-500/40'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Left: Rank & Avatar & Name */}
                <div className="flex items-center gap-3">
                  {getRankBadge(entry.rank)}

                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm sm:text-base text-amber-200">
                        {entry.playerName}
                      </span>
                      {isUser && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950">
                          Kamu
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span className="text-amber-400/90 font-medium">{entry.title}</span>
                      <span>•</span>
                      <span className="text-slate-400">{entry.schoolOrClass}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Scores & Time */}
                <div className="text-right">
                  <div className="font-pirate text-lg sm:text-xl font-bold text-amber-400 tracking-wide">
                    {entry.score.toLocaleString()} Poin
                  </div>
                  <div className="flex items-center justify-end gap-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" /> {entry.levelsCompleted}/10 Pulau
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {entry.timeSeconds}s
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
