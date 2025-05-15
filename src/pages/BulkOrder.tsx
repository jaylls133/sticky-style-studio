
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const BulkOrder = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bulk order inquiry sent!",
      description: "We'll get back to you shortly about your bulk sticker order.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Bulk Sticker Orders</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Get volume discounts for larger quantities of stickers!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div>
            <div className="bg-gradient-to-br from-sticker-orange/10 to-sticker-pink/10 p-6 rounded-2xl mb-6">
              <h2 className="text-2xl font-bold mb-4">Why Order in Bulk?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-sticker-orange/20 text-sticker-orange p-1 rounded-full mr-2">✓</span>
                  <span>Save up to 40% with larger quantities</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-sticker-orange/20 text-sticker-orange p-1 rounded-full mr-2">✓</span>
                  <span>Perfect for events, marketing, and giveaways</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-sticker-orange/20 text-sticker-orange p-1 rounded-full mr-2">✓</span>
                  <span>Quick turnaround times</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-sticker-orange/20 text-sticker-orange p-1 rounded-full mr-2">✓</span>
                  <span>Consistent quality across all stickers</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/50 p-6 rounded-xl border border-border">
              <h3 className="font-bold text-xl mb-4">Bulk Order Information</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2">
                  <span className="font-medium">Minimum Order:</span>
                  <span>50 stickers</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium">Processing Time:</span>
                  <span>3-5 business days</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium">Shipping:</span>
                  <span>Free for orders over $100</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium">Design Services:</span>
                  <span>Available upon request</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold mb-4">Contact Us for Bulk Orders</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your bulk order needs. Include sticker codes, quantities, and any special requirements."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full">Send Inquiry</Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="mb-2">Need to speak with someone directly?</p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline">
                  <a href="tel:1234567890">Call Us</a>
                </Button>
                <Button variant="outline">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkOrder;
