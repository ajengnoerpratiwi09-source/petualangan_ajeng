import { SubjectInfo } from '../types';

export const SUBJECTS: SubjectInfo[] = [
  {
    id: 'all',
    name: 'Semua Pelajaran (Ekspedisi Nusantara)',
    shortName: 'Semua Pelajaran',
    icon: '🌟',
    color: 'from-amber-500 to-yellow-600 text-slate-950',
    borderColor: 'border-amber-500',
    badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    description: 'Petualangan kuis campuran: Matematika, Bahasa Indonesia, Sejarah, PPKn, Bahasa Inggris, IPS, dan Berita Terkini!'
  },
  {
    id: 'math',
    name: 'Matematika Samudra',
    shortName: 'Matematika',
    icon: '🔢',
    color: 'from-blue-600 to-cyan-600 text-white',
    borderColor: 'border-cyan-500',
    badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    description: 'Tantangan hitung cepat: Penjumlahan, Pengurangan, Perkalian, Pembagian, dan Operasi Campuran.'
  },
  {
    id: 'indonesian',
    name: 'Bahasa Indonesia (Pujangga Samudra)',
    shortName: 'B. Indonesia',
    icon: '🇮🇩',
    color: 'from-red-600 to-rose-600 text-white',
    borderColor: 'border-red-500',
    badgeBg: 'bg-red-500/20 text-red-300 border-red-500/30',
    description: 'Tata bahasa baku, majas, peribahasa maritim, sinonim, antonim, dan pemahaman teks pelayaran.'
  },
  {
    id: 'history',
    name: 'Sejarah Bahari & Nusantara',
    shortName: 'Sejarah',
    icon: '🏛️',
    color: 'from-amber-700 to-amber-900 text-amber-100',
    borderColor: 'border-amber-600',
    badgeBg: 'bg-amber-600/20 text-amber-300 border-amber-600/30',
    description: 'Kerajaan maritim Sriwijaya, Majapahit, Samudra Pasai, pahlawan laut, jalur rempah, dan kemerdekaan.'
  },
  {
    id: 'civics',
    name: 'PPKn (Pancasila & Kewarganegaraan)',
    shortName: 'PPKn',
    icon: '🦅',
    color: 'from-emerald-600 to-teal-700 text-white',
    borderColor: 'border-emerald-500',
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    description: 'Pengamalan nilai-nilai 5 Sila Pancasila, Bhinneka Tunggal Ika, norma hukum, dan hak/kewajiban warga.'
  },
  {
    id: 'english',
    name: 'Bahasa Inggris (English Voyager)',
    shortName: 'B. Inggris',
    icon: '🇬🇧',
    color: 'from-indigo-600 to-blue-700 text-white',
    borderColor: 'border-indigo-500',
    badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    description: 'Maritime vocabulary, English grammar, tenses, reading comprehension, and nautical expressions.'
  },
  {
    id: 'social_studies',
    name: 'IPS (Geografi & Ekonomi Bahari)',
    shortName: 'IPS',
    icon: '🌍',
    color: 'from-teal-600 to-emerald-700 text-white',
    borderColor: 'border-teal-500',
    badgeBg: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    description: 'Letak geografis Nusantara, batas laut ZEE, angin muson, perdagangan maritim, dan potensi alam.'
  },
  {
    id: 'news',
    name: 'Berita & Wawasan Aktual Terkini',
    shortName: 'Berita & Aktual',
    icon: '📰',
    color: 'from-purple-600 to-pink-600 text-white',
    borderColor: 'border-purple-500',
    badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    description: 'IKN Nusantara, Kereta Cepat Whoosh, PLTS Terapung Cirata, konservasi laut, dan kemajuan sains teknologi modern.'
  }
];
