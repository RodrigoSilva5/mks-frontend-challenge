"use client"

import React, { createContext, useContext, useState, FC, useMemo, ReactNode } from 'react';

// Interface para o tipo de item do carrinho
interface CartItem {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

// Interface para o contexto do carrinho
interface CartContextType {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (itemId: number) => void;
  clearCart: () => void;
  getNumItemsInCart: () => number;
}

// Contexto para armazenar o estado do carrinho
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook customizado para acessar o contexto do carrinho
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Provider do carrinho
export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Função para adicionar item ao carrinho
  const addItemToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  // Função para remover item do carrinho
  const removeItemFromCart = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Função para limpar o carrinho
  const clearCart = () => {
    setCartItems([]);
  };

  // Função para obter o número de itens no carrinho
  const getNumItemsInCart = (): number => {
    return cartItems.length;
  };

  // Objeto de contexto do carrinho
  const cartContextValue: CartContextType = useMemo(() => ({
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    getNumItemsInCart
  }), [cartItems]);

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
