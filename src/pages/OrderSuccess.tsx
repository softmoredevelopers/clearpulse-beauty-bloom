
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Truck, Clock, ChevronRight } from "lucide-react";

const OrderSuccess = () => {
  // Mock order data - in a real app, this would come from a context or URL params
  const orderNumber = "ORD-12345-ABCDE";
  const orderDate = "April 16, 2025";
  const estimatedDelivery = "April 22 - April 24, 2025";
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg border shadow-sm p-8">
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <CheckCircle size={64} className="text-green-500" />
              </div>
              <h1 className="text-3xl font-semibold text-clearpulse-green mb-2">
                Order Confirmed!
              </h1>
              <p className="text-gray-600">
                Thank you for your purchase. Your order has been received and is being processed.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-md p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-600">Order Number</p>
                  <p className="font-semibold">{orderNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Order Date</p>
                  <p className="font-semibold">{orderDate}</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center gap-3">
                  <Truck size={20} className="text-clearpulse-green" />
                  <div>
                    <p className="font-medium">Standard Shipping</p>
                    <p className="text-sm text-gray-600">Estimated delivery: {estimatedDelivery}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="font-semibold text-xl mb-4">Order Items</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=200&auto=format&fit=crop"
                      alt="Neem & Turmeric Face Wash"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">Neem & Turmeric Face Wash</h3>
                    <p className="text-sm text-gray-600">Quantity: 1</p>
                  </div>
                  <div className="text-right font-medium">
                    $24.99
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&auto=format&fit=crop"
                      alt="Saffron Glow Serum"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">Saffron Glow Serum</h3>
                    <p className="text-sm text-gray-600">Quantity: 2</p>
                  </div>
                  <div className="text-right font-medium">
                    $79.98
                  </div>
                </div>
              </div>
              
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span>$104.97</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tax</span>
                  <span>$8.40</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t mt-2">
                  <span>Total</span>
                  <span>$113.37</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button
                asChild
                className="w-full bg-clearpulse-green hover:bg-clearpulse-green/90 text-white flex items-center justify-center gap-2"
              >
                <Link to="/track-order">
                  <Package size={18} />
                  <span>Track Your Order</span>
                </Link>
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="flex-1"
                >
                  <Link to="/shop">
                    Continue Shopping
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-clearpulse-green text-clearpulse-green hover:bg-clearpulse-green/10"
                >
                  <Link to="/account/orders">
                    View All Orders
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="mt-8 bg-clearpulse-cream rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Clock size={20} className="text-clearpulse-green" />
                <h3 className="font-medium">What happens next?</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                You'll receive an email confirmation shortly. Once your order is shipped, you'll receive another email with tracking information.
              </p>
              <Link to="/faqs" className="text-sm text-clearpulse-green hover:underline flex items-center">
                <span>Check our FAQs for more information</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
