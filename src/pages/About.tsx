
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">About StickerShop</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Our story, mission, and what makes our stickers special
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                StickerShop began in 2020 as a small passion project. What started as a hobby creating stickers for friends and family quickly grew into a thriving business.
              </p>
              <p>
                We believe that stickers are more than just adhesive decorations — they're a form of self-expression, a way to customize your world, and add personality to everyday items.
              </p>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1582004531564-54ce686eba69?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center h-64 rounded-2xl shadow-lg"></div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-bold text-xl mb-2">High Quality</h3>
              <p>
                All of our stickers are made with premium vinyl and printed with vibrant, long-lasting inks that resist fading, scratching, and water damage.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-bold text-xl mb-2">Custom Designs</h3>
              <p>
                Can't find what you're looking for? We offer custom sticker services where we can bring your ideas to life with expert design assistance.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-bold text-xl mb-2">Bulk Orders</h3>
              <p>
                Perfect for businesses, events, or large projects. We offer volume discounts and quick turnaround times for bulk orders.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[url('https://images.unsplash.com/photo-1599683467333-d5e71b246a1e?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center h-64 rounded-2xl shadow-lg"></div>
            <div>
              <ul className="space-y-4">
                <li className="bg-secondary/50 p-4 rounded-lg">
                  <h3 className="font-bold">Premium Vinyl</h3>
                  <p>Durable, waterproof, and perfect for laptops, water bottles, and outdoor use.</p>
                </li>
                <li className="bg-secondary/50 p-4 rounded-lg">
                  <h3 className="font-bold">Holographic Film</h3>
                  <p>Eye-catching rainbow effect that changes appearance depending on the viewing angle.</p>
                </li>
                <li className="bg-secondary/50 p-4 rounded-lg">
                  <h3 className="font-bold">Eco-Friendly Paper</h3>
                  <p>Biodegradable options for environmentally conscious customers.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
          <p className="mb-6 max-w-lg mx-auto">
            Whether you're looking for a single sticker or a bulk order, we're here to help bring your sticker dreams to life!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="button-hover">
              <Link to="/stickers">Shop Stickers</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="button-hover">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
