
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "Are ClearPulse products suitable for all skin types?",
      answer: "Most of our products are formulated for all skin types. However, we do have specialized products for specific skin concerns like oily, dry, sensitive, or acne-prone skin. Each product page lists the skin types it's best suited for."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Yes, all ClearPulse products are 100% cruelty-free. We never test on animals and work only with suppliers who adhere to the same ethical standards."
    },
    {
      question: "How long does shipping take?",
      answer: "For US and Canada orders, standard shipping typically takes 5-7 business days. Express shipping options (2-3 business days) are also available at checkout for an additional fee."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund. Please see our Return Policy page for detailed instructions."
    },
    {
      question: "Are your products safe during pregnancy?",
      answer: "While our products are made with natural ingredients, we recommend consulting with your healthcare provider before using any skincare products during pregnancy."
    },
    {
      question: "How should I store my ClearPulse products?",
      answer: "To maintain potency, store your products in a cool, dry place away from direct sunlight. Some products may have specific storage instructions indicated on their packaging."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we ship to the US and Canada, with plans to expand to Europe soon. Sign up for our newsletter to be notified when we begin shipping to additional countries."
    },
    {
      question: "Are your products vegan?",
      answer: "Most of our products are vegan. Products that contain ingredients like honey or beeswax are clearly labeled on their product pages."
    },
    {
      question: "What if I have an allergic reaction?",
      answer: "If you experience any adverse reaction, discontinue use immediately and consult a healthcare professional. We recommend performing a patch test before using any new skincare product, especially if you have sensitive skin or known allergies."
    },
    {
      question: "Do you offer samples?",
      answer: "Yes! We offer sample sizes of many products. Check our Travel Mini Kit or add sample packets to your order at checkout (limit 2 per order)."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-8">
            Frequently Asked Questions
          </h1>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 p-6 bg-clearpulse-cream rounded-lg">
              <h3 className="text-xl font-semibold text-clearpulse-green mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-4">
                Our customer support team is here to help. Reach out to us via email, phone, or live chat.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-clearpulse-green hover:bg-clearpulse-green/90 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
