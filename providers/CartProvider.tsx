"use client"
import { ICartItem } from '@/types/CartItem';
import React, { createContext, useContext, useState, FC, useMemo, ReactNode } from 'react';

// Interface para o contexto do carrinho
interface CartContextType {
  cartItems: ICartItem[];
  addItemToCart: (item: ICartItem) => void;
  removeItemFromCart: (itemId: number) => void;
  increaseItemQuantity: (itemId: number) => void;
  decreaseItemQuantity: (itemId: number) => void;
  clearCart: () => void;
  getNumItemsInCart: () => number;
  calculateTotalPrice: () => number;
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
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  // Função para adicionar item ao carrinho
  const addItemToCart = (item: ICartItem) => {
    // Verificar se o item já está no carrinho
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      // Se o item já existe, atualize a quantidade
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      // Se o item não existe, adicione-o ao carrinho
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const calculateTotalPrice = (): number => {
    return cartItems.reduce((total, item) => {
      const itemTotalPrice = parseFloat(item.price) * item.quantity;
      return total + itemTotalPrice;
    }, 0);
  };

  // Função para remover item do carrinho
  const removeItemFromCart = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };
    // Função para aumentar a quantidade de um item no carrinho
    const increaseItemQuantity = (itemId: number) => {
      const updatedCartItems = cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    };

    // Função para diminuir a quantidade ou remover o item do carrinho
    const decreaseItemQuantity = (itemId: number) => {
      const updatedCartItems = cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      );
      setCartItems(updatedCartItems);
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
    increaseItemQuantity,
    decreaseItemQuantity,
    calculateTotalPrice,
    clearCart,
    getNumItemsInCart
  }), [cartItems]);

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
