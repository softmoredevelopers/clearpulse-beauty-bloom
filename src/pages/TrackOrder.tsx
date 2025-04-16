
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, Circle, Package, Truck } from "lucide-react";

const formSchema = z.object({
  orderNumber: z.string().min(5, { message: "Please enter a valid order number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type FormValues = z.infer<typeof formSchema>;

const TrackOrder = () => {
  const [orderFound, setOrderFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderNumber: "",
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsLoading(true);
    
    // Mock API call - in a real app, this would call an API
    setTimeout(() => {
      setIsLoading(false);
      setOrderFound(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-8 text-center">
            Track Your Order
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg border shadow-sm p-6 mb-8">
              <p className="text-gray-600 mb-6 text-center">
                Enter your order number and email address below to check the status of your order.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="orderNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Order Number</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., ORD-12345-ABCDE" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Email used for the order" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-clearpulse-green hover:bg-clearpulse-green/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Searching..." : "Track Order"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {orderFound && (
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-semibold">Order #ORD-12345-ABCDE</h2>
                    <p className="text-sm text-gray-600">Placed on April 16, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Expected Delivery</p>
                    <p className="font-medium">April 22 - April 24, 2025</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="overflow-hidden">
                    <div className="relative flex items-center justify-between mb-8">
                      <div className="absolute top-4 left-5 right-5 h-0.5 bg-gray-200 z-0">
                        <div className="absolute top-0 left-0 h-full bg-clearpulse-green" style={{ width: '65%' }}></div>
                      </div>
                      
                      <div className="relative z-10 text-center">
                        <div className="w-8 h-8 mx-auto rounded-full bg-clearpulse-green text-white flex items-center justify-center mb-2">
                          <CheckCircle size={20} />
                        </div>
                        <p className="text-sm font-medium">Order Placed</p>
                        <p className="text-xs text-gray-500">Apr 16</p>
                      </div>
                      
                      <div className="relative z-10 text-center">
                        <div className="w-8 h-8 mx-auto rounded-full bg-clearpulse-green text-white flex items-center justify-center mb-2">
                          <CheckCircle size={20} />
                        </div>
                        <p className="text-sm font-medium">Processing</p>
                        <p className="text-xs text-gray-500">Apr 17</p>
                      </div>
                      
                      <div className="relative z-10 text-center">
                        <div className="w-8 h-8 mx-auto rounded-full bg-clearpulse-green text-white flex items-center justify-center mb-2">
                          <Package size={20} />
                        </div>
                        <p className="text-sm font-medium">Shipped</p>
                        <p className="text-xs text-gray-500">Apr 18</p>
                      </div>
                      
                      <div className="relative z-10 text-center">
                        <div className="w-8 h-8 mx-auto rounded-full bg-gray-200 text-gray-500 flex items-center justify-center mb-2">
                          <Circle size={20} />
                        </div>
                        <p className="text-sm font-medium text-gray-500">Delivered</p>
                        <p className="text-xs text-gray-500">Apr 22-24</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-clearpulse-cream p-4 rounded-md mb-6">
                    <div className="flex items-start gap-3">
                      <Truck size={20} className="text-clearpulse-green mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Your package is on its way</p>
                        <p className="text-sm text-gray-600">Shipped via USPS Priority Mail on April 18, 2025</p>
                        <p className="text-sm mt-2">
                          <span className="font-medium">Tracking Number: </span>
                          <a href="https://www.usps.com/tracking" target="_blank" rel="noopener noreferrer" className="text-clearpulse-green hover:underline">
                            9400 1000 0000 0000 0000 00
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
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
                      <h4 className="font-medium">Neem & Turmeric Face Wash</h4>
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
                      <h4 className="font-medium">Saffron Glow Serum</h4>
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
                
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="flex-1 bg-clearpulse-green hover:bg-clearpulse-green/90 text-white"
                  >
                    <a href="https://www.usps.com/tracking" target="_blank" rel="noopener noreferrer">
                      Visit Carrier Website
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-clearpulse-green text-clearpulse-green hover:bg-clearpulse-green/10"
                  >
                    <a href="mailto:support@clearpulse.com">
                      Contact Support
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackOrder;
