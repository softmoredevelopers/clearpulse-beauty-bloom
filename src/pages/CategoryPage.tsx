
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type SortOption = "featured" | "price-low" | "price-high" | "newest";

// Define category banners and descriptions
const categoryInfo = {
  "Face Care": {
    banner: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?w=1200&auto=format&fit=crop",
    description: "Discover our range of natural face care products that combine traditional Ayurvedic ingredients with modern skincare science for radiant, healthy skin."
  },
  "Hair Care": {
    banner: "https://images.unsplash.com/photo-1607101384441-1bbe0e4b8653?w=1200&auto=format&fit=crop",
    description: "Our hair care products are crafted with natural oils and herbs to nourish your hair from root to tip, promoting strength, shine, and healthy growth."
  },
  "Body Care": {
    banner: "https://images.unsplash.com/photo-1600428877878-1a0ff561d8b5?w=1200&auto=format&fit=crop",
    description: "Indulge in our luxurious body care range, made with nourishing botanicals to cleanse, moisturize, and rejuvenate your skin for total body wellness."
  },
  "Lip Care": {
    banner: "https://images.unsplash.com/photo-1599016960627-54b9d398f638?w=1200&auto=format&fit=crop",
    description: "Keep your lips soft, smooth, and naturally tinted with our collection of herb-infused lip care products made with organic ingredients."
  },
  "Men's Grooming": {
    banner: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=1200&auto=format&fit=crop",
    description: "Specially formulated grooming essentials for men that cleanse, protect, and rejuvenate skin while addressing specific skincare needs with natural ingredients."
  },
  "Combo Kits & Gifts": {
    banner: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&auto=format&fit=crop",
    description: "Perfect gift sets for your loved ones or yourself, combining our bestselling products in beautifully packaged kits for various skincare concerns and occasions."
  }
};

const formatCategoryTitle = (category: string) => {
  if (category === "mens-grooming") return "Men's Grooming";
  if (category === "combo-kits") return "Combo Kits & Gifts";
  return category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

const getCategoryInfo = (category: string) => {
  const formattedCategory = formatCategoryTitle(category);
  // @ts-ignore - We know these categories exist
  return categoryInfo[formattedCategory] || {
    banner: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=1200&auto=format&fit=crop",
    description: "Browse our collection of high-quality natural skincare products."
  };
};

const CategoryPage = () => {
  const { category } = useParams();
  const formattedCategory = formatCategoryTitle(category || "");
  const products = getProductsByCategory(formattedCategory);
  const categoryDetails = getCategoryInfo(category || "");

  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [priceFilter, setPriceFilter] = useState<string[]>([]);
  const [skinTypeFilter, setSkinTypeFilter] = useState<string[]>([]);

  // Filter and sort products
  const filteredAndSortedProducts = () => {
    let filtered = [...products];

    // Apply price filters
    if (priceFilter.length > 0) {
      filtered = filtered.filter(product => {
        if (priceFilter.includes("under25") && product.price < 25) return true;
        if (priceFilter.includes("25to50") && product.price >= 25 && product.price <= 50) return true;
        if (priceFilter.includes("over50") && product.price > 50) return true;
        return false;
      });
    }

    // Apply skin type filters
    if (skinTypeFilter.length > 0) {
      filtered = filtered.filter(product => {
        if (!product.skinType) return false;
        return skinTypeFilter.some(type => product.skinType?.includes(type));
      });
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-high":
        return filtered.sort((a, b) => b.price - a.price);
      case "newest":
        return filtered.filter(product => product.new).concat(filtered.filter(product => !product.new));
      default: // featured
        return filtered.filter(product => product.featured).concat(filtered.filter(product => !product.featured));
    }
  };

  const sortedProducts = filteredAndSortedProducts();

  const handlePriceFilterChange = (value: string) => {
    setPriceFilter(current =>
      current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value]
    );
  };

  const handleSkinTypeFilterChange = (value: string) => {
    setSkinTypeFilter(current =>
      current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value]
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Category Banner */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src={categoryDetails.banner}
          alt={formattedCategory}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {formattedCategory}
            </h1>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              {categoryDetails.description}
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Sidebar */}
            <div className="lg:w-1/4">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="font-medium text-lg mb-4">Sort By</h3>
                    <RadioGroup defaultValue={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="featured" id="featured" />
                        <Label htmlFor="featured">Featured</Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="price-low" id="price-low" />
                        <Label htmlFor="price-low">Price: Low to High</Label>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="price-high" id="price-high" />
                        <Label htmlFor="price-high">Price: High to Low</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="newest" id="newest" />
                        <Label htmlFor="newest">Newest</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="mb-6">
                    <h3 className="font-medium text-lg mb-4">Price</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="under25" 
                          checked={priceFilter.includes("under25")}
                          onCheckedChange={() => handlePriceFilterChange("under25")}
                        />
                        <label htmlFor="under25" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Under $25
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="25to50" 
                          checked={priceFilter.includes("25to50")}
                          onCheckedChange={() => handlePriceFilterChange("25to50")}
                        />
                        <label htmlFor="25to50" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          $25 - $50
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="over50" 
                          checked={priceFilter.includes("over50")}
                          onCheckedChange={() => handlePriceFilterChange("over50")}
                        />
                        <label htmlFor="over50" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Over $50
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h3 className="font-medium text-lg mb-4">Skin Type</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="normal" 
                          checked={skinTypeFilter.includes("Normal")}
                          onCheckedChange={() => handleSkinTypeFilterChange("Normal")}
                        />
                        <label htmlFor="normal" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Normal
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="dry" 
                          checked={skinTypeFilter.includes("Dry")}
                          onCheckedChange={() => handleSkinTypeFilterChange("Dry")}
                        />
                        <label htmlFor="dry" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Dry
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="oily" 
                          checked={skinTypeFilter.includes("Oily")}
                          onCheckedChange={() => handleSkinTypeFilterChange("Oily")}
                        />
                        <label htmlFor="oily" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Oily
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="combination" 
                          checked={skinTypeFilter.includes("Combination")}
                          onCheckedChange={() => handleSkinTypeFilterChange("Combination")}
                        />
                        <label htmlFor="combination" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Combination
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="sensitive" 
                          checked={skinTypeFilter.includes("Sensitive")}
                          onCheckedChange={() => handleSkinTypeFilterChange("Sensitive")}
                        />
                        <label htmlFor="sensitive" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Sensitive
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="acne-prone" 
                          checked={skinTypeFilter.includes("Acne-Prone")}
                          onCheckedChange={() => handleSkinTypeFilterChange("Acne-Prone")}
                        />
                        <label htmlFor="acne-prone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Acne-Prone
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">{sortedProducts.length} products</p>
              </div>
              
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-gray-600">Try adjusting your filters or check back later for new arrivals.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
