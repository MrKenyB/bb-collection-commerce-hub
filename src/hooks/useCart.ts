
import { useState, useEffect } from 'react';
import { CartManager, CartItem } from '@/utils/cartUtils';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const cartManager = CartManager.getInstance();

  useEffect(() => {
    setCart(cartManager.getCart());
    const unsubscribe = cartManager.subscribe(setCart);
    return unsubscribe;
  }, [cartManager]);

  return {
    cart,
    addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => 
      cartManager.addItem(item, quantity),
    removeItem: (id: number) => cartManager.removeItem(id),
    updateQuantity: (id: number, quantity: number) => 
      cartManager.updateQuantity(id, quantity),
    getTotalItems: () => cartManager.getTotalItems(),
    getTotalPrice: () => cartManager.getTotalPrice(),
    clearCart: () => cartManager.clearCart()
  };
};
