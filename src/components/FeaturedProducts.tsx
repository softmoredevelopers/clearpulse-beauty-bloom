
import { useState } from "react";
import { Link } from "react-router-dom";
import { getFeaturedProducts, getBestSellerProducts, getNewProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("featured");
  
  const featuredProducts = getFeaturedProducts();
  const bestSellerProducts = getBestSellerProducts();
  const newProducts = getNewProducts();

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of natural, herb-based skincare products that harness the ancient wisdom of Ayurveda.
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-clearpulse-cream">
              <TabsTrigger value="featured" className="data-[state=active]:bg-clearpulse-green data-[state=active]:text-white">
                Featured
              </TabsTrigger>
              <TabsTrigger value="bestsellers" className="data-[state=active]:bg-clearpulse-green data-[state=active]:text-white">
                Bestsellers
              </TabsTrigger>
              <TabsTrigger value="new" className="data-[state=active]:bg-clearpulse-green data-[state=active]:text-white">
                New Arrivals
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="bestsellers" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bestSellerProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {newProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild className="bg-clearpulse-green hover:bg-clearpulse-green/90 text-white">
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
