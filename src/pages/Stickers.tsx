
import { useState, useEffect } from "react";
import { stickers, StickerCategory, Sticker } from "../data/stickers";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";

const Stickers = () => {
  const [filteredStickers, setFilteredStickers] = useState<Sticker[]>(stickers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<StickerCategory | "all">("all");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { label: "All", value: "all" },
    { label: "Aesthetic", value: "aesthetic" },
    { label: "Anime", value: "anime" },
    { label: "Quotes", value: "quotes" },
    { label: "Animals", value: "animals" },
    { label: "Custom", value: "custom" },
  ];

  useEffect(() => {
    let result = stickers;

    if (selectedCategory !== "all") {
      result = result.filter(
        (sticker) => sticker.category === selectedCategory
      );
    }

    if (searchTerm) {
      result = result.filter(
        (sticker) =>
          sticker.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sticker.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sticker.code.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredStickers(result);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Sticker Gallery</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            type="text"
            placeholder="Search stickers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Button 
          variant="outline"
          className="md:hidden"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="mr-2" size={18} />
          Filters
        </Button>
        
        <div className={`md:flex space-x-2 ${showFilters ? 'block' : 'hidden'}`}>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value as StickerCategory | "all")}
              className="mb-2 md:mb-0"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {filteredStickers.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold mb-2">No stickers found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search or filter criteria
          </p>
          <Button onClick={() => {
            setSearchTerm("");
            setSelectedCategory("all");
          }}>
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStickers.map((sticker) => (
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

export default Stickers;
