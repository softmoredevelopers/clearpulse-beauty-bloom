
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type FormValues = z.infer<typeof formSchema>;

const ForgotPassword = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsLoading(true);
    
    // Mock API call - in a real app, this would call an API
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      toast({
        title: "Reset email sent",
        description: `We've sent a password reset link to ${data.email}`,
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Link 
              to="/login" 
              className="inline-flex items-center text-clearpulse-green hover:underline mb-6 font-medium"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Login
            </Link>

            <h1 className="text-3xl font-semibold text-clearpulse-green mb-4 text-center">
              Reset Your Password
            </h1>

            {!submitted ? (
              <>
                <p className="text-center text-gray-600 mb-8">
                  Enter your email address and we'll send you a link to reset your password.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} />
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
                      {isLoading ? "Sending..." : "Send Reset Link"}
                    </Button>
                  </form>
                </Form>
              </>
            ) : (
              <div className="text-center bg-clearpulse-cream p-6 rounded-lg">
                <svg 
                  className="mx-auto h-12 w-12 text-clearpulse-green" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" 
                  />
                </svg>
                <h2 className="mt-4 text-xl font-semibold text-clearpulse-green">Check Your Email</h2>
                <p className="mt-2 text-gray-600">
                  We've sent a password reset link to your email address. Please check your inbox and follow the instructions.
                </p>
                <p className="mt-4 text-gray-600">
                  Didn't receive an email?{" "}
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="text-clearpulse-green hover:underline font-medium"
                  >
                    Try again
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
