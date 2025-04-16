
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop",
    rating: 5,
    text: "The Neem & Turmeric Face Wash has been a game-changer for my acne-prone skin. After trying countless products, I finally found something that keeps breakouts at bay without drying out my skin. ClearPulse is now my go-to for skincare!"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop",
    rating: 5,
    text: "As someone with sensitive skin, I've always struggled to find products that don't cause irritation. The Aloe & Neem Body Lotion is perfect - it's soothing, hydrating, and has a subtle, natural scent. My skin has never looked better."
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "Los Angeles, USA",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop",
    rating: 5,
    text: "I received the Bridal Glow Kit as a gift before my wedding, and it truly lived up to its name! My skin looked radiant on my big day, and I've continued using the products ever since. The results speak for themselves."
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-16 bg-clearpulse-green/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who have experienced the power of nature through ClearPulse.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-clearpulse-cream rounded-full p-2 border-4 border-white">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name} 
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-clearpulse-gold text-clearpulse-gold" />
                ))}
              </div>
              
              <p className="text-lg text-gray-700 italic mb-6">
                "{currentTestimonial.text}"
              </p>
              
              <h4 className="font-semibold text-clearpulse-green text-xl">
                {currentTestimonial.name}
              </h4>
              <p className="text-gray-600">{currentTestimonial.location}</p>
            </div>

            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePrev}
                className="rounded-full border-clearpulse-green text-clearpulse-green hover:bg-clearpulse-green/10"
              >
                <ChevronLeft size={20} />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === activeIndex ? "bg-clearpulse-green" : "bg-clearpulse-green/30"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleNext}
                className="rounded-full border-clearpulse-green text-clearpulse-green hover:bg-clearpulse-green/10"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
