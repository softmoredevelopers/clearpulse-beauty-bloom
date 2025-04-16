
import { Link } from "react-router-dom";
import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductType } from "@/data/products";
import { useShoppingCart } from "@/context/ShoppingCartContext";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, addToWishlist, isInWishlist } = useShoppingCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    addToWishlist(product);
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Product Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        {product.new && (
          <Badge className="bg-clearpulse-terracotta text-white">New</Badge>
        )}
        {product.bestSeller && (
          <Badge className="bg-clearpulse-gold text-black">Bestseller</Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <button 
        className={`absolute top-4 right-4 bg-white rounded-full p-2 transition-all shadow-sm hover:bg-clearpulse-cream ${isInWishlist(product.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
        aria-label="Add to wishlist"
        onClick={handleAddToWishlist}
      >
        <Heart 
          size={18} 
          className={isInWishlist(product.id) ? "text-red-500 fill-red-500" : "text-clearpulse-green"} 
        />
      </button>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-1 text-sm text-gray-500">{product.category}</div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-lg mb-2 hover:text-clearpulse-green transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="mb-4 text-lg font-semibold text-clearpulse-green">
          ${product.price.toFixed(2)}
        </div>
        
        {/* Add to Cart Button */}
        <Button 
          className="w-full bg-clearpulse-green hover:bg-clearpulse-green/90 text-white flex items-center justify-center gap-2"
          onClick={handleAddToCart}
        >
          <ShoppingBag size={16} />
          <span>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
