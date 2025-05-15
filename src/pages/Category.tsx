
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getStickersByCategory, StickerCategory, stickers, Sticker } from "../data/stickers";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const [categoryStickers, setCategoryStickers] = useState<Sticker[]>([]);
  const [isValidCategory, setIsValidCategory] = useState(false);

  const categoryNames: Record<string, string> = {
    aesthetic: "Aesthetic",
    anime: "Anime",
    quotes: "Quotes",
    animals: "Animals",
    custom: "Custom",
  };

  const categoryDescriptions: Record<string, string> = {
    aesthetic: "Beautiful, artsy stickers that add style to any surface.",
    anime: "Anime-inspired designs for fans of Japanese animation and illustration.",
    quotes: "Inspirational words and phrases to motivate and inspire.",
    animals: "Cute creature stickers featuring adorable animals.",
    custom: "Create your own personalized stickers with custom designs.",
  };

  useEffect(() => {
    if (slug && Object.keys(categoryNames).includes(slug)) {
      setIsValidCategory(true);
      setCategoryStickers(getStickersByCategory(slug as StickerCategory));
    } else {
      setIsValidCategory(false);
    }
  }, [slug]);

  if (!isValidCategory) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="mb-8">The category you are looking for does not exist.</p>
        <Button asChild>
          <Link to="/stickers">View All Stickers</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">{categoryNames[slug as string]} Stickers</h1>
        <p className="text-lg text-muted-foreground">
          {categoryDescriptions[slug as string]}
        </p>
      </div>

      {categoryStickers.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold mb-2">No stickers in this category yet</h3>
          <p className="text-muted-foreground mb-4">
            Check back soon for new additions!
          </p>
          <Button asChild>
            <Link to="/stickers">View All Stickers</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryStickers.map((sticker) => (
            <Link to={`/sticker/${sticker.id}`} key={sticker.id}>
              <Card className="sticker-card h-full hover:translate-y-[-5px]">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                    <img
                      src={sticker.imageUrl}
                      alt={sticker.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">{sticker.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{sticker.code}</span>
                    <span className="font-bold">${sticker.price.toFixed(2)}</span>
                  </div>
                  {(sticker.trending || sticker.new) && (
                    <div className="flex mt-2 gap-2">
                      {sticker.trending && (
                        <span className="px-2 py-0.5 bg-sticker-purple/10 text-sticker-purple text-xs rounded-full">
                          Trending
                        </span>
                      )}
                      {sticker.new && (
                        <span className="px-2 py-0.5 bg-sticker-teal/10 text-sticker-teal text-xs rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
