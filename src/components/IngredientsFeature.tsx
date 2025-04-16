
import { useState } from "react";

const ingredients = [
  {
    id: "neem",
    name: "Neem",
    image: "https://images.unsplash.com/photo-1515452807652-84f30ddeab0e?w=800&auto=format&fit=crop",
    description: "Known as nature's pharmacy, Neem has powerful antibacterial and anti-inflammatory properties, making it perfect for acne-prone skin.",
    benefits: ["Reduces acne", "Fights bacteria", "Calms inflammation", "Purifies skin"]
  },
  {
    id: "turmeric",
    name: "Turmeric",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900e1?w=800&auto=format&fit=crop",
    description: "A golden spice with antioxidant and anti-inflammatory compounds that brightens skin and reduces hyperpigmentation.",
    benefits: ["Brightens complexion", "Reduces dark spots", "Fights free radicals", "Evens skin tone"]
  },
  {
    id: "saffron",
    name: "Saffron",
    image: "https://images.unsplash.com/photo-1600176842318-4a5f143fcf04?w=800&auto=format&fit=crop",
    description: "Luxury ingredient that gives skin a natural glow, improves texture, and provides protection against environmental damage.",
    benefits: ["Enhances radiance", "Improves skin texture", "Protects against UV damage", "Reduces hyperpigmentation"]
  },
  {
    id: "sandalwood",
    name: "Sandalwood",
    image: "https://images.unsplash.com/photo-1626177326867-cb12aca1e7fb?w=800&auto=format&fit=crop",
    description: "Renowned for its cooling and soothing properties, sandalwood clarifies skin, reduces blemishes, and provides a natural fragrance.",
    benefits: ["Soothes irritation", "Reduces blemishes", "Controls excess oil", "Tightens pores"]
  }
];

const IngredientsFeature = () => {
  const [activeIngredient, setActiveIngredient] = useState(ingredients[0]);

  return (
    <section className="py-16 bg-clearpulse-cream/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-4">
            The Power of Ancient Herbs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our products harness the potent benefits of herbs that have been used in Ayurvedic traditions for centuries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={activeIngredient.image} 
              alt={activeIngredient.name} 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover transition-all duration-500 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {activeIngredient.name}
              </h3>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6">
                {activeIngredient.description}
              </p>
              <h4 className="font-semibold text-clearpulse-green mb-4">Key Benefits:</h4>
              <ul className="space-y-2">
                {activeIngredient.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-clearpulse-terracotta mr-3"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              {ingredients.map((ingredient) => (
                <button
                  key={ingredient.id}
                  onClick={() => setActiveIngredient(ingredient)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeIngredient.id === ingredient.id
                      ? "bg-clearpulse-green text-white"
                      : "bg-white text-clearpulse-green hover:bg-clearpulse-green/10"
                  }`}
                >
                  {ingredient.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsFeature;
