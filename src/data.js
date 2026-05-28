const categories = [
  {
    id: 'kitten-puppy',
    name: '小猫小狗',
    folder: '小猫小狗',
    icon: 'PawPrint',
    color: '#FF3AF2',
    shadowColor: '#FFE600',
    photos: [],
  },
  {
    id: 'pokemon',
    name: '神奇宝贝',
    folder: '神奇宝贝',
    icon: 'Zap',
    color: '#00F5D4',
    shadowColor: '#FF3AF2',
    photos: [],
  },
  {
    id: 'gentle-love',
    name: '温柔告白',
    folder: '温柔告白',
    icon: 'Heart',
    color: '#FFE600',
    shadowColor: '#7B2FFF',
    photos: [],
  },
  {
    id: 'sunset-glow',
    name: '落日余晖',
    folder: '落日余晖',
    icon: 'Sun',
    color: '#FF6B35',
    shadowColor: '#00F5D4',
    photos: [],
  },
  {
    id: 'galaxy-burn',
    name: '星河滚烫',
    folder: '星河滚烫',
    icon: 'Sparkles',
    color: '#7B2FFF',
    shadowColor: '#FFE600',
    photos: [],
  },
]

const photoMap = {
  '小猫小狗': [
    '微信图片_20260528114722_16006_25.jpg',
    '微信图片_20260528115106_16029_25.jpg',
    '微信图片_20260528115115_16034_25.jpg',
    '微信图片_20260528115116_16035_25.jpg',
    '微信图片_20260528121356_50_85.jpg',
    '微信图片_20260528121452_51_85.jpg',
  ],
  '神奇宝贝': [
    '微信图片_20260528114906_16023_25.jpg',
    '微信图片_20260528120647_16048_25.jpg',
    '微信图片_20260528120648_16049_25.jpg',
  ],
  '温柔告白': [
    '微信图片_20260528115105_16028_25.jpg',
    '微信图片_20260528115107_16030_25.jpg',
    '微信图片_20260528115108_16031_25.jpg',
    '微信图片_20260528115117_16036_25.jpg',
    '微信图片_20260528115118_16037_25.jpg',
    '微信图片_20260528115119_16038_25.jpg',
  ],
  '落日余晖': [
    '微信图片_20260528115120_16039_25.jpg',
    '微信图片_20260528115122_16040_25.jpg',
    '微信图片_20260528115123_16041_25.jpg',
    '微信图片_20260528115124_16042_25.jpg',
    '微信图片_20260528120346_16046_25.jpg',
    '微信图片_20260528120644_16047_25.jpg',
  ],
  '星河滚烫': [
    '微信图片_20260528115109_16032_25.jpg',
    '微信图片_20260528121223_16054_25.jpg',
    '微信图片_20260528121225_16055_25.jpg',
    '微信图片_20260528121226_16056_25.jpg',
    '微信图片_20260528121227_16057_25.jpg',
  ],
}

export function getCategories() {
  return categories.map((cat) => ({
    ...cat,
    photos: (photoMap[cat.folder] || []).map(
      (f) => `/photos/${cat.folder}/${f}`
    ),
  }))
}

export function getCategoryById(id) {
  return getCategories().find((cat) => cat.id === id) || null
}
