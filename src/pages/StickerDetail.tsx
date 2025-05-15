
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getStickersById } from "../data/stickers";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const StickerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [sticker, setSticker] = useState(id ? getStickersById(id) : null);
  const { toast } = useToast();

  const copyCodeToClipboard = () => {
    if (sticker) {
      navigator.clipboard.writeText(sticker.code);
      toast({
        title: "Code Copied!",
        description: `${sticker.code} has been copied to your clipboard.`,
      });
    }
  };

  if (!sticker) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Sticker Not Found</h1>
        <p className="mb-8">The sticker you are looking for does not exist or has been removed.</p>
        <Button asChild>
          <Link to="/stickers">View All Stickers</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link to="/stickers" className="hover:text-primary">Stickers</Link>
        <span>/</span>
        <Link to={`/category/${sticker.category}`} className="hover:text-primary">
          {sticker.category.charAt(0).toUpperCase() + sticker.category.slice(1)}
        </Link>
        <span>/</span>
        <span className="text-foreground">{sticker.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <Card className="overflow-hidden rounded-2xl sticker-shadow">
            <img
              src={sticker.imageUrl}
              alt={sticker.title}
              className="w-full h-full object-contain aspect-square"
            />
          </Card>
        </div>

        <div className="flex flex-col">
          <div className="mb-auto">
            <h1 className="text-3xl font-bold mb-2">{sticker.title}</h1>
            
            <div className="flex items-center space-x-2 mb-4">
              <span 
                className="font-semibold text-lg cursor-pointer hover:text-primary transition-colors"
                onClick={copyCodeToClipboard}
                title="Click to copy"
              >
                {sticker.code}
              </span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={copyCodeToClipboard}
              >
                Copy Code
              </Button>
            </div>

            <div className="text-2xl font-bold mb-6">${sticker.price.toFixed(2)}</div>

            <p className="text-lg mb-6">{sticker.description}</p>

            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-2">
                <span className="font-medium">Material:</span>
                <span>{sticker.material}</span>
              </div>
              
              <div className="grid grid-cols-2">
                <span className="font-medium">Size:</span>
                <span>{sticker.size}</span>
              </div>
              
              <div className="grid grid-cols-2">
                <span className="font-medium">Category:</span>
                <Link 
                  to={`/category/${sticker.category}`}
                  className="text-primary hover:underline"
                >
                  {sticker.category.charAt(0).toUpperCase() + sticker.category.slice(1)}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Separator className="mb-6" />
            
            <div className="bg-secondary/50 p-6 rounded-xl border border-border">
              <h3 className="font-bold text-xl mb-2">Want this in bulk?</h3>
              <p className="mb-4">
                Order multiple copies of this sticker at discounted prices. Just reference this code: <strong>{sticker.code}</strong>
              </p>
              <Button asChild size="lg" className="w-full button-hover">
                <Link to="/bulk-order">
                  Request Bulk Order
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerDetail;
