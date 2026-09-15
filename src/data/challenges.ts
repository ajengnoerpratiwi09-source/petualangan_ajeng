import { MathChallenge } from '../types';

export const MATH_CHALLENGES: MathChallenge[] = [
  {
    id: 1,
    type: 'addition',
    typeLabel: 'Tantangan 1: Pertambahan (+)',
    levelTitle: 'Pantai Kelapa Gading',
    islandName: 'Isla de Palmera',
    biome: 'beach',
    storyDescription: 'Kapal berlabuh di pantai berpasir putih dikelilingi pohon kelapa gading yang menjulang. Kita menemukan peninggalan armada pelaut terdahulu di pesisir pulau.',
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionTitle: 'Pertanyaan 1 dari 3: Peti Keping Emas',
        questionText: 'Peti pertama di pesisir berisi 468 keping emas kuno, dan peti kedua berisi 375 keping emas. Berapakah jumlah keseluruhan keping emas yang berhasil disatukan oleh sang Kapten?',
        equation: '468 + 375 = ?',
        options: [
          { id: 'A', text: '843 Keping', value: 843 },
          { id: 'B', text: '833 Keping', value: 833 },
          { id: 'C', text: '853 Keping', value: 853 }
        ],
        correctAnswer: 'A',
        explanation: '468 + 375: Jumlahkan satuan (8+5=13, simpan 1), puluhan (6+7+1=14, simpan 1), ratusan (4+3+1=8). Hasilnya adalah 843 keping emas.',
        companionHint: 'Hitung perlahan dari satuannya dulu ya Kapten! 8 + 5 berakhiran 3!',
        timeLimit: 40
      },
      {
        id: 2,
        questionNumber: 2,
        questionTitle: 'Pertanyaan 2 dari 3: Mutiara Mercusuar Pantai',
        questionText: 'Di reruntuhan mercusuar pantai, ditemukan 524 butir mutiara putih dan 289 butir mutiara hitam. Berapa jumlah total seluruh butir mutiara yang ditemukan?',
        equation: '524 + 289 = ?',
        options: [
          { id: 'A', text: '803 Butir', value: 803 },
          { id: 'B', text: '813 Butir', value: 813 },
          { id: 'C', text: '823 Butir', value: 823 }
        ],
        correctAnswer: 'B',
        explanation: '524 + 289: Satuan (4+9=13, simpan 1), puluhan (2+8+1=11, simpan 1), ratusan (5+2+1=8). Totalnya adalah 813 butir mutiara.',
        companionHint: 'Perhatikan penjumlahan puluhan: 2 + 8 = 10, ditambah simpanan 1 menjadi 11!',
        timeLimit: 40
      },
      {
        id: 3,
        questionNumber: 3,
        questionTitle: 'Pertanyaan 3 dari 3: Perbekalan Buah Kelapa',
        questionText: 'Awak kapal mengumpulkan 637 buah kelapa segar dari bukit barat dan 486 buah kelapa dari bukit timur untuk persediaan pelayaran. Berapa total kelapa yang terkumpul?',
        equation: '637 + 486 = ?',
        options: [
          { id: 'A', text: '1.123 Kelapa', value: 1123 },
          { id: 'B', text: '1.113 Kelapa', value: 1113 },
          { id: 'C', text: '1.133 Kelapa', value: 1133 }
        ],
        correctAnswer: 'A',
        explanation: '637 + 486: Satuan (7+6=13, simpan 1), puluhan (3+8+1=12, simpan 1), ratusan (6+4+1=11). Total = 1.123 buah kelapa.',
        companionHint: 'Hitung dari satuannya: 7 + 6 = 13 (simpan 1). Lalu 3 + 8 + 1 = 12 (simpan 1). 6 + 4 + 1 = 11!',
        timeLimit: 45
      }
    ],
    // Single-question compatibility properties
    questionText: 'Peti pertama berisi 468 keping emas kuno, dan peti kedua berisi 375 keping emas. Berapakah jumlah keseluruhan keping emas yang berhasil disatukan oleh sang Kapten?',
    equation: '468 + 375 = ?',
    options: [
      { id: 'A', text: '843 Keping', value: 843 },
      { id: 'B', text: '833 Keping', value: 833 },
      { id: 'C', text: '853 Keping', value: 853 }
    ],
    correctAnswer: 'A',
    explanation: '468 + 375 = 843 keping emas.',
    companionHint: 'Hitung perlahan dari satuannya dulu ya Kapten! 8 + 5 berakhiran 3!',
    timeLimit: 40,
    interactiveAnimal: {
      name: 'Krabi Si Capit Merah',
      species: 'Kepiting Pantai',
      type: 'crab',
      avatar: '🦀',
      dialogue: 'Halo Kapten! Ombak di pantai ini membawa kerang ajaib. Selesaikan ketiga teka-teki berhitung ini agar pantai membuka jalan setapak!',
      bonusSeconds: 5,
      trivia: 'Kepiting memiliki cakar yang kuat untuk memecahkan cangkang tiram laut.'
    },
    mapPieceTitle: 'Peta Robek Bagian I (Garis Pantai Selatan)',
    artifactReward: {
      id: 'art_1',
      name: 'Kompas Kuningan Tua',
      rarity: 'common',
      iconName: 'Compass',
      lore: 'Kompas antik peninggalan pelaut abad ke-17. Jarum magnetiknya selalu mengarah ke pulau harta karun.'
    }
  },
  {
    id: 2,
    type: 'subtraction',
    typeLabel: 'Tantangan 2: Pengurangan (-)',
    levelTitle: 'Karang Badai Biru',
    islandName: 'Arrecife Azul',
    biome: 'ocean',
    storyDescription: 'Mengarungi laut biru yang bergelombang tinggi dengan tebing karang runcing. Ombak besar menerpa lambung kapal dan kita harus mengatur muatan kapal.',
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionTitle: 'Pertanyaan 1 dari 3: Cadangan Air Tawar',
        questionText: 'Kapal membawa 920 liter air tawar di lambung kapal. Setelah berhari-hari mengarungi samudra berbadai, tersisa hanya 384 liter air. Berapa liter air tawar yang telah digunakan awak kapal?',
        equation: '920 - 384 = ?',
        options: [
          { id: 'A', text: '546 Liter', value: 546 },
          { id: 'B', text: '536 Liter', value: 536 },
          { id: 'C', text: '526 Liter', value: 526 }
        ],
        correctAnswer: 'B',
        explanation: '920 - 384 = 536 liter. Pengurangan pinjam puluhan: 0 pinjam 1 jadi 10 - 4 = 6; 1 pinjam ratusan jadi 11 - 8 = 3; 8 - 3 = 5. Hasil = 536 liter.',
        companionHint: 'Ingat teknik meminjam di pengurangan: 0 pinjam dari 2 menjadi 10 - 4 = 6!',
        timeLimit: 40
      },
      {
        id: 2,
        questionNumber: 2,
        questionTitle: 'Pertanyaan 2 dari 3: Persediaan Mesiu Meriam',
        questionText: 'Gudang kapal awalnya memuat 850 kantong bubuk mesiu. Setelah pertempuran sengit melawan monster badai, terpakai 467 kantong. Berapa sisa kantong mesiu yang tersisa?',
        equation: '850 - 467 = ?',
        options: [
          { id: 'A', text: '383 Kantong', value: 383 },
          { id: 'B', text: '393 Kantong', value: 393 },
          { id: 'C', text: '373 Kantong', value: 373 }
        ],
        correctAnswer: 'A',
        explanation: '850 - 467 = 383 kantong. Satuan (10 - 7 = 3), puluhan (14 - 6 = 8), ratusan (7 - 4 = 3). Sisa = 383 kantong.',
        companionHint: 'Cek cepat dengan penjumlahan balikan: 383 + 467 = 850. Tepat sekali!',
        timeLimit: 40
      },
      {
        id: 3,
        questionNumber: 3,
        questionTitle: 'Pertanyaan 3 dari 3: Jarak Tempuh Peta Karang',
        questionText: 'Peta navigasi laut menunjukkan lintasan sepanjang 1.000 mil laut. Kapal telah berhasil menempuh 648 mil laut. Berapa mil laut lagi sisa jarak yang harus diarungi?',
        equation: '1.000 - 648 = ?',
        options: [
          { id: 'A', text: '362 Mil Laut', value: 362 },
          { id: 'B', text: '342 Mil Laut', value: 342 },
          { id: 'C', text: '352 Mil Laut', value: 352 }
        ],
        correctAnswer: 'C',
        explanation: '1.000 - 648 = 352 mil laut. (1.000 - 600 = 400; 400 - 48 = 352).',
        companionHint: '1.000 dikurangi 648: 10 - 8 = 2; 9 - 4 = 5; 9 - 6 = 3. Hasilnya 352!',
        timeLimit: 40
      }
    ],
    questionText: 'Kapal membawa 920 liter air tawar di lambung kapal. Setelah 12 hari mengarungi samudra berbadai, tersisa hanya 384 liter air. Berapa liter air tawar yang telah digunakan awak kapal?',
    equation: '920 - 384 = ?',
    options: [
      { id: 'A', text: '546 Liter', value: 546 },
      { id: 'B', text: '536 Liter', value: 536 },
      { id: 'C', text: '526 Liter', value: 526 }
    ],
    correctAnswer: 'B',
    explanation: '920 - 384 = 536 liter.',
    companionHint: 'Ingat teknik meminjam di pengurangan: 0 pinjam dari 2 menjadi 10 - 4 = 6!',
    timeLimit: 40,
    interactiveAnimal: {
      name: 'Barnaby Si Camar Laut',
      species: 'Burung Camar Penjaga Karang',
      type: 'seagull',
      avatar: '🕊️',
      dialogue: 'Kuaaak! Angin berhembus kencang dari timur laut. Tiga teka-teki samudra ini harus kau kuasai agar kapal tak karam di karang!',
      bonusSeconds: 5,
      trivia: 'Burung camar dapat meminum air laut berkat kelenjar khusus di atas matanya.'
    },
    mapPieceTitle: 'Peta Robek Bagian II (Pusaran Karang Terumbu)',
    artifactReward: {
      id: 'art_2',
      name: 'Teropong Lensa Emas',
      rarity: 'rare',
      iconName: 'Binoculars',
      lore: 'Teropong berkilau yang mampu menembus kabut tebal hingga 20 mil laut.'
    }
  },
  {
    id: 3,
    type: 'multiplication',
    typeLabel: 'Tantangan 3: Perkalian (×)',
    levelTitle: 'Teluk Bangkai Kapal Karam',
    islandName: 'Bahía del Naufragio',
    biome: 'shipwreck',
    storyDescription: 'Reruntuhan kapal galleon raksasa tertancap di antara tebing karang. Di dalam geladak kapten, tersusun rapi barang berharga berlabel angka rahasia.',
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionTitle: 'Pertanyaan 1 dari 3: Peti Peluru Meriam Perunggu',
        questionText: 'Terdapat 28 peti amunisi meriam perunggu. Setiap peti memuat tepat 35 butir peluru meriam mesiu padat. Berapakah jumlah total seluruh butir peluru meriam tersebut?',
        equation: '28 × 35 = ?',
        options: [
          { id: 'A', text: '980 Butir', value: 980 },
          { id: 'B', text: '950 Butir', value: 950 },
          { id: 'C', text: '1.020 Butir', value: 1020 }
        ],
        correctAnswer: 'A',
        explanation: '28 × 35 = (28 × 30) + (28 × 5) = 840 + 140 = 980 butir peluru meriam.',
        companionHint: 'Tips cerdas: kalikan 28 dengan 5 (= 140), lalu 28 dengan 30 (= 840), jumlahkan keduanya!',
        timeLimit: 45
      },
      {
        id: 2,
        questionNumber: 2,
        questionTitle: 'Pertanyaan 2 dari 3: Rak Botol Ramuan Rahasia',
        questionText: 'Di ruang kabin nahkoda kuno, ada 24 rak botol kaca ramuan penawar racun. Tiap rak menampung 45 botol ramuan. Berapa total seluruh botol ramuan tersebut?',
        equation: '24 × 45 = ?',
        options: [
          { id: 'A', text: '1.060 Botol', value: 1060 },
          { id: 'B', text: '1.080 Botol', value: 1080 },
          { id: 'C', text: '1.120 Botol', value: 1120 }
        ],
        correctAnswer: 'B',
        explanation: '24 × 45 = (24 × 40) + (24 × 5) = 960 + 120 = 1.080 botol ramuan.',
        companionHint: 'Kalikan: 24 × 40 = 960, dan 24 × 5 = 120. 960 + 120 = 1.080!',
        timeLimit: 45
      },
      {
        id: 3,
        questionNumber: 3,
        questionTitle: 'Pertanyaan 3 dari 3: Kantong Koin Perak Bajak Laut',
        questionText: 'Penyelam menemukan 32 kantong kulit koin perak perompak. Tiap kantong berisi tepat 75 keping koin perak. Berapa total seluruh koin perak yang ditemukan?',
        equation: '32 × 75 = ?',
        options: [
          { id: 'A', text: '2.400 Koin', value: 2400 },
          { id: 'B', text: '2.350 Koin', value: 2350 },
          { id: 'C', text: '2.450 Koin', value: 2450 }
        ],
        correctAnswer: 'A',
        explanation: '32 × 75 = 32 × (300 ÷ 4) = 8 × 300 = 2.400 keping koin perak.',
        companionHint: 'Trik kilat perkalian 75: 32 dibagi 4 = 8, lalu 8 dikalikan 300 = 2.400!',
        timeLimit: 45
      }
    ],
    questionText: 'Terdapat 28 peti amunisi meriam perunggu. Setiap peti memuat tepat 35 butir peluru meriam mesiu padat. Berapakah jumlah total seluruh butir peluru meriam tersebut?',
    equation: '28 × 35 = ?',
    options: [
      { id: 'A', text: '980 Butir', value: 980 },
      { id: 'B', text: '950 Butir', value: 950 },
      { id: 'C', text: '1.020 Butir', value: 1020 }
    ],
    correctAnswer: 'A',
    explanation: '28 × 35 = 980 butir peluru meriam.',
    companionHint: 'Tips cerdas: kalikan 28 dengan 5 (= 140), lalu 28 dengan 30 (= 840), jumlahkan keduanya!',
    timeLimit: 45,
    interactiveAnimal: {
      name: 'Oktovian Si Gurita Cerdik',
      species: 'Gurita Penjaga Harta Karun Kapal',
      type: 'octopus',
      avatar: '🐙',
      dialogue: 'Bloop bloop! Aku punya 8 tentakel untuk membantumu menghitung perkalian. Selesaikan 3 teka-teki kapal karam ini!',
      bonusSeconds: 5,
      trivia: 'Gurita memiliki 3 buah jantung dan darah berwarna kebiruan.'
    },
    mapPieceTitle: 'Peta Robek Bagian III (Koordinat Reruntuhan Kapal)',
    artifactReward: {
      id: 'art_3',
      name: 'Jangkar Perunggu Kuno',
      rarity: 'rare',
      iconName: 'Anchor',
      lore: 'Jangkar mistis bertuliskan bahasa rahasia para bajak laut samudra terdahulu.'
    }
  },
  {
    id: 4,
    type: 'division',
    typeLabel: 'Tantangan 4: Pembagian (÷)',
    levelTitle: 'Hutan Bakau Rawa Mistis',
    islandName: 'Manglar Secreto',
    biome: 'jungle',
    storyDescription: 'Akar-akar pohon bakau raksasa membentuk lorong air berkabut. Di atas altar kayu kuno, terdapat harta rawa yang harus dibagikan secara adil.',
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionTitle: 'Pertanyaan 1 dari 3: Mutiara Hitam Rawa',
        questionText: 'Kapten memperoleh 864 butir mutiara hitam legendaris. Mutiara ini harus dibagi sama rata ke dalam 18 kantong beludru pelaut. Berapa butir mutiara isi masing-masing kantong?',
        equation: '864 ÷ 18 = ?',
        options: [
          { id: 'A', text: '46 Mutiara', value: 46 },
          { id: 'B', text: '52 Mutiara', value: 52 },
          { id: 'C', text: '48 Mutiara', value: 48 }
        ],
        correctAnswer: 'C',
        explanation: '864 ÷ 18 = 48 mutiara. Cek: 18 × 40 = 720; sisa 144; 18 × 8 = 144. Total = 48 butir.',
        companionHint: 'Coba uji opsi C: 48 × 18 = 48 × 10 (480) + 48 × 8 (384) = 864. Pas sekali!',
        timeLimit: 45
      },
      {
        id: 2,
        questionNumber: 2,
        questionTitle: 'Pertanyaan 2 dari 3: Zamrud Hijau Rimba',
        questionText: 'Ditemukan 756 butir batu zamrud hijau di sarang burung cendrawasih purba, akan dibagikan merata kepada 28 awak kapal setia. Berapa butir zamrud yang diterima setiap awak kapal?',
        equation: '756 ÷ 28 = ?',
        options: [
          { id: 'A', text: '27 Butir', value: 27 },
          { id: 'B', text: '26 Butir', value: 26 },
          { id: 'C', text: '29 Butir', value: 29 }
        ],
        correctAnswer: 'A',
        explanation: '756 ÷ 28 = 27. Uji: 28 × 20 = 560; sisa 196; 28 × 7 = 196. Total = 27 butir zamrud.',
        companionHint: 'Perhatikan digit terakhir: 8 dikali berapa yang belakangnya 6? 8 × 7 = 56 (berakhiran 6)!',
        timeLimit: 45
      },
      {
        id: 3,
        questionNumber: 3,
        questionTitle: 'Pertanyaan 3 dari 3: Batang Kayu Jati Perbaikan Kapal',
        questionText: 'Awak kapal mengangkut 936 batang kayu jati untuk memperbaiki lambung kapal. Kayu tersebut disusun merata ke dalam 24 gerobak dorong. Berapa batang kayu di setiap gerobak?',
        equation: '936 ÷ 24 = ?',
        options: [
          { id: 'A', text: '37 Batang', value: 37 },
          { id: 'B', text: '39 Batang', value: 39 },
          { id: 'C', text: '41 Batang', value: 41 }
        ],
        correctAnswer: 'B',
        explanation: '936 ÷ 24 = 39 batang. Cek: 24 × 30 = 720; sisa 216; 24 × 9 = 216. Total = 39 batang kayu.',
        companionHint: 'Hitung: 24 × 40 = 960 (kelebihan sedikit dari 936). Kurangi satu 24 jadi 39!',
        timeLimit: 45
      }
    ],
    questionText: 'Kapten memperoleh 864 butir mutiara hitam legendaris. Mutiara ini harus dibagi sama rata ke dalam 18 kantong beludru pelaut. Berapa butir mutiara isi masing-masing kantong?',
    equation: '864 ÷ 18 = ?',
    options: [
      { id: 'A', text: '46 Mutiara', value: 46 },
      { id: 'B', text: '52 Mutiara', value: 52 },
      { id: 'C', text: '48 Mutiara', value: 48 }
    ],
    correctAnswer: 'C',
    explanation: '864 ÷ 18 = 48 mutiara.',
    companionHint: 'Coba uji opsi C: 48 × 18 = 48 × 10 (480) + 48 × 8 (384) = 864. Pas sekali!',
    timeLimit: 45,
    interactiveAnimal: {
      name: 'Ciko Junior',
      species: 'Monyet Ekor Panjang',
      type: 'monkey',
      avatar: '🐒',
      dialogue: 'Uuk-aak! Hati-hati dengan buaya rawa ya Kapten! Tuntaskan 3 soal pembagian ini agar pintu rawa terbuka!',
      bonusSeconds: 5,
      trivia: 'Monyet bakau pandai berenang dan menggunakan ranting untuk mencari makanan.'
    },
    mapPieceTitle: 'Peta Robek Bagian IV (Jalur Rawa Tersembunyi)',
    artifactReward: {
      id: 'art_4',
      name: 'Botol Pesan Bersegel Lilin',
      rarity: 'common',
      iconName: 'Scroll',
      lore: 'Gulungan surat wasiat berusia ratusan tahun yang mengungkap rute masuk ke Gua Kristal.'
    }
  },
  {
    id: 5,
    type: 'addition',
    typeLabel: 'Tantangan 5: Pertambahan Tingkat Tinggi (+)',
    levelTitle: 'Gua Kristal Berbisik',
    islandName: 'Cueva de Cristales',
    biome: 'crystal_cave',
    storyDescription: 'Gua gelap dipenuhi kristal pirus dan kecubung yang memancarkan cahaya ungu berkilauan. Dua pilar batu raksasa menuntut perhitungan kristal yang tepat.',
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionTitle: 'Pertanyaan 1 dari 3: Timbangan Pilar Kristal',
        questionText: 'Pilar kiri memerlukan 679 ons kristal bercahaya, sedangkan pilar kanan memerlukan 856 ons kristal. Berapa total ons kristal yang harus diletakkan bersamaan?',
        equation: '679 + 856 = ?',
        options: [
          { id: 'A', text: '1.535 Ons', value: 1535 },
          { id: 'B', text: '1.525 Ons', value: 1525 },
          { id: 'C', text: '1.545 Ons', value: 1545 }
        ],
        correctAnswer: 'A',
        explanation: '679 + 856 = 1.535. Satuan (9+6=15, simpan 1), puluhan (7+5+1=13, simpan 1), ratusan (6+8+1=15). Hasil = 1.535 ons kristal.',
        companionHint: 'Perhatikan digit satuannya: 9 + 6 = 15, jadi digit belakang pasti angka 5!',
        timeLimit: 40
      },
      {
        id: 2,
        questionNumber: 2,
        questionTitle: 'Pertanyaan 2 dari 3: Formasi Kristal Ungu Stalaktit',
        questionText: 'Di langit-langit gua tergantung 748 kristal ungu, dan di dinding lorong terdapat 689 kristal kecubung. Berapa total kristal ungu yang menerangi gua tersebut?',
        equation: '748 + 689 = ?',
        options: [
          { id: 'A', text: '1.447 Kristal', value: 1447 },
          { id: 'B', text: '1.437 Kristal', value: 1437 },
          { id: 'C', text: '1.427 Kristal', value: 1427 }
        ],
        correctAnswer: 'B',
        explanation: '748 + 689 = 1.437. Satuan (8+9=17, simpan 1), puluhan (4+8+1=13, simpan 1), ratusan (7+6+1=14). Total = 1.437 kristal.',
        companionHint: 'Perhatikan: 8 + 9 = 17, simpan 1 ke puluhan. 4 + 8 + 1 = 13!',
        timeLimit: 40
      },
      {
        id: 3,
        questionNumber: 3,
        questionTitle: 'Pertanyaan 3 dari 3: Serbuk Perak & Fosfor Lentera',
        questionText: 'Untuk menyalakan obor kuno penunjuk jalan, diperlukan 895 gram bubuk fosfor dan 768 gram serbuk perak ajaib. Berapa gram total campuran kedua bubuk tersebut?',
        equation: '895 + 768 = ?',
        options: [
          { id: 'A', text: '1.663 Gram', value: 1663 },
          { id: 'B', text: '1.653 Gram', value: 1653 },
          { id: 'C', text: '1.673 Gram', value: 1673 }
        ],
        correctAnswer: 'A',
        explanation: '895 + 768 = 1.663 gram. Satuan (5+8=13, simpan 1), puluhan (9+6+1=16, simpan 1), ratusan (8+7+1=16). Total = 1.663 gram.',
        companionHint: 'Digit satuan 5 + 8 = 13 (ujungnya 3). 9 + 6 + 1 = 16 (ujungnya 6). Hasilnya 1.663!',
        timeLimit: 45
      }
    ],
    questionText: 'Pilar kiri memerlukan 679 ons kristal bercahaya, sedangkan pilar kanan memerlukan 856 ons kristal. Berapa total ons kristal yang harus diletakkan bersamaan?',
    equation: '679 + 856 = ?',
    options: [
      { id: 'A', text: '1.535 Ons', value: 1535 },
      { id: 'B', text: '1.525 Ons', value: 1525 },
      { id: 'C', text: '1.545 Ons', value: 1545 }
    ],
    correctAnswer: 'A',
    explanation: '679 + 856 = 1.535 ons kristal.',
    companionHint: 'Perhatikan digit satuannya: 9 + 6 = 15, jadi digit belakang pasti angka 5!',
    timeLimit: 40,
    interactiveAnimal: {
      name: 'Toro Si Penyu Kristal',
      species: 'Penyu Darat Raksasa',
      type: 'turtle',
      avatar: '🐢',
      dialogue: 'Gua ini menyimpan kebijaksanaan ratusan tahun. Selesaikan 3 tahap perhitungan kristal dengan tenang dan tepat, Kapten.',
      bonusSeconds: 5,
      trivia: 'Tempurung penyu terdiri dari lebih dari 50 tulang yang menyatu dengan kuat.'
    },
    mapPieceTitle: 'Peta Robek Bagian V (Denah Gua Kristal)',
    artifactReward: {
      id: 'art_5',
      name: 'Kunci Tengkorak Perunggu',
      rarity: 'rare',
      iconName: 'Key',
      lore: 'Kunci berukir tengkorak bajak laut dengan permata zamrud di bagian gagangnya.'
    }
  },
  {
    id: 6,
    type: 'subtraction',
    typeLabel: 'Tantangan 6: Pengurangan Tingkat Tinggi (-)',
    levelTitle: 'Air Terjun Permata Zamrud',
    islandName: 'Cascada Esmeralda',
    biome: 'waterfall',
    storyDescription: 'Air terjun megah mengalir deras dari puncak tebing hutan tropis. Di balik tirai air terjun terselubung pintu batu bertuliskan angka perbekalan samudra.',
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionTitle: 'Pertanyaan 1 dari 3: Karung Gandum Pelaut',
        questionText: 'Sebuah armada membawa perbekalan awal 2.450 karung gandum pelaut. Selama pelayaran menembus kepulauan kabut, terpakai 1.685 karung. Berapakah sisa karung gandum yang masih utuh?',
        equation: '2.450 - 1.685 = ?',
        options: [
          { id: 'A', text: '755 Karung', value: 755 },
          { id: 'B', text: '765 Karung', value: 765 },
          { id: 'C', text: '865 Karung', value: 865 }
        ],
        correctAnswer: 'B',
        explanation: '2.450 - 1.685 = 765 karung. (2.450 - 1.600 = 850; 850 - 85 = 765).',
        companionHint: 'Cek cepat: 765 + 1.685 = 2.450. Benar sekali!',
        timeLimit: 45
      },
      {
        id: 2,
        questionNumber: 2,
        questionTitle: 'Pertanyaan 2 dari 3: Cadangan Air Embun Air Terjun',
        questionText: 'Drum penampung air embun di air terjun awalnya berisi 3.200 liter. Setelah dialirkan untuk mengisi tangki kapal, terpakai 1.435 liter. Berapa liter air embun yang tersisa di drum?',
        equation: '3.200 - 1.435 = ?',
        options: [
          { id: 'A', text: '1.765 Liter', value: 1765 },
          { id: 'B', text: '1.755 Liter', value: 1755 },
          { id: 'C', text: '1.865 Liter', value: 1865 }
        ],
        correctAnswer: 'A',
        explanation: '3.200 - 1.435 = 1.765 liter. (3.200 - 1.400 = 1.800; 1.800 - 35 = 1.765).',
        companionHint: 'Kurangi bertahap: 3.200 - 1.000 = 2.200, kurangi 400 = 1.800, kurangi 35 = 1.765!',
        timeLimit: 45
      },
      {
        id: 3,
        questionNumber: 3,
        questionTitle: 'Pertanyaan 3 dari 3: Anak Tangga Tebing Air Terjun',
        questionText: 'Terdapat 1.850 anak tangga batu kuno menuju puncak tebing. Sebanyak 976 anak tangga telah tertutup lumut licin dan berbahaya. Berapa banyak anak tangga yang masih bersih dan aman?',
        equation: '1.850 - 976 = ?',
        options: [
          { id: 'A', text: '864 Tangga', value: 864 },
          { id: 'B', text: '874 Tangga', value: 874 },
          { id: 'C', text: '884 Tangga', value: 884 }
        ],
        correctAnswer: 'B',
        explanation: '1.850 - 976 = 874 anak tangga. (1.850 - 900 = 950; 950 - 76 = 874).',
        companionHint: 'Hitung digit satuan: 10 - 6 = 4. Digit puluhan: 14 - 7 = 7. Ratusan: 17 - 9 = 8!',
        timeLimit: 45
      }
    ],
    questionText: 'Sebuah armada membawa perbekalan awal 2.450 karung gandum pelaut. Selama pelayaran menembus kepulauan kabut, terpakai 1.685 karung. Berapakah sisa karung gandum yang masih utuh?',
    equation: '2.450 - 1.685 = ?',
    options: [
      { id: 'A', text: '755 Karung', value: 755 },
      { id: 'B', text: '765 Karung', value: 765 },
      { id: 'C', text: '865 Karung', value: 865 }
    ],
    correctAnswer: 'B',
    explanation: '2.450 - 1.685 = 765 karung.',
    companionHint: 'Cek cepat: 765 + 1.685 = 2.450. Benar sekali!',
    timeLimit: 45,
    interactiveAnimal: {
      name: 'Kiki Si Burung Beo Pelangi',
      species: 'Burung Beo Amazonia',
      type: 'parrot',
      avatar: '🦜',
      dialogue: 'Krrr! Suara gemuruh air terjun menyejukkan hati. Selesaikan 3 teka-teki pengurangan agar pintu tirai air terjun terbuka!',
      bonusSeconds: 5,
      trivia: 'Burung beo dapat menirukan ucapan manusia karena struktur laring (syrinx) mereka yang fleksibel.'
    },
    mapPieceTitle: 'Peta Robek Bagian VI (Pintu Tirai Air Terjun)',
    artifactReward: {
      id: 'art_6',
      name: 'Mutiara Hitam Abadi',
      rarity: 'rare',
      iconName: 'Gem',
      lore: 'Mutiara laut dalam yang konon menyimpan keberuntungan tak terbatas bagi kapten kapal.'
    }
  },
  {
    id: 7,
    type: 'multiplication',
    typeLabel: 'Tantangan 7: Perkalian Tingkat Tinggi (×)',
    levelTitle: 'Ngarai Batu Tengkorak',
    islandName: 'Cañón de la Calavera',
    biome: 'skull_canyon',
    storyDescription: 'Tebing batu kapur hitam menyerupai rahang tengkorak raksasa. Angin bersiul di celah bebatuan, menguji keberanian sang kapten di jembatan tali gantung.',
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionTitle: 'Pertanyaan 1 dari 3: Mata Rantai Jembatan Gantung',
        questionText: 'Terdapat 46 rantai besi penahan jembatan gantung tebing. Setiap rantai tersusun atas 34 mata rantai baja tempa. Berapa total mata rantai baja di seluruh jembatan?',
        equation: '46 × 34 = ?',
        options: [
          { id: 'A', text: '1.564 Mata Rantai', value: 1564 },
          { id: 'B', text: '1.584 Mata Rantai', value: 1584 },
          { id: 'C', text: '1.544 Mata Rantai', value: 1544 }
        ],
        correctAnswer: 'A',
        explanation: '46 × 34 = 46 × (30 + 4) = 1.380 + 184 = 1.564 mata rantai baja.',
        companionHint: 'Digit satuan dari 6 × 4 adalah 4! 46 × 30 = 1380, tambah 184 = 1564!',
        timeLimit: 50
      },
      {
        id: 2,
        questionNumber: 2,
        questionTitle: 'Pertanyaan 2 dari 3: Paku Tembaga Pengikat Balok',
        questionText: 'Terdapat 52 kotak peti berisi paku tembaga penambat balok kayu jembatan. Tiap peti memuat 45 batang paku tembaga. Berapa total seluruh batang paku tembaga?',
        equation: '52 × 45 = ?',
        options: [
          { id: 'A', text: '2.320 Batang', value: 2320 },
          { id: 'B', text: '2.340 Batang', value: 2340 },
          { id: 'C', text: '2.360 Batang', value: 2360 }
        ],
        correctAnswer: 'B',
        explanation: '52 × 45 = 52 × (90 ÷ 2) = 26 × 90 = 2.340 batang paku tembaga.',
        companionHint: 'Trik cepat: 52 × 40 = 2.080, dan 52 × 5 = 260. 2.080 + 260 = 2.340!',
        timeLimit: 50
      },
      {
        id: 3,
        questionNumber: 3,
        questionTitle: 'Pertanyaan 3 dari 3: Tetes Minyak Damar Obor Ngarai',
        questionText: 'Ada 38 obor tebing yang menerangi jalan melintasi ngarai tengkorak. Masing-masing obor membutuhkan 65 tetes minyak damar pinus. Berapa tetes minyak damar yang dibutuhkan?',
        equation: '38 × 65 = ?',
        options: [
          { id: 'A', text: '2.470 Tetes', value: 2470 },
          { id: 'B', text: '2.450 Tetes', value: 2450 },
          { id: 'C', text: '2.490 Tetes', value: 2490 }
        ],
        correctAnswer: 'A',
        explanation: '38 × 65 = (38 × 60) + (38 × 5) = 2.280 + 190 = 2.470 tetes minyak damar.',
        companionHint: 'Kalikan: 38 × 60 = 2.280, lalu 38 × 5 = 190. Jumlahkan: 2.280 + 190 = 2.470!',
        timeLimit: 50
      }
    ],
    questionText: 'Terdapat 46 rantai besi penahan jembatan gantung tebing. Setiap rantai tersusun atas 34 mata rantai baja tempa. Berapa total mata rantai baja di seluruh jembatan?',
    equation: '46 × 34 = ?',
    options: [
      { id: 'A', text: '1.564 Mata Rantai', value: 1564 },
      { id: 'B', text: '1.584 Mata Rantai', value: 1584 },
      { id: 'C', text: '1.544 Mata Rantai', value: 1544 }
    ],
    correctAnswer: 'A',
    explanation: '46 × 34 = 1.564 mata rantai.',
    companionHint: 'Digit satuan dari 6 × 4 adalah 4! 46 × 30 = 1380, tambah 184 = 1564!',
    timeLimit: 50,
    interactiveAnimal: {
      name: 'Gargan Si Kadal Karang',
      species: 'Iguana Penjaga Ngarai',
      type: 'crab',
      avatar: '🦎',
      dialogue: 'Ssshh... Jembatan tali ini sangat kokoh jika hitunganmu tepat. Taklukkan 3 soal perkalian ini tanpa ragu, Kapten!',
      bonusSeconds: 5,
      trivia: 'Iguana batu dapat bertahan hidup di tebing curam berkat cakar yang tajam dan ekor penyeimbang.'
    },
    mapPieceTitle: 'Peta Robek Bagian VII (Jalur Rahang Tengkorak)',
    artifactReward: {
      id: 'art_7',
      name: 'Jam Pasir Waktu Kuno',
      rarity: 'rare',
      iconName: 'Hourglass',
      lore: 'Jam pasir dengan pasir emas halus yang konon bisa memperlambat laju waktu saat terdesak.'
    }
  },
  {
    id: 8,
    type: 'division',
    typeLabel: 'Tantangan 8: Pembagian Tingkat Tinggi (÷)',
    levelTitle: 'Laguna Ombak Misterius',
    islandName: 'Laguna Encantada',
    biome: 'lagoon',
    storyDescription: 'Air laguna yang tenang bercahaya biru kehijauan di malam hari. Di bawah dermaga kayu lapuk, terdapat peti batu berisi permata samudra yang harus dikelompokkan.',
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionTitle: 'Pertanyaan 1 dari 3: Batu Safir Biru Samudra',
        questionText: 'Sebanyak 1.584 butir batu safir biru harus dibagikan secara adil ke dalam 24 peti kecil perahu dayung. Berapakah jumlah batu safir yang masuk ke masing-masing peti?',
        equation: '1.584 ÷ 24 = ?',
        options: [
          { id: 'A', text: '64 Butir', value: 64 },
          { id: 'B', text: '68 Butir', value: 68 },
          { id: 'C', text: '66 Butir', value: 66 }
        ],
        correctAnswer: 'C',
        explanation: '1.584 ÷ 24 = 66. Bukti: 24 × 60 = 1.440; 1.584 - 1.440 = 144; 144 ÷ 24 = 6. Total = 66 butir.',
        companionHint: 'Coba 24 × 60 = 1.440. Kurangkan 1.584 - 1.440 = 144. Lalu 144 ÷ 24 = 6, jadi 66!',
        timeLimit: 50
      },
      {
        id: 2,
        questionNumber: 2,
        questionTitle: 'Pertanyaan 2 dari 3: Kerang Mutiara Bercahaya',
        questionText: 'Sebanyak 1.728 kerang mutiara bercahaya dibagi rata ke 36 ember penyelam laut dalam. Berapa butir kerang mutiara yang ada di setiap ember penyelam?',
        equation: '1.728 ÷ 36 = ?',
        options: [
          { id: 'A', text: '48 Kerang', value: 48 },
          { id: 'B', text: '46 Kerang', value: 46 },
          { id: 'C', text: '52 Kerang', value: 52 }
        ],
        correctAnswer: 'A',
        explanation: '1.728 ÷ 36 = 48. Uji: 36 × 40 = 1.440; 1.728 - 1.440 = 288; 36 × 8 = 288. Total = 48 kerang.',
        companionHint: '36 × 50 = 1.800. Karena 1.728 sedikit di bawah 1.800 (selisih 72 = 2 × 36), maka 50 - 2 = 48!',
        timeLimit: 50
      },
      {
        id: 3,
        questionNumber: 3,
        questionTitle: 'Pertanyaan 3 dari 3: Koin Emas Penyelaman Samudra',
        questionText: 'Sebanyak 1.820 keping koin emas samudra dari dasar laguna dibagi rata kepada 28 anggota regu penyelam. Berapa keping koin emas yang diperoleh tiap penyelam?',
        equation: '1.820 ÷ 28 = ?',
        options: [
          { id: 'A', text: '63 Keping', value: 63 },
          { id: 'B', text: '65 Keping', value: 65 },
          { id: 'C', text: '67 Keping', value: 67 }
        ],
        correctAnswer: 'B',
        explanation: '1.820 ÷ 28 = 65. Uji: 28 × 60 = 1.680; 1.820 - 1.680 = 140; 28 × 5 = 140. Total = 65 keping.',
        companionHint: '28 × 60 = 1.680. Sisanya 140, dan 28 × 5 = 140. Jadi totalnya 60 + 5 = 65!',
        timeLimit: 50
      }
    ],
    questionText: 'Sebanyak 1.584 butir batu safir biru harus dibagikan secara adil ke dalam 24 peti kecil perahu dayung. Berapakah jumlah batu safir yang masuk ke masing-masing peti?',
    equation: '1.584 ÷ 24 = ?',
    options: [
      { id: 'A', text: '64 Butir', value: 64 },
      { id: 'B', text: '68 Butir', value: 68 },
      { id: 'C', text: '66 Butir', value: 66 }
    ],
    correctAnswer: 'C',
    explanation: '1.584 ÷ 24 = 66 butir.',
    companionHint: 'Coba 24 × 60 = 1.440. Kurangkan 1.584 - 1.440 = 144. Lalu 144 ÷ 24 = 6, jadi 66!',
    timeLimit: 50,
    interactiveAnimal: {
      name: 'Dolfi Si Lumba-Lumba Malam',
      species: 'Lumba-Lumba Laguna',
      type: 'dolphin',
      avatar: '🐬',
      dialogue: 'Ik-ik-ik! Air laguna memantulkan bintang-bintang di langit malam. Selesaikan 3 pembagian laguna ini, pulau harta karun sudah sangat dekat!',
      bonusSeconds: 5,
      trivia: 'Lumba-lumba menggunakan ekolokasi suara klik dan pantulan untuk memindai dasar laut gelap.'
    },
    mapPieceTitle: 'Peta Robek Bagian VIII (Arus Tersembunyi Laguna)',
    artifactReward: {
      id: 'art_8',
      name: 'Cincin Safir Poseidon',
      rarity: 'rare',
      iconName: 'Sparkles',
      lore: 'Cincin bertatahkan permata laut yang memancarkan aura perlindungan samudra.'
    }
  },
  {
    id: 9,
    type: 'mixed',
    typeLabel: 'Tantangan 9: Operasi Campuran (+ & × & ÷)',
    levelTitle: 'Benteng Meriam Tua',
    islandName: 'Baluarte de los Cañones',
    biome: 'fortress',
    storyDescription: 'Sebuah benteng batu kuno dengan meriam perunggu berdiri megah di puncak bukit karang. Gerbang gerendel baja terkunci dengan sandi matematika bertingkat.',
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionTitle: 'Pertanyaan 1 dari 3: Tuas Gerendel Gerbang Benteng',
        questionText: 'Untuk membuka tuas gerbang benteng: Terdapat 16 slot roda gigi, masing-masing harus diputar 25 kali, kemudian ditambah 175 putaran kunci utama. Berapa total seluruh putaran yang diperlukan?',
        equation: '(16 × 25) + 175 = ?',
        options: [
          { id: 'A', text: '575 Putaran', value: 575 },
          { id: 'B', text: '565 Putaran', value: 565 },
          { id: 'C', text: '595 Putaran', value: 595 }
        ],
        correctAnswer: 'A',
        explanation: 'Kerjakan perkalian terlebih dahulu: 16 × 25 = 400. Lalu tambahkan 175: 400 + 175 = 575 putaran.',
        companionHint: 'Hitung perkalian dulu ya Kapten! 16 × 25 = 400 (karena 4 × 25 = 100, kali 4 lagi = 400). Lalu tambah 175!',
        timeLimit: 50
      },
      {
        id: 2,
        questionNumber: 2,
        questionTitle: 'Pertanyaan 2 dari 3: Amunisi Baterai Meriam Benteng',
        questionText: 'Sebanyak 18 baterai meriam masing-masing menembakkan 30 butir peluru mesiu padat, kemudian ditambah cadangan 195 peluru dari gudang bawah tanah. Berapa total seluruh peluru meriam?',
        equation: '(18 × 30) + 195 = ?',
        options: [
          { id: 'A', text: '725 Butir', value: 725 },
          { id: 'B', text: '735 Butir', value: 735 },
          { id: 'C', text: '745 Butir', value: 745 }
        ],
        correctAnswer: 'B',
        explanation: 'Langkah 1: 18 × 30 = 540. Langkah 2: 540 + 195 = 735 butir peluru meriam.',
        companionHint: 'Dahulukan perkalian: 18 × 30 = 540. Kemudian 540 + 195 = 735!',
        timeLimit: 50
      },
      {
        id: 3,
        questionNumber: 3,
        questionTitle: 'Pertanyaan 3 dari 3: Kerekan Katrol Baja Gerbang',
        questionText: 'Untuk mengangkat jembatan gantung benteng: 800 mata rantai dibagi ke 16 kerekan derek, lalu dikalikan 12 putaran katrol baja. Berapa nilai sandi katrol tersebut?',
        equation: '(800 ÷ 16) × 12 = ?',
        options: [
          { id: 'A', text: '600 Putaran', value: 600 },
          { id: 'B', text: '580 Putaran', value: 580 },
          { id: 'C', text: '620 Putaran', value: 620 }
        ],
        correctAnswer: 'A',
        explanation: 'Langkah 1: 800 ÷ 16 = 50. Langkah 2: 50 × 12 = 600 putaran katrol baja.',
        companionHint: 'Hitung pembagian dalam kurung dulu: 800 ÷ 16 = 50. Lalu 50 × 12 = 600!',
        timeLimit: 50
      }
    ],
    questionText: 'Untuk membuka tuas gerbang benteng: Terdapat 16 slot roda gigi, masing-masing harus diputar 25 kali, kemudian ditambah 175 putaran kunci utama. Berapa total seluruh putaran yang diperlukan?',
    equation: '(16 × 25) + 175 = ?',
    options: [
      { id: 'A', text: '575 Putaran', value: 575 },
      { id: 'B', text: '565 Putaran', value: 565 },
      { id: 'C', text: '595 Putaran', value: 595 }
    ],
    correctAnswer: 'A',
    explanation: 'Kerjakan perkalian terlebih dahulu: 16 × 25 = 400. Lalu tambahkan 175: 400 + 175 = 575 putaran.',
    companionHint: 'Hitung perkalian dulu ya Kapten! 16 × 25 = 400. Lalu tambah 175!',
    timeLimit: 50,
    interactiveAnimal: {
      name: 'Barnaby Si Elang Laut Gagah',
      species: 'Burung Elang Penjaga Benteng',
      type: 'seagull',
      avatar: '🦅',
      dialogue: 'Pekikan tajam! Taklukkan 3 sandi benteng meriam ini sebelum menyeberang ke Pulau Rahasia Sang Raja Emas!',
      bonusSeconds: 5,
      trivia: 'Elang laut mampu terbang melayang berjam-jam tanpa mengepakkan sayap dengan memanfaatkan arus termal.'
    },
    mapPieceTitle: 'Peta Robek Bagian IX (Kunci Gerbang Benteng Karang)',
    artifactReward: {
      id: 'art_9',
      name: 'Pedang Belati Emas Bajak Laut',
      rarity: 'legendary',
      iconName: 'Sword',
      lore: 'Belati pusaka berlapis emas murni warisan Raja Bajak Laut legendaris.'
    }
  },
  {
    id: 10,
    type: 'mixed',
    typeLabel: 'Tantangan 10: Ujian Final Sang Raja Bajak Laut (÷, ×, -)',
    levelTitle: 'Pulau Rahasia Terlarang (Isla de Oro)',
    islandName: 'Isla de Oro Secreta',
    biome: 'treasure_island',
    storyDescription: 'Kita akhirnya tiba di jantung Pulau Rahasia Terlarang! Di tengah kuil kuno berpahat emas, Peti Harta Karun Legendaris terkunci dengan 3 segel angka kuno.',
    questions: [
      {
        id: 1,
        questionNumber: 1,
        questionTitle: 'Segel 1 dari 3: Tangga Piramida Emas',
        questionText: 'Membuka segel tangga kuil emas: Selesaikan teka-teki sandi tingkat pertama: (640 ÷ 16) × 25 + 250 = ?',
        equation: '(640 ÷ 16) × 25 + 250 = ?',
        options: [
          { id: 'A', text: '1.250 Kode', value: 1250 },
          { id: 'B', text: '1.220 Kode', value: 1220 },
          { id: 'C', text: '1.280 Kode', value: 1280 }
        ],
        correctAnswer: 'A',
        explanation: 'Langkah 1: 640 ÷ 16 = 40. Langkah 2: 40 × 25 = 1.000. Langkah 3: 1.000 + 250 = 1.250 kode rahasia.',
        companionHint: 'Hitung berurutan: 640 ÷ 16 = 40. Lalu 40 × 25 = 1.000. Tambahkan 250 = 1.250!',
        timeLimit: 55
      },
      {
        id: 2,
        questionNumber: 2,
        questionTitle: 'Segel 2 dari 3: Ruang Penyimpanan Permata Mahkota',
        questionText: 'Membuka roda sandi kedua kamar permata kuil: Selesaikan persamaan: (840 ÷ 14) × 30 - 650 = ?',
        equation: '(840 ÷ 14) × 30 - 650 = ?',
        options: [
          { id: 'A', text: '1.120 Kode', value: 1120 },
          { id: 'B', text: '1.150 Kode', value: 1150 },
          { id: 'C', text: '1.180 Kode', value: 1180 }
        ],
        correctAnswer: 'B',
        explanation: 'Langkah 1: 840 ÷ 14 = 60. Langkah 2: 60 × 30 = 1.800. Langkah 3: 1.800 - 650 = 1.150 kode rahasia.',
        companionHint: 'Dahulukan kurung: 840 ÷ 14 = 60. Lalu 60 × 30 = 1.800. Kurangkan 650 = 1.150!',
        timeLimit: 55
      },
      {
        id: 3,
        questionNumber: 3,
        questionTitle: 'Segel 3 dari 3: Gembok Utama Peti Harta Karun Legendaris',
        questionText: 'Segel gembok emas puncak peti harta karun membutuhkan kode akhir: Selesaikan teka-teki sandi kuno berikut: (720 ÷ 15) × 35 - 480 = ?',
        equation: '(720 ÷ 15) × 35 - 480 = ?',
        options: [
          { id: 'A', text: '1.240 Kode Rahasia', value: 1240 },
          { id: 'B', text: '1.200 Kode Rahasia', value: 1200 },
          { id: 'C', text: '1.180 Kode Rahasia', value: 1180 }
        ],
        correctAnswer: 'B',
        explanation: 'Langkah 1: 720 ÷ 15 = 48. Langkah 2: 48 × 35 = 1.680. Langkah 3: 1.680 - 480 = 1.200. Peti harta karun emas 500 koin dan 100 berlian berhasil dibuka!',
        companionHint: 'Langkah 1: 720 ÷ 15 = 48. Langkah 2: 48 × 35 = 1.680. Langkah 3: 1.680 - 480 = 1.200! Peti akan terbuka!',
        timeLimit: 55
      }
    ],
    questionText: 'Segel gembok emas peti harta karun membutuhkan kode akhir: Selesaikan teka-teki sandi kuno berikut: (720 ÷ 15) × 35 - 480 = ?',
    equation: '(720 ÷ 15) × 35 - 480 = ?',
    options: [
      { id: 'A', text: '1.240 Kode Rahasia', value: 1240 },
      { id: 'B', text: '1.200 Kode Rahasia', value: 1200 },
      { id: 'C', text: '1.180 Kode Rahasia', value: 1180 }
    ],
    correctAnswer: 'B',
    explanation: 'Langkah 1: 720 ÷ 15 = 48. Langkah 2: 48 × 35 = 1.680. Langkah 3: 1.680 - 480 = 1.200.',
    companionHint: 'Langkah 1: 720 ÷ 15 = 48. Langkah 2: 48 × 35 = 1.680. Langkah 3: 1.680 - 480 = 1.200!',
    timeLimit: 55,
    interactiveAnimal: {
      name: 'Sang Raja Kakatua Emas',
      species: 'Kakatua Emas Mistis',
      type: 'parrot',
      avatar: '🦜',
      dialogue: 'Selamat datang di Isla de Oro, Kapten Sejati! Buka ketiga segel kuil emas ini untuk merebut Peti Harta Karun 500 Koin Emas & 100 Berlian!',
      bonusSeconds: 10,
      trivia: 'Legenda mengatakan kakatua emas ini telah menjaga peti harta karun selama 300 tahun menanti kapten cerdas!'
    },
    mapPieceTitle: 'Peta Utuh Sempurna (Peta Harta Karun Isla de Oro)',
    artifactReward: {
      id: 'art_10',
      name: 'Mahkota Emas Raja Penguasa Samudra',
      rarity: 'legendary',
      iconName: 'Crown',
      lore: 'Mahkota bertabur batu safir, rubi, dan berlian murni lambang penguasa laut terhebat!'
    }
  }
];
