
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { submitToGoogleSheet, SHEET_CONFIG } from "@/utils/googleSheetsAPI";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitToGoogleSheet(
        formData,
        SHEET_CONFIG.CONTACT_FORM.SHEET_ID,
        SHEET_CONFIG.CONTACT_FORM.SHEET_NAME
      );

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We'd love to hear from you! Send us a message and we'll respond as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Card className="p-6 h-full">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
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
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
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
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="bg-secondary/50 p-6 rounded-xl border border-border">
              <h3 className="font-bold text-xl mb-4">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium w-24">Phone:</span>
                  <a href="tel:1234567890" className="hover:text-primary">123-456-7890</a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">WhatsApp:</span>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    +1 234-567-7890
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Email:</span>
                  <a href="mailto:hello@stickershop.com" className="hover:text-primary">hello@stickershop.com</a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Instagram:</span>
                  <a href="https://instagram.com/stickershop" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    @stickershop
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/50 p-6 rounded-xl border border-border">
              <h3 className="font-bold text-xl mb-4">Business Hours</h3>
              <ul className="space-y-1">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>

            <div className="aspect-video bg-muted rounded-xl overflow-hidden">
              {/* Google Maps embed would go here */}
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <p className="text-muted-foreground">Google Maps Embed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
