
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "face-care",
    name: "Face Care",
    image: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?w=800&auto=format&fit=crop",
    description: "Cleansers, serums, moisturizers and masks for radiant skin"
  },
  {
    id: "hair-care",
    name: "Hair Care",
    image: "https://images.unsplash.com/photo-1607101384441-1bbe0e4b8653?w=800&auto=format&fit=crop",
    description: "Nourishing oils, shampoos and conditioners for healthy hair"
  },
  {
    id: "body-care",
    name: "Body Care",
    image: "https://images.unsplash.com/photo-1600428877878-1a0ff561d8b5?w=800&auto=format&fit=crop",
    description: "Luxurious lotions, scrubs and washes for total body wellness"
  }
];

const CategoryBanner = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-4">
            Shop By Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of natural skincare products categorized for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              to={`/shop/${category.id}`} 
              key={category.id}
              className="group block relative rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clearpulse-green/80 to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="mb-3 opacity-90">{category.description}</p>
                <div className="flex items-center font-medium group-hover:underline">
                  <span>View Products</span>
                  <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            to="/shop/mens-grooming" 
            className="group block relative rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&auto=format&fit=crop" 
                alt="Men's Grooming" 
                className="w-full h-60 object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-clearpulse-green/80 to-transparent opacity-80"></div>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-10 text-white">
              <h3 className="text-2xl font-semibold mb-2">Men's Grooming</h3>
              <p className="mb-3 max-w-xs opacity-90">Premium natural products specifically formulated for men</p>
              <div className="flex items-center font-medium group-hover:underline">
                <span>Explore Collection</span>
                <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link 
            to="/shop/combo-kits" 
            className="group block relative rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop" 
                alt="Combo Kits & Gifts" 
                className="w-full h-60 object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-clearpulse-green/80 to-transparent opacity-80"></div>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-10 text-white">
              <h3 className="text-2xl font-semibold mb-2">Combo Kits & Gifts</h3>
              <p className="mb-3 max-w-xs opacity-90">Perfect gift sets for your loved ones or a treat for yourself</p>
              <div className="flex items-center font-medium group-hover:underline">
                <span>Discover Kits</span>
                <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
