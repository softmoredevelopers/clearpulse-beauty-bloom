
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Shop routes will be added in future updates */}
          {/* <Route path="/shop" element={<Shop />} /> */}
          {/* <Route path="/shop/:category" element={<CategoryPage />} /> */}
          {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
          
          {/* More routes will be added for auth, blog, etc. */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
