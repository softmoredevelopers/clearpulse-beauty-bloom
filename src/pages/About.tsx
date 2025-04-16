
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandStory from "@/components/BrandStory";
import IngredientsFeature from "@/components/IngredientsFeature";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <BrandStory />
        <IngredientsFeature />
      </main>
      <Footer />
    </div>
  );
};

export default About;
