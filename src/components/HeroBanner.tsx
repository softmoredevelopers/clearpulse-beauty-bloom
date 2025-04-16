
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="relative bg-clearpulse-cream overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-clearpulse-green mb-6 leading-tight">
              Nature's Pulse for <span className="text-clearpulse-terracotta">Timeless Beauty</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              Modern skincare solutions powered by ancient Indian herbs. 100% natural, cruelty-free, and dermatologically tested.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild className="bg-clearpulse-green hover:bg-clearpulse-green/90 text-white">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-clearpulse-green text-clearpulse-green hover:bg-clearpulse-green/10">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600428877878-1a0ff561d8b5?w=800&auto=format&fit=crop" 
                alt="ClearPulse natural skincare products" 
                className="rounded-lg shadow-2xl mx-auto"
              />
              <div className="absolute -top-6 -right-6 bg-clearpulse-cream p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-clearpulse-green font-semibold">100% Natural</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-clearpulse-cream p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-clearpulse-green font-semibold">Cruelty Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
