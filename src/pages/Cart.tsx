
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

// Mock cart data
const initialCartItems = [
  {
    id: "neem-turmeric-face-wash",
    name: "Neem & Turmeric Face Wash",
    price: 24.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=200&auto=format&fit=crop"
  },
  {
    id: "saffron-glow-serum",
    name: "Saffron Glow Serum",
    price: 39.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&auto=format&fit=crop"
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discount = isPromoApplied ? subtotal * 0.10 : 0; // 10% discount when promo is applied
  const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping on orders over $50
  const tax = (subtotal - discount) * 0.08; // 8% tax
  const total = subtotal - discount + shipping + tax;
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setIsPromoApplied(true);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-8">
            Your Shopping Cart
          </h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                  <div className="p-4 bg-clearpulse-cream border-b">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-6">
                        <h2 className="font-medium">Product</h2>
                      </div>
                      <div className="col-span-2 text-center">
                        <h2 className="font-medium">Price</h2>
                      </div>
                      <div className="col-span-2 text-center">
                        <h2 className="font-medium">Quantity</h2>
                      </div>
                      <div className="col-span-2 text-right">
                        <h2 className="font-medium">Total</h2>
                      </div>
                    </div>
                  </div>
                  
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 border-b last:border-b-0">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-6 flex items-center">
                          <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <Link 
                              to={`/product/${item.id}`}
                              className="font-medium hover:text-clearpulse-green transition-colors"
                            >
                              {item.name}
                            </Link>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="flex items-center text-sm text-red-500 hover:text-red-700 transition-colors mt-1"
                            >
                              <Trash2 size={14} className="mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          ${item.price.toFixed(2)}
                        </div>
                        <div className="col-span-2 flex items-center justify-center">
                          <div className="flex items-center border rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-2 py-1 w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100"
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        <div className="col-span-2 text-right font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <Link 
                    to="/shop" 
                    className="text-clearpulse-green hover:underline flex items-center"
                  >
                    <ArrowRight size={16} className="mr-2 rotate-180" />
                    Continue Shopping
                  </Link>
                  
                  <Button 
                    onClick={() => setCartItems([])}
                    variant="outline"
                    className="border-clearpulse-green text-clearpulse-green hover:bg-clearpulse-green/10"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <h2 className="font-semibold text-xl mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 border-b pb-4 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {isPromoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (10%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : "Free"}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between font-semibold text-lg mb-6">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  
                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Promo Code</label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-grow"
                      />
                      <Button 
                        onClick={applyPromoCode}
                        variant="outline"
                        className="border-clearpulse-green text-clearpulse-green hover:bg-clearpulse-green/10"
                        disabled={isPromoApplied || !promoCode}
                      >
                        Apply
                      </Button>
                    </div>
                    {isPromoApplied && (
                      <p className="text-green-600 text-sm mt-1">Promo code applied successfully!</p>
                    )}
                    {!isPromoApplied && promoCode && (
                      <p className="text-sm mt-1 text-gray-600">Try "WELCOME10" for 10% off</p>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full bg-clearpulse-green hover:bg-clearpulse-green/90 text-white flex items-center justify-center gap-2"
                    asChild
                  >
                    <Link to="/checkout">
                      <ShoppingBag size={16} />
                      Proceed to Checkout
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 max-w-md mx-auto">
              <div className="bg-gray-100 rounded-full p-4 inline-block mb-6">
                <ShoppingBag size={40} className="text-clearpulse-green" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button 
                className="bg-clearpulse-green hover:bg-clearpulse-green/90 text-white"
                asChild
              >
                <Link to="/shop">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
