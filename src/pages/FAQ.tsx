
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqs = [
    {
      question: "How do I order stickers?",
      answer:
        "Browse our collection, select the stickers you want, and note the sticker code. For individual stickers, you can contact us via WhatsApp or phone with the sticker code. For bulk orders or custom designs, fill out the respective forms on our website.",
    },
    {
      question: "Do you ship nationwide/internationally?",
      answer:
        "Yes! We ship nationwide with standard shipping taking 3-5 business days. International shipping is available to select countries with delivery times ranging from 7-14 business days depending on the destination.",
    },
    {
      question: "Can I customize a sticker?",
      answer:
        "Absolutely! We offer custom sticker design services. Simply visit our Custom page, upload your design or idea, and fill out the form with your requirements. Our design team will work with you to create the perfect sticker.",
    },
    {
      question: "How long will my stickers take to arrive?",
      answer:
        "Standard orders typically take 3-5 business days for production plus shipping time. Bulk orders may take 5-7 business days for production. Rush options are available for an additional fee.",
    },
    {
      question: "Can I get discounts for bulk orders?",
      answer:
        "Yes! We offer tiered discounts based on order quantity. Orders of 50+ stickers receive 10% off, 100+ receive 20% off, and 500+ receive 30% off. Contact us for custom quotes on very large orders.",
    },
    {
      question: "What materials are your stickers made from?",
      answer:
        "We use premium vinyl that's waterproof, scratch-resistant, and UV protected for outdoor use. We also offer holographic vinyl for special effects and eco-friendly paper options for specific needs.",
    },
    {
      question: "How do I care for my stickers?",
      answer:
        "Our vinyl stickers are durable and waterproof, so they can be washed. For maximum longevity, avoid excessive scrubbing and harsh chemicals. Paper stickers should be kept dry.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer:
        "Orders can be modified or canceled within 24 hours of placement. After that, we may have already begun production. Contact us immediately if you need to make changes.",
    },
    {
      question: "Do you offer samples before a bulk order?",
      answer:
        "Yes, we can provide sample stickers for bulk orders over 200 units. There's a small fee for samples which is credited toward your final order if you proceed.",
    },
  ];

  const filteredFAQs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Find answers to common questions about our stickers and services
        </p>

        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>

        {filteredFAQs.length > 0 ? (
          <Accordion type="single" collapsible className="mb-10">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-xl font-bold mb-2">No matching FAQs found</h3>
            <p className="mb-4">Try a different search term or contact us directly with your question.</p>
            <Button onClick={() => setSearchQuery("")} variant="outline">
              Clear Search
            </Button>
          </div>
        )}

        <Card className="bg-secondary/50 p-6">
          <h3 className="font-bold text-xl mb-2">Still have questions?</h3>
          <p className="mb-4">
            If you couldn't find the answer you were looking for, feel free to reach out to us directly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:support@stickershop.com">Email Support</a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
