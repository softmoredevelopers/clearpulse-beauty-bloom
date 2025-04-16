
import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductType } from "@/data/products";
import { toast } from "sonner";

type CartItem = {
  product: ProductType;
  quantity: number;
};

interface ShoppingCartContextType {
  cartItems: CartItem[];
  wishlistItems: ProductType[];
  addToCart: (product: ProductType, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (product: ProductType) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  cartTotal: number;
  cartCount: number;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error("useShoppingCart must be used within a ShoppingCartProvider");
  }
  return context;
};

export const ShoppingCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize cart from localStorage if available
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("clearpulse-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Initialize wishlist from localStorage if available
  const [wishlistItems, setWishlistItems] = useState<ProductType[]>(() => {
    const savedWishlist = localStorage.getItem("clearpulse-wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("clearpulse-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("clearpulse-wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  // Calculate cart count (number of items)
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const addToCart = (product: ProductType, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        // If product already exists in cart, update quantity
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If product doesn't exist in cart, add it
        return [...prevItems, { product, quantity }];
      }
    });
    
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => 
      prevItems.filter((item) => item.product.id !== productId)
    );
    toast.success("Item removed from cart");
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared");
  };

  const addToWishlist = (product: ProductType) => {
    const isAlreadyInWishlist = wishlistItems.some(
      (item) => item.id === product.id
    );

    if (!isAlreadyInWishlist) {
      setWishlistItems((prevItems) => [...prevItems, product]);
      toast.success(`${product.name} added to wishlist!`);
    } else {
      // If already in wishlist, remove it
      removeFromWishlist(product.id);
    }
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    toast.success("Item removed from wishlist");
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
