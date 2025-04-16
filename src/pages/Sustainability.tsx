
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Recycle, Truck, Factory, Heart, Users } from "lucide-react";

const Sustainability = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <div className="relative w-full h-80">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop"
          alt="Sustainability"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Commitment to Sustainability
            </h1>
            <p className="text-xl text-white max-w-3xl">
              Creating beauty products that care for both you and the planet
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-clearpulse-green mb-6">
              Our Sustainable Journey
            </h2>
            <p className="text-lg mb-6">
              At ClearPulse, sustainability isn't just a buzzword—it's at the core of everything we do. We believe that creating effective skincare products shouldn't come at the expense of our planet. From sourcing ingredients to packaging and distribution, we're committed to making choices that minimize our environmental impact and promote social responsibility.
            </p>
            <p className="text-lg">
              Our sustainability journey is ongoing, and we're constantly looking for ways to improve. We believe in transparency and accountability, which is why we're sharing our current initiatives and future goals with you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
              <div className="bg-clearpulse-cream rounded-full p-4 inline-block mb-4">
                <Leaf size={32} className="text-clearpulse-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Sourcing</h3>
              <p>
                We carefully select ingredients that are sustainably harvested and processed, working directly with farmers who follow ethical practices.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
              <div className="bg-clearpulse-cream rounded-full p-4 inline-block mb-4">
                <Recycle size={32} className="text-clearpulse-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly Packaging</h3>
              <p>
                We're transitioning to recyclable, biodegradable, and reusable packaging materials to reduce waste and plastic pollution.
              </p>
            </div>
            
            <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
              <div className="bg-clearpulse-cream rounded-full p-4 inline-block mb-4">
                <Truck size={32} className="text-clearpulse-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Carbon-Neutral Shipping</h3>
              <p>
                We offset the carbon emissions from our shipping and distribution by investing in environmental projects around the world.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-clearpulse-green mb-6">
              Our Packaging Evolution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What We've Achieved</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Reduced plastic usage by 30% since 2022</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Switched to 100% recyclable paper cartons and boxes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Implemented biodegradable shipping materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Launched our first refillable product line</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Goals for 2026</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>100% plastic-free or post-consumer recycled plastic packaging</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Expand our refill program to all product lines</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Implement a packaging take-back program</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Achieve zero-waste certification for our manufacturing facility</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-clearpulse-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Join Our Recycling Program</h3>
              <p className="mb-4">
                Return 5 empty ClearPulse containers to receive 15% off your next purchase. Help us close the loop and reduce waste together!
              </p>
              <a href="/contact" className="text-clearpulse-green font-medium hover:underline">Learn how to participate →</a>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <Factory size={28} className="text-clearpulse-green" />
                </div>
                <h2 className="text-2xl font-semibold text-clearpulse-green">
                  Responsible Manufacturing
                </h2>
              </div>
              <p className="mb-4">
                Our manufacturing facilities are designed with sustainability in mind. We've implemented:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Solar power for 60% of our energy needs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Water recycling systems that reduce usage by 40%</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Zero harmful waste discharge into the environment</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Waste-to-resource programs for production byproducts</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <Heart size={28} className="text-clearpulse-green" />
                </div>
                <h2 className="text-2xl font-semibold text-clearpulse-green">
                  Community Empowerment
                </h2>
              </div>
              <p className="mb-4">
                Sustainability includes social responsibility. We're proud to support the communities where our ingredients are grown through:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Fair trade partnerships with farmers</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Education programs for women and children</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Healthcare initiatives in rural communities</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Donating 3% of profits to environmental conservation</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Users size={28} className="text-clearpulse-green mr-4" />
                  <h2 className="text-2xl font-semibold text-clearpulse-green">
                    Join Our Sustainability Journey
                  </h2>
                </div>
                <p className="mb-6">
                  We believe that small actions, when multiplied, can make a big difference. Here's how you can be part of our sustainability mission:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">At Home</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                          <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Recycle our packaging according to local guidelines</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                          <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Reuse our glass containers for storage or decor</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                          <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Choose our refill options when available</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">With Us</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                          <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Participate in our container return program</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                          <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Share your sustainability ideas with us</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                          <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Follow our social media for sustainability tips</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-clearpulse-green mb-6">
              Our Certifications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                  <Leaf size={36} className="text-clearpulse-green" />
                </div>
                <span className="font-medium">Leaping Bunny</span>
                <span className="text-sm text-gray-600">Cruelty-Free</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                  <Leaf size={36} className="text-clearpulse-green" />
                </div>
                <span className="font-medium">USDA Organic</span>
                <span className="text-sm text-gray-600">Select Ingredients</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                  <Leaf size={36} className="text-clearpulse-green" />
                </div>
                <span className="font-medium">B Corp</span>
                <span className="text-sm text-gray-600">Certified Business</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                  <Leaf size={36} className="text-clearpulse-green" />
                </div>
                <span className="font-medium">1% For The Planet</span>
                <span className="text-sm text-gray-600">Member</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;
