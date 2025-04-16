
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Ingredients = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <div className="relative w-full h-80">
        <img
          src="https://images.unsplash.com/photo-1598662933002-da8d2096f3eb?w=1200&auto=format&fit=crop"
          alt="Natural Ingredients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Ingredients
            </h1>
            <p className="text-xl text-white max-w-3xl">
              Ancient Ayurvedic wisdom meets modern skincare science
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-clearpulse-green mb-6">
              The ClearPulse Philosophy
            </h2>
            <p className="text-lg mb-6">
              At ClearPulse, we believe in the power of nature. Our products are formulated with carefully selected botanical ingredients that have been used in traditional Ayurvedic medicine for centuries, combined with modern skincare science to create effective, gentle products that work in harmony with your skin.
            </p>
            <p className="text-lg mb-6">
              We are committed to using high-quality, ethically sourced ingredients that are:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-clearpulse-cream p-5 rounded-lg text-center">
                <h3 className="font-medium text-lg mb-2">Clean</h3>
                <p>Free from harmful chemicals, sulfates, parabens, and synthetic fragrances</p>
              </div>
              <div className="bg-clearpulse-cream p-5 rounded-lg text-center">
                <h3 className="font-medium text-lg mb-2">Sustainable</h3>
                <p>Responsibly sourced with minimal environmental impact and fair trade practices</p>
              </div>
              <div className="bg-clearpulse-cream p-5 rounded-lg text-center">
                <h3 className="font-medium text-lg mb-2">Effective</h3>
                <p>Scientifically backed to provide real results for your skin</p>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="hero" className="w-full max-w-4xl mx-auto mb-12">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="hero" className="data-[state=active]:bg-clearpulse-green data-[state=active]:text-white">
                Hero Ingredients
              </TabsTrigger>
              <TabsTrigger value="botanical" className="data-[state=active]:bg-clearpulse-green data-[state=active]:text-white">
                Botanical Extracts
              </TabsTrigger>
              <TabsTrigger value="oils" className="data-[state=active]:bg-clearpulse-green data-[state=active]:text-white">
                Essential Oils
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="hero" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1590499544167-59b73df89922?w=600&auto=format&fit=crop" 
                    alt="Turmeric" 
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Turmeric</h3>
                    <p className="mb-4">A powerful antioxidant with anti-inflammatory properties that brightens skin, reduces hyperpigmentation, and helps treat acne and other skin conditions.</p>
                    <h4 className="font-medium mb-2">Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      <li>Brightens complexion</li>
                      <li>Reduces inflammation</li>
                      <li>Fights acne-causing bacteria</li>
                      <li>Minimizes dark spots</li>
                    </ul>
                    <h4 className="font-medium mb-2">Found in:</h4>
                    <p>Neem & Turmeric Face Wash, Ubtan Body Scrub, Sandalwood Clay Mask</p>
                  </div>
                </div>
                
                <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop" 
                    alt="Saffron" 
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Saffron</h3>
                    <p className="mb-4">Known as 'Red Gold,' saffron is rich in antioxidants that help brighten skin, improve texture, and protect against UV damage, giving your skin a radiant glow.</p>
                    <h4 className="font-medium mb-2">Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      <li>Evens skin tone</li>
                      <li>Protects from sun damage</li>
                      <li>Reduces hyperpigmentation</li>
                      <li>Promotes natural glow</li>
                    </ul>
                    <h4 className="font-medium mb-2">Found in:</h4>
                    <p>Saffron Glow Serum, Bridal Glow Kit, Ubtan Body Scrub</p>
                  </div>
                </div>
                
                <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1624453967993-1d11f26f17cb?w=600&auto=format&fit=crop" 
                    alt="Neem" 
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Neem</h3>
                    <p className="mb-4">With powerful antibacterial and anti-inflammatory properties, neem is excellent for treating acne, reducing inflammation, and balancing oil production.</p>
                    <h4 className="font-medium mb-2">Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      <li>Controls oil production</li>
                      <li>Treats and prevents acne</li>
                      <li>Soothes irritated skin</li>
                      <li>Natural antiseptic</li>
                    </ul>
                    <h4 className="font-medium mb-2">Found in:</h4>
                    <p>Neem & Turmeric Face Wash, Aloe & Neem Body Lotion, Charcoal Face Wash</p>
                  </div>
                </div>
                
                <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1595481032522-31818ce50ec2?w=600&auto=format&fit=crop" 
                    alt="Sandalwood" 
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Sandalwood</h3>
                    <p className="mb-4">With its cooling, soothing properties, sandalwood helps calm irritated skin, reduce redness, and even out skin tone while providing a natural, gentle fragrance.</p>
                    <h4 className="font-medium mb-2">Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      <li>Calms sensitive skin</li>
                      <li>Reduces redness</li>
                      <li>Anti-aging properties</li>
                      <li>Natural astringent</li>
                    </ul>
                    <h4 className="font-medium mb-2">Found in:</h4>
                    <p>Sandalwood Clay Mask, Bridal Glow Kit, Ubtan Body Scrub</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="botanical" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Aloe Vera</h3>
                  <p className="mb-3">Soothes, hydrates, and helps heal the skin while providing anti-inflammatory benefits.</p>
                  <h4 className="font-medium mb-1 text-sm">Found in:</h4>
                  <p className="text-sm">Multiple products across our range</p>
                </div>
                
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Amla (Indian Gooseberry)</h3>
                  <p className="mb-3">Rich in vitamin C, promotes collagen production and strengthens hair follicles.</p>
                  <h4 className="font-medium mb-1 text-sm">Found in:</h4>
                  <p className="text-sm">Bhringraj & Amla Hair Oil</p>
                </div>
                
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Bhringraj</h3>
                  <p className="mb-3">Known as the "king of herbs" for hair, promotes growth and prevents premature graying.</p>
                  <h4 className="font-medium mb-1 text-sm">Found in:</h4>
                  <p className="text-sm">Bhringraj & Amla Hair Oil</p>
                </div>
                
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Hibiscus</h3>
                  <p className="mb-3">Natural conditioner that adds shine, volume, and prevents breakage.</p>
                  <h4 className="font-medium mb-1 text-sm">Found in:</h4>
                  <p className="text-sm">Hibiscus & Shikakai Shampoo</p>
                </div>
                
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Moringa</h3>
                  <p className="mb-3">Rich in vitamins and minerals that nourish the skin and protect from environmental damage.</p>
                  <h4 className="font-medium mb-1 text-sm">Found in:</h4>
                  <p className="text-sm">Moringa & Rose Face Cream</p>
                </div>
                
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Rose Extract</h3>
                  <p className="mb-3">Hydrates, soothes, and tones the skin while providing a natural fragrance.</p>
                  <h4 className="font-medium mb-1 text-sm">Found in:</h4>
                  <p className="text-sm">Moringa & Rose Face Cream</p>
                </div>
                
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Shikakai</h3>
                  <p className="mb-3">Natural cleanser that doesn't strip hair's natural oils and promotes healthy scalp.</p>
                  <h4 className="font-medium mb-1 text-sm">Found in:</h4>
                  <p className="text-sm">Hibiscus & Shikakai Shampoo</p>
                </div>
                
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Cucumber Extract</h3>
                  <p className="mb-3">Cooling, soothing properties that reduce puffiness and refresh the skin.</p>
                  <h4 className="font-medium mb-1 text-sm">Found in:</h4>
                  <p className="text-sm">Under Eye Roll-On</p>
                </div>
                
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Beetroot Extract</h3>
                  <p className="mb-3">Natural tint and antioxidants that nourish and protect the lips.</p>
                  <h4 className="font-medium mb-1 text-sm">Found in:</h4>
                  <p className="text-sm">Beetroot Lip Balm</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="oils" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Coconut Oil</h3>
                  <p className="mb-3">Deep moisturizing properties that condition hair and skin while providing antimicrobial benefits.</p>
                  <h4 className="font-medium mb-1">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>Deep hydration</li>
                    <li>Strengthens hair</li>
                    <li>Natural antimicrobial</li>
                  </ul>
                  <h4 className="font-medium mb-1 text-sm">Found in:</h4>
                  <p className="text-sm">Bhringraj & Amla Hair Oil, Hibiscus & Shikakai Shampoo</p>
                </div>
                
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Jojoba Oil</h3>
                  <p className="mb-3">Similar to human sebum, balances oil production and provides non-greasy hydration.</p>
                  <h4 className="font-medium mb-1">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>Balances oil production</li>
                    <li>Non-comedogenic</li>
                    <li>Moisturizes without greasiness</li>
                  </ul>
                  <h4 className="font-medium mb-1 text-sm">Found in:</h4>
                  <p className="text-sm">Moringa & Rose Face Cream, Beetroot Lip Balm</p>
                </div>
                
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Tea Tree Oil</h3>
                  <p className="mb-3">Natural antiseptic with antibacterial properties, excellent for treating acne and skin infections.</p>
                  <h4 className="font-medium mb-1">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>Fights acne-causing bacteria</li>
                    <li>Reduces inflammation</li>
                    <li>Natural antiseptic</li>
                  </ul>
                  <h4 className="font-medium mb-1 text-sm">Found in:</h4>
                  <p className="text-sm">Neem & Turmeric Face Wash, Charcoal Face Wash</p>
                </div>
                
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Almond Oil</h3>
                  <p className="mb-3">Rich in vitamin E, provides deep nourishment and helps improve complexion and skin tone.</p>
                  <h4 className="font-medium mb-1">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>Rich in vitamin E</li>
                    <li>Improves skin tone</li>
                    <li>Reduces dark circles</li>
                  </ul>
                  <h4 className="font-medium mb-1 text-sm">Found in:</h4>
                  <p className="text-sm">Saffron Glow Serum, Ubtan Body Scrub</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-clearpulse-green mb-6">
              What We Don't Use
            </h2>
            <p className="text-lg mb-6">
              We believe what we leave out of our products is just as important as what we put in. All ClearPulse products are formulated without:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Parabens</h3>
                <p className="text-sm">Synthetic preservatives linked to hormone disruption</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Sulfates</h3>
                <p className="text-sm">Harsh cleansing agents that strip natural oils</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Phthalates</h3>
                <p className="text-sm">Chemical plasticizers that can affect hormone levels</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Synthetic Fragrances</h3>
                <p className="text-sm">Common irritants that can cause allergic reactions</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Mineral Oil</h3>
                <p className="text-sm">Petroleum-derived ingredient that can clog pores</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Silicones</h3>
                <p className="text-sm">Film-forming agents that can prevent skin from breathing</p>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-clearpulse-green mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="mb-12">
              <AccordionItem value="testing">
                <AccordionTrigger>Are your products tested on animals?</AccordionTrigger>
                <AccordionContent>
                  <p>No, ClearPulse is proudly cruelty-free. We never test our products on animals, nor do we work with suppliers or third parties who conduct animal testing on our behalf.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="vegan">
                <AccordionTrigger>Are your products vegan?</AccordionTrigger>
                <AccordionContent>
                  <p>Most of our products are vegan, but some contain ingredients like honey or beeswax. All vegan products are clearly labeled on our website and packaging.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="organic">
                <AccordionTrigger>Are your ingredients organic?</AccordionTrigger>
                <AccordionContent>
                  <p>We use organic ingredients whenever possible, and all our botanical ingredients are sustainably sourced. Many of our key ingredients are certified organic, and we're constantly working to increase our organic content.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="allergens">
                <AccordionTrigger>How do you handle potential allergens?</AccordionTrigger>
                <AccordionContent>
                  <p>We list all ingredients on our product packaging and website. If you have known allergies, please review these carefully. Our customer service team is also available to answer specific questions about ingredients in our products.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="sourcing">
                <AccordionTrigger>Where do you source your ingredients?</AccordionTrigger>
                <AccordionContent>
                  <p>We source our ingredients from trusted suppliers who follow ethical and sustainable practices. Many of our signature ingredients come directly from farms in India that practice traditional harvesting methods. We regularly visit our suppliers to ensure quality and ethical standards.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ingredients;
