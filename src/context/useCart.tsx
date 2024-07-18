import React, { createContext, useState, useContext, ReactNode } from "react";

interface Produtos {
  id: number;
  title: string;
  img: string;
  price: number;
  slug: string;
  type: string
}

interface CartItem extends Produtos {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (produto: Produtos) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (produto: Produtos) => {
    setCart((prevCart) => {
      const item = prevCart.find((product) => product.id === produto.id);
      if (!item) {
        return [...prevCart, { ...produto, quantity: 1 }];
      } else {
        return prevCart.map((item) =>
          item.id === produto.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
