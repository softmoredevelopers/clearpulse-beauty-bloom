
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type SortOption = "featured" | "price-low" | "price-high" | "newest";
type CategoryFilter = string[];
type PriceFilter = string[];
type SkinTypeFilter = string[];

const Shop = () => {
  const products = getAllProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>([]);
  const [priceFilter, setPriceFilter] = useState<PriceFilter>([]);
  const [skinTypeFilter, setSkinTypeFilter] = useState<SkinTypeFilter>([]);

  // Get unique categories
  const categories = [...new Set(products.map(product => product.category))];

  // Filter and sort products
  const filteredAndSortedProducts = () => {
    let filtered = [...products];

    // Apply search filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Apply category filters
    if (categoryFilter.length > 0) {
      filtered = filtered.filter(product => categoryFilter.includes(product.category));
    }

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

  const handleCategoryFilterChange = (value: string) => {
    setCategoryFilter(current =>
      current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value]
    );
  };

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
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-8">
            All Products
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
                    <h3 className="font-medium text-lg mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                            checked={categoryFilter.includes(category)}
                            onCheckedChange={() => handleCategoryFilterChange(category)}
                          />
                          <label 
                            htmlFor={`category-${category.toLowerCase().replace(/\s+/g, '-')}`} 
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
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
                  <p className="text-gray-600">Try adjusting your filters or search term.</p>
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

export default Shop;
