
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 bg-clearpulse-cream/30">
        <div className="text-center max-w-xl px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-clearpulse-green mb-6">404</h1>
          <img 
            src="https://images.unsplash.com/photo-1564540574859-0dfb63985953?w=400&auto=format&fit=crop" 
            alt="Plant in a pot" 
            className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
          />
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Oops! The page you're looking for seems to have vanished like morning dew. Let's get you back on track.
          </p>
          <Button asChild className="bg-clearpulse-green hover:bg-clearpulse-green/90 text-white">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
