
import { getAllProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductGrid = () => {
  const products = getAllProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
