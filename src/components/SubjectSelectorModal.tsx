import React from 'react';
import { X, BookOpen, Sparkles, Check } from 'lucide-react';
import { SubjectCategory } from '../types';
import { SUBJECTS } from '../data/subjects';
import { audio } from '../utils/audio';

interface SubjectSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSubject: SubjectCategory;
  onSelectSubject: (subject: SubjectCategory) => void;
}

export const SubjectSelectorModal: React.FC<SubjectSelectorModalProps> = ({
  isOpen,
  onClose,
  currentSubject,
  onSelectSubject
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#f7ebd4] to-[#ebd4b0] rounded-2xl border-4 border-amber-900 shadow-2xl overflow-hidden text-slate-900 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border-b-2 border-amber-600/40 text-amber-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xl shadow-inner">
              <BookOpen className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="font-pirate text-xl sm:text-2xl font-bold text-amber-300">
                Pilih Mata Pelajaran & Kurikulum
              </h2>
              <p className="text-xs text-amber-200/80">
                Ubah tantangan pulau sesuai pelajaran favorit atau gunakan mode campuran serba tahu!
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              audio.playButtonClick();
              onClose();
            }}
            className="p-1.5 rounded-lg bg-amber-900/40 hover:bg-amber-800/60 text-amber-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content / Subject Cards */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-2.5 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SUBJECTS.map((sub) => {
              const isSelected = currentSubject === sub.id;

              return (
                <button
                  key={sub.id}
                  onClick={() => {
                    audio.playButtonClick();
                    onSelectSubject(sub.id);
                    onClose();
                  }}
                  className={`relative p-3.5 sm:p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between group shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                    isSelected
                      ? 'bg-amber-900 text-amber-100 border-amber-500 ring-2 ring-amber-400 shadow-md'
                      : 'bg-[#fff6e6] hover:bg-amber-100/90 text-slate-900 border-amber-900/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{sub.icon}</span>
                        <span className="font-bold text-sm sm:text-base leading-tight">
                          {sub.shortName}
                        </span>
                      </div>

                      {isSelected ? (
                        <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-900/10 text-amber-900 font-semibold">
                          Pilih
                        </span>
                      )}
                    </div>

                    <p
                      className={`text-xs line-clamp-2 leading-relaxed ${
                        isSelected ? 'text-amber-200/90' : 'text-slate-700'
                      }`}
                    >
                      {sub.description}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-amber-900/15 flex items-center justify-between text-[11px] font-medium">
                    <span className={isSelected ? 'text-amber-300 font-bold' : 'text-amber-800'}>
                      {sub.id === 'all' ? '10 Pulau • Campuran' : '10 Pulau • 3 Soal'}
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-emerald-300 text-[10px] font-bold">
                        <Sparkles className="w-3 h-3 text-emerald-300" />
                        Aktif Saat Ini
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-amber-950/10 border-t border-amber-900/20 flex items-center justify-between text-xs text-amber-950">
          <span>*Semua progres koin, berlian, dan artefak kamu tetap tersimpan aman.</span>
          <button
            onClick={() => {
              audio.playButtonClick();
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg bg-amber-900 text-amber-100 font-bold hover:bg-amber-800 transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
