
export interface ProductType {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  featured?: boolean;
  bestSeller?: boolean;
  new?: boolean;
  skinType?: string[];
}

export const products: ProductType[] = [
  {
    id: "neem-turmeric-face-wash",
    name: "Neem & Turmeric Face Wash",
    category: "Face Care",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&auto=format&fit=crop",
    description: "A gentle yet effective face wash that combines the antibacterial properties of Neem with the brightening effects of Turmeric. Perfect for acne-prone and oily skin types.",
    ingredients: ["Neem Extract", "Turmeric", "Aloe Vera", "Tea Tree Oil", "Glycerin", "Citric Acid"],
    benefits: ["Controls excess oil", "Fights bacteria that cause acne", "Reduces inflammation", "Brightens skin tone"],
    featured: true,
    bestSeller: true,
    skinType: ["Oily", "Combination", "Acne-Prone"]
  },
  {
    id: "saffron-glow-serum",
    name: "Saffron Glow Serum",
    category: "Face Care",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop",
    description: "Luxury in a bottle. This brightening serum harnesses the power of premium saffron to give your skin a radiant glow while providing deep hydration.",
    ingredients: ["Saffron Extract", "Hyaluronic Acid", "Vitamin C", "Vitamin E", "Rose Water", "Almond Oil"],
    benefits: ["Brightens complexion", "Evens skin tone", "Reduces dark spots", "Intensely hydrates"],
    featured: true,
    new: true,
    skinType: ["All Skin Types", "Dry", "Dull"]
  },
  {
    id: "sandalwood-clay-mask",
    name: "Sandalwood Clay Mask",
    category: "Face Care",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1567721913486-6585f069b332?w=800&auto=format&fit=crop",
    description: "A purifying clay mask infused with sandalwood to cleanse pores, absorb excess oil, and leave your skin feeling refreshed and renewed.",
    ingredients: ["Sandalwood Powder", "Bentonite Clay", "Multani Mitti", "Rose Water", "Turmeric", "Honey"],
    benefits: ["Deep cleanses pores", "Removes impurities", "Balances oil production", "Soothes irritation"],
    skinType: ["Oily", "Combination", "Normal"]
  },
  {
    id: "moringa-rose-face-cream",
    name: "Moringa & Rose Face Cream",
    category: "Face Care",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format&fit=crop",
    description: "A nourishing face cream that combines the antioxidant power of Moringa with the soothing properties of Rose. Provides deep hydration without feeling greasy.",
    ingredients: ["Moringa Extract", "Rose Oil", "Shea Butter", "Jojoba Oil", "Vitamin E", "Aloe Vera"],
    benefits: ["Deeply moisturizes", "Protects against environmental damage", "Soothes irritation", "Improves elasticity"],
    bestSeller: true,
    skinType: ["Dry", "Normal", "Sensitive"]
  },
  {
    id: "cucumber-eye-roll-on",
    name: "Under Eye Roll-On with Cucumber Extract",
    category: "Face Care",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1563804447879-5f239aaf2283?w=800&auto=format&fit=crop",
    description: "Refresh tired eyes with this cooling roll-on eye treatment. Enriched with cucumber extract to reduce puffiness and dark circles.",
    ingredients: ["Cucumber Extract", "Caffeine", "Peptides", "Aloe Vera", "Green Tea Extract", "Vitamin K"],
    benefits: ["Reduces puffiness", "Minimizes dark circles", "Cools and refreshes", "Brightens eye area"],
    new: true,
    skinType: ["All Skin Types"]
  },
  {
    id: "bhringraj-amla-hair-oil",
    name: "Bhringraj & Amla Hair Oil",
    category: "Hair Care",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1608841828684-8c9170cf7116?w=800&auto=format&fit=crop",
    description: "Traditional Ayurvedic hair oil blend that promotes hair growth, reduces hair fall, and adds natural shine and strength to your tresses.",
    ingredients: ["Bhringraj Extract", "Amla Oil", "Coconut Oil", "Castor Oil", "Brahmi", "Neem"],
    benefits: ["Promotes hair growth", "Reduces hair fall", "Prevents premature graying", "Strengthens hair roots"],
    featured: true,
    bestSeller: true
  },
  {
    id: "hibiscus-shikakai-shampoo",
    name: "Hibiscus & Shikakai Shampoo",
    category: "Hair Care",
    price: 23.99,
    image: "https://images.unsplash.com/photo-1619855814392-ec9c54811f45?w=800&auto=format&fit=crop",
    description: "Natural shampoo made from hibiscus and shikakai that cleanses hair without stripping natural oils. Promotes growth and adds volume.",
    ingredients: ["Hibiscus Extract", "Shikakai", "Aloe Vera", "Coconut Oil", "Fenugreek", "Essential Oils"],
    benefits: ["Gently cleanses", "Strengthens hair", "Adds volume", "Reduces breakage"],
    bestSeller: true
  },
  {
    id: "aloe-neem-body-lotion",
    name: "Aloe & Neem Body Lotion",
    category: "Body Care",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1598264415723-3500d63923d8?w=800&auto=format&fit=crop",
    description: "Hydrating body lotion with the healing properties of Aloe Vera and antibacterial benefits of Neem. Perfect for sensitive and acne-prone skin.",
    ingredients: ["Aloe Vera Gel", "Neem Extract", "Shea Butter", "Jojoba Oil", "Vitamin E", "Glycerin"],
    benefits: ["Deeply moisturizes", "Soothes irritation", "Fights bacteria", "Calms inflammation"],
    featured: true,
    skinType: ["All Skin Types", "Sensitive", "Acne-Prone"]
  },
  {
    id: "ubtan-body-scrub",
    name: "Ubtan Body Scrub",
    category: "Body Care",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1621841957884-1210fe60dfb7?w=800&auto=format&fit=crop",
    description: "Traditional Indian exfoliating treatment made with chickpea flour, turmeric, and sandalwood. Gently removes dead skin cells for a radiant glow.",
    ingredients: ["Chickpea Flour", "Turmeric", "Sandalwood Powder", "Rose Petals", "Almond Oil", "Saffron"],
    benefits: ["Exfoliates dead skin", "Brightens complexion", "Improves blood circulation", "Removes tan"],
    new: true
  },
  {
    id: "beetroot-lip-balm",
    name: "Beetroot Lip Balm",
    category: "Lip Care",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1599016960627-54b9d398f638?w=800&auto=format&fit=crop",
    description: "Natural tinted lip balm made with beetroot extract that provides a subtle pink tint while deeply moisturizing dry lips.",
    ingredients: ["Beetroot Extract", "Shea Butter", "Beeswax", "Coconut Oil", "Vitamin E", "Jojoba Oil"],
    benefits: ["Moisturizes dry lips", "Adds natural tint", "Prevents chapping", "Softens lips"],
    bestSeller: true
  },
  {
    id: "charcoal-face-wash-men",
    name: "Charcoal Face Wash",
    category: "Men's Grooming",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?w=800&auto=format&fit=crop",
    description: "Deep cleansing face wash specially formulated for men's skin. Activated charcoal draws out impurities and excess oil.",
    ingredients: ["Activated Charcoal", "Tea Tree Oil", "Neem Extract", "Aloe Vera", "Menthol", "Witch Hazel"],
    benefits: ["Deep cleanses pores", "Controls excess oil", "Prevents acne", "Refreshes skin"],
    skinType: ["Oily", "Combination", "Acne-Prone"]
  },
  {
    id: "bridal-glow-kit",
    name: "Bridal Glow Kit",
    category: "Combo Kits & Gifts",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop",
    description: "Complete skincare regimen designed to give brides a radiant glow on their special day. Includes cleanser, serum, mask, and face cream.",
    ingredients: ["Saffron", "Turmeric", "Sandalwood", "Rose", "Almond Oil", "Gold Dust"],
    benefits: ["Brightens complexion", "Evens skin tone", "Provides radiant glow", "Deeply nourishes"],
    featured: true
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getBestSellerProducts = () => {
  return products.filter(product => product.bestSeller);
};

export const getNewProducts = () => {
  return products.filter(product => product.new);
};

// Add the missing functions
export const getAllProducts = () => {
  return products;
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id) || null;
};
