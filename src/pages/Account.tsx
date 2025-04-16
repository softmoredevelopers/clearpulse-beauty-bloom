import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Package, Heart, Settings } from "lucide-react";

const Account = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  // Mock user data - in a real app, this would come from an authentication context
  // const user = {
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop",
  // };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img 
                src={user?.user_metadata?.avatar_url || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop"} 
                alt={user?.user_metadata?.first_name || "User Avatar"}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-clearpulse-green">
                {user?.user_metadata?.first_name || "Your Account"}
              </h1>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="w-full max-w-3xl mb-8 bg-clearpulse-cream">
              <TabsTrigger value="profile" className="flex items-center gap-2 data-[state=active]:bg-clearpulse-green data-[state=active]:text-white">
                <User size={16} />
                <span>Profile</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2 data-[state=active]:bg-clearpulse-green data-[state=active]:text-white">
                <Package size={16} />
                <span>Orders</span>
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="flex items-center gap-2 data-[state=active]:bg-clearpulse-green data-[state=active]:text-white">
                <Heart size={16} />
                <span>Wishlist</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2 data-[state=active]:bg-clearpulse-green data-[state=active]:text-white">
                <Settings size={16} />
                <span>Settings</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="max-w-4xl">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <p className="p-2 bg-gray-50 rounded-md border">{user?.user_metadata?.first_name || "N/A"}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <p className="p-2 bg-gray-50 rounded-md border">{user?.user_metadata?.last_name || "N/A"}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <p className="p-2 bg-gray-50 rounded-md border">{user?.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <p className="p-2 bg-gray-50 rounded-md border">+1 (555) 123-4567</p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mb-4 mt-8">Default Address</h2>
                <div className="bg-gray-50 p-4 rounded-md border mb-4">
                  <p className="font-medium">John Doe</p>
                  <p>123 Main Street</p>
                  <p>Apt 4B</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                
                <div className="flex gap-4">
                  <Link 
                    to="/account/edit-profile"
                    className="px-4 py-2 bg-clearpulse-green text-white rounded-md hover:bg-clearpulse-green/90 transition-colors"
                  >
                    Edit Profile
                  </Link>
                  <Link 
                    to="/account/addresses"
                    className="px-4 py-2 border border-clearpulse-green text-clearpulse-green rounded-md hover:bg-clearpulse-green/10 transition-colors"
                  >
                    Manage Addresses
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="orders">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Your Orders</h2>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="p-4 border-b bg-clearpulse-cream">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Order #12345</p>
                        <p className="text-sm text-gray-600">Placed on April 12, 2025</p>
                      </div>
                      <div className="flex items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Delivered
                        </span>
                        <Link to="/account/orders/12345" className="ml-4 text-clearpulse-green hover:underline text-sm font-medium">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 flex items-center">
                    <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=200&auto=format&fit=crop" 
                        alt="Neem & Turmeric Face Wash" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Neem & Turmeric Face Wash</h3>
                      <p className="text-sm text-gray-600">Quantity: 1</p>
                      <p className="text-sm font-medium text-clearpulse-green">$24.99</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden mt-6">
                  <div className="p-4 border-b bg-clearpulse-cream">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Order #12344</p>
                        <p className="text-sm text-gray-600">Placed on March 28, 2025</p>
                      </div>
                      <div className="flex items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Shipped
                        </span>
                        <Link to="/account/orders/12344" className="ml-4 text-clearpulse-green hover:underline text-sm font-medium">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 flex items-center">
                    <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&auto=format&fit=crop" 
                        alt="Saffron Glow Serum" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Saffron Glow Serum</h3>
                      <p className="text-sm text-gray-600">Quantity: 1</p>
                      <p className="text-sm font-medium text-clearpulse-green">$39.99</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link 
                    to="/account/orders"
                    className="text-clearpulse-green hover:underline font-medium"
                  >
                    View All Orders
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="wishlist">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Your Wishlist</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1567721913486-6585f069b332?w=800&auto=format&fit=crop" 
                        alt="Sandalwood Clay Mask" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">Sandalwood Clay Mask</h3>
                      <p className="text-sm text-gray-600 mb-2">Face Care</p>
                      <p className="text-clearpulse-green font-medium mb-4">$29.99</p>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 bg-clearpulse-green text-white text-sm rounded-md hover:bg-clearpulse-green/90 transition-colors flex-1">
                          Add to Cart
                        </button>
                        <button className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1608841828684-8c9170cf7116?w=800&auto=format&fit=crop" 
                        alt="Bhringraj & Amla Hair Oil" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">Bhringraj & Amla Hair Oil</h3>
                      <p className="text-sm text-gray-600 mb-2">Hair Care</p>
                      <p className="text-clearpulse-green font-medium mb-4">$27.99</p>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 bg-clearpulse-green text-white text-sm rounded-md hover:bg-clearpulse-green/90 transition-colors flex-1">
                          Add to Cart
                        </button>
                        <button className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
                
                <div className="space-y-4">
                  <div className="p-4 border rounded-md flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Change Password</h3>
                      <p className="text-sm text-gray-600">Update your password for enhanced security</p>
                    </div>
                    <Link 
                      to="/account/change-password"
                      className="px-3 py-1.5 bg-clearpulse-green text-white text-sm rounded-md hover:bg-clearpulse-green/90 transition-colors"
                    >
                      Update
                    </Link>
                  </div>
                  
                  <div className="p-4 border rounded-md flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Email Preferences</h3>
                      <p className="text-sm text-gray-600">Manage your email notifications and subscriptions</p>
                    </div>
                    <Link 
                      to="/account/email-preferences"
                      className="px-3 py-1.5 bg-clearpulse-green text-white text-sm rounded-md hover:bg-clearpulse-green/90 transition-colors"
                    >
                      Update
                    </Link>
                  </div>
                  
                  <div className="p-4 border rounded-md flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Delete Account</h3>
                      <p className="text-sm text-gray-600">Permanently delete your account and all your data</p>
                    </div>
                    <button 
                      className="px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
