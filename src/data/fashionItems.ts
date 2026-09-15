import { ShopItem } from '../types';

export const SHOP_ITEMS: ShopItem[] = [
  // Topi Hero
  {
    id: 'hat_tricorn',
    name: 'Topi Tricorn Klasik Kapten',
    category: 'hat',
    costType: 'gold',
    price: 150,
    itemKey: 'tricorn_classic',
    description: 'Topi kulit berujung tiga khas kapten bajak laut penakluk samudra.',
    rarity: 'common',
    previewColor: '#78350f'
  },
  {
    id: 'hat_skull_bandana',
    name: 'Bandana Tengkorak Bajak Laut',
    category: 'hat',
    costType: 'gold',
    price: 120,
    itemKey: 'skull_bandana',
    description: 'Ikat kepala merah menyala berhiaskan lambang tengkorak dan tulang bersilang.',
    rarity: 'common',
    previewColor: '#dc2626'
  },
  {
    id: 'hat_admiral',
    name: 'Topi Laksamana Samudra',
    category: 'hat',
    costType: 'gold',
    price: 280,
    itemKey: 'admiral_cap',
    description: 'Topi perwira laut megah berhiaskan sulaman benang emas murni.',
    rarity: 'rare',
    previewColor: '#1e3a8a'
  },
  {
    id: 'hat_feathered',
    name: 'Topi Bulu Merak Corsair',
    category: 'hat',
    costType: 'diamond',
    price: 25,
    itemKey: 'feathered_pirate',
    description: 'Topi beludru berhiaskan bulu burung tropis eksotis yang anggun.',
    rarity: 'epic',
    previewColor: '#9333ea'
  },
  {
    id: 'hat_golden_crown',
    name: 'Mahkota Emas Raja Bajak Laut',
    category: 'hat',
    costType: 'diamond',
    price: 50,
    itemKey: 'golden_crown',
    description: 'Mahkota emas bertatahkan batu mulia dari harta karun kuil kuno.',
    rarity: 'legendary',
    previewColor: '#f59e0b'
  },

  // Pakaian & Jubah Hero
  {
    id: 'coat_classic_stripes',
    name: 'Rompi Beludru Bergaris',
    category: 'coat',
    costType: 'gold',
    price: 100,
    itemKey: 'classic_stripes',
    description: 'Pakaian tradisional pelaut tangguh dengan rompi cokelat dan garis marinir.',
    rarity: 'common',
    previewColor: '#b45309'
  },
  {
    id: 'coat_royal_corsair',
    name: 'Jubah Korsir Biru Safir',
    category: 'coat',
    costType: 'gold',
    price: 250,
    itemKey: 'royal_corsair',
    description: 'Jubah panjang warna biru safir laut dengan kancing kuningan mengkilap.',
    rarity: 'rare',
    previewColor: '#2563eb'
  },
  {
    id: 'coat_emerald_voyager',
    name: 'Mantel Zamrud Penjelajah',
    category: 'coat',
    costType: 'gold',
    price: 320,
    itemKey: 'emerald_voyager',
    description: 'Mantel hijau zamrud tahan air yang nyaman dipakai di tengah badai samudra.',
    rarity: 'rare',
    previewColor: '#059669'
  },
  {
    id: 'coat_midnight_rogue',
    name: 'Jubah Bajak Laut Tengah Malam',
    category: 'coat',
    costType: 'diamond',
    price: 30,
    itemKey: 'midnight_rogue',
    description: 'Jubah hitam pekat misterius dengan sulaman merah darah.',
    rarity: 'epic',
    previewColor: '#18181b'
  },
  {
    id: 'coat_golden_captain',
    name: 'Busana Emas Sang Penguasa Laut',
    category: 'coat',
    costType: 'diamond',
    price: 60,
    itemKey: 'golden_captain',
    description: 'Busana kebesaran bersulam benang emas murni 24 karat.',
    rarity: 'legendary',
    previewColor: '#d97706'
  },

  // Aksesoris Hero
  {
    id: 'acc_eyepatch',
    name: 'Penutup Mata Kulit Bajak Laut',
    category: 'accessory',
    costType: 'gold',
    price: 80,
    itemKey: 'eye_patch',
    description: 'Penutup mata kulit asli berukir simbol tengkorak bajak laut sejati.',
    rarity: 'common',
    previewColor: '#27272a'
  },
  {
    id: 'acc_gold_earring',
    name: 'Anting Emas Bundar Pelaut',
    category: 'accessory',
    costType: 'gold',
    price: 90,
    itemKey: 'gold_earring',
    description: 'Anting emas klasik penanda pelaut yang pernah mengelilingi Tanjung Harapan.',
    rarity: 'common',
    previewColor: '#fbbf24'
  },
  {
    id: 'acc_compass_necklace',
    name: 'Kalung Arah Angin Samudra',
    category: 'accessory',
    costType: 'gold',
    price: 160,
    itemKey: 'compass_necklace',
    description: 'Kalung berbahan logam kuningan yang berputar saat mendeteksi pulau tersembunyi.',
    rarity: 'rare',
    previewColor: '#0d9488'
  },
  {
    id: 'acc_pirate_hook',
    name: 'Tangan Pengait Baja Perak',
    category: 'accessory',
    costType: 'diamond',
    price: 20,
    itemKey: 'pirate_hook',
    description: 'Pengait baja mengkilap yang legendaris, gagah dan penuh wibawa kapten.',
    rarity: 'epic',
    previewColor: '#94a3b8'
  },
  {
    id: 'acc_ruby_cutlass',
    name: 'Pedang Belati Permata Rubi',
    category: 'accessory',
    costType: 'diamond',
    price: 45,
    itemKey: 'ruby_cutlass',
    description: 'Pedang lengkung tajam dengan batu rubi merah darah di gagang pelindungnya.',
    rarity: 'legendary',
    previewColor: '#ef4444'
  },

  // Aksesoris Hewan Pendamping (Animal Companion)
  {
    id: 'comp_bandana',
    name: 'Bandana Bajak Laut Cilik Hewan',
    category: 'companion_acc',
    costType: 'gold',
    price: 70,
    itemKey: 'mini_bandana',
    description: 'Ikat kepala merah mungil yang membuat hewan pendamping tampil makin menggemaskan.',
    rarity: 'common',
    previewColor: '#e11d48'
  },
  {
    id: 'comp_mini_hat',
    name: 'Topi Kapten Mungil Hewan',
    category: 'companion_acc',
    costType: 'gold',
    price: 140,
    itemKey: 'mini_hat',
    description: 'Topi tricorn mini dengan lambang jangkar kecil untuk hewan pendamping.',
    rarity: 'rare',
    previewColor: '#854d0e'
  },
  {
    id: 'comp_gold_chain',
    name: 'Kalung Rantai Emas Hewan',
    category: 'companion_acc',
    costType: 'diamond',
    price: 15,
    itemKey: 'gold_chain',
    description: 'Kalung rantai emas berkilau untuk sang sahabat setia petualangan.',
    rarity: 'epic',
    previewColor: '#f59e0b'
  },
  {
    id: 'comp_sunglasses',
    name: 'Kacamata Hitam Pelaut Keren',
    category: 'companion_acc',
    costType: 'diamond',
    price: 25,
    itemKey: 'sunglasses',
    description: 'Kacamata hitam gaya retro membuat hewan pendampingmu paling kece di samudra!',
    rarity: 'epic',
    previewColor: '#0f172a'
  }
];
