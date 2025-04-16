
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStory from "@/components/BrandStory";
import TestimonialSection from "@/components/TestimonialSection";
import CategoryBanner from "@/components/CategoryBanner";
import IngredientsFeature from "@/components/IngredientsFeature";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroBanner />
        <CategoryBanner />
        <FeaturedProducts />
        <BrandStory />
        <IngredientsFeature />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
