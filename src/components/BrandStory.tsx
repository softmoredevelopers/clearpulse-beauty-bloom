
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BrandStory = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-clearpulse-cream/50 to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&auto=format&fit=crop" 
              alt="Indian herbs and ingredients" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1581299894681-aa7c7a78ee6c?w=400&auto=format&fit=crop" 
                alt="Handmade production process" 
                className="w-40 h-40 object-cover rounded-lg border-4 border-white shadow-lg"
              />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-clearpulse-terracotta mb-2">Our Story</h4>
            <h2 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-6">
              Ancient Wisdom Meets Modern Science
            </h2>
            <p className="text-gray-700 mb-4">
              ClearPulse was born from a passion for the ancient herbs of India and a vision to bring their incredible benefits to the modern world. Our founder, Aanya, grew up watching her grandmother create skincare remedies using herbs from their backyard in Kerala.
            </p>
            <p className="text-gray-700 mb-6">
              Today, we ethically source our ingredients from sustainable farms across India, supporting local communities while ensuring the highest quality. Our products combine time-tested Ayurvedic ingredients with modern dermatological science to create effective, gentle formulations for all skin types.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-clearpulse-green"></div>
                <span className="font-medium">100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-clearpulse-green"></div>
                <span className="font-medium">Cruelty-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-clearpulse-green"></div>
                <span className="font-medium">Dermatologically Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-clearpulse-green"></div>
                <span className="font-medium">Sustainable Sourcing</span>
              </div>
            </div>
            <Button asChild className="bg-clearpulse-terracotta hover:bg-clearpulse-terracotta/90 text-white">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
