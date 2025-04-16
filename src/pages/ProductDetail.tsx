
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Star, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const [quantity, setQuantity] = useState(1);
  const { addToCart, addToWishlist, isInWishlist } = useShoppingCart();

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-2">Product Not Found</h2>
              <p className="text-gray-600 mb-6">
                The product you're looking for doesn't exist or has been removed.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.new && (
                  <Badge className="bg-clearpulse-terracotta text-white">New</Badge>
                )}
                {product.bestSeller && (
                  <Badge className="bg-clearpulse-gold text-black">Bestseller</Badge>
                )}
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-clearpulse-green mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-4">{product.category}</p>
              
              {/* Star Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={16} 
                      className={star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">(24 reviews)</span>
              </div>
              
              <p className="text-2xl font-semibold text-clearpulse-green mb-6">
                ${product.price.toFixed(2)}
              </p>
              
              <p className="text-gray-700 mb-8">{product.description}</p>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center border rounded-md w-32">
                  <button 
                    onClick={decreaseQuantity}
                    className="px-3 py-2 hover:bg-gray-100"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center py-2">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="px-3 py-2 hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex gap-4 mb-8">
                <Button 
                  className="bg-clearpulse-green hover:bg-clearpulse-green/90 text-white flex-1 flex items-center justify-center gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={20} />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className={`flex items-center gap-2 ${isInWishlist(product.id) ? 'border-red-500 text-red-500' : 'border-clearpulse-green text-clearpulse-green'}`}
                  onClick={handleAddToWishlist}
                >
                  <Heart 
                    size={20} 
                    className={isInWishlist(product.id) ? "fill-red-500" : ""} 
                  />
                  {isInWishlist(product.id) ? 'In Wishlist' : 'Add to Wishlist'}
                </Button>
              </div>
              
              {/* Product Details Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="ingredients">
                  <AccordionTrigger>Ingredients</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="benefits">
                  <AccordionTrigger>Benefits</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                {product.skinType && (
                  <AccordionItem value="skin-type">
                    <AccordionTrigger>Suitable For</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-2">
                        {product.skinType.map((type, index) => (
                          <Badge key={index} variant="outline" className="bg-clearpulse-cream">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}
                
                <AccordionItem value="shipping">
                  <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                  <AccordionContent>
                    <p>Free shipping on orders over $50. Returns accepted within 30 days of delivery.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
