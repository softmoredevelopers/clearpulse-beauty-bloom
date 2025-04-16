
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

const Shop = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-8">
            All Products
          </h1>
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
