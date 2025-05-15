
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Custom = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    size: "",
    quantity: "",
    shape: "",
    notes: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Custom order submitted!",
      description: "We'll get back to you shortly about your custom sticker request.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Custom Sticker Order</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Send us your design, and we'll turn it into a high-quality sticker!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="bg-gradient-to-br from-sticker-purple/10 to-sticker-teal/10 p-6 rounded-2xl flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <ol className="space-y-4 list-decimal list-inside">
              <li>Fill out the form with your details</li>
              <li>Upload your artwork or design</li>
              <li>We'll review your submission</li>
              <li>You'll receive a quote via email</li>
              <li>Approve the proof and complete payment</li>
              <li>Receive your custom stickers!</li>
            </ol>
          </div>

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
              <Label htmlFor="size">Sticker Size</Label>
              <Select
                onValueChange={(value) => setFormData({ ...formData, size: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small (1-2")</SelectItem>
                  <SelectItem value="medium">Medium (2-4")</SelectItem>
                  <SelectItem value="large">Large (4-6")</SelectItem>
                  <SelectItem value="custom">Custom Size</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="shape">Sticker Shape</Label>
              <Select
                onValueChange={(value) => setFormData({ ...formData, shape: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select shape" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="circle">Circle</SelectItem>
                  <SelectItem value="square">Square</SelectItem>
                  <SelectItem value="rectangle">Rectangle</SelectItem>
                  <SelectItem value="die-cut">Die Cut (Custom Shape)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="design">Upload Your Design</Label>
              <Input
                id="design"
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                Accepted formats: JPG, PNG, PDF (Max 10MB)
              </p>
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special requirements or details about your sticker?"
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full">Submit Custom Order</Button>
          </form>
        </div>

        <div className="bg-secondary/50 p-6 rounded-xl border border-border text-center">
          <h3 className="font-bold text-xl mb-2">Need Help With Your Design?</h3>
          <p className="mb-4">
            Not a designer? No problem! We can help create or improve your artwork.
          </p>
          <a 
            href="mailto:design@stickershop.com" 
            className="text-primary hover:underline"
          >
            Contact our design team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Custom;
