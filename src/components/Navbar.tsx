
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-clearpulse-cream border-b border-clearpulse-green/10">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-clearpulse-green">
              ClearPulse
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-clearpulse-green transition-colors">
              Home
            </Link>
            <Link to="/shop" className="font-medium hover:text-clearpulse-green transition-colors">
              Shop
            </Link>
            <Link to="/about" className="font-medium hover:text-clearpulse-green transition-colors">
              About
            </Link>
            <Link to="/blog" className="font-medium hover:text-clearpulse-green transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="font-medium hover:text-clearpulse-green transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Search" className="p-2 hover:bg-clearpulse-green/10 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <Link to="/wishlist" aria-label="Wishlist" className="p-2 hover:bg-clearpulse-green/10 rounded-full transition-colors">
              <Heart size={20} />
            </Link>
            <Link to="/cart" aria-label="Cart" className="p-2 hover:bg-clearpulse-green/10 rounded-full transition-colors">
              <ShoppingBag size={20} />
            </Link>
            <Link to="/account" aria-label="Account" className="p-2 hover:bg-clearpulse-green/10 rounded-full transition-colors">
              <User size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart" aria-label="Cart" className="p-2 hover:bg-clearpulse-green/10 rounded-full transition-colors">
              <ShoppingBag size={20} />
            </Link>
            <Button 
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="p-2 hover:bg-clearpulse-green/10 rounded-full transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-clearpulse-green/10 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="font-medium hover:text-clearpulse-green transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/shop" className="font-medium hover:text-clearpulse-green transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/about" className="font-medium hover:text-clearpulse-green transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/blog" className="font-medium hover:text-clearpulse-green transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/contact" className="font-medium hover:text-clearpulse-green transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              <button aria-label="Search" className="p-2 hover:bg-clearpulse-green/10 rounded-full transition-colors">
                <Search size={20} />
              </button>
              <Link to="/wishlist" aria-label="Wishlist" className="p-2 hover:bg-clearpulse-green/10 rounded-full transition-colors">
                <Heart size={20} />
              </Link>
              <Link to="/account" aria-label="Account" className="p-2 hover:bg-clearpulse-green/10 rounded-full transition-colors">
                <User size={20} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
