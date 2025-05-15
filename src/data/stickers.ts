
export type StickerCategory = "aesthetic" | "anime" | "quotes" | "animals" | "custom";

export interface Sticker {
  id: string;
  title: string;
  code: string;
  description: string;
  imageUrl: string;
  price: number;
  category: StickerCategory;
  trending: boolean;
  new: boolean;
  material: string;
  size: string;
}

export const stickers: Sticker[] = [
  {
    id: "1",
    title: "Kawaii Cat",
    code: "#STK1001",
    description: "Adorable kawaii cat sticker, perfect for decorating notebooks or laptops.",
    imageUrl: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1170&auto=format&fit=crop",
    price: 3.99,
    category: "anime",
    trending: true,
    new: false,
    material: "Vinyl",
    size: "3\" x 3\""
  },
  {
    id: "2",
    title: "Moon Phase",
    code: "#STK1002",
    description: "Beautiful moon phases sticker with a mystical aesthetic.",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=987&auto=format&fit=crop",
    price: 4.99,
    category: "aesthetic",
    trending: true,
    new: true,
    material: "Holographic Vinyl",
    size: "4\" x 2\""
  },
  {
    id: "3",
    title: "Good Vibes Quote",
    code: "#STK1003",
    description: "Positive affirmation quote sticker to brighten your day.",
    imageUrl: "https://images.unsplash.com/photo-1574175679797-9fc9eade1450?q=80&w=1035&auto=format&fit=crop",
    price: 3.49,
    category: "quotes",
    trending: false,
    new: true,
    material: "Matte Paper",
    size: "3\" x 3\""
  },
  {
    id: "4",
    title: "Fox Forest",
    code: "#STK1004",
    description: "Cute fox in a forest scene, die-cut sticker.",
    imageUrl: "https://images.unsplash.com/photo-1608826033549-650b38a1fe12?q=80&w=987&auto=format&fit=crop",
    price: 4.49,
    category: "animals",
    trending: true,
    new: false,
    material: "Waterproof Vinyl",
    size: "3.5\" x 2.5\""
  },
  {
    id: "5",
    title: "Anime Girl",
    code: "#STK1005",
    description: "Stylish anime girl character sticker with vibrant colors.",
    imageUrl: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1026&auto=format&fit=crop",
    price: 4.99,
    category: "anime",
    trending: true,
    new: true,
    material: "Glossy Vinyl",
    size: "4\" x 4\""
  },
  {
    id: "6",
    title: "Plant Lover",
    code: "#STK1006",
    description: "Perfect for plant enthusiasts, a cute potted plant sticker.",
    imageUrl: "https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1074&auto=format&fit=crop",
    price: 3.99,
    category: "aesthetic",
    trending: false,
    new: true,
    material: "Eco-Friendly Paper",
    size: "3\" x 3\""
  },
  {
    id: "7",
    title: "Adventure Awaits",
    code: "#STK1007",
    description: "Inspirational travel quote with mountain scenery.",
    imageUrl: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=987&auto=format&fit=crop",
    price: 3.99,
    category: "quotes",
    trending: true,
    new: false,
    material: "Waterproof Vinyl",
    size: "4\" x 2\""
  },
  {
    id: "8",
    title: "Panda Dreams",
    code: "#STK1008",
    description: "Sleepy panda sticker, cute for planners or water bottles.",
    imageUrl: "https://images.unsplash.com/photo-1566454825481-43c889a0d841?q=80&w=1066&auto=format&fit=crop",
    price: 3.49,
    category: "animals",
    trending: false,
    new: true,
    material: "Matte Vinyl",
    size: "2.5\" x 2.5\""
  },
  {
    id: "9",
    title: "Custom Design Example",
    code: "#STK1009",
    description: "Example of a custom sticker with personalized text.",
    imageUrl: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=1171&auto=format&fit=crop",
    price: 5.99,
    category: "custom",
    trending: true,
    new: false,
    material: "Premium Vinyl",
    size: "Custom"
  }
];

export const getStickersById = (id: string): Sticker | undefined => {
  return stickers.find(sticker => sticker.id === id);
};

export const getStickersByCategory = (category: StickerCategory): Sticker[] => {
  return stickers.filter(sticker => sticker.category === category);
};

export const getTrendingStickers = (): Sticker[] => {
  return stickers.filter(sticker => sticker.trending);
};

export const getNewStickers = (): Sticker[] => {
  return stickers.filter(sticker => sticker.new);
};
