import React, { useState, useEffect, useMemo } from 'react';
import {
  UserProfile,
  ShopItem,
  HatItem,
  CoatItem,
  AccessoryItem,
  CompanionAccessory,
  SubjectCategory
} from './types';
import { MATH_CHALLENGES, getChallengesForSubject } from './data/challenges';
import { SUBJECTS } from './data/subjects';
import { Navbar } from './components/Navbar';
import { TreasureMap } from './components/TreasureMap';
import { GameChallenge } from './components/GameChallenge';
import { TreasureChestModal } from './components/TreasureChestModal';
import { FashionShopModal } from './components/FashionShopModal';
import { InventoryModal } from './components/InventoryModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { CharacterProfileModal } from './components/CharacterProfileModal';
import { SubjectSelectorModal } from './components/SubjectSelectorModal';
import { Lobby } from './components/Lobby';
import { audio } from './utils/audio';
import { Compass, Ship, Waves, Sparkles, Map as MapIcon, RotateCcw, BookOpen } from 'lucide-react';

const INITIAL_PROFILE: UserProfile = {
  name: 'Samudra',
  title: 'Penjelajah 7 Samudra',
  goldCoins: 50,
  diamonds: 10,
  hero: {
    gender: 'captain_boy',
    skinTone: 'warm',
    expression: 'cheerful',
    hat: 'tricorn_classic',
    coat: 'classic_stripes',
    accessory: 'eye_patch'
  },
  companion: {
    type: 'parrot',
    name: 'Koko Si Beo',
    accessory: 'mini_bandana',
    colorScheme: 'red_yellow_green'
  },
  unlockedItems: ['hat_tricorn', 'coat_classic_stripes', 'acc_eyepatch', 'comp_bandana'],
  collectedArtifacts: [],
  collectedMapPieces: [],
  highestLevelReached: 1,
  totalScore: 0,
  totalTimeSeconds: 0,
  gamesPlayed: 1
};

