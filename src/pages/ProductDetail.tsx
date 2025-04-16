
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-clearpulse-green mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-4">{product.category}</p>
              <p className="text-2xl font-semibold text-clearpulse-green mb-6">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-700 mb-8">{product.description}</p>
              <div className="flex gap-4">
                <Button className="bg-clearpulse-green hover:bg-clearpulse-green/90 text-white flex items-center gap-2">
                  <ShoppingBag size={20} />
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Heart size={20} />
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
