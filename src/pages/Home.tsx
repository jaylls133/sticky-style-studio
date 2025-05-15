
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getTrendingStickers, StickerCategory } from "../data/stickers";
import { useIsMobile } from "@/hooks/use-mobile";

const Home = () => {
  const trendingStickers = getTrendingStickers().slice(0, 4);
  const isMobile = useIsMobile();

  const categories: { title: string; description: string; image: string; slug: StickerCategory }[] = [
    {
      title: "Aesthetic",
      description: "Beautiful, artsy stickers",
      image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?q=80&w=1039&auto=format&fit=crop",
      slug: "aesthetic"
    },
    {
      title: "Anime",
      description: "Anime inspired designs",
      image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1074&auto=format&fit=crop",
      slug: "anime"
    },
    {
      title: "Quotes",
      description: "Inspirational words",
      image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=1170&auto=format&fit=crop",
      slug: "quotes"
    },
    {
      title: "Animals",
      description: "Cute creature stickers",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop",
      slug: "animals"
    },
    {
      title: "Custom",
      description: "Make it personal",
      image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1170&auto=format&fit=crop",
      slug: "custom"
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center opacity-30 dark:opacity-20 z-[-1]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float">
              Creative, High-Quality Stickers
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Express yourself with our unique, durable stickers designed for every style and surface.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="button-hover">
                <Link to="/stickers">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="button-hover">
                <Link to="/custom">Custom Orders</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link to={`/category/${category.slug}`} key={category.slug} className="group">
                <Card className="sticker-card h-full">
                  <CardContent className="p-0">
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                        <h3 className="text-white font-bold text-lg">{category.title}</h3>
                        <p className="text-white/80 text-sm">{category.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Stickers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Trending Stickers</h2>
            <Button asChild variant="ghost">
              <Link to="/stickers">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingStickers.map((sticker) => (
              <Link to={`/sticker/${sticker.id}`} key={sticker.id}>
                <Card className="sticker-card h-full">
                  <CardContent className="p-4">
                    <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                      <img 
                        src={sticker.imageUrl} 
                        alt={sticker.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">{sticker.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{sticker.code}</span>
                      <span className="font-bold">${sticker.price.toFixed(2)}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Bulk Stickers?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Perfect for events, businesses, or giveaways. Get volume discounts and fast turnaround.
          </p>
          <Button asChild size="lg" variant="secondary" className="button-hover">
            <Link to="/bulk-order">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
