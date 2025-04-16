
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Shipping = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-8">
              Shipping & Delivery
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p>At ClearPulse, we strive to deliver your skincare products promptly and securely. Below you'll find information about our shipping policies, delivery times, and other related details.</p>
              
              <h2>Shipping Options</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-clearpulse-cream">
                      <th className="border p-3 text-left">Shipping Method</th>
                      <th className="border p-3 text-left">Estimated Delivery Time</th>
                      <th className="border p-3 text-left">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">Standard Shipping</td>
                      <td className="border p-3">3-5 Business Days</td>
                      <td className="border p-3">
                        <span className="font-medium">$5.99</span>
                        <br />
                        <span className="text-sm text-green-600">FREE on orders over $50</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-3">Express Shipping</td>
                      <td className="border p-3">2 Business Days</td>
                      <td className="border p-3">$9.99</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Overnight Shipping</td>
                      <td className="border p-3">Next Business Day</td>
                      <td className="border p-3">$19.99</td>
                    </tr>
                    <tr>
                      <td className="border p-3">International Shipping</td>
                      <td className="border p-3">7-14 Business Days</td>
                      <td className="border p-3">Calculated at checkout</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p><strong>Please Note:</strong> All delivery times are estimates and begin once your order has been processed and shipped. Orders placed after 2 PM EST may not be processed until the following business day.</p>
              
              <h2>Free Shipping</h2>
              
              <p>We offer free standard shipping on all orders over $50 within the continental United States. This offer does not apply to express, overnight, or international shipping methods.</p>
              
              <h2>Order Processing</h2>
              
              <p>Orders are typically processed within 1-2 business days. During high-volume periods, such as holiday seasons or special promotions, processing times may be slightly longer. You will receive a confirmation email once your order has been processed and shipped.</p>
              
              <h2>Tracking Your Order</h2>
              
              <p>Once your order ships, you will receive a confirmation email with tracking information. You can also track your order by:</p>
              
              <ul>
                <li>Logging into your ClearPulse account and viewing your order history</li>
                <li>Visiting our <a href="/track-order" className="text-clearpulse-green hover:underline">Order Tracking</a> page</li>
                <li>Contacting our customer service team</li>
              </ul>
              
              <h2>International Shipping</h2>
              
              <p>We ship to most countries worldwide. International shipping rates vary based on destination, weight, and delivery method. Please note that international customers may be responsible for duties, taxes, and customs clearance fees imposed by their country. These additional charges are not included in the shipping cost displayed at checkout.</p>
              
              <h2>Shipping Restrictions</h2>
              
              <p>Some products may have shipping restrictions due to regulations regarding certain ingredients. If a product cannot be shipped to your location, you will be notified during the checkout process.</p>
              
              <h2>Shipping Address</h2>
              
              <p>It is the customer's responsibility to provide accurate shipping information. ClearPulse is not responsible for orders shipped to incorrect addresses provided by customers. If you need to change your shipping address after placing an order, please contact our customer service team as soon as possible.</p>
              
              <h2>Damaged or Lost Shipments</h2>
              
              <p>If your package arrives damaged or is lost during transit, please contact our customer service team within 7 days of the expected delivery date. We will work with the shipping carrier to resolve the issue promptly.</p>
              
              <h2>Questions About Shipping?</h2>
              
              <p>If you have any questions about our shipping policies or need assistance with a specific order, please don't hesitate to <a href="/contact" className="text-clearpulse-green hover:underline">contact us</a>.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;
