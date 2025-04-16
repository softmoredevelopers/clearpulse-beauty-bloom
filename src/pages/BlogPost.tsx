
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

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
    category: "Skincare",
    content: `
      <p class="mb-4">In the ancient practice of Ayurveda, beauty is not just skin deep—it's a reflection of overall health and balance. Ayurvedic skincare focuses on understanding your unique skin type (or "dosha") and using natural ingredients to bring harmony to both body and mind.</p>
      
      <h2 class="text-2xl font-semibold text-clearpulse-green mt-8 mb-4">Understanding Your Dosha</h2>
      
      <p class="mb-4">Ayurveda classifies skin into three main types, corresponding to the three doshas:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Vata:</strong> Dry, thin, fine-pored, delicate, and easily dehydrated skin.</li>
        <li><strong>Pitta:</strong> Sensitive, fair, with medium thickness and prone to redness and inflammation.</li>
        <li><strong>Kapha:</strong> Thick, oily, soft, and pale skin that's prone to enlarged pores and congestion.</li>
      </ul>
      
      <p class="mb-4">Once you've identified your primary dosha, you can tailor your skincare routine accordingly. However, many Ayurvedic practices benefit all skin types.</p>
      
      <h2 class="text-2xl font-semibold text-clearpulse-green mt-8 mb-4">Daily Practices for Radiant Skin</h2>
      
      <h3 class="text-xl font-medium mt-6 mb-3">1. Oil Pulling (Gandusha)</h3>
      <p class="mb-4">Start your morning by swishing a tablespoon of sesame or coconut oil in your mouth for 10-15 minutes. This detoxifying practice not only improves oral health but can also clear toxins that might cause skin issues.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">2. Dry Brushing (Garshana)</h3>
      <p class="mb-4">Before bathing, gently brush your dry skin with a natural bristle brush, moving toward your heart. This stimulates the lymphatic system, exfoliates dead skin cells, and improves circulation for a natural glow.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">3. Self-Massage (Abhyanga)</h3>
      <p class="mb-4">Massaging warm oil into your skin nourishes tissues, improves circulation, and promotes a healthy glow. Choose oils based on your dosha: sesame oil for Vata, coconut oil for Pitta, and mustard or almond oil for Kapha.</p>
      
      <h2 class="text-2xl font-semibold text-clearpulse-green mt-8 mb-4">Powerful Ayurvedic Ingredients</h2>
      
      <p class="mb-4">Ayurveda utilizes many potent herbs and ingredients that have been scientifically proven to benefit the skin:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Turmeric:</strong> A powerful anti-inflammatory and antioxidant that brightens skin and fights acne.</li>
        <li><strong>Neem:</strong> Antibacterial properties help combat acne and skin infections.</li>
        <li><strong>Saffron:</strong> Lightens skin tone and gives a natural glow.</li>
        <li><strong>Sandalwood:</strong> Cooling and soothing, perfect for sensitive or inflamed skin.</li>
        <li><strong>Rose:</strong> Hydrating and balancing for all skin types.</li>
        <li><strong>Aloe Vera:</strong> Healing, soothing, and deeply hydrating.</li>
      </ul>
      
      <h2 class="text-2xl font-semibold text-clearpulse-green mt-8 mb-4">Simple Ayurvedic Face Masks to Try at Home</h2>
      
      <h3 class="text-xl font-medium mt-6 mb-3">For Dry Skin (Vata)</h3>
      <p class="mb-4">Mix 1 tablespoon of honey with 1 teaspoon of almond oil and a pinch of saffron. Apply to clean skin for 15 minutes before rinsing with lukewarm water.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">For Sensitive or Inflamed Skin (Pitta)</h3>
      <p class="mb-4">Combine 1 tablespoon of sandalwood powder with rose water to form a paste. Add a few drops of aloe vera gel. Apply and leave on until it's almost dry, then rinse.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">For Oily Skin (Kapha)</h3>
      <p class="mb-4">Mix 1 teaspoon of turmeric powder with 2 tablespoons of gram flour and enough plain yogurt to make a paste. Apply for 20 minutes, then gently scrub in circular motions as you rinse.</p>
      
      <h2 class="text-2xl font-semibold text-clearpulse-green mt-8 mb-4">Lifestyle Considerations</h2>
      
      <p class="mb-4">Ayurveda teaches that true beauty comes from within. Consider these additional practices:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Stay hydrated with warm water throughout the day.</li>
        <li>Get adequate sleep (ideally in bed before 10 PM).</li>
        <li>Eat a diet rich in fresh, seasonal fruits and vegetables.</li>
        <li>Practice stress-reduction techniques like meditation and yoga.</li>
        <li>Avoid processed foods, excessive caffeine, and alcohol, which can disrupt your doshas.</li>
      </ul>
      
      <p class="mb-4">By incorporating these Ayurvedic principles into your daily routine, you can achieve the kind of radiant glow that comes from true balance and health. Remember that consistency is key—Ayurveda is not about quick fixes but sustainable, holistic practices that benefit your skin and overall wellbeing.</p>
    `
  },
  {
    id: 2,
    title: "Understanding the Power of Turmeric in Skincare",
    slug: "turmeric-power-skincare",
    excerpt: "Turmeric has been used for centuries in Indian beauty rituals. Learn how this powerful ingredient can transform your skincare routine.",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0dbd6?w=800&auto=format&fit=crop",
    date: "April 5, 2025",
    author: "Raj Patel",
    category: "Ingredients",
    content: `
      <p class="mb-4">For thousands of years, turmeric has been a staple in Indian kitchens and medicine cabinets alike. This vibrant yellow spice, scientifically known as Curcuma longa, contains curcumin—a powerful compound with impressive anti-inflammatory and antioxidant properties that make it a skincare superstar.</p>
      
      <h2 class="text-2xl font-semibold text-clearpulse-green mt-8 mb-4">The Science Behind Turmeric's Skincare Benefits</h2>
      
      <p class="mb-4">Modern research is catching up to what Ayurvedic practitioners have known for centuries: turmeric offers multiple benefits for the skin:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Anti-inflammatory:</strong> Curcumin can reduce redness and soothe irritated skin, making it excellent for inflammatory conditions like acne, eczema, and rosacea.</li>
        <li><strong>Antioxidant protection:</strong> It helps neutralize free radicals that cause premature aging and skin damage.</li>
        <li><strong>Brightening effect:</strong> Regular use can help fade dark spots and hyperpigmentation for a more even skin tone.</li>
        <li><strong>Antimicrobial properties:</strong> Turmeric can help fight bacteria that cause acne and other skin infections.</li>
        <li><strong>Wound healing:</strong> It accelerates the skin's natural healing process.</li>
      </ul>
      
      <h2 class="text-2xl font-semibold text-clearpulse-green mt-8 mb-4">How to Incorporate Turmeric Into Your Skincare Routine</h2>
      
      <h3 class="text-xl font-medium mt-6 mb-3">1. Face Masks</h3>
      <p class="mb-4">Turmeric masks are perhaps the most traditional way to use this ingredient. Here's a simple recipe:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>1 teaspoon turmeric powder</li>
        <li>1 tablespoon honey (antibacterial and moisturizing)</li>
        <li>1 tablespoon plain yogurt (contains lactic acid for gentle exfoliation)</li>
      </ul>
      <p class="mb-4">Mix ingredients and apply to clean skin for 15-20 minutes before rinsing thoroughly. Use 1-2 times weekly.</p>
      
      <p class="mb-4 text-amber-600 font-medium">Note: Turmeric may temporarily stain skin, especially if you have fair skin. If staining occurs, cleanse with a gentle oil or use a makeup remover.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">2. Spot Treatment</h3>
      <p class="mb-4">For targeting individual blemishes, mix a pinch of turmeric with a drop of honey and apply directly to the spot. Leave overnight if possible.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">3. Facial Scrub</h3>
      <p class="mb-4">For gentle exfoliation, combine:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>1/2 teaspoon turmeric</li>
        <li>1 tablespoon gram flour or rice flour</li>
        <li>Enough milk or rose water to form a paste</li>
      </ul>
      <p class="mb-4">Gently massage onto damp skin in circular motions, then rinse.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">4. Look for Turmeric in Skincare Products</h3>
      <p class="mb-4">Many modern skincare formulations now include turmeric as an active ingredient. Look for products like:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Serums with turmeric extract for daily use</li>
        <li>Creams for overnight repair</li>
        <li>Cleansers with turmeric for gentle purification</li>
        <li>Sheet masks infused with turmeric</li>
      </ul>
      
      <h2 class="text-2xl font-semibold text-clearpulse-green mt-8 mb-4">Internal Benefits for Skin Health</h2>
      
      <p class="mb-4">What you put inside your body affects your skin too. Consider incorporating turmeric into your diet:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Add a teaspoon to smoothies (the taste is quite mild when combined with fruits)</li>
        <li>Drink golden milk (warm milk with turmeric, honey, and spices) before bed</li>
        <li>Include it in soups, stews, and curries</li>
        <li>Try turmeric tea with a little honey and lemon</li>
      </ul>
      
      <p class="mb-4">For better absorption, always pair turmeric with a small amount of black pepper, which contains piperine that enhances curcumin absorption by up to 2000%.</p>
      
      <h2 class="text-2xl font-semibold text-clearpulse-green mt-8 mb-4">Precautions When Using Turmeric</h2>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Do a patch test before applying turmeric to your face, as some people may be sensitive to it</li>
        <li>Start with just once or twice weekly applications if you're new to turmeric skincare</li>
        <li>Turmeric may temporarily stain fair skin (though this fades quickly)</li>
        <li>It can also stain clothing, towels, and bathroom surfaces, so be careful during application</li>
        <li>Use kasturi turmeric (non-edible turmeric) for skincare if possible, as it's less likely to stain</li>
      </ul>
      
      <p class="mb-4">At ClearPulse, we believe in harnessing the power of turmeric and other natural ingredients that have stood the test of time. Our Neem & Turmeric Face Wash and other turmeric-infused products are formulated to give you all the benefits of this golden spice without the mess or hassle of DIY preparations.</p>
      
      <p class="mb-4">Whether you choose to whip up your own turmeric-based treatments or opt for professionally formulated products, this ancient spice deserves a place in your modern skincare routine.</p>
    `
  },
  {
    id: 3,
    title: "Morning vs. Evening Skincare Routine: What's the Difference?",
    slug: "morning-evening-skincare-routine",
    excerpt: "Should your morning and evening skincare routines be different? We break down the essential steps for each time of day.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop",
    date: "March 28, 2025",
    author: "Sarah Johnson",
    category: "Routines",
    content: "Coming soon..."
  },
  {
    id: 4,
    title: "The Benefits of Oil Cleansing for All Skin Types",
    slug: "benefits-oil-cleansing",
    excerpt: "Contrary to popular belief, oils can be beneficial for all skin types, including oily skin. Discover the art of oil cleansing.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop",
    date: "March 21, 2025",
    author: "Amy Liu",
    category: "Skincare",
    content: "Coming soon..."
  },
  {
    id: 5,
    title: "Traditional Herbs for Hair Growth and Strength",
    slug: "traditional-herbs-hair-growth",
    excerpt: "Explore ancient herbal remedies that have been used for generations to promote healthy hair growth and enhance hair strength.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&auto=format&fit=crop",
    date: "March 14, 2025",
    author: "Vikram Singh",
    category: "Hair Care",
    content: "Coming soon..."
  },
  {
    id: 6,
    title: "How to Choose the Right Face Mask for Your Skin Concerns",
    slug: "choose-right-face-mask",
    excerpt: "With so many options available, finding the perfect face mask can be overwhelming. We help you navigate based on your specific skin needs.",
    image: "https://images.unsplash.com/photo-1595938688113-45efb3a37dc8?w=800&auto=format&fit=crop",
    date: "March 7, 2025",
    author: "Jessica Wang",
    category: "Skincare",
    content: "Coming soon..."
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-semibold mb-4">Post Not Found</h1>
            <p className="mb-6">Sorry, the blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-clearpulse-green hover:underline"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-clearpulse-green hover:underline mb-8 font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-clearpulse-green mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-600">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                <Link to={`/blog/category/${post.category.toLowerCase()}`} className="hover:text-clearpulse-green">
                  {post.category}
                </Link>
              </div>
            </div>

            <div className="mb-10 rounded-xl overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Share this post</h3>
              <div className="flex gap-3">
                <button className="p-2 bg-blue-500 text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </button>
                <button className="p-2 bg-blue-400 text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </button>
                <button className="p-2 bg-pink-600 text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </button>
                <button className="p-2 bg-blue-700 text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-12 bg-clearpulse-cream p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(relatedPost => 
                    relatedPost.category === post.category && relatedPost.id !== post.id
                  )
                  .slice(0, 2)
                  .map(relatedPost => (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 shrink-0 rounded-md overflow-hidden">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-clearpulse-green transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
