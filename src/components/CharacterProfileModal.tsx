import React, { useState } from 'react';
import {
  X,
  User,
  Sparkles,
  Save,
  Smile,
  Shield,
  Palette,
  Heart
} from 'lucide-react';
import {
  UserProfile,
  GenderType,
  SkinTone,
  Expression,
  CompanionType
} from '../types';
import { PirateAvatar } from './PirateAvatar';
import { CompanionAvatar } from './CompanionAvatar';
import { audio } from '../utils/audio';

interface CharacterProfileModalProps {
  isOpen: boolean;
  profile: UserProfile;
  onClose: () => void;
  onSaveProfile: (updatedProfile: Partial<UserProfile>) => void;
}

export const CharacterProfileModal: React.FC<CharacterProfileModalProps> = ({
  isOpen,
  profile,
  onClose,
  onSaveProfile
}) => {
  const [name, setName] = useState(profile.name);
  const [title, setTitle] = useState(profile.title);
  const [gender, setGender] = useState<GenderType>(profile.hero.gender);
  const [skinTone, setSkinTone] = useState<SkinTone>(profile.hero.skinTone);
  const [expression, setExpression] = useState<Expression>(profile.hero.expression);
  const [companionType, setCompanionType] = useState<CompanionType>(profile.companion.type);
  const [companionName, setCompanionName] = useState(profile.companion.name);

  if (!isOpen) return null;

  const handleSave = () => {
    audio.playButtonClick();
    audio.playCorrectSound();
    onSaveProfile({
      name: name.trim() || 'Kapten Samudra',
      title: title.trim() || 'Penjelajah Laut Cerdik',
      hero: {
        ...profile.hero,
        gender,
        skinTone,
        expression
      },
      companion: {
        ...profile.companion,
        type: companionType,
        name: companionName.trim() || 'Sahabat Laut'
      }
    });
    onClose();
  };

  const previewHero = {
    ...profile.hero,
    gender,
    skinTone,
    expression
  };

  const previewCompanion = {
    ...profile.companion,
    type: companionType,
    name: companionName
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl bg-slate-950 border-3 border-amber-600/70 shadow-2xl text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-amber-950 via-slate-900 to-slate-950 border-b border-amber-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border-2 border-amber-400/50 flex items-center justify-center">
              <User className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="font-pirate text-2xl sm:text-3xl text-amber-300 font-bold tracking-wide">
                Kustomisasi Profil Kapten & Sahabat
              </h2>
              <p className="text-xs text-amber-200/70">
                Atur identitas pelaut unik dan pilih hewan pendamping kesayanganmu!
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

        {/* Live Preview Display */}
        <div className="p-4 sm:p-5 bg-slate-900 border-b border-slate-800 flex items-center justify-around">
          <div className="flex flex-col items-center">
            <PirateAvatar hero={previewHero} size="lg" />
            <span className="font-pirate text-lg text-amber-300 font-bold mt-1">
              Kapten {name || 'Samudra'}
            </span>
            <span className="text-xs text-amber-400/80 font-medium">{title}</span>
          </div>

          <div className="flex flex-col items-center">
            <CompanionAvatar companion={previewCompanion} size="md" />
            <span className="font-pirate text-base text-amber-200 font-bold mt-1">
              {companionName || 'Sahabat'}
            </span>
            <span className="text-[11px] text-slate-400 capitalize">
              Hewan: {companionType}
            </span>
          </div>
        </div>

        {/* Form Controls */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Captain Name & Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-amber-300 mb-1">
                Nama Kapten Bajak Laut:
              </label>
              <input
                type="text"
                value={name}
                maxLength={20}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border-2 border-slate-700 focus:border-amber-500 text-sm text-white focus:outline-none"
                placeholder="Masukkan nama kapten..."
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-amber-300 mb-1">
                Gelar Kemahiran Samudra:
              </label>
              <select
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border-2 border-slate-700 focus:border-amber-500 text-sm text-white focus:outline-none"
              >
                <option value="Penjelajah 7 Samudra">Penjelajah 7 Samudra</option>
                <option value="Pakar Aljabar Samudra">Pakar Aljabar Samudra</option>
                <option value="Kapten Badai Kilat">Kapten Badai Kilat</option>
                <option value="Penakluk Karang Hitam">Penakluk Karang Hitam</option>
                <option value="Navigasi Bintang Samudra">Navigasi Bintang Samudra</option>
                <option value="Raja Bajak Laut Cilik">Raja Bajak Laut Cilik</option>
              </select>
            </div>
          </div>

          {/* Gender / Appearance Type */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Model Karakter Hero:
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { key: 'captain_boy', label: 'Kapten Samudra (Laki-laki)' },
                { key: 'captain_girl', label: 'Kapten Marina (Perempuan)' }
              ].map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => {
                    audio.playButtonClick();
                    setGender(opt.key as GenderType);
                  }}
                  className={`p-2.5 rounded-xl border-2 text-xs font-bold transition-all ${
                    gender === opt.key
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skin Tone */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Warna Kulit Karakter:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { key: 'fair', label: 'Cerah', color: '#fed7aa' },
                { key: 'warm', label: 'Kuning Langsat', color: '#fcd34d' },
                { key: 'tan', label: 'Sawo Matang', color: '#f59e0b' },
                { key: 'deep', label: 'Eksotis Gelap', color: '#b45309' }
              ].map((skin) => (
                <button
                  key={skin.key}
                  type="button"
                  onClick={() => {
                    audio.playButtonClick();
                    setSkinTone(skin.key as SkinTone);
                  }}
                  className={`p-2 rounded-xl border-2 flex items-center gap-2 text-xs font-semibold ${
                    skinTone === skin.key
                      ? 'bg-amber-500/20 border-amber-500 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  <div
                    className="w-4 h-4 rounded-full border border-black/40"
                    style={{ backgroundColor: skin.color }}
                  />
                  <span>{skin.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Expression */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Ekspresi Wajah:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { key: 'cheerful', label: 'Ceria 😊' },
                { key: 'confident', label: 'Percaya Diri 😏' },
                { key: 'wink', label: 'Kedip 😉' },
                { key: 'fierce', label: 'Gagah 🦁' }
              ].map((expr) => (
                <button
                  key={expr.key}
                  type="button"
                  onClick={() => {
                    audio.playButtonClick();
                    setExpression(expr.key as Expression);
                  }}
                  className={`p-2 rounded-xl border-2 text-xs font-semibold ${
                    expression === expr.key
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {expr.label}
                </button>
              ))}
            </div>
          </div>

          {/* Animal Companion Selection */}
          <div className="pt-3 border-t border-slate-800">
            <label className="block text-xs font-bold text-amber-300 mb-1.5">
              Pilih Hewan Pendamping (Companion Animal):
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
              {[
                { key: 'parrot', name: 'Burung Beo Koko', icon: '🦜' },
                { key: 'monkey', name: 'Monyet Ciko', icon: '🐒' },
                { key: 'turtle', name: 'Penyu Toro', icon: '🐢' },
                { key: 'dolphin', name: 'Lumba Finny', icon: '🐬' }
              ].map((animal) => (
                <button
                  key={animal.key}
                  type="button"
                  onClick={() => {
                    audio.playButtonClick();
                    setCompanionType(animal.key as CompanionType);
                    setCompanionName(animal.name);
                  }}
                  className={`p-3 rounded-xl border-2 flex flex-col items-center gap-1 text-center transition-all ${
                    companionType === animal.key
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="text-3xl">{animal.icon}</span>
                  <span className="text-xs font-bold">{animal.name}</span>
                </button>
              ))}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Panggilan Kesayangan Sahabat:
              </label>
              <input
                type="text"
                value={companionName}
                maxLength={20}
                onChange={(e) => setCompanionName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border-2 border-slate-700 focus:border-amber-500 text-sm text-white focus:outline-none"
                placeholder="Nama hewan pendamping..."
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => {
              audio.playButtonClick();
              onClose();
            }}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold shadow-md flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          >
            <Save className="w-4 h-4" />
            Simpan Perubahan Profil
          </button>
        </div>
      </div>
    </div>
  );
};
