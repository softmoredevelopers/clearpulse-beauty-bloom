
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CategoryPage = () => {
  const { category } = useParams();
  const products = getProductsByCategory(category || "");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-8 capitalize">
            {category?.split("-").join(" ")}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