export default function App() {
  // Load profile from localStorage if exists
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('pirate_math_user_profile');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_PROFILE;
  });

  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [lives, setLives] = useState<number>(3);
  const maxLives = 3;

  // Modals state
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState<boolean>(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isTreasureChestOpen, setIsTreasureChestOpen] = useState<boolean>(false);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState<boolean>(false);
  const [currentSubject, setCurrentSubject] = useState<SubjectCategory>('all');
  const [gameState, setGameState] = useState<'lobby' | 'playing'>('lobby');

  // Audio state
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(audio.getIsMuted());

  // Save profile changes
  useEffect(() => {
    try {
      localStorage.setItem('pirate_math_user_profile', JSON.stringify(profile));
    } catch {
      // Ignore
    }
  }, [profile]);

  // Start relaxing ocean ambient on first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isAudioMuted) {
        audio.startOceanAmbience();
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isAudioMuted]);

  const handleToggleAudio = () => {
    const nextMuted = audio.toggleMute();
    setIsAudioMuted(nextMuted);
  };

  // Dynamically compute challenges for current subject
  const challenges = useMemo(() => getChallengesForSubject(currentSubject), [currentSubject]);
  const currentChallenge = challenges.find((c) => c.id === currentLevel) || challenges[0];
  const activeSubjectInfo = SUBJECTS.find((s) => s.id === currentSubject) || SUBJECTS[0];

  // Handle Correct Answer
  const handleAnswerCorrect = (timeSpent: number) => {
    const challenge = currentChallenge;
    const scoreEarned = Math.max(200, 1000 - timeSpent * 15);

    // Update completed levels
    const nextCompleted = Array.from(new Set([...completedLevels, currentLevel]));
    setCompletedLevels(nextCompleted);

    // Add map piece and artifact to profile
    const nextMapPieces = Array.from(
      new Set([...profile.collectedMapPieces, challenge.id])
    );
    const nextArtifacts = challenge.artifactReward
      ? Array.from(new Set([...profile.collectedArtifacts, challenge.artifactReward.id]))
      : profile.collectedArtifacts;

    // Bonus coins & diamonds per level cleared
    const levelBonusGold = 35;
    const levelBonusDiamond = 5;

    setProfile((prev) => ({
      ...prev,
      goldCoins: prev.goldCoins + levelBonusGold,
      diamonds: prev.diamonds + levelBonusDiamond,
      collectedMapPieces: nextMapPieces,
      collectedArtifacts: nextArtifacts,
      highestLevelReached: Math.max(prev.highestLevelReached, currentLevel),
      totalScore: prev.totalScore + scoreEarned,
      totalTimeSeconds: prev.totalTimeSeconds + timeSpent
    }));

    if (currentLevel === 10) {
      // VICTORY! Grand Finale - open the 500 gold + 100 diamond chest!
      setIsTreasureChestOpen(true);
    } else {
      // Advance to next level and give 3 fresh chances for the new math challenge
      setLives(3);
      setCurrentLevel((prev) => prev + 1);
    }
  };

  // Handle Incorrect Answer or Timeout
  const handleAnswerIncorrect = () => {
    setLives((prev) => Math.max(0, prev - 1));
  };

  // Handle Retry Current Level (reset 3 fresh chances)
  const handleRetryLevel = () => {
    setLives(3);
  };

  // Handle Game Over: Restart from Level 1
  const handleGameOverRestart = () => {
    setCurrentLevel(1);
    setLives(3);
    setCompletedLevels([]);
    setProfile((prev) => ({
      ...prev,
      gamesPlayed: prev.gamesPlayed + 1
    }));
  };

  // Handle Claiming the 500 Gold & 100 Diamonds
  const handleClaimTreasureChest = () => {
    setProfile((prev) => ({
      ...prev,
      goldCoins: prev.goldCoins + 500,
      diamonds: prev.diamonds + 100
    }));
  };

  // Shop item purchase & equip
  const handleBuyAndEquipItem = (item: ShopItem) => {
    if (item.costType === 'gold' && profile.goldCoins < item.price) return;
    if (item.costType === 'diamond' && profile.diamonds < item.price) return;

    setProfile((prev) => {
      const nextGold = item.costType === 'gold' ? prev.goldCoins - item.price : prev.goldCoins;
      const nextDiamonds = item.costType === 'diamond' ? prev.diamonds - item.price : prev.diamonds;
      const nextUnlocked = Array.from(new Set([...prev.unlockedItems, item.id]));

      let nextHero = { ...prev.hero };
      let nextCompanion = { ...prev.companion };

      if (item.category === 'hat') nextHero.hat = item.itemKey as HatItem;
      if (item.category === 'coat') nextHero.coat = item.itemKey as CoatItem;
      if (item.category === 'accessory') nextHero.accessory = item.itemKey as AccessoryItem;
      if (item.category === 'companion_acc')
        nextCompanion.accessory = item.itemKey as CompanionAccessory;

      return {
        ...prev,
        goldCoins: nextGold,
        diamonds: nextDiamonds,
        unlockedItems: nextUnlocked,
        hero: nextHero,
        companion: nextCompanion
      };
    });
  };

  // Equip already owned item
  const handleEquipOwnedItem = (category: string, itemKey: string) => {
    setProfile((prev) => {
      let nextHero = { ...prev.hero };
      let nextCompanion = { ...prev.companion };

      if (category === 'hat') {
        nextHero.hat = nextHero.hat === itemKey ? 'none' : (itemKey as HatItem);
      } else if (category === 'coat') {
        nextHero.coat = nextHero.coat === itemKey ? 'classic_stripes' : (itemKey as CoatItem);
      } else if (category === 'accessory') {
        nextHero.accessory = nextHero.accessory === itemKey ? 'none' : (itemKey as AccessoryItem);
      } else if (category === 'companion_acc') {
        nextCompanion.accessory =
          nextCompanion.accessory === itemKey ? 'none' : (itemKey as CompanionAccessory);
      }

      return {
        ...prev,
        hero: nextHero,
        companion: nextCompanion
      };
    });
  };

  // Update profile info
  const handleSaveProfile = (updated: Partial<UserProfile>) => {
    setProfile((prev) => ({
      ...prev,
      ...updated
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {gameState === 'lobby' ? (
        <Lobby
          profile={profile}
          currentLevel={currentLevel}
          completedLevels={completedLevels}
          challenges={challenges}
          currentSubject={currentSubject}
          isAudioMuted={isAudioMuted}
          onStartGame={() => setGameState('playing')}
          onSelectSubject={(subj) => {
            setCurrentSubject(subj);
            setLives(3);
          }}
          onOpenMap={() => setIsMapOpen(true)}
          onOpenShop={() => setIsShopOpen(true)}
          onOpenInventory={() => setIsInventoryOpen(true)}
          onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
          onOpenProfile={() => setIsProfileOpen(true)}
          onToggleAudio={handleToggleAudio}
        />
      ) : (
        <>
          {/* Top Navbar */}
          <Navbar
            profile={profile}
            lives={lives}
            maxLives={maxLives}
            currentLevel={currentLevel}
            totalLevels={challenges.length}
            isAudioMuted={isAudioMuted}
            currentSubject={currentSubject}
            onToggleAudio={handleToggleAudio}
            onOpenMap={() => setIsMapOpen(true)}
            onOpenShop={() => setIsShopOpen(true)}
            onOpenInventory={() => setIsInventoryOpen(true)}
            onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
            onOpenProfile={() => setIsProfileOpen(true)}
            onOpenSubjects={() => setIsSubjectModalOpen(true)}
            onGoToLobby={() => setGameState('lobby')}
          />

          {/* Main Game Stage */}
          <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6 flex flex-col justify-center">
            {/* Quick Island Progress & Subject Breadcrumb */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-2 text-xs text-amber-200/80">
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => {
                    audio.playButtonClick();
                    setGameState('lobby');
                  }}
                  className="flex items-center gap-1.5 bg-amber-950/70 hover:bg-amber-900/80 border border-amber-600/40 px-2.5 py-1 rounded-lg text-amber-300 transition-colors cursor-pointer"
                  title="Kembali ke Lobby Utama"
                >
                  <span>🏠</span>
                  <span className="font-bold">Lobby</span>
                </button>

                <div className="flex items-center gap-1.5 bg-amber-950/70 border border-amber-600/40 px-2.5 py-1 rounded-lg text-amber-300">
                  <Ship className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    Perjalanan: <strong>{currentChallenge.islandName}</strong> (Pulau {currentLevel}/10)
                  </span>
                </div>

                {/* Current Subject Badge with Switcher Button */}
                <button
                  onClick={() => {
                    audio.playButtonClick();
                    setIsSubjectModalOpen(true);
                  }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-950/70 border border-sky-500/40 text-sky-200 hover:bg-sky-900/80 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
                  title="Ganti Mata Pelajaran atau Topik Soal"
                >
                  <span>{activeSubjectInfo.icon}</span>
                  <span className="font-bold">{activeSubjectInfo.shortName}</span>
                  <span className="text-[10px] text-sky-400 underline ml-0.5">Ubah</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    audio.playButtonClick();
                    setIsMapOpen(true);
                  }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-600/40 text-amber-300 hover:bg-amber-900/60 transition-colors"
                >
                  <MapIcon className="w-3.5 h-3.5" />
                  <span>Lihat Peta</span>
                </button>
              </div>
            </div>

            {/* Current Active Game Challenge */}
            <GameChallenge
              challenge={currentChallenge}
              profile={profile}
              lives={lives}
              onAnswerCorrect={handleAnswerCorrect}
              onAnswerIncorrect={handleAnswerIncorrect}
              onRetryLevel={handleRetryLevel}
              onGameOverRestart={handleGameOverRestart}
              onOpenMap={() => setIsMapOpen(true)}
            />
          </main>

          {/* Footer / Nautical status */}
          <footer className="py-3 px-4 text-center border-t border-amber-900/40 bg-slate-950 text-xs text-amber-200/60">
            <p>
              ⚓ Bajak Laut Penjelajah • Selesaikan 10 Tantangan Pulau untuk Membuka Peti 500 Koin Emas & 100 Berlian
            </p>
          </footer>
        </>
      )}

      {/* MODALS */}
      {/* 1. Treasure Map Modal */}
      {isMapOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-4xl max-h-[92vh] overflow-y-auto">
            <TreasureMap
              challenges={challenges}
              currentLevel={currentLevel}
              completedLevels={completedLevels}
              profile={profile}
              onSelectLevel={(levelId) => {
                setCurrentLevel(levelId);
                setLives(3);
                setIsMapOpen(false);
                setGameState('playing');
              }}
              onClose={() => setIsMapOpen(false)}
            />
          </div>
        </div>
      )}

      {/* 2. Grand Treasure Chest Victory Modal */}
      <TreasureChestModal
        isOpen={isTreasureChestOpen}
        onClaimReward={handleClaimTreasureChest}
        onOpenShop={() => {
          setIsTreasureChestOpen(false);
          setIsShopOpen(true);
        }}
        onOpenLeaderboard={() => {
          setIsTreasureChestOpen(false);
          setIsLeaderboardOpen(true);
        }}
      />

      {/* 3. Fashion Hero & Companion Wardrobe Shop */}
      <FashionShopModal
        isOpen={isShopOpen}
        profile={profile}
        onClose={() => setIsShopOpen(false)}
        onBuyAndEquipItem={handleBuyAndEquipItem}
        onEquipOwnedItem={handleEquipOwnedItem}
      />

      {/* 4. Interactive Inventory & Antique Artifacts */}
      <InventoryModal
        isOpen={isInventoryOpen}
        profile={profile}
        onClose={() => setIsInventoryOpen(false)}
      />

      {/* 5. Real-Time Global Leaderboard */}
      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        profile={profile}
        onClose={() => setIsLeaderboardOpen(false)}
      />

      {/* 6. Character Profile Customization */}
      <CharacterProfileModal
        isOpen={isProfileOpen}
        profile={profile}
        onClose={() => setIsProfileOpen(false)}
        onSaveProfile={handleSaveProfile}
      />

      {/* 7. Subject & Curriculum Selector Modal */}
      <SubjectSelectorModal
        isOpen={isSubjectModalOpen}
        onClose={() => setIsSubjectModalOpen(false)}
        currentSubject={currentSubject}
        onSelectSubject={(subj) => {
          setCurrentSubject(subj);
          setLives(3);
        }}
      />
    </div>
  );
}
