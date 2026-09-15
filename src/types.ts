export type GenderType = 'captain_boy' | 'captain_girl';
export type SkinTone = 'fair' | 'warm' | 'tan' | 'deep';
export type Expression = 'cheerful' | 'confident' | 'wink' | 'fierce';

export type HatItem = 'none' | 'tricorn_classic' | 'skull_bandana' | 'admiral_cap' | 'golden_crown' | 'feathered_pirate';
export type CoatItem = 'classic_stripes' | 'royal_corsair' | 'midnight_rogue' | 'golden_captain' | 'emerald_voyager';
export type AccessoryItem = 'none' | 'eye_patch' | 'gold_earring' | 'pirate_hook' | 'ruby_cutlass' | 'compass_necklace';

export type CompanionType = 'parrot' | 'monkey' | 'turtle' | 'dolphin';
export type CompanionAccessory = 'none' | 'mini_bandana' | 'mini_hat' | 'gold_chain' | 'sunglasses';

export interface HeroCustomization {
  gender: GenderType;
  skinTone: SkinTone;
  expression: Expression;
  hat: HatItem;
  coat: CoatItem;
  accessory: AccessoryItem;
}

export interface AnimalCompanion {
  type: CompanionType;
  name: string;
  accessory: CompanionAccessory;
  colorScheme: string;
}

export interface UserProfile {
  name: string;
  title: string;
  goldCoins: number;
  diamonds: number;
  hero: HeroCustomization;
  companion: AnimalCompanion;
  unlockedItems: string[];
  collectedArtifacts: string[];
  collectedMapPieces: number[];
  highestLevelReached: number;
  totalScore: number;
  totalTimeSeconds: number;
  gamesPlayed: number;
}

export type SubjectCategory =
  | 'all'
  | 'math'
  | 'indonesian'
  | 'history'
  | 'civics'
  | 'english'
  | 'social_studies'
  | 'news';

export interface SubjectInfo {
  id: SubjectCategory;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  borderColor: string;
  badgeBg: string;
  description: string;
}

export interface MathQuestion {
  id: number;
  questionNumber: number;
  questionTitle?: string;
  category?: SubjectCategory;
  categoryLabel?: string;
  questionText: string;
  equation?: string;
  options: {
    id: 'A' | 'B' | 'C';
    text: string;
    value?: number | string;
  }[];
  correctAnswer: 'A' | 'B' | 'C';
  explanation: string;
  companionHint: string;
  timeLimit: number;
}

export interface MathChallenge {
  id: number;
  type: 'addition' | 'subtraction' | 'multiplication' | 'division' | 'mixed';
  typeLabel: string;
  levelTitle: string;
  islandName: string;
  biome: 'beach' | 'ocean' | 'shipwreck' | 'jungle' | 'crystal_cave' | 'waterfall' | 'skull_canyon' | 'lagoon' | 'fortress' | 'treasure_island';
  storyDescription: string;
  questions: MathQuestion[];
  questionText?: string;
  equation?: string;
  options?: {
    id: 'A' | 'B' | 'C';
    text: string;
    value: number;
  }[];
  correctAnswer?: 'A' | 'B' | 'C';
  explanation?: string;
  companionHint?: string;
  timeLimit?: number;
  interactiveAnimal: {
    name: string;
    species: string;
    type: 'crab' | 'seagull' | 'turtle' | 'monkey' | 'octopus' | 'parrot' | 'dolphin';
    avatar: string;
    dialogue: string;
    bonusSeconds?: number;
    trivia: string;
  };
  mapPieceTitle: string;
  artifactReward?: {
    id: string;
    name: string;
    rarity: 'common' | 'rare' | 'legendary';
    iconName: string;
    lore: string;
  };
}

export interface LeaderboardEntry {
  id: string;
  rank?: number;
  playerName: string;
  title: string;
  score: number;
  levelsCompleted: number;
  timeSeconds: number;
  companionType: CompanionType;
  heroHat: HatItem;
  schoolOrClass?: string;
  timestamp: string;
  isCurrentUser?: boolean;
}

export interface ShopItem {
  id: string;
  name: string;
  category: 'hat' | 'coat' | 'accessory' | 'companion_acc' | 'pet';
  costType: 'gold' | 'diamond';
  price: number;
  itemKey: string;
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  previewColor: string;
}
