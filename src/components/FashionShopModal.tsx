import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  Sparkles,
  Check,
  Crown,
  Shield,
  Tag,
  Palette
} from 'lucide-react';
import { UserProfile, ShopItem, HatItem, CoatItem, AccessoryItem, CompanionAccessory } from '../types';
import { SHOP_ITEMS } from '../data/fashionItems';
import { PirateAvatar } from './PirateAvatar';
import { CompanionAvatar } from './CompanionAvatar';
import { audio } from '../utils/audio';

interface FashionShopModalProps {
  isOpen: boolean;
  profile: UserProfile;
  onClose: () => void;
  onBuyAndEquipItem: (item: ShopItem) => void;
  onEquipOwnedItem: (category: string, itemKey: string) => void;
}

export const FashionShopModal: React.FC<FashionShopModalProps> = ({
  isOpen,
  profile,
  onClose,
  onBuyAndEquipItem,
  onEquipOwnedItem
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'hat' | 'coat' | 'accessory' | 'companion_acc'>('all');
  const [previewHero, setPreviewHero] = useState(profile.hero);
  const [previewCompanion, setPreviewCompanion] = useState(profile.companion);

  if (!isOpen) return null;

  const filteredItems = SHOP_ITEMS.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  const isItemOwned = (itemId: string) => {
    return profile.unlockedItems.includes(itemId);
  };

  const isItemEquipped = (item: ShopItem) => {
    if (item.category === 'hat') return profile.hero.hat === item.itemKey;
    if (item.category === 'coat') return profile.hero.coat === item.itemKey;
    if (item.category === 'accessory') return profile.hero.accessory === item.itemKey;
    if (item.category === 'companion_acc') return profile.companion.accessory === item.itemKey;
    return false;
  };

  const handlePreview = (item: ShopItem) => {
    audio.playButtonClick();
    if (item.category === 'hat') {
      setPreviewHero((prev) => ({ ...prev, hat: item.itemKey as HatItem }));
    } else if (item.category === 'coat') {
      setPreviewHero((prev) => ({ ...prev, coat: item.itemKey as CoatItem }));
    } else if (item.category === 'accessory') {
      setPreviewHero((prev) => ({ ...prev, accessory: item.itemKey as AccessoryItem }));
    } else if (item.category === 'companion_acc') {
      setPreviewCompanion((prev) => ({
        ...prev,
        accessory: item.itemKey as CompanionAccessory
      }));
    }
  };

  const handleBuy = (item: ShopItem) => {
    const canAfford =
      item.costType === 'gold'
        ? profile.goldCoins >= item.price
        : profile.diamonds >= item.price;

    if (!canAfford) {
      audio.playWrongSound();
      return;
    }

    audio.playCoinSound();
    onBuyAndEquipItem(item);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-slate-950 border-3 border-amber-600/70 shadow-2xl text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-amber-950 via-purple-950 to-slate-950 border-b border-amber-700/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 border-2 border-purple-400/50 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-purple-300" />
            </div>
            <div>
              <h2 className="font-pirate text-2xl sm:text-3xl text-amber-300 font-bold tracking-wide">
                Toko Mode Bajak Laut & Penjahit Samudra
              </h2>
              <p className="text-xs text-amber-200/70">
                Tukarkan 500 koin emas & 100 butir berlian dengan busana legendaris!
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

        {/* Live Mirror & Wallet Status Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 sm:p-5 bg-slate-900/90 border-b border-slate-800">
          {/* Live Character Mirror */}
          <div className="md:col-span-6 bg-slate-950/70 rounded-2xl p-4 border border-amber-500/30 flex items-center justify-around">
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-bold text-amber-400 mb-1">
                Kapt. {profile.name} (Pratinjau)
              </span>
              <PirateAvatar hero={previewHero} size="lg" />
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[11px] font-bold text-amber-400 mb-1">
                {profile.companion.name}
              </span>
              <CompanionAvatar companion={previewCompanion} size="md" />
            </div>
          </div>

          {/* Wallet Balance & Tabs */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-700">
              <span className="text-xs font-semibold text-slate-300">Sisa Harta Karun:</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-bold">
                  <span>🪙</span>
                  <span>{profile.goldCoins.toLocaleString()} Koin</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
                  <span>💎</span>
                  <span>{profile.diamonds.toLocaleString()} Berlian</span>
                </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { key: 'all', label: 'Semua' },
                { key: 'hat', label: 'Topi Bajak Laut' },
                { key: 'coat', label: 'Jubah & Rompi' },
                { key: 'accessory', label: 'Aksesoris' },
                { key: 'companion_acc', label: 'Hewan Pendamping' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => {
                    audio.playButtonClick();
                    setActiveTab(tab.key as any);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === tab.key
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Shop Items Catalog Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredItems.map((item) => {
              const owned = isItemOwned(item.id);
              const equipped = isItemEquipped(item);
              const canAfford =
                item.costType === 'gold'
                  ? profile.goldCoins >= item.price
                  : profile.diamonds >= item.price;

              return (
                <div
                  key={item.id}
                  className={`relative p-3.5 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                    equipped
                      ? 'bg-emerald-950/40 border-emerald-500/80 shadow-md'
                      : owned
                      ? 'bg-slate-900/80 border-slate-700 hover:border-slate-500'
                      : 'bg-slate-900/60 border-slate-800 hover:border-amber-500/50'
                  }`}
                >
                  {/* Top Badge: Rarity & Equipped */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        item.rarity === 'legendary'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : item.rarity === 'epic'
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                          : item.rarity === 'rare'
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {item.rarity}
                    </span>

                    {equipped && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-600/50">
                        <Check className="w-3 h-3" /> Dipakai
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="mb-3">
                    <h3 className="font-pirate text-lg font-bold text-amber-200">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-snug mt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800 mt-auto">
                    {/* Price */}
                    <div>
                      {owned ? (
                        <span className="text-xs font-semibold text-emerald-400">
                          Sudah Dimiliki
                        </span>
                      ) : (
                        <div className="flex items-center gap-1 text-sm font-bold">
                          <span>{item.costType === 'gold' ? '🪙' : '💎'}</span>
                          <span
                            className={
                              item.costType === 'gold'
                                ? 'text-amber-400'
                                : 'text-cyan-400'
                            }
                          >
                            {item.price} {item.costType === 'gold' ? 'Koin' : 'Berlian'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Button Group */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handlePreview(item)}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-semibold"
                        title="Coba Lihat di Cermin"
                      >
                        Coba
                      </button>

                      {owned ? (
                        <button
                          onClick={() => {
                            audio.playButtonClick();
                            onEquipOwnedItem(item.category, item.itemKey);
                            handlePreview(item);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                            equipped
                              ? 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                              : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                          }`}
                        >
                          {equipped ? 'Lepas' : 'Pakai'}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleBuy(item)}
                          disabled={!canAfford}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold shadow transition-all ${
                            canAfford
                              ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 hover:scale-105 active:scale-95'
                              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                          }`}
                        >
                          Beli
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
