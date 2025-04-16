
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-clearpulse-green to-clearpulse-green/80 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Experience the Power of Nature
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Join thousands of satisfied customers who have discovered the transformative benefits of ClearPulse's natural skincare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-clearpulse-green hover:bg-white/90">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/about" className="flex items-center">
                <span>Learn More</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
