import { MathQuestion, SubjectCategory } from '../types';

export const SUBJECT_QUESTIONS: Record<SubjectCategory, Record<number, MathQuestion[]>> = {
  all: {}, // populated dynamically or fallback
  math: {}, // from challenges.ts

  indonesian: {
    1: [
      {
        id: 101,
        questionNumber: 1,
        category: 'indonesian',
        categoryLabel: 'B. Indonesia: Majas',
        questionTitle: 'Pertanyaan 1 dari 3: Majas Gaya Bahasa',
        questionText: '"Ombak samudra yang bergemuruh memeluk lambung kapal kami dengan erat di tengah badai malam." Kalimat tersebut menggunakan majas apa?',
        equation: 'Majas Gaya Bahasa',
        options: [
          { id: 'A', text: 'Majas Personifikasi', value: 'Personifikasi' },
          { id: 'B', text: 'Majas Hiperbola', value: 'Hiperbola' },
          { id: 'C', text: 'Majas Metafora', value: 'Metafora' }
        ],
        correctAnswer: 'A',
        explanation: 'Personifikasi adalah gaya bahasa yang memberikan sifat-sifat manusia (seperti memeluk) kepada benda mati atau alam (ombak).',
        companionHint: 'Perhatikan kata "memeluk" yang merupakan sifat manusia tetapi dilekatkan pada ombak!',
        timeLimit: 35
      },
      {
        id: 102,
        questionNumber: 2,
        category: 'indonesian',
        categoryLabel: 'B. Indonesia: Kata Baku',
        questionTitle: 'Pertanyaan 2 dari 3: Ejaan Kata Baku KBBI',
        questionText: 'Manakah penulisan kata baku yang tepat menurut Kamus Besar Bahasa Indonesia (KBBI)?',
        equation: 'Pedoman Ejaan KBBI',
        options: [
          { id: 'A', text: 'Ijin, Antri, Jadual', value: 'Tidak Baku' },
          { id: 'B', text: 'Izin, Antre, Jadwal', value: 'Baku' },
          { id: 'C', text: 'Ijin, Antre, Jadual', value: 'Campuran' }
        ],
        correctAnswer: 'B',
        explanation: 'Bentuk baku sesuai KBBI adalah "izin" (bukan ijin), "antre" (bukan antri), dan "jadwal" (bukan jadual).',
        companionHint: 'Gunakan huruf "z" untuk izin, huruf "e" untuk antre, dan huruf "w" untuk jadwal!',
        timeLimit: 30
      },
      {
        id: 3,
        questionNumber: 3,
        category: 'indonesian',
        categoryLabel: 'B. Indonesia: Peribahasa',
        questionTitle: 'Pertanyaan 3 dari 3: Makna Peribahasa Maritim',
        questionText: 'Peribahasa "Sekali merengkuh dayung, dua tiga pulau terlampaui" memiliki arti...',
        equation: 'Peribahasa Bahari',
        options: [
          { id: 'A', text: 'Melakukan satu pekerjaan menghasilkan beberapa keuntungan sekaligus', value: 'Tepat' },
          { id: 'B', text: 'Berlayar tanpa tujuan yang pasti di lautan lepas', value: 'Salah' },
          { id: 'C', text: 'Menyerah sebelum mencapai pulau harapan', value: 'Salah' }
        ],
        correctAnswer: 'A',
        explanation: 'Peribahasa ini berarti menyelesaikan satu tindakan tetapi berhasil meraih dua atau lebih tujuan secara bersamaan.',
        companionHint: 'Dayung dikayuh sekali, namun beberapa pulau langsung terlewati!',
        timeLimit: 35
      }
    ],
    2: [
      {
        id: 104,
        questionNumber: 1,
        category: 'indonesian',
        categoryLabel: 'B. Indonesia: Sinonim',
        questionTitle: 'Pertanyaan 1 dari 3: Sinonim Kata',
        questionText: 'Kata "Bahari" dalam kalimat "Indonesia memiliki kekayaan bahari yang melimpah" memiliki sinonim (persamaan makna) dengan kata...',
        equation: 'Kosakata & Sinonim',
        options: [
          { id: 'A', text: 'Pegunungan', value: 'Pegunungan' },
          { id: 'B', text: 'Maritim / Kelautan', value: 'Maritim' },
          { id: 'C', text: 'Perhutanan', value: 'Perhutanan' }
        ],
        correctAnswer: 'B',
        explanation: '"Bahari" berasal dari bahasa Arab bahr (laut), yang bermakna maritim atau segala hal mengenai lautan.',
        companionHint: 'Pikirkan wisata bahari yang identik dengan pantai dan laut!',
        timeLimit: 30
      },
      {
        id: 105,
        questionNumber: 2,
        category: 'indonesian',
        categoryLabel: 'B. Indonesia: Antonim',
        questionTitle: 'Pertanyaan 2 dari 3: Antonim Kata',
        questionText: 'Lawan kata (antonim) dari kata "Dangkal" pada perairan terumbu karang adalah...',
        equation: 'Antonim Kata',
        options: [
          { id: 'A', text: 'Dalam', value: 'Dalam' },
          { id: 'B', text: 'Jernih', value: 'Jernih' },
          { id: 'C', text: 'Luas', value: 'Luas' }
        ],
        correctAnswer: 'A',
        explanation: 'Dangkal berarti tidak dalam (tohor), sehingga antonimnya adalah "dalam".',
        companionHint: 'Lawan dari air cetek/dangkal adalah perairan yang...',
        timeLimit: 25
      },
      {
        id: 106,
        questionNumber: 3,
        category: 'indonesian',
        categoryLabel: 'B. Indonesia: Ide Pokok',
        questionTitle: 'Pertanyaan 3 dari 3: Ide Pokok Kalimat',
        questionText: '"Sejak zaman dahulu, pelaut Nusantara mahir membaca rasi bintang untuk navigasi malam hari." Ide pokok kalimat tersebut adalah...',
        equation: 'Pemahaman Paragraf',
        options: [
          { id: 'A', text: 'Kemahiran pelaut Nusantara bernavigasi menggunakan bintang', value: 'Benar' },
          { id: 'B', text: 'Bintang hanya muncul pada malam hari di lautan', value: 'Salah' },
          { id: 'C', text: 'Pelayaran modern tidak membutuhkan kompas', value: 'Salah' }
        ],
        correctAnswer: 'A',
        explanation: 'Gagasan utama kalimat tersebut menekankan keahlian leluhur maritim Nusantara dalam membaca bintang sebagai kompas alami.',
        companionHint: 'Fokus pada subjek (pelaut Nusantara) dan kemampuan utamanya (navigasi bintang)!',
        timeLimit: 35
      }
    ],
    3: [
      {
        id: 107,
        questionNumber: 1,
        category: 'indonesian',
        categoryLabel: 'B. Indonesia: Kalimat Efektif',
        questionTitle: 'Pertanyaan 1 dari 3: Kalimat Efektif',
        questionText: 'Manakah kalimat di bawah ini yang merupakan kalimat efektif yang benar dan padat?',
        equation: 'Tata Bahasa Indonesia',
        options: [
          { id: 'A', text: 'Banyak pelaut-pelaut mengarungi samudra luas', value: 'Salah' },
          { id: 'B', text: 'Para pelaut mengarungi samudra luas', value: 'Benar' },
          { id: 'C', text: 'Para pelaut-pelaut semuanya mengarungi samudra luas', value: 'Salah' }
        ],
        correctAnswer: 'B',
        explanation: 'Opsi B efektif. Kata "banyak" atau "para" tidak boleh digabung dengan kata ulang jamak (pelaut-pelaut) karena pleonasme (pemborosan kata).',
        companionHint: 'Hindari pengulangan makna jamak ganda seperti "para pelaut-pelaut"!',
        timeLimit: 35
      },
      {
        id: 108,
        questionNumber: 2,
        category: 'indonesian',
        categoryLabel: 'B. Indonesia: Pantun',
        questionTitle: 'Pertanyaan 2 dari 3: Rima Pantun Melayu',
        questionText: 'Pantun klasik memiliki pola rima persajakan akhir...',
        equation: 'Sastra & Pantun',
        options: [
          { id: 'A', text: 'a - a - a - a', value: 'Syair' },
          { id: 'B', text: 'a - b - a - b', value: 'Pantun' },
          { id: 'C', text: 'a - a - b - b', value: 'Gurindam' }
        ],
        correctAnswer: 'B',
        explanation: 'Ciri utama pantun adalah bersajak silang a-b-a-b, terdiri dari 4 baris (baris 1-2 sampiran, baris 3-4 isi).',
        companionHint: 'Baris pertama bersajak dengan baris ketiga, baris kedua dengan baris keempat!',
        timeLimit: 30
      },
      {
        id: 109,
        questionNumber: 3,
        category: 'indonesian',
        categoryLabel: 'B. Indonesia: Imbuhan',
        questionTitle: 'Pertanyaan 3 dari 3: Makna Imbuhan Pe-an',
        questionText: 'Kata "Pelayaran" memiliki makna imbuhan pe-an yang menyatakan...',
        equation: 'Morfologi Kata',
        options: [
          { id: 'A', text: 'Hal atau proses berlayar', value: 'Benar' },
          { id: 'B', text: 'Alat untuk berlayar', value: 'Salah' },
          { id: 'C', text: 'Tempat pembuatan kapal layar', value: 'Salah' }
        ],
        correctAnswer: 'A',
        explanation: 'Imbuhan pe-an pada kata pelayaran menyatakan proses atau hal berlayar melintasi laut.',
        companionHint: 'Sama seperti "pendidikan" yang bermakna proses mendidik.',
        timeLimit: 30
      }
    ]
  },

  history: {
    1: [
      {
        id: 201,
        questionNumber: 1,
        category: 'history',
        categoryLabel: 'Sejarah: Kerajaan Sriwijaya',
        questionTitle: 'Pertanyaan 1 dari 3: Kedatuan Bahari Sriwijaya',
        questionText: 'Kerajaan maritim terbesar di Nusantara pada abad ke-7 hingga ke-12 yang berpusat di Sumatra dan menguasai Selat Malaka adalah...',
        equation: 'Kemaritiman Kuno',
        options: [
          { id: 'A', text: 'Kerajaan Sriwijaya', value: 'Sriwijaya' },
          { id: 'B', text: 'Kerajaan Tarumanegara', value: 'Tarumanegara' },
          { id: 'C', text: 'Kerajaan Kutai', value: 'Kutai' }
        ],
        correctAnswer: 'A',
        explanation: 'Sriwijaya adalah kedatuan maritim Buddha yang sangat kuat, mengendalikan jalur perdagangan rempah internasional di Selat Malaka.',
        companionHint: 'Pusatnya terletak di muara Sungai Musi, Palembang!',
        timeLimit: 35
      },
      {
        id: 202,
        questionNumber: 2,
        category: 'history',
        categoryLabel: 'Sejarah: Majapahit & Sumpah Palapa',
        questionTitle: 'Pertanyaan 2 dari 3: Sumpah Penyatuan Nusantara',
        questionText: 'Mahapatih Majapahit yang mengikrarkan Sumpah Palapa untuk mempersatukan wilayah Nusantara di bawah panji Majapahit adalah...',
        equation: 'Tokoh Sejarah Nusantara',
        options: [
          { id: 'A', text: 'Mahapatih Gajah Mada', value: 'Gajah Mada' },
          { id: 'B', text: 'Raja Hayam Wuruk', value: 'Hayam Wuruk' },
          { id: 'C', text: 'Ken Arok', value: 'Ken Arok' }
        ],
        correctAnswer: 'A',
        explanation: 'Gajah Mada mengikrarkan Sumpah Palapa pada tahun 1336 M untuk tidak menikmati kesenangan duniawi sebelum seluruh kepulauan Nusantara bersatu.',
        companionHint: 'Patungnya bertubuh tegap dan diabadikan sebagai nama universitas di Yogyakarta!',
        timeLimit: 30
      },
      {
        id: 203,
        questionNumber: 3,
        category: 'history',
        categoryLabel: 'Sejarah: Samudra Pasai',
        questionTitle: 'Pertanyaan 3 dari 3: Kesultanan Islam Maritim Pertama',
        questionText: 'Kerajaan Islam pertama di Nusantara yang berkembang pesat sebagai bandar dagang maritim di pesisir utara Sumatra adalah...',
        equation: 'Pusat Niaga Islam',
        options: [
          { id: 'A', text: 'Kesultanan Demak', value: 'Demak' },
          { id: 'B', text: 'Kesultanan Samudra Pasai', value: 'Samudra Pasai' },
          { id: 'C', text: 'Kesultanan Banten', value: 'Banten' }
        ],
        correctAnswer: 'B',
        explanation: 'Kesultanan Samudra Pasai didirikan oleh Meurah Silu (Sultan Malik as-Saleh) pada abad ke-13 di Aceh.',
        companionHint: 'Namanya menggabungkan kata Samudra dan Pasai!',
        timeLimit: 35
      }
    ],
    2: [
      {
        id: 204,
        questionNumber: 1,
        category: 'history',
        categoryLabel: 'Sejarah: Pahlawan Laut Malahayati',
        questionTitle: 'Pertanyaan 1 dari 3: Laksamana Wanita Pertama Dunia',
        questionText: 'Laksamana wanita pertama di dunia modern dari Kesultanan Aceh yang memimpin armada pasukan janda pejuang (Inong Balee) melawan penjajah adalah...',
        equation: 'Pahlawan Bahari',
        options: [
          { id: 'A', text: 'Laksamana Keumalahayati (Malahayati)', value: 'Malahayati' },
          { id: 'B', text: 'Cut Nyak Dien', value: 'Cut Nyak Dien' },
          { id: 'C', text: 'R.A. Kartini', value: 'Kartini' }
        ],
        correctAnswer: 'A',
        explanation: 'Laksamana Malahayati memimpin armada laut Aceh dan berhasil menewaskan Cornelis de Houtman dalam pertempuran laut satu lawan satu.',
        companionHint: 'Beliau menyandang pangkat resmi Laksamana laut dari Kesultanan Aceh!',
        timeLimit: 35
      },
      {
        id: 205,
        questionNumber: 2,
        category: 'history',
        categoryLabel: 'Sejarah: Sultan Hasanuddin',
        questionTitle: 'Pertanyaan 2 dari 3: Ayam Jantan dari Timur',
        questionText: 'Raja Gowa-Tallo yang gigih mempertahankan kedaulatan laut timur Nusantara melawan VOC hingga dijuluki "Ayam Jantan dari Timur" adalah...',
        equation: 'Pertahanan Maritim Timur',
        options: [
          { id: 'A', text: 'Sultan Hasanuddin', value: 'Hasanuddin' },
          { id: 'B', text: 'Sultan Baabullah', value: 'Baabullah' },
          { id: 'C', text: 'Pangeran Antasari', value: 'Antasari' }
        ],
        correctAnswer: 'A',
        explanation: 'Sultan Hasanuddin (1631–1670) memimpin Kesultanan Gowa di Makassar yang terkenal dengan armada perahu Phinisi tangguh.',
        companionHint: 'Nama bandara internasional di Makassar dinamai dari pahlawan ini!',
        timeLimit: 30
      },
      {
        id: 206,
        questionNumber: 3,
        category: 'history',
        categoryLabel: 'Sejarah: Jalur Rempah Dunia',
        questionTitle: 'Pertanyaan 3 dari 3: Kepulauan Penghasil Pala Dunia',
        questionText: 'Kepulauan Banda di Maluku pada abad ke-16 sangat diperebutkan bangsa Eropa karena merupakan satu-satunya tempat di dunia penghasil tanaman rempah...',
        equation: 'Komoditas Jalur Rempah',
        options: [
          { id: 'A', text: 'Pala dan Fuli', value: 'Pala' },
          { id: 'B', text: 'Kopi Arabika', value: 'Kopi' },
          { id: 'C', text: 'Tembakau Deli', value: 'Tembakau' }
        ],
        correctAnswer: 'A',
        explanation: 'Kepulauan Banda adalah surga pala (nutmeg) dan fuli (mace) yang harganya kala itu bernilai setara dengan emas batangan.',
        companionHint: 'Buah rempah khas Banda yang bijinya diselimuti fuli merah merekah!',
        timeLimit: 35
      }
    ],
    3: [
      {
        id: 207,
        questionNumber: 1,
        category: 'history',
        categoryLabel: 'Sejarah: Proklamasi 1945',
        questionTitle: 'Pertanyaan 1 dari 3: Hari Kemerdekaan Indonesia',
        questionText: 'Kapan dan di manakah naskah Proklamasi Kemerdekaan Republik Indonesia dibacakan oleh Ir. Soekarno?',
        equation: 'Detik-Detik Kemerdekaan',
        options: [
          { id: 'A', text: '17 Agustus 1945 di Jalan Pegangsaan Timur No. 56 Jakarta', value: 'Benar' },
          { id: 'B', text: '18 Agustus 1945 di Gedung Chuo Sangi In Jakarta', value: 'Salah' },
          { id: 'C', text: '17 Agustus 1945 di Lapangan Ikada Jakarta', value: 'Salah' }
        ],
        correctAnswer: 'A',
        explanation: 'Teks proklamasi dibacakan pada hari Jumat, 17 Agustus 1945 pukul 10.00 pagi di kediaman Bung Karno, Jl. Pegangsaan Timur 56 Jakarta.',
        companionHint: 'Tepat hari Jumat, 17 Agustus 1945 di Pegangsaan Timur!',
        timeLimit: 35
      },
      {
        id: 208,
        questionNumber: 2,
        category: 'history',
        categoryLabel: 'Sejarah: Tokoh Proklamator',
        questionTitle: 'Pertanyaan 2 dari 3: Pengetik Naskah Proklamasi',
        questionText: 'Siapakah tokoh pemuda pejuang yang mengetik naskah proklamasi kemerdekaan yang telah dirumuskan para pemimpin bangsa?',
        equation: 'Peran Pemuda Bangsa',
        options: [
          { id: 'A', text: 'Sayuti Melik', value: 'Sayuti Melik' },
          { id: 'B', text: 'Sukarni', value: 'Sukarni' },
          { id: 'C', text: 'B.M. Diah', value: 'BM Diah' }
        ],
        correctAnswer: 'A',
        explanation: 'Sayuti Melik mengetik naskah proklamasi dengan mesin tik serta melakukan beberapa perubahan kata seperti "tempoh" menjadi "tempo".',
        companionHint: 'Tokoh wartawan dan pemuda pejuang yang suaminya S.K. Trimurti!',
        timeLimit: 30
      },
      {
        id: 209,
        questionNumber: 3,
        category: 'history',
        categoryLabel: 'Sejarah: Sumpah Pemuda 1928',
        questionTitle: 'Pertanyaan 3 dari 3: Kongres Pemuda II',
        questionText: 'Kongres Pemuda II yang melahirkan ikrar Sumpah Pemuda satu nusa, satu bangsa, dan satu bahasa Indonesia diperingati setiap tanggal...',
        equation: 'Persatuan Pemuda',
        options: [
          { id: 'A', text: '28 Oktober', value: '28 Oktober' },
          { id: 'B', text: '20 Mei', value: '20 Mei' },
          { id: 'C', text: '10 November', value: '10 November' }
        ],
        correctAnswer: 'A',
        explanation: 'Sumpah Pemuda dibacakan pada 28 Oktober 1928 di Gedung Kramat 106 Jakarta.',
        companionHint: 'Bulan Oktober di tanggal 28!',
        timeLimit: 30
      }
    ]
  },

  civics: {
    1: [
      {
        id: 301,
        questionNumber: 1,
        category: 'civics',
        categoryLabel: 'PPKn: Nilai Sila Pancasila',
        questionTitle: 'Pertanyaan 1 dari 3: Lambang Bintang Emas',
        questionText: 'Lambang Bintang Emas pada perisai Garuda Pancasila melambangkan sila...',
        equation: 'Simbol Sila Pancasila',
        options: [
          { id: 'A', text: 'Sila Pertama: Ketuhanan Yang Maha Esa', value: 'Sila 1' },
          { id: 'B', text: 'Sila Kedua: Kemanusiaan yang Adil dan Beradab', value: 'Sila 2' },
          { id: 'C', text: 'Sila Ketiga: Persatuan Indonesia', value: 'Sila 3' }
        ],
        correctAnswer: 'A',
        explanation: 'Bintang bersudut lima di tengah perisai melambangkan cahaya rohani Ketuhanan Yang Maha Esa bagi setiap insan manusia.',
        companionHint: 'Bintang melambangkan cahaya ketuhanan dari sila nomor satu!',
        timeLimit: 30
      },
      {
        id: 302,
        questionNumber: 2,
        category: 'civics',
        categoryLabel: 'PPKn: Gotong Royong',
        questionTitle: 'Pertanyaan 2 dari 3: Penerapan Sila Persatuan',
        questionText: 'Seluruh awak kapal bekerja sama memperbaiki tiang layar yang patah tanpa memandang asal daerah suku masing-masing. Sikap ini mencerminkan sila...',
        equation: 'Pengamalan Pancasila',
        options: [
          { id: 'A', text: 'Sila ke-3: Persatuan Indonesia', value: 'Sila 3' },
          { id: 'B', text: 'Sila ke-4: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan', value: 'Sila 4' },
          { id: 'C', text: 'Sila ke-1: Ketuhanan Yang Maha Esa', value: 'Sila 1' }
        ],
        correctAnswer: 'A',
        explanation: 'Bekerja sama, mengutamakan persatuan, dan tidak membeda-bedakan suku bangsa adalah wujud nyata Sila ke-3 Persatuan Indonesia.',
        companionHint: 'Persatuan dan gotong royong merupakan inti dari sila ke-3!',
        timeLimit: 30
      },
      {
        id: 303,
        questionNumber: 3,
        category: 'civics',
        categoryLabel: 'PPKn: Musyawarah Mufakat',
        questionTitle: 'Pertanyaan 3 dari 3: Pengambilan Keputusan',
        questionText: 'Saat menentukan rute pelayaran menuju pulau tujuan, Kapten dan awak kapal berkumpul untuk berdiskusi hingga mencapai mufakat. Hal ini sesuai dengan sila...',
        equation: 'Demokrasi Pancasila',
        options: [
          { id: 'A', text: 'Sila ke-4 (Kepala Banteng)', value: 'Sila 4' },
          { id: 'B', text: 'Sila ke-2 (Rantai Emas)', value: 'Sila 2' },
          { id: 'C', text: 'Sila ke-5 (Padi dan Kapas)', value: 'Sila 5' }
        ],
        correctAnswer: 'A',
        explanation: 'Sila ke-4 mengamanatkan permusyawaratan dalam perwakilan serta menghormati setiap pendapat demi kemaslahatan bersama.',
        companionHint: 'Musyawarah untuk mufakat dilambangkan dengan kepala banteng!',
        timeLimit: 30
      }
    ],
    2: [
      {
        id: 304,
        questionNumber: 1,
        category: 'civics',
        categoryLabel: 'PPKn: Semboyan Negara',
        questionTitle: 'Pertanyaan 1 dari 3: Bhinneka Tunggal Ika',
        questionText: 'Semboyan "Bhinneka Tunggal Ika" pada pita yang dicengkeram burung Garuda diambil dari kitab sastra kuno peninggalan Majapahit bernama...',
        equation: 'Warisan Kitab Luhur',
        options: [
          { id: 'A', text: 'Kitab Sutasoma karangan Mpu Tantular', value: 'Sutasoma' },
          { id: 'B', text: 'Kitab Negarakretagama karangan Mpu Prapanca', value: 'Negarakretagama' },
          { id: 'C', text: 'Kitab Bharatayuddha karangan Mpu Sedah', value: 'Bharatayuddha' }
        ],
        correctAnswer: 'A',
        explanation: 'Frasa Bhinneka Tunggal Ika tan hana dharma mangrwa termaktub dalam pupuh 139 bait 5 Kitab Sutasoma karya Mpu Tantular abad ke-14.',
        companionHint: 'Ditulis oleh Mpu Tantular, berjudul Kitab Sutasoma!',
        timeLimit: 35
      },
      {
        id: 305,
        questionNumber: 2,
        category: 'civics',
        categoryLabel: 'PPKn: UUD 1945 Sumber Daya Alam',
        questionTitle: 'Pertanyaan 2 dari 3: Perekonomian & Laut Nasional',
        questionText: '"Bumi dan air dan kekayaan alam yang terkandung di dalamnya dikuasai oleh negara dan dipergunakan untuk sebesar-besar kemakmuran rakyat" tercantum dalam UUD 1945 pasal...',
        equation: 'Konstitusi Negara',
        options: [
          { id: 'A', text: 'Pasal 33 ayat 3', value: 'Pasal 33' },
          { id: 'B', text: 'Pasal 27 ayat 1', value: 'Pasal 27' },
          { id: 'C', text: 'Pasal 30 ayat 2', value: 'Pasal 30' }
        ],
        correctAnswer: 'A',
        explanation: 'Pasal 33 ayat 3 UUD 1945 adalah landasan utama pengelolaan kekayaan alam maritim dan darat demi kesejahteraan seluruh rakyat.',
        companionHint: 'Pasal 33 mengatur tentang perekonomian nasional dan kemakmuran rakyat!',
        timeLimit: 35
      },
      {
        id: 306,
        questionNumber: 3,
        category: 'civics',
        categoryLabel: 'PPKn: Keadilan Sosial',
        questionTitle: 'Pertanyaan 3 dari 3: Lambang Sila Kelima',
        questionText: 'Padi dan kapas pada perisai Garuda Pancasila melambangkan kebutuhan dasar manusia yaitu...',
        equation: 'Kebutuhan Dasar Rakyat',
        options: [
          { id: 'A', text: 'Pangan (makanan) dan Sandang (pakaian)', value: 'Pangan Sandang' },
          { id: 'B', text: 'Senjata dan Tempat Tinggal', value: 'Salah' },
          { id: 'C', text: 'Kekuasaan dan Emas', value: 'Salah' }
        ],
        correctAnswer: 'A',
        explanation: 'Padi melambangkan makanan pokok (pangan) dan kapas melambangkan bahan pakaian (sandang) sebagai syarat kemakmuran yang merata.',
        companionHint: 'Padi diolah jadi beras (pangan), kapas ditenun jadi benang kain (sandang)!',
        timeLimit: 30
      }
    ]
  },

  english: {
    1: [
      {
        id: 401,
        questionNumber: 1,
        category: 'english',
        categoryLabel: 'English: Maritime Vocabulary',
        questionTitle: 'Question 1 of 3: Ship Navigation Tool',
        questionText: 'What is the navigation instrument used by sailors that uses a magnetic needle pointing towards magnetic north called?',
        equation: 'Nautical Vocabulary',
        options: [
          { id: 'A', text: 'A Compass', value: 'Compass' },
          { id: 'B', text: 'An Anchor', value: 'Anchor' },
          { id: 'C', text: 'A Telescope', value: 'Telescope' }
        ],
        correctAnswer: 'A',
        explanation: 'A compass is a navigational device with a magnetized pointer that shows the cardinal directions (North, South, East, West).',
        companionHint: 'It shows north, south, east, and west on the pirate map!',
        timeLimit: 30
      },
      {
        id: 402,
        questionNumber: 2,
        category: 'english',
        categoryLabel: 'English: Past Tense',
        questionTitle: 'Question 2 of 3: Past Simple Tense',
        questionText: 'Choose the correct form to complete the sentence: "Yesterday, Captain Jack ______ a golden treasure chest on the deserted island."',
        equation: 'Simple Past Tense',
        options: [
          { id: 'A', text: 'finds', value: 'Present' },
          { id: 'B', text: 'found', value: 'Past' },
          { id: 'C', text: 'finding', value: 'Continuous' }
        ],
        correctAnswer: 'B',
        explanation: 'Since the action happened "Yesterday" (past time marker), the irregular past form of "find" is "found".',
        companionHint: '"Yesterday" indicates simple past tense. Find -> Found!',
        timeLimit: 30
      },
      {
        id: 403,
        questionNumber: 3,
        category: 'english',
        categoryLabel: 'English: Ocean Idioms',
        questionTitle: 'Question 3 of 3: English Sailor Idiom',
        questionText: 'What does the maritime English idiom "All hands on deck" mean?',
        equation: 'English Expressions',
        options: [
          { id: 'A', text: 'Everyone is needed to help and work together', value: 'Teamwork' },
          { id: 'B', text: 'Everyone must go to sleep immediately', value: 'Sleep' },
          { id: 'C', text: 'The ship is sinking into the sea', value: 'Sinking' }
        ],
        correctAnswer: 'A',
        explanation: '"All hands on deck" is a naval command rallying all crew members to assist urgently during an emergency or important task.',
        companionHint: 'It means every crew member is summoned to help solve the situation!',
        timeLimit: 35
      }
    ],
    2: [
      {
        id: 404,
        questionNumber: 1,
        category: 'english',
        categoryLabel: 'English: Superlative Adjectives',
        questionTitle: 'Question 1 of 3: Degree of Comparison',
        questionText: 'Complete the sentence: "The Mariana Trench is the ______ point in the world\'s oceans."',
        equation: 'Superlative Degree',
        options: [
          { id: 'A', text: 'deepest', value: 'Deepest' },
          { id: 'B', text: 'more deep', value: 'Incorrect' },
          { id: 'C', text: 'deeper', value: 'Comparative' }
        ],
        correctAnswer: 'A',
        explanation: 'For a one-syllable adjective like "deep", the superlative form comparing it to all others in the world is "the deepest".',
        companionHint: 'Comparing among all oceans requires "the" + adjective-est!',
        timeLimit: 30
      },
      {
        id: 405,
        questionNumber: 2,
        category: 'english',
        categoryLabel: 'English: Preposition of Place',
        questionTitle: 'Question 2 of 3: Prepositions',
        questionText: '"The heavy bronze anchor was dropped ______ the water to secure the galleon."',
        equation: 'Prepositions in Action',
        options: [
          { id: 'A', text: 'into', value: 'Into' },
          { id: 'B', text: 'over', value: 'Over' },
          { id: 'C', text: 'above', value: 'Above' }
        ],
        correctAnswer: 'A',
        explanation: '"Into" expresses motion towards the inside of something (dropping downward into the water).',
        companionHint: 'The anchor enters the water with movement, so we use "into"!',
        timeLimit: 30
      },
      {
        id: 406,
        questionNumber: 3,
        category: 'english',
        categoryLabel: 'English: Antonyms',
        questionTitle: 'Question 3 of 3: Vocabulary Opposite',
        questionText: 'What is the opposite (antonym) of the word "Courageous" (brave) in pirate stories?',
        equation: 'Vocabulary Mastery',
        options: [
          { id: 'A', text: 'Cowardly (penakut)', value: 'Cowardly' },
          { id: 'B', text: 'Fearless (pemberani)', value: 'Fearless' },
          { id: 'C', text: 'Valiant (gagah perkasa)', value: 'Valiant' }
        ],
        correctAnswer: 'A',
        explanation: '"Courageous" means brave. The direct opposite is "cowardly" (lacking courage or fearful).',
        companionHint: 'The opposite of brave is fearful or cowardly!',
        timeLimit: 30
      }
    ]
  },

  social_studies: {
    1: [
      {
        id: 501,
        questionNumber: 1,
        category: 'social_studies',
        categoryLabel: 'IPS: Geografi Nusantara',
        questionTitle: 'Pertanyaan 1 dari 3: Posisi Silang Indonesia',
        questionText: 'Secara geografis, kepulauan Indonesia terletak di antara dua benua dan dua samudra strategis, yaitu...',
        equation: 'Geografi Maritim',
        options: [
          { id: 'A', text: 'Benua Asia & Australia, Samudra Pasifik & Hindia', value: 'Benar' },
          { id: 'B', text: 'Benua Eropa & Afrika, Samudra Atlantik & Arktik', value: 'Salah' },
          { id: 'C', text: 'Benua Amerika & Asia, Samudra Hindia & Atlantik', value: 'Salah' }
        ],
        correctAnswer: 'A',
        explanation: 'Indonesia berada di persimpangan emas antara Benua Asia dan Benua Australia, serta Samudra Pasifik dan Samudra Hindia.',
        companionHint: 'Di utara benua Asia, selatan Australia; di timur Pasifik, di barat Hindia!',
        timeLimit: 30
      },
      {
        id: 502,
        questionNumber: 2,
        category: 'social_studies',
        categoryLabel: 'IPS: Selat Tersibuk Dunia',
        questionTitle: 'Pertanyaan 2 dari 3: Jalur Perdagangan Maritim',
        questionText: 'Selat di wilayah barat Indonesia yang menghubungkan Samudra Hindia dan Laut Natuna serta menjadi salah satu selat tersibuk di dunia adalah...',
        equation: 'Jalur Pelayaran Internasional',
        options: [
          { id: 'A', text: 'Selat Malaka', value: 'Malaka' },
          { id: 'B', text: 'Selat Sunda', value: 'Sunda' },
          { id: 'C', text: 'Selat Bali', value: 'Bali' }
        ],
        correctAnswer: 'A',
        explanation: 'Selat Malaka merupakan choke point maritim global yang dilalui ribuan kapal kargo minyak dan kontainer antarbenua setiap tahun.',
        companionHint: 'Terletak di antara Pulau Sumatra dan Semenanjung Malaya!',
        timeLimit: 30
      },
      {
        id: 503,
        questionNumber: 3,
        category: 'social_studies',
        categoryLabel: 'IPS: Batas Wilayah Laut',
        questionTitle: 'Pertanyaan 3 dari 3: Zona Ekonomi Eksklusif (ZEE)',
        questionText: 'Batas wilayah laut di mana suatu negara pantai memiliki hak berdaulat untuk mengeksplorasi dan mengelola sumber daya laut sejauh 200 mil dari garis pantai disebut...',
        equation: 'Hukum Kelautan Dunia',
        options: [
          { id: 'A', text: 'Zona Ekonomi Eksklusif (ZEE)', value: 'ZEE' },
          { id: 'B', text: 'Laut Teritorial (12 mil)', value: 'Teritorial' },
          { id: 'C', text: 'Laut Bebas Internasional', value: 'Laut Bebas' }
        ],
        correctAnswer: 'A',
        explanation: 'Sesuai Konvensi Hukum Laut PBB (UNCLOS 1982), ZEE berjarak 200 mil laut dan memberi hak eksklusif pemanfaatan sumber daya perikanan dan migas.',
        companionHint: 'Disingkat ZEE, dengan batas jarak 200 mil laut!',
        timeLimit: 35
      }
    ],
    2: [
      {
        id: 504,
        questionNumber: 1,
        category: 'social_studies',
        categoryLabel: 'IPS: Angin Muson & Iklim',
        questionTitle: 'Pertanyaan 1 dari 3: Angin Muson Barat',
        questionText: 'Angin Muson Barat yang bertiup dari Benua Asia menuju Benua Australia melintasi samudra luas membawa uap air banyak sehingga menyebabkan Indonesia mengalami musim...',
        equation: 'Klimatologi Maritim',
        options: [
          { id: 'A', text: 'Musim Hujan (Oktober - April)', value: 'Hujan' },
          { id: 'B', text: 'Musim Kemarau (April - Oktober)', value: 'Kemarau' },
          { id: 'C', text: 'Musim Dingin Bersalju', value: 'Salju' }
        ],
        correctAnswer: 'A',
        explanation: 'Angin muson barat melewati samudra yang luas dan membawa banyak uap air, mengakibatkan musim penghujan di Indonesia.',
        companionHint: 'Banyak uap air dari laut tentu mengakibatkan musim...',
        timeLimit: 30
      },
      {
        id: 505,
        questionNumber: 2,
        category: 'social_studies',
        categoryLabel: 'IPS: Ekonomi Maritim',
        questionTitle: 'Pertanyaan 2 dari 3: Perbedaan Ekonomi Kelautan',
        questionText: 'Kegiatan ekonomi yang mencakup industri galangan kapal, pelabuhan logistik, dan transportasi laut antarpulau dikelompokkan ke dalam...',
        equation: 'Ekonomi Maritim vs Kelautan',
        options: [
          { id: 'A', text: 'Ekonomi Maritim (Maritime Economy)', value: 'Maritim' },
          { id: 'B', text: 'Ekonomi Agraris', value: 'Agraris' },
          { id: 'C', text: 'Ekonomi Pertambangan Darat', value: 'Tambang' }
        ],
        correctAnswer: 'A',
        explanation: 'Ekonomi maritim mencakup transportasi laut, galangan perkapalan, perawatan kapal, dan pembangunan infrastruktur pelabuhan.',
        companionHint: 'Fokus pada infrastruktur perkapalan dan pelabuhan laut!',
        timeLimit: 35
      },
      {
        id: 506,
        questionNumber: 3,
        category: 'social_studies',
        categoryLabel: 'IPS: Konservasi Bahari',
        questionTitle: 'Pertanyaan 3 dari 3: Segitiga Terumbu Karang',
        questionText: 'Destinasi wisata bawah laut di Papua Barat yang terkenal dengan keanekaragaman 75% spesies karang keras dunia adalah...',
        equation: 'Kekayaan Alam Laut',
        options: [
          { id: 'A', text: 'Kepulauan Raja Ampat', value: 'Raja Ampat' },
          { id: 'B', text: 'Kepulauan Seribu', value: 'Seribu' },
          { id: 'C', text: 'Taman Nasional Karimunjawa', value: 'Karimunjawa' }
        ],
        correctAnswer: 'A',
        explanation: 'Raja Ampat di Papua Barat diakui dunia sebagai jantung Segitiga Karang Dunia (Coral Triangle) dengan biodiversitas bawah laut terkaya.',
        companionHint: 'Terkenal dengan gugusan empat pulau raja karang karst yang menawan di Papua Barat!',
        timeLimit: 30
      }
    ]
  },

  news: {
    1: [
      {
        id: 601,
        questionNumber: 1,
        category: 'news',
        categoryLabel: 'Berita: IKN Nusantara',
        questionTitle: 'Pertanyaan 1 dari 3: Ibu Kota Nusantara',
        questionText: 'Ibu Kota Nusantara (IKN) yang baru di Indonesia dibangun di wilayah provinsi mana dengan konsep kota pintar ramah lingkungan (Smart Forest City)?',
        equation: 'Pembangunan Nasional Terkini',
        options: [
          { id: 'A', text: 'Kalimantan Timur (Penajam Paser Utara & Kutai Kartanegara)', value: 'Kaltim' },
          { id: 'B', text: 'Kalimantan Barat (Pontianak)', value: 'Kalbar' },
          { id: 'C', text: 'Sumatra Utara (Medan)', value: 'Sumut' }
        ],
        correctAnswer: 'A',
        explanation: 'IKN Nusantara berlokasi di Kabupaten Penajam Paser Utara dan Kutai Kartanegara, Provinsi Kalimantan Timur, dibangun sebagai smart forest city.',
        companionHint: 'Terletak di Provinsi Kalimantan Timur, dekat dengan Selat Makassar!',
        timeLimit: 30
      },
      {
        id: 602,
        questionNumber: 2,
        category: 'news',
        categoryLabel: 'Berita: Kereta Cepat Whoosh',
        questionTitle: 'Pertanyaan 2 dari 3: Transportasi Modern',
        questionText: 'Kereta Cepat pertama di Asia Tenggara yang menghubungkan Jakarta dan Bandung dengan kecepatan operasional hingga 350 km/jam dikenal dengan nama...',
        equation: 'Inovasi Teknologi Terkini',
        options: [
          { id: 'A', text: 'Whoosh (Waktu Hemat, Operasi Optimal, Sistem Hebat)', value: 'Whoosh' },
          { id: 'B', text: 'Shinkansen', value: 'Shinkansen' },
          { id: 'C', text: 'KRL Commuter', value: 'KRL' }
        ],
        correctAnswer: 'A',
        explanation: 'Whoosh adalah nama resmi kereta api cepat Jakarta–Bandung yang mampu memangkas waktu tempuh menjadi sekitar 30-45 menit.',
        companionHint: 'Singkatan dari Waktu Hemat, Operasi Optimal, Sistem Hebat!',
        timeLimit: 30
      },
      {
        id: 603,
        questionNumber: 3,
        category: 'news',
        categoryLabel: 'Berita: Energi Hijau Terbarukan',
        questionTitle: 'Pertanyaan 3 dari 3: PLTS Terapung Cirata',
        questionText: 'Pembangkit Listrik Tenaga Surya (PLTS) Terapung terbesar di Asia Tenggara yang resmi beroperasi di waduk Jawa Barat adalah...',
        equation: 'Transisi Energi Bersih',
        options: [
          { id: 'A', text: 'PLTS Terapung Cirata', value: 'Cirata' },
          { id: 'B', text: 'PLTS Terapung Jatiluhur', value: 'Jatiluhur' },
          { id: 'C', text: 'PLTA Karangkates', value: 'Karangkates' }
        ],
        correctAnswer: 'A',
        explanation: 'PLTS Terapung Cirata berkapasitas 192 MWp dan menjadi simbol komitmen Indonesia menuju emisi nol bersih (Net Zero Emission).',
        companionHint: 'Terletak di Waduk Cirata, perbatasan Purwakarta, Cianjur, dan Bandung Barat!',
        timeLimit: 35
      }
    ],
    2: [
      {
        id: 604,
        questionNumber: 1,
        category: 'news',
        categoryLabel: 'Berita: Sains & Antariksa',
        questionTitle: 'Pertanyaan 1 dari 3: Teleskop Luar Angkasa',
        questionText: 'Teleskop luar angkasa inframerah tercanggih yang merekam foto-foto galaksi purba dan bintang tertua di alam semesta secara detail adalah...',
        equation: 'Astronomi Modern',
        options: [
          { id: 'A', text: 'James Webb Space Telescope (JWST)', value: 'JWST' },
          { id: 'B', text: 'Teleskop Galileo', value: 'Galileo' },
          { id: 'C', text: 'Satelit Palapa A1', value: 'Palapa' }
        ],
        correctAnswer: 'A',
        explanation: 'Teleskop Luar Angkasa James Webb diluncurkan oleh NASA/ESA/CSA untuk menembus debu kosmik dan melihat galaksi awal pembentukan alam semesta.',
        companionHint: 'Disingkat JWST, penerus teleskop Hubble yang legendaris!',
        timeLimit: 30
      },
      {
        id: 605,
        questionNumber: 2,
        category: 'news',
        categoryLabel: 'Berita: Konservasi Lingkungan Laut',
        questionTitle: 'Pertanyaan 2 dari 3: Isu Mikroplastik Laut',
        questionText: 'Partikel plastik berukuran kurang dari 5 milimeter yang mencemari lautan dan berbahaya bagi ikan serta ekosistem terumbu karang disebut...',
        equation: 'Ekologi Laut Modern',
        options: [
          { id: 'A', text: 'Mikroplastik', value: 'Mikroplastik' },
          { id: 'B', text: 'Plankton Emas', value: 'Plankton' },
          { id: 'C', text: 'Koralit Alami', value: 'Koralit' }
        ],
        correctAnswer: 'A',
        explanation: 'Mikroplastik berasal dari degradasi sampah plastik yang mengancam biota laut dan rantai makanan manusia jika tidak ditanggulangi.',
        companionHint: 'Partikel plastik mikro berukuran mikroskopis!',
        timeLimit: 30
      },
      {
        id: 606,
        questionNumber: 3,
        category: 'news',
        categoryLabel: 'Berita: Kecerdasan Buatan (AI)',
        questionTitle: 'Pertanyaan 3 dari 3: Teknologi AI Terkini',
        questionText: 'Pemanfaatan model AI mutakhir dalam bidang kelautan saat ini banyak digunakan untuk...',
        equation: 'Teknologi Informasi Masa Depan',
        options: [
          { id: 'A', text: 'Prediksi cuaca badai ekstrem dan pemantauan migrasi paus/ikan', value: 'Benar' },
          { id: 'B', text: 'Menggantikan seluruh air laut dengan cairan sintetis', value: 'Salah' },
          { id: 'C', text: 'Menghentikan pasang surut gravitasi bulan', value: 'Salah' }
        ],
        correctAnswer: 'A',
        explanation: 'AI membantu meteorologi memetakan anomali suhu samudra, memprediksi badai topan lebih dini, dan melacak satelit konservasi spesies laut langka.',
        companionHint: 'Pilih fungsi nyata: peramalan cuaca maritim dan pelacakan satelit konservasi laut!',
        timeLimit: 35
      }
    ]
  }
};
