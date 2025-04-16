
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Ayurvedic Ways to Glow Your Skin Naturally",
    slug: "ayurvedic-ways-to-glow-skin",
    excerpt: "Discover traditional Ayurvedic practices that can help your skin achieve a natural, healthy glow without harsh chemicals.",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&auto=format&fit=crop",
    date: "April 12, 2025",
    author: "Priya Sharma",
    category: "Skincare"
  },
  {
    id: 2,
    title: "Understanding the Power of Turmeric in Skincare",
    slug: "turmeric-power-skincare",
    excerpt: "Turmeric has been used for centuries in Indian beauty rituals. Learn how this powerful ingredient can transform your skincare routine.",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0dbd6?w=800&auto=format&fit=crop",
    date: "April 5, 2025",
    author: "Raj Patel",
    category: "Ingredients"
  },
  {
    id: 3,
    title: "Morning vs. Evening Skincare Routine: What's the Difference?",
    slug: "morning-evening-skincare-routine",
    excerpt: "Should your morning and evening skincare routines be different? We break down the essential steps for each time of day.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop",
    date: "March 28, 2025",
    author: "Sarah Johnson",
    category: "Routines"
  },
  {
    id: 4,
    title: "The Benefits of Oil Cleansing for All Skin Types",
    slug: "benefits-oil-cleansing",
    excerpt: "Contrary to popular belief, oils can be beneficial for all skin types, including oily skin. Discover the art of oil cleansing.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop",
    date: "March 21, 2025",
    author: "Amy Liu",
    category: "Skincare"
  },
  {
    id: 5,
    title: "Traditional Herbs for Hair Growth and Strength",
    slug: "traditional-herbs-hair-growth",
    excerpt: "Explore ancient herbal remedies that have been used for generations to promote healthy hair growth and enhance hair strength.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&auto=format&fit=crop",
    date: "March 14, 2025",
    author: "Vikram Singh",
    category: "Hair Care"
  },
  {
    id: 6,
    title: "How to Choose the Right Face Mask for Your Skin Concerns",
    slug: "choose-right-face-mask",
    excerpt: "With so many options available, finding the perfect face mask can be overwhelming. We help you navigate based on your specific skin needs.",
    image: "https://images.unsplash.com/photo-1595938688113-45efb3a37dc8?w=800&auto=format&fit=crop",
    date: "March 7, 2025",
    author: "Jessica Wang",
    category: "Skincare"
  }
];

const categories = [
  "All",
  "Skincare",
  "Hair Care",
  "Ingredients",
  "Routines",
  "Wellness",
  "Sustainability"
];

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-4">
              The ClearPulse Journal
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and stories about natural beauty, Ayurvedic practices, and sustainable living.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <Link
                key={category}
                to={category === "All" ? "/blog" : `/blog/category/${category.toLowerCase()}`}
                className="px-4 py-2 rounded-full bg-clearpulse-cream text-clearpulse-green font-medium hover:bg-clearpulse-green hover:text-white transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <Link to={`/blog/${blogPosts[0].slug}`} className="block group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="overflow-hidden h-64 md:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span>{blogPosts[0].date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                    <span>{blogPosts[0].category}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-clearpulse-green transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-3">
                    <span className="font-medium">By {blogPosts[0].author}</span>
                    <div className="text-clearpulse-green font-medium group-hover:underline">Read More</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                <div className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-clearpulse-green transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">By {post.author}</span>
                      <span className="text-clearpulse-green font-medium group-hover:underline">Read More</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
