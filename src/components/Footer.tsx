
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-clearpulse-green text-white">
      {/* Newsletter Section */}
      <div className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Join Our Community</h3>
          <p className="text-lg opacity-90 mb-6">
            Subscribe to our newsletter for exclusive offers, skincare tips, and early access to new products.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="secondary" className="bg-clearpulse-gold hover:bg-clearpulse-gold/90 text-black">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12 border-t border-white/20 pt-12">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">ClearPulse</h4>
            <p className="opacity-90 mb-4">
              Modern skincare solutions powered by ancient Indian herbs.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-clearpulse-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-clearpulse-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-clearpulse-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:info@clearpulse.com" aria-label="Email" className="hover:text-clearpulse-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <Link to="/shop/face-care" className="hover:text-clearpulse-gold transition-colors">Face Care</Link>
              </li>
              <li>
                <Link to="/shop/hair-care" className="hover:text-clearpulse-gold transition-colors">Hair Care</Link>
              </li>
              <li>
                <Link to="/shop/body-care" className="hover:text-clearpulse-gold transition-colors">Body Care</Link>
              </li>
              <li>
                <Link to="/shop/lip-care" className="hover:text-clearpulse-gold transition-colors">Lip Care</Link>
              </li>
              <li>
                <Link to="/shop/mens-grooming" className="hover:text-clearpulse-gold transition-colors">Men's Grooming</Link>
              </li>
              <li>
                <Link to="/shop/combo-kits" className="hover:text-clearpulse-gold transition-colors">Combo Kits & Gifts</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <Link to="/about" className="hover:text-clearpulse-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-clearpulse-gold transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/ingredients" className="hover:text-clearpulse-gold transition-colors">Our Ingredients</Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-clearpulse-gold transition-colors">Sustainability</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-clearpulse-gold transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-clearpulse-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Help</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <Link to="/customer-service" className="hover:text-clearpulse-gold transition-colors">Customer Service</Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-clearpulse-gold transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-clearpulse-gold transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-clearpulse-gold transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-clearpulse-gold transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} ClearPulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
