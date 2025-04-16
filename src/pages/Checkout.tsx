
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

// Mock cart data
const cartItems = [
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

// Calculate cart totals
const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping on orders over $50
const tax = subtotal * 0.08; // 8% tax
const total = subtotal + shipping + tax;

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(1, { message: "Please select a state." }),
  zipCode: z.string().min(5, { message: "Please enter a valid ZIP code." }),
  country: z.string().min(1, { message: "Please select a country." }),
  paymentMethod: z.enum(["credit", "paypal", "apple"]),
  cardName: z.string().optional(),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvc: z.string().optional(),
  saveInfo: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "US",
      paymentMethod: "credit",
      saveInfo: false,
    },
  });

  const watchPaymentMethod = form.watch("paymentMethod");

  const onSubmit = (data: FormValues) => {
    setIsLoading(true);
    
    // Mock checkout process - in a real app, this would call an API
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Order placed successfully!",
        description: "Your order has been received and is being processed.",
      });
      navigate("/order-success");
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-8">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Shipping Information */}
                  <div className="bg-white rounded-lg border shadow-sm p-6">
                    <h2 className="font-semibold text-xl mb-6">Shipping Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="First name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Last name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Email address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="Phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input placeholder="Street address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="City" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select state" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="NY">New York</SelectItem>
                                  <SelectItem value="CA">California</SelectItem>
                                  <SelectItem value="TX">Texas</SelectItem>
                                  <SelectItem value="FL">Florida</SelectItem>
                                  <SelectItem value="IL">Illinois</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ZIP Code</FormLabel>
                              <FormControl>
                                <Input placeholder="ZIP code" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="US">United States</SelectItem>
                                <SelectItem value="CA">Canada</SelectItem>
                                <SelectItem value="UK">United Kingdom</SelectItem>
                                <SelectItem value="AU">Australia</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="bg-white rounded-lg border shadow-sm p-6">
                    <h2 className="font-semibold text-xl mb-6">Payment Method</h2>
                    
                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-3"
                            >
                              <div className="flex items-center space-x-2 border rounded-md p-3">
                                <RadioGroupItem value="credit" id="credit" />
                                <label htmlFor="credit" className="flex items-center gap-2 cursor-pointer">
                                  <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-6 text-blue-600">
                                      <path d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM4 6H20V10H4V6ZM4 12H8V14H4V12ZM10 12H14V14H10V12Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-8 h-6">
                                      <path fill="#ff5f00" d="M 285.2 252 C 285.2 176 324.7 110 381.1 76.8 C 350.7 53.9 312.8 40 272 40 C 169.8 40 87.2 122.6 87.2 224.8 C 87.2 327 169.8 409.6 272 409.6 C 312.8 409.6 350.7 395.7 381.1 372.8 C 324.7 340 285.2 328 285.2 252" />
                                      <path fill="#eb001b" d="M 471.9 249.3 C 471.9 326 430.9 393.9 372.8 427.9 C 403.2 450.8 441.1 464.7 481.9 464.7 C 584.1 464.7 666.7 382.1 666.7 279.9 C 666.7 177.7 584.1 95.1 481.9 95.1 C 441.1 95.1 403.2 109 372.8 131.9 C 430.9 165.3 471.9 172.5 471.9 249.3" transform="translate(-95)" />
                                    </svg>
                                  </div>
                                  Credit / Debit Card
                                </label>
                              </div>

                              <div className="flex items-center space-x-2 border rounded-md p-3">
                                <RadioGroupItem value="paypal" id="paypal" />
                                <label htmlFor="paypal" className="flex items-center gap-2 cursor-pointer">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-6">
                                    <path fill="#002C8A" d="M16.273 8.182c0.215-1.372-0.010-2.319-0.734-3.165-0.803-0.938-2.263-1.341-4.132-1.341h-5.453c-0.379 0-0.707 0.275-0.764 0.648l-2.268 14.394c-0.043 0.277 0.17 0.529 0.451 0.529h3.302l-0.229 1.452c-0.039 0.243 0.149 0.465 0.396 0.465h2.793c0.331 0 0.61-0.239 0.662-0.563l0.027-0.142 0.53-3.354 0.034-0.186c0.051-0.326 0.332-0.563 0.662-0.563h0.417c2.693 0 4.8-1.096 5.413-4.264 0.255-1.321 0.123-2.429-0.547-3.205-0.206-0.234-0.466-0.426-0.766-0.586z" />
                                    <path fill="#069" d="M16.273 8.182c0.215-1.372-0.010-2.319-0.734-3.165-0.803-0.938-2.263-1.341-4.132-1.341h-5.453c-0.379 0-0.707 0.275-0.764 0.648l-2.268 14.394c-0.043 0.277 0.17 0.529 0.451 0.529h3.302l0.828-5.243-0.026 0.163c0.057-0.373 0.383-0.648 0.764-0.648h1.592c3.124 0 5.571-1.269 6.284-4.941 0.021-0.124 0.041-0.248 0.056-0.368"></path>
                                    <path fill="#012169" d="M6.965 8.258c0.045-0.286 0.231-0.523 0.484-0.642 0.114-0.056 0.243-0.087 0.378-0.087h5.487c0.648 0 1.25 0.042 1.801 0.132 0.158 0.025 0.31 0.056 0.459 0.091 0.148 0.035 0.291 0.076 0.428 0.122 0.068 0.023 0.134 0.048 0.198 0.075 0.257 0.104 0.486 0.229 0.685 0.374 0.215-1.372-0.010-2.319-0.734-3.165-0.803-0.938-2.263-1.341-4.132-1.341h-5.453c-0.379 0-0.707 0.275-0.764 0.648l-2.268 14.394c-0.043 0.277 0.17 0.529 0.451 0.529h3.302l0.828-5.243 0.73-4.597z"></path>
                                  </svg>
                                  PayPal
                                </label>
                              </div>

                              <div className="flex items-center space-x-2 border rounded-md p-3">
                                <RadioGroupItem value="apple" id="apple" />
                                <label htmlFor="apple" className="flex items-center gap-2 cursor-pointer">
                                  <svg viewBox="0 0 24 24" className="w-8 h-6" fill="black" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.94 5.19C16 3.95 15.65 2.1 14.65 1C13.57 0 11.9 0.53 10.83 1.87C9.84 3.12 10.13 4.88 11.21 5.81C12.39 6.66 13.97 6.29 14.94 5.19Z" />
                                    <path d="M18.17 18.09C18.92 16.96 19.25 16.38 19.99 15.18C15.74 13.72 15.11 7.59 19.32 5.79C17.73 4.58 15.93 4.25 14.32 4.67C12.09 5.23 10.63 6.19 9.58 6.19C8.53 6.19 7.29 4.72 4.93 4.72C2.52 4.77 0 6.55 0 10.19C0 11.28 0.19 12.41 0.56 13.59C1.17 15.31 3.66 19.96 6.22 19.9C7.5 19.86 8.38 19.05 10.03 19.05C11.66 19.05 12.4 19.9 13.92 19.9C16.5 19.86 18.78 15.66 19.34 13.95C16.14 12.47 15.12 8.37 18.17 6.74" />
                                  </svg>
                                  Apple Pay
                                </label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {watchPaymentMethod === "credit" && (
                      <div className="mt-6 space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <FormField
                            control={form.control}
                            name="cardName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name on Card</FormLabel>
                                <FormControl>
                                  <Input placeholder="Cardholder name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="cardNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Card Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="1234 5678 9012 3456" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="cardExpiry"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Expiration Date</FormLabel>
                                  <FormControl>
                                    <Input placeholder="MM / YY" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="cardCvc"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>CVC</FormLabel>
                                  <FormControl>
                                    <Input placeholder="123" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name="saveInfo"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Save my information for faster checkout next time
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-clearpulse-green hover:bg-clearpulse-green/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : `Complete Order • $${total.toFixed(2)}`}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border shadow-sm p-6 sticky top-8">
                <h2 className="font-semibold text-xl mb-4">Order Summary</h2>
                
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="py-4 flex gap-3">
                      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        <p className="text-clearpulse-green font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-b py-4 my-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : "Free"}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
