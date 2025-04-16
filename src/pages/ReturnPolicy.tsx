
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReturnPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-8">
              Return & Refund Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p>Last updated: April 16, 2025</p>
              
              <p>Thank you for shopping at ClearPulse. If you are not entirely satisfied with your purchase, we're here to help.</p>
              
              <h2>Returns</h2>
              
              <p>You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging. Your item needs to have the receipt or proof of purchase.</p>
              
              <h2>Refunds</h2>
              
              <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.</p>
              
              <p>If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>
              
              <h2>Shipping</h2>
              
              <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
              
              <h2>Contact Us</h2>
              
              <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
              <ul>
                <li>By email: returns@clearpulse.com</li>
                <li>By phone: +1 (800) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnPolicy;
