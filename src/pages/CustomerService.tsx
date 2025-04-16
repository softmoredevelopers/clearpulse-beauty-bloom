
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const CustomerService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-8">
              Customer Service
            </h1>
            
            <div className="bg-clearpulse-cream p-6 rounded-lg mb-10">
              <h2 className="text-xl font-medium mb-4">How Can We Help You?</h2>
              <p className="mb-6">
                We're here to assist you with any questions or concerns about your ClearPulse products or orders.
                Feel free to reach out to us through any of the channels below.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                  <Mail size={32} className="text-clearpulse-green mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Email Support</h3>
                  <p className="text-sm text-gray-600 mb-3">Response within 24 hours</p>
                  <a href="mailto:support@clearpulse.com" className="text-clearpulse-green hover:underline">
                    support@clearpulse.com
                  </a>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                  <Phone size={32} className="text-clearpulse-green mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Phone Support</h3>
                  <p className="text-sm text-gray-600 mb-3">Mon-Fri: 9AM - 6PM EST</p>
                  <a href="tel:+18001234567" className="text-clearpulse-green hover:underline">
                    +1 (800) 123-4567
                  </a>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                  <MessageSquare size={32} className="text-clearpulse-green mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Live Chat</h3>
                  <p className="text-sm text-gray-600 mb-3">Available during business hours</p>
                  <Button className="bg-clearpulse-green hover:bg-clearpulse-green/90 text-white">
                    Start Chat
                  </Button>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="mb-12">
              <AccordionItem value="shipping-time">
                <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                <AccordionContent>
                  <p>Standard shipping typically takes 3-5 business days within the continental United States. Express shipping options are available at checkout for 1-2 day delivery. International shipping varies by location and typically takes 7-14 business days.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="returns">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  <p>We offer a 30-day return policy for unused items in their original packaging. If you're not completely satisfied with your purchase, you can return it for a full refund. Please note that return shipping costs are the customer's responsibility unless the item arrived damaged or defective.</p>
                  <Link to="/return-policy" className="text-clearpulse-green hover:underline mt-2 inline-block">
                    View full return policy
                  </Link>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="track-order">
                <AccordionTrigger>How can I track my order?</AccordionTrigger>
                <AccordionContent>
                  <p>Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number on our order tracking page or directly on the carrier's website to monitor your shipment's progress.</p>
                  <Link to="/track-order" className="text-clearpulse-green hover:underline mt-2 inline-block">
                    Track your order
                  </Link>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="subscription">
                <AccordionTrigger>Can I modify or cancel my subscription?</AccordionTrigger>
                <AccordionContent>
                  <p>Yes, you can easily manage your subscription through your account dashboard. You can modify delivery frequency, skip a delivery, change products, or cancel at any time with no penalties. Changes must be made at least 48 hours before your next scheduled delivery.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="ingredients">
                <AccordionTrigger>Are your products suitable for sensitive skin?</AccordionTrigger>
                <AccordionContent>
                  <p>Many of our products are formulated for sensitive skin, but we always recommend checking the specific product details and ingredient list. All of our products are clearly labeled with suitable skin types. If you have specific allergies or sensitivities, please consult with a dermatologist before use.</p>
                  <Link to="/ingredients" className="text-clearpulse-green hover:underline mt-2 inline-block">
                    Learn more about our ingredients
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-4">Still Have Questions?</h2>
              <p className="mb-6">
                If you couldn't find the answer you're looking for, please contact our customer service team or visit our comprehensive FAQ page.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/faqs">View All FAQs</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerService;
